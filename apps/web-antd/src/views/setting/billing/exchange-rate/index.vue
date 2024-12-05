<script setup lang="ts">
import { Page } from '@vben/common-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';

import { baseColumns } from './const-data';

defineOptions({
  name: 'SettingFinanceExchangeRate',
});

const [Table] = useVbenVxeGrid({
  gridOptions: {
    columns: baseColumns,
    border: true,
    height: 'auto',
    columnConfig: {
      minWidth: 100,
    },
    rowConfig: {
      isHover: true,
    },
    pagerConfig: {
      autoHidden: true,
    },
    toolbarConfig: {
      custom: true,
      refresh: true,
      zoom: true,
    },
  },
});

const [TableAll] = useVbenVxeGrid({
  gridOptions: {
    columns: baseColumns,
    border: true,
    height: 'auto',
    columnConfig: {
      minWidth: 100,
    },
    rowConfig: {
      isHover: true,
    },
    pagerConfig: {
      autoHidden: true,
    },
    toolbarConfig: {
      custom: true,
      refresh: true,
      zoom: true,
    },
  },
});
</script>

<template>
  <Page auto-content-height>
    <Table class="h-1/3 min-h-[200px]">
      <template #toolbar-actions>
        <BasicTitle icon="ri:exchange-cny-line" icon-class="text-primary" title="汇率｜常用币种" />
      </template>
      <template #toolbar-tools>
        <span class="text-red-500">汇率每日定时更新时间：01:00</span>
      </template>
    </Table>
    <TableAll class="my-2 h-2/3 min-h-[200px]">
      <template #toolbar-actions>
        <BasicTitle
          help-message="除常用币种"
          icon="ri:exchange-cny-line"
          icon-class="text-primary"
          title="汇率｜全部币种"
        />
      </template>
    </TableAll>
  </Page>
</template>
