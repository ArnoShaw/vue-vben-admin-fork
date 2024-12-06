<script setup lang="ts">
import { ref } from 'vue';

import { Page, useVbenDrawer, useVbenModal } from '@vben/common-ui';

import { Button, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';

import DrawerCostInfo from './components/drawer-cost-info.vue';
import ModalPaymentInfo from './components/modal-payment-info.vue';
import { columns, formSchema } from './const-data';

defineOptions({
  name: 'BillManagementPaid',
});

// const selectAll = ref();
// const shippingMethodList = ref();
const exportLoading = ref(false);

const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '已支付列表',
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

const [DrawerCost, DrawerCostApi] = useVbenDrawer({
  connectedComponent: DrawerCostInfo,
});

const [ModalPayment, ModalPaymentApi] = useVbenModal({
  connectedComponent: ModalPaymentInfo,
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

function handleViewPayment(row: any) {
  ModalPaymentApi.setData(row);
  ModalPaymentApi.open();
}

function handleViewCost(row: any) {
  DrawerCostApi.setData(row);
  DrawerCostApi.open();
}
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-tools>
        <Button
          :loading="exportLoading"
          class="mr-2"
          v-auth="'POST:/client/package/operation/prediction/exportExcel'"
          @click="handleExport"
        >
          下载账单
        </Button>
        <Button
          :loading="exportLoading"
          class="mr-2"
          type="primary"
          v-auth="'POST:/client/package/operation/prediction/exportExcel'"
          @click="handleExport"
        >
          下载费用明细
        </Button>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '支付信息',
              onClick: handleViewPayment.bind(null, row),
            },
            {
              label: '费用信息',
              onClick: handleViewCost.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
    <DrawerCost />
    <ModalPayment />
  </Page>
</template>
