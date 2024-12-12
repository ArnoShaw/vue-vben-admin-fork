<script setup lang="ts">
import type { Recordable } from '@vben/types';
import type { Key } from 'ant-design-vue/es/_util/type';

import type { defs } from '#/services/apis/api';

import { onMounted, ref, unref, watch } from 'vue';

import { Page, useVbenModal } from '@vben/common-ui';

import { useDebounceFn } from '@vueuse/core';
import { Alert, Button, Input, message, Tree, type TreeProps } from 'ant-design-vue';

import BasicTitle from '#/components/basic-title.vue';
import { ActionEnum } from '#/constants/common';
import { apis } from '#/services/apis';

import ModalAddUser from './modal-add-user.vue';
import UserSelect from './user-select.vue';

defineOptions({
  name: 'SettingAccountManagement',
});

type TcheckedKeys = { checked: Key[]; halfChecked: Key[] };

const loading = ref(false);
const userList = ref<defs.apis.SysUserVo[]>([]);
const treeData = ref<TreeProps['treeData']>([]);
const checkedKeys = ref<Key[] | TcheckedKeys>();
const activeUser = ref<number>();
const treeRef = ref(null);
const expandedKeys = ref<Key[]>([]);
const autoExpandParent = ref(false);
const searchValue = ref('');
let allKeys: number[] = [];
let firstLevelKeys: number[] = [];

const [Modal, ModalApi] = useVbenModal({
  connectedComponent: ModalAddUser,
});

function handleAdd() {
  ModalApi.setData({ actionType: ActionEnum.ADD });
  ModalApi.open();
}

function handleEdit(row: any) {
  ModalApi.setData({ actionType: ActionEnum.EDIT, row });
  ModalApi.open();
}

// 获取所有权限列表
const dataList: TreeProps['treeData'] = [];
const generateList = (data: TreeProps['treeData']) => {
  for (let i = 0; i < (data ?? []).length; i++) {
    const node: any = (data ?? [])[i];
    const { id: key, label } = node;
    dataList.push({ key, label });
    if (node.children) {
      generateList(node.children);
    }
  }
};

// 获取搜索结果的父节点
const getParentKey = (
  key: number | string,
  tree: TreeProps['treeData'],
): number | string | undefined => {
  let parentKey;
  for (let i = 0; i < (tree ?? []).length; i++) {
    const node: any = (tree ?? [])[i];
    if (node.children) {
      if (node.children.some((item: Recordable) => item.id === key)) {
        parentKey = node.id;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

const onExpand = (keys: Key[]) => {
  expandedKeys.value = keys;
  // 手动展开后关闭自动展开
  autoExpandParent.value = false;
};

// 找到并展开搜索结果
const expandSearchNodeList = useDebounceFn((value) => {
  const expanded = dataList
    .map((item) => {
      if (item.label.includes(value.trim()) && value.trim()) {
        return getParentKey(item.key, unref(treeData));
      }
      return null;
    })
    .filter((item, i, self) => item && self.indexOf(item) === i);
  expandedKeys.value = expanded as any;
  autoExpandParent.value = true;
}, 250);

watch(searchValue, (value) => expandSearchNodeList(value));

function handleExpand() {
  // 有展开的节点则折叠所有 否则只展开一级节点 节能
  unref(expandedKeys).length > 0
    ? (expandedKeys.value = [])
    : (expandedKeys.value = firstLevelKeys);
}

function handleCheckAll() {
  const keys = unref(checkedKeys) as any;
  // 首次渲染时checkedKeys设置半选 格式为obj
  const checkedKeysLength = Array.isArray(keys) ? keys?.length : keys?.checked.length;
  checkedKeys.value = checkedKeysLength === allKeys.length ? [] : allKeys;
}

async function getUserList() {
  const res = (await apis.user.userList({})) as any;
  userList.value = res || [];
}

async function renderDetail() {
  await getUserList();
  if (unref(userList) && unref(userList)?.length > 0) {
    activeUser.value = unref(userList)?.[0]?.userId;
    await getTreeData();
  }
}

// 回显需获取半选keys实现选中父节点时子节点不自动全选
let _checkedKeys: { checked: Key[]; halfChecked: Key[] } = {
  checked: [],
  halfChecked: [],
};
function getHalfCheckedKeys(list = unref(treeData)) {
  if (!list?.length) return;
  list?.forEach((item) => {
    const { checked, halfChecked, id, children } = item;
    allKeys.push(id);
    if (halfChecked) _checkedKeys.halfChecked.push(id);
    else if (checked) _checkedKeys.checked.push(id);
    if (children && children.length > 0) getHalfCheckedKeys(children);
  });
}

async function onSelectChange(key: number) {
  activeUser.value = key;
  treeData.value = [];
  checkedKeys.value = {
    checked: [],
    halfChecked: [],
  };
  _checkedKeys = {
    checked: [],
    halfChecked: [],
  };
  searchValue.value = '';
  await getTreeData();
}

async function getTreeData() {
  allKeys = [];
  firstLevelKeys = [];
  expandedKeys.value = [];
  const res = await apis.user.getMenu({
    subUserId: unref(activeUser) as number,
  });
  const permissionList: any = res || [];
  treeData.value = permissionList || [];
  if (permissionList.length > 0) {
    permissionList.forEach((item: Recordable) => firstLevelKeys.push(item.id));
    getHalfCheckedKeys();
    checkedKeys.value = _checkedKeys;
    generateList(permissionList);
  }
}

async function handleSubmit() {
  if (!unref(treeData)?.length) return;
  let keys = unref(checkedKeys);
  if (Array.isArray(keys)) {
    keys = [...keys, ...((unref(treeRef) as any)?.treeRef?.halfCheckedKeys ?? [])];
  } else if (keys) {
    keys = [...(keys.checked || []), ...((unref(treeRef) as any)?.treeRef?.halfCheckedKeys ?? [])];
  } else {
    keys = [];
  }
  loading.value = true;
  try {
    await apis.user.bindMenu({
      userId: unref(activeUser) as number,
      menuIdList: keys as number[],
    });
    message.success('保存成功');
  } finally {
    loading.value = false;
  }
}

onMounted(() => renderDetail());
</script>

<template>
  <Page auto-content-height content-class="flex flex-col">
    <div class="card-box rounded-b-none p-4">
      <BasicTitle icon="teenyicons:users-outline" icon-class="text-primary" title="子账号管理" />
      <Alert :show-icon="false" banner class="mt-2 p-2">
        <template #description>
          <p>
            1.
            子账户是顺友物流提供给客户的一体化员工账号服务。可以使用主账号创建子账号并授权给员工后，子账号可以登录顺友客户管理系统使用操作，可以使用主账号对子账号的进行授权管理。
          </p>
          <p>
            2.
            子账户初始密码为：【123456】，子账户可自行修改账户密码，主帐号和子账户密码相互独立，前提是有【设置】->【我的账户】->【修改密码】的菜单权限。
          </p>
          <p class="text-red-500">
            3. 每个公司账户最多可创建10个子账户，更改子账户菜单权限需要重新登录才能生效。
          </p>
        </template>
      </Alert>
    </div>
    <div class="card-box mt-2 flex flex-1 rounded-t-none p-4">
      <UserSelect
        :data="userList"
        :default-value="activeUser"
        class="mr-2 w-1/3 min-w-[300px]"
        title="子账户"
        @edit="handleEdit"
        @on-change="onSelectChange"
        @success="getUserList"
      >
        <Button type="primary" @click="handleAdd">新增</Button>
      </UserSelect>
      <div class="flex flex-1 flex-col rounded border">
        <div class="border-b p-2 py-3">
          <BasicTitle class="before flex-wrap !text-base" title="拥有的权限">
            <div class="shrink-0">
              <Input
                v-model:value="searchValue"
                allow-clear
                class="w-[150px]"
                placeholder="搜索"
                @press-enter="expandSearchNodeList(searchValue)"
              />
              <Button class="mx-3" @click="handleExpand">展开/折叠</Button>
              <Button type="primary" @click="handleCheckAll">全选/全不选</Button>
            </div>
          </BasicTitle>
        </div>
        <div class="flex-1 overflow-auto p-2">
          <div class="flex justify-between">
            <Tree
              v-if="treeData?.length"
              ref="treeRef"
              v-model:checked-keys="checkedKeys"
              v-model:expanded-keys="expandedKeys"
              :auto-expand-parent="autoExpandParent"
              :field-names="{ key: 'id', title: 'label' }"
              :selectable="false"
              :tree-data="treeData"
              checkable
              @expand="onExpand"
            >
              <template #title="{ label }">
                <span v-if="label.indexOf(searchValue) > -1">
                  {{ label.substring(0, label.indexOf(searchValue)) }}
                  <span style="color: #f50">{{ searchValue }}</span>
                  {{ label.substring(label.indexOf(searchValue) + searchValue.length) }}
                </span>
                <span v-else>{{ label }}</span>
              </template>
            </Tree>
            <i></i>
            <Button :loading="loading" type="primary" @click="handleSubmit">保存</Button>
          </div>
        </div>
      </div>
    </div>
    <Modal @success="getUserList" />
  </Page>
</template>
