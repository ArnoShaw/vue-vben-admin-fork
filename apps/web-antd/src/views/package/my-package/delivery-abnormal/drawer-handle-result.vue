<script lang="ts" setup>
import { computed, ref, unref } from 'vue';

import { useVbenDrawer, useVbenForm } from '@vben/common-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { ActionEnum } from '#/constants/common';

const data = ref();
const actionType = ref();

const isView = computed(() => unref(actionType) === ActionEnum.VIEW);

const [Table] = useVbenVxeGrid({
  gridOptions: {
    maxHeight: 300,
    columns: [
      {
        title: '更新时间',
        width: 180,
        field: 'time',
      },
      {
        title: '处理状态',
        width: 140,
        field: 'status',
      },
      {
        title: '历史处理结果',
        field: 'result',
      },
    ],
    pagerConfig: { autoHidden: true },
  },
});

const [Form, FormApi] = useVbenForm({
  showDefaultActions: false,
  schema: [
    {
      fieldName: 'searchText',
      label: '处理状态',
      labelWidth: 65,
      defaultValue: '1',
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '未完结',
            value: '1',
          },
          {
            label: '已完结',
            value: '2',
          },
        ],
      },
    },
    {
      fieldName: 'result',
      label: '处理结果',
      labelWidth: 65,
      rules: 'required',
      component: 'Textarea',
    },
  ],
});

const [Drawer, DrawerApi] = useVbenDrawer({
  title: '处理结果',
  onOpenChange(isOpen) {
    if (isOpen) {
      const res: any = DrawerApi.getData();
      data.value = res;
      actionType.value = res?.actionType;
      if (unref(isView)) DrawerApi.setState({ showConfirmButton: false, cancelText: '关闭' });
    }
  },
  onConfirm() {
    if (!unref(isView)) FormApi.validate();
  },
});
</script>
<template>
  <Drawer class="w-[760px]">
    <Table class="h-auto" />
    <Form v-if="!isView" class="mt-4" />
  </Drawer>
</template>
