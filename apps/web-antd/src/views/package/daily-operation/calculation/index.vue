<script setup lang="ts">
import { Page } from '@vben/common-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

import { baseColumns, baseSchema } from './const-data';

defineOptions({
  name: 'PackageDailyOperationCalculation',
});

const [Table] = useVbenVxeGrid({
  tableTitle: '价格列表',
  formOptions: {
    schema: baseSchema,
    showCollapseButton: false,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-span-5',
  },
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
  <Page auto-content-height> <Table class="rounded-xl" /></Page>
</template>
