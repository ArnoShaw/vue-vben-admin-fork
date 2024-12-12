<script setup lang="ts">
import { ref } from 'vue';

import { Page } from '@vben/common-ui';

import { Button, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

import { baseColumns, baseSchema } from './const-data';

defineOptions({
  name: 'BillFinanceManagementAssetFlow',
});

const exportLoading = ref(false);

const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '财务明细',
  formOptions: {
    schema: baseSchema,
    showCollapseButton: false,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-span-4',
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

async function handleExport() {
  if (TableApi.grid.getData().length === 0) return message.warning('暂无数据');
  exportLoading.value = true;
  try {
    // const res = await apis.packagePrediction.exportExcel(
    //   params,
    //   { responseType: 'blob' },
    //   { isReturnNativeResponse: true },
    // );
    // const suffix = res.headers?.['content-disposition']?.split?.('.')?.reverse?.()?.[0] || 'xlsx';
    // if (res?.data) downloadExcel(res.data, `包裹列表`, `.${suffix}`);
  } finally {
    exportLoading.value = false;
  }
}
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-tools>
        <Button :loading="exportLoading" type="primary" @click="handleExport">导出Excel</Button>
      </template>
    </Table>
  </Page>
</template>
