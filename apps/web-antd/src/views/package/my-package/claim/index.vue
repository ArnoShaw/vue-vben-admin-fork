<script setup lang="ts">
import { ref } from 'vue';

import { Page, useVbenDrawer } from '@vben/common-ui';

import { Button, Dropdown, Menu, MenuItem, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';

import { columns, formSchema } from './const-data';
import DrawerViewInfo from './drawer-info.vue';
import DrawerRetryClaim from './drawer-retry.vue';

defineOptions({
  name: 'PackageMyPackageClaim',
});

// const selectAll = ref();
// const shippingMethodList = ref();
const exportLoading = ref(false);

const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '包裹理赔列表',
  formOptions: {
    schema: formSchema(2, onStatusChange),
    collapsedRows: 2,
    showCollapseButton: false,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-start-9 col-end-13',
    commonConfig: {
      labelWidth: 90,
    },
  },
  gridOptions: {
    columns: columns(2),
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
const [DrawerInfo, DrawerInfoApi] = useVbenDrawer({
  connectedComponent: DrawerViewInfo,
});

const [DrawerRetry, DrawerRetryApi] = useVbenDrawer({
  connectedComponent: DrawerRetryClaim,
});

function onStatusChange(status: number) {
  TableApi.formApi.updateSchema(formSchema(status, onStatusChange));
}

async function handleExport(selectAll: boolean) {
  if (
    TableApi.grid.getData().length === 0 ||
    (TableApi.grid.getCheckboxRecords().length === 0 && !selectAll)
  )
    return message.warning('请选择包裹');
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

function handleRetry(row: any) {
  DrawerRetryApi.setData(row);
  DrawerRetryApi.open();
}

function handleView(row: any) {
  DrawerInfoApi.setData(row);
  DrawerInfoApi.open();
}
</script>

<template>
  <Page auto-content-height>
    <Table>
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
              label: '查看资料',
              onClick: handleView.bind(null, row),
            },
            {
              label: '重新理赔',
              disabled: row.clientChoice === 1 && row.clientChoice !== 0,
              onClick: handleRetry.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
    <DrawerInfo />
    <DrawerRetry />
  </Page>
</template>
