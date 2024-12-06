<script setup lang="ts">
import { ref } from 'vue';

import { Page, useVbenDrawer } from '@vben/common-ui';

import { Button, Dropdown, Menu, MenuItem, message, Modal } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';
import { ActionEnum } from '#/constants/common';
import { getCommonBatchMsg } from '#/views/package/daily-operation/prediction/const-data';

import { columns, formSchema } from './const-data';
import DrawerContactInfo from './drawer-contact-info.vue';
import DrawerHandleResult from './drawer-handle-result.vue';

defineOptions({
  name: 'PackageMyPackageDeliveryAbnormal',
});

// const selectAll = ref();
// const shippingMethodList = ref();
const exportLoading = ref(false);

const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '派送异常列表',
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

function getSelectedKeys() {
  return TableApi.grid.getCheckboxRecords().map((item) => item.packageId);
}

// const [ModalInfo, ModalApi] = useVbenModal({
//   connectedComponent: ModalContactInfo,
// });

// const [HandleModal, HandleModalApi] = useVbenModal({
//   connectedComponent: ModalHandleResult,
// });
const [DrawerInfo, DrawerInfoApi] = useVbenDrawer({
  connectedComponent: DrawerContactInfo,
});

const [DrawerResult, DrawerResultApi] = useVbenDrawer({
  connectedComponent: DrawerHandleResult,
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

function handleBatchSendEmail() {
  if (TableApi.grid.getData().length === 0) return message.warning('暂无数据');
  const title = '批量发送邮件提醒';
  const selectNum = getSelectedKeys()?.length;
  const total = (TableApi.grid.getProxyInfo() as any)?.total;
  const content = getCommonBatchMsg(selectNum, total, title);
  // const params = {};
  Modal.confirm({
    iconType: 'warning',
    title,
    content,
    onOk: async () => {
      // await apis.financeCountryZone.remove(params);
      message.success('操作成功');
      // reload();
    },
  });
}

function handleStatus(row: any) {
  DrawerResultApi.setData({
    ...row,
    actionType: row.status === 1 ? ActionEnum.VIEW : ActionEnum.EDIT,
  });
  DrawerResultApi.open();
}

function handleViewInfo(row: any) {
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
        <Button
          type="primary"
          v-auth="'PUT:/client/package/operation/prediction/batch/revoke'"
          @click="handleBatchSendEmail"
        >
          批量发送邮件提醒
        </Button>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: row.status === 1 ? '查看处理结果' : '更新处理结果',
              onClick: handleStatus.bind(null, row),
            },
            {
              label: '联系方式',
              disabled: row.clientChoice === 1 && row.clientChoice !== 0,
              onClick: handleViewInfo.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
    <DrawerInfo />
    <DrawerResult />
  </Page>
</template>
