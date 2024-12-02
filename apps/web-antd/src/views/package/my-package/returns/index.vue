<!-- eslint-disable unicorn/no-nested-ternary -->
<script setup lang="ts">
import { ref } from 'vue';

import { Page, useVbenModal } from '@vben/common-ui';

import { Button, Dropdown, Menu, MenuItem, message, Modal } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';

import { columns, formSchema } from './const-data';
import ModalSignatureInfo from './modal-signature-info.vue';

defineOptions({
  name: 'PackageMyPackageAbnormal',
});

// const selectAll = ref();
// const shippingMethodList = ref();
const exportLoading = ref(false);

const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '包裹退件列表',
  formOptions: {
    schema: formSchema,
    collapsedRows: 2,
    showCollapseButton: false,
    collapsed: true,
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

const [ModalSign, ModalApi] = useVbenModal({
  connectedComponent: ModalSignatureInfo,
});

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

async function handleSubmit(_ids: number[]) {
  message.success(`操作成功`);
}

function handleReceipt(row: any) {
  Modal.confirm({
    iconType: 'warning',
    title: '确认收货',
    content: '您确定要确认收货吗？',
    onOk: () => handleSubmit([row?.packageId]),
  });
}

function handleViewSign(row: any) {
  ModalApi.setData(row);
  ModalApi.open();
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
              label: '确认收货',
              onClick: handleReceipt.bind(null, row),
            },
            {
              label: '查看签名',
              disabled: row.clientChoice === 1 && row.clientChoice !== 0,
              onClick: handleViewSign.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
    <ModalSign />
  </Page>
</template>
