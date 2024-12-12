<script setup lang="ts">
import { ref } from 'vue';

import { Page, useVbenDrawer } from '@vben/common-ui';

import { Button, Dropdown, Menu, MenuItem, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';

import { columns, formSchema } from './const-data';
import DrawerInfo from './drawer-info.vue';

defineOptions({
  name: 'BillManagementUnbilled',
});

// const selectAll = ref();
// const shippingMethodList = ref();
const exportLoading = ref(false);

const [Table, TableApi] = useVbenVxeGrid({
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
  connectedComponent: DrawerInfo,
});

async function handleExport(selectAll: boolean) {
  if (
    TableApi.grid.getData().length === 0 ||
    (TableApi.grid.getCheckboxRecords().length === 0 && !selectAll)
  )
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
      <template #toolbar-actions>
        <span class="font-semibold">账单周期：</span> 每自然周（2024-12-02至2024-12-09）
        <span class="ml-4 font-semibold">最后结账日：</span> 2024-12-10
        <span class="ml-4 font-semibold">当期费用：</span> ¥98.14
      </template>
      <template #toolbar-tools>
        <Dropdown>
          <Button
            :loading="exportLoading"
            class="mr-2"
            type="primary"
            v-auth="'POST:/client/package/operation/prediction/exportExcel'"
          >
            导出Excel
          </Button>
          <template #overlay>
            <Menu>
              <MenuItem>
                <a href="javascript:" @click="handleExport(false)">导出选中</a>
              </MenuItem>
              <MenuItem>
                <a href="javascript:" @click="handleExport(true)">导出全部</a>
              </MenuItem>
            </Menu>
          </template>
        </Dropdown>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
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
