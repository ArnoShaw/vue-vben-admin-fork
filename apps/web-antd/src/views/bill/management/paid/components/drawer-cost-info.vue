<script lang="ts" setup>
import { ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';
import Description from '#/components/description.vue';
import TableAction from '#/components/table-action.vue';

import { columnsCost, formSchemaCost, itemBill } from '../const-data';
import DrawerCostDetail from './drawer-cost-detail.vue';

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
  title: '费用信息',
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
  formOptions: {
    schema: formSchemaCost,
    showCollapseButton: false,
    hideDivider: true,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-span-8 pb-0',
    commonConfig: {
      formItemClass: 'pb-0',
    },
  },
  gridOptions: {
    columns: columnsCost,
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

const [DrawerDetail, DrawerDetailApi] = useVbenDrawer({
  connectedComponent: DrawerCostDetail,
});

function handleView(row: any) {
  DrawerDetailApi.setData(row);
  DrawerDetailApi.open();
}
</script>
<template>
  <Drawer class="w-[70%]">
    <BasicTitle class="before mb-2 !text-base" title="基本信息" />
    <Description :data="data" :items="itemBill" :options="descOptions" />
    <BasicTitle class="before mt-3 !text-base" title="费用信息" />
    <Table>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '查看',
              onClick: handleView.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
    <DrawerDetail class="w-[70%]" />
  </Drawer>
</template>
