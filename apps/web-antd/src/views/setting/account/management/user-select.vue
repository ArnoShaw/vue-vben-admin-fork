<script setup lang="ts">
import type { defs } from '#/services/apis/api';

import { type PropType, ref, watch } from 'vue';

import { Empty, message, Modal } from 'ant-design-vue';

import BasicTitle from '#/components/basic-title.vue';
import { apis } from '#/services/apis';

defineOptions({
  name: 'UserSelect',
});

const props = defineProps({
  title: { type: String, default: '' },
  data: {
    type: Array as PropType<defs.apis.SysUserVo[]>,
    default: () => [{ label: 'test', value: 1 }],
  },
  defaultValue: { type: Number, default: 0 },
});

const emit = defineEmits(['onChange', 'edit', 'success']);

const activedValue = ref<number>();

watch(
  () => props.data,
  (val) => {
    activedValue.value = props.defaultValue || val?.[0]?.userId;
  },
);

function handleClick(item: defs.apis.SysUserVo, index: number) {
  const { userId } = item;
  activedValue.value = userId;
  emit('onChange', userId, index);
}

async function handleResetPsw(item: defs.apis.SysUserVo) {
  const { userId = 0, userName } = item;
  Modal.confirm({
    iconType: 'warning',
    title: '重置密码',
    content: `您确定要重置账号“${userName}”的密码吗？`,
    onOk: async () => {
      await apis.user.resetSubUser({ id: userId });
      message.success('重置密码成功');
      emit('success');
    },
  });
}

async function handleDelete(item: defs.apis.SysUserVo) {
  const { userId = 0, userName } = item;
  Modal.confirm({
    iconType: 'warning',
    title: '删除',
    content: `您确定要删除账号“${userName}”吗？`,
    onOk: async () => {
      await apis.user.removeSubUser({ id: userId });
      message.success('删除成功');
      emit('success');
    },
  });
}
</script>

<template>
  <div class="table-side-left flex h-full flex-col overflow-hidden rounded border">
    <BasicTitle :title="title" class="before border-b p-2 py-3 !text-base">
      <slot></slot>
    </BasicTitle>
    <div class="content flex-1 overflow-y-auto">
      <div v-if="data?.length" class="wrapper py-1">
        <div
          v-for="(item, index) in data"
          :key="item.userId || index"
          :class="{ actived: activedValue === item.userId }"
          class="item hover:bg-accent mx-1 cursor-pointer rounded-md p-2 transition-all"
          @click="handleClick(item, index)"
        >
          <div class="flex items-center justify-between">
            <span class="mr-2 truncate">
              {{ item.userName }}
            </span>
            <div class="btns hidden">
              <span class="vben-link text-[13px]" @click.stop="emit('edit', item)">编辑</span>
              <span class="vben-link mx-3 text-[13px]" @click.stop="handleResetPsw(item)">
                重置密码
              </span>
              <span class="vben-link text-[13px]" @click.stop="handleDelete(item)"> 删除 </span>
            </div>
          </div>
        </div>
      </div>
      <Empty v-else :image="Empty.PRESENTED_IMAGE_SIMPLE" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.table-side-left {
  .item {
    &.actived {
      background-color: hsl(var(--primary) / 0.15);
    }
    &:hover {
      .btns {
        display: block !important;
      }
    }
  }
}
</style>
