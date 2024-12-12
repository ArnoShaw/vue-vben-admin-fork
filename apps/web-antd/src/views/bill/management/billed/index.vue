<script setup lang="ts">
import { ref } from 'vue';

import { Page, useVbenDrawer } from '@vben/common-ui';

import { Button, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';

import DrawerCostInfo from '../paid/components/drawer-cost-info.vue';
import { columns, formSchema } from './const-data';

defineOptions({
  name: 'BillManagementBilled',
});

// const selectAll = ref();
// const shippingMethodList = ref();
const exportLoading = ref(false);

const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '已出账账单',
  formOptions: {
    schema: formSchema,
    collapsedRows: 2,
    showCollapseButton: false,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-start-9 col-end-13',
    commonConfig: {
      labelWidth: 90,
    },
  },
  gridOptions: {
    columns,
    border: true,
    height: 'auto',
    // proxyConfig: {
    //   ajax: {
    //     query: async (_: any, { status }: any) => {
    //       TableApi.setGridOptions({
    //         columns: columns(status),
    //       });
    //     },
    //   },
    // },
    columnConfig: {
      minWidth: 105,
    },
    checkboxConfig: {
      reserve: true,
      highlight: true,
      trigger: 'row',
    },
    rowConfig: {
      isHover: true,
      keyField: 'packageId',
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

// function getSelectedKeys() {
//   return TableApi.grid.getCheckboxRecords().map((item) => item.packageId);
// }
const [Drawer, DrawerApi] = useVbenDrawer({
  connectedComponent: DrawerCostInfo,
});

async function handleExport() {
  if (TableApi.grid.getData().length === 0 || TableApi.grid.getCheckboxRecords().length === 0)
    return message.warning('请选择账单');
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

function handleView(row: any) {
  DrawerApi.setData(row);
  DrawerApi.open();
}
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-tools>
        <Button class="mr-2"> 立即支付 </Button>
        <Button class="mr-2" @click="handleExport"> 下载账单 </Button>
        <Button
          :loading="exportLoading"
          class="mr-2"
          type="primary"
          v-auth="'POST:/client/package/operation/prediction/exportExcel'"
          @click="handleExport"
        >
          下载分拣明细
        </Button>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '立即支付',
            },
            {
              label: '查看明细',
              onClick: handleView.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
    <Drawer />
  </Page>
</template>
