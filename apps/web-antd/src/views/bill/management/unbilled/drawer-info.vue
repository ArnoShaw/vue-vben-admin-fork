<script lang="ts" setup>
import { ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';
import Description from '#/components/description.vue';

import { detailColumns, itemPackage } from './const-data';

const descOptions = {
  column: 2,
  contentStyle: {
    whiteSpace: 'pre-line',
    width: '760px',
  },
  labelMinWidth: 100,
};

const data = ref();

const [Drawer, DrawerApi] = useVbenDrawer({
  title: '费用明细',
  showConfirmButton: false,
  cancelText: '关闭',
  onOpenChange(isOpen) {
    if (isOpen) {
      const res: any = DrawerApi.getData();
      data.value = res;
    }
  },
});

const [Table] = useVbenVxeGrid({
  gridClass: 'p-0',
  gridOptions: {
    columns: detailColumns,
    border: true,
    height: 'auto',
    minHeight: 150,
    columnConfig: {
      minWidth: 80,
    },
    rowConfig: {
      isHover: true,
      keyField: 'id',
    },
    pagerConfig: {
      autoHidden: true,
    },
  },
});
</script>
<template>
  <Drawer class="w-[760px]">
    <BasicTitle class="before mb-2 !text-base" title="基本信息" />
    <Description :data="data" :items="itemPackage" :options="descOptions" />
    <BasicTitle class="before mb-2 mt-3 !text-base" title="消费信息" />
    <Table />
  </Drawer>
</template>
