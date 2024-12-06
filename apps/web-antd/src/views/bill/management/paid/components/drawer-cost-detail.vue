<script lang="ts" setup>
import { ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';

import { Alert, Button } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';
import Description from '#/components/description.vue';

import { columnsSort, columnsWarehouse, itemCost } from '../const-data';
import DrawerSortDetail from './drawer-sort-detail.vue';

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

const [TableSort] = useVbenVxeGrid({
  gridClass: 'p-0 mt-2',
  class: ' h-auto',
  gridOptions: {
    columns: columnsSort,
    border: true,
    height: 'auto',
    minHeight: 200,
    maxHeight: 400,
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

const [TableWarehouse] = useVbenVxeGrid({
  gridClass: 'p-0 mt-4',
  gridOptions: {
    columns: columnsWarehouse,
    border: true,
    height: 'auto',
    minHeight: 200,
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

const [DrawerSort, DrawerSortApi] = useVbenDrawer({
  connectedComponent: DrawerSortDetail,
});

function handleView() {
  // DrawerSortApi.setData(row);
  DrawerSortApi.open();
}
</script>
<template>
  <Drawer class="w-[70%]">
    <BasicTitle class="before mb-2 !text-base" title="基本信息" />
    <Description :data="data" :items="itemCost" :options="descOptions" />
    <Alert :show-icon="false" banner class="mt-2 p-2" type="info">
      <template #description>
        <div class="flex items-center justify-between">
          <div>
            <span>收货重量：</span>
            1.210 kg
            <span class="ml-2">异常重量：</span>
            0 kg
            <span class="ml-2">计费重量：</span>
            1.210 kg
          </div>
          <Button type="primary" @click="handleView">查看分拣明细</Button>
        </div>
      </template>
    </Alert>
    <TableSort>
      <template #toolbar-actions>
        <BasicTitle class="before !text-base" title="人工分拣" />
      </template>
      <template #toolbar-tools>
        计费重量：0 kg
        <span class="mx-2">｜</span>
        费用： ¥ 0
        <span class="mx-2">｜</span>
        异常重量：0 kg
      </template>
    </TableSort>
    <TableWarehouse>
      <template #toolbar-actions>
        <BasicTitle class="before !text-base" title="逐单入仓" />
      </template>
      <template #toolbar-tools>
        计费重量：1.210 kg
        <span class="mx-2">｜</span>
        费用： ¥ 24.44
        <span class="mx-2">｜</span>
        异常重量：0 kg
      </template>
    </TableWarehouse>
    <DrawerSort />
  </Drawer>
</template>
