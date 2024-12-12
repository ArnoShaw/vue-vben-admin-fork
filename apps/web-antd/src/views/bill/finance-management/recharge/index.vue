<script setup lang="ts">
import { ref } from 'vue';

import { Page, useVbenDrawer } from '@vben/common-ui';

import { Button, message, Modal } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';

import { columns, formSchema } from './const-data';
import DrawerInfo from './drawer-info.vue';

defineOptions({
  name: 'BillFinanceManagementRecharge',
});

// const selectAll = ref();
// const shippingMethodList = ref();
const exportLoading = ref(false);

const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '充值列表',
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
  connectedComponent: DrawerInfo,
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

function handleView(row: any) {
  DrawerApi.setData(row);
  DrawerApi.open();
}

function handleDelete(_row: any) {
  Modal.confirm({
    iconType: 'warning',
    title: '删除',
    content: '您确定要删除该充值记录吗？',
    onOk: () => {},
  });
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
          导出Excel
        </Button>
        <Button :loading="exportLoading" class="mr-2" type="primary"> 立即充值 </Button>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '查看',
              onClick: handleView.bind(null, row),
            },
          ]"
          :drop-down-actions="[
            {
              label: '重新支付',
              disabled: [1, 3].includes(row.paymentstatus) || row.trademode === 4,
              // onClick: handleView.bind(null, row),
            },
            {
              label: '删除',
              disabled: row.trademode !== 4 || row.tradeconfirmby !== 0,
              onClick: handleDelete.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
    <Drawer />
  </Page>
</template>
