<script lang="ts" setup>
import { ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';

import { Button, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

import { columnsSortDetail, formSchemaSort } from '../const-data';

const data = ref();
const exportLoading = ref(false);

const [Drawer, DrawerApi] = useVbenDrawer({
  title: '分拣明细',
  showConfirmButton: false,
  cancelText: '关闭',
  onOpenChange(isOpen) {
    if (isOpen) {
      const res: any = DrawerApi.getData();
      data.value = res;
    }
  },
});

const [Table, TableApi] = useVbenVxeGrid({
  formOptions: {
    schema: formSchemaSort,
    showCollapseButton: false,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-span-4 p-0',
    hideDivider: true,
    commonConfig: {
      formItemClass: 'pb-0',
    },
  },
  gridOptions: {
    columns: columnsSortDetail,
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
  <Drawer class="w-[80%]">
    <Table>
      <template #toolbar-tools>
        <Button :loading="exportLoading" type="primary" @click="handleExport">导出Excel</Button>
      </template>
    </Table>
  </Drawer>
</template>
