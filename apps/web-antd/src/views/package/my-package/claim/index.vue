<!-- eslint-disable unicorn/no-nested-ternary -->
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
  name: 'PackageMyPackageAbnormal',
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
    collapsed: true,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-start-9 col-end-13',
    commonConfig: {
      labelWidth: 90,
    },
  },
  gridOptions: {
    columns: columns(2),
    border: true,
    data: [
      {
        customerorderno: '2346I2345682',
        createtime: '2024-04-28 10:26:01',
        claimamount: 96.76,
        auditortime: '2024-06-14 11:01:14',
        policyuuid: '1738b4ba24474007a192766dc38d99ef',
        packagecode: 'TEMP1504',
        packageid: 121_506_420,
        recipientcountrycode: 'US',
        channelcode: 'USZXP',
        applytime: '2024-04-28 10:26:01',
        insurancename: '待审核',
        insurancestatus: 6,
        companyid: 32_383,
        packagefreight: 48.38,
        shippingmethodcode: 'USZXP',
        trackingnumber: 'TEST0000000008SY',
        claimsnum: 1,
        insuredamount: 96.76,
        updatetime: '2024-06-14 11:01:14',
        sortingresulttime: '2023-08-31 15:17:17',
        reuploadtimes: 0,
        channelid: 247,
      },
      {
        customerorderno: '1134888889',
        createtime: '2024-04-23 18:39:39',
        claimamount: 0.98,
        auditortime: '2024-06-14 11:01:14',
        policyuuid: 'c78280b585fc46ac951afbf776e258dd',
        packagecode: 'SYTXT000000004023',
        packageid: 121_506_700,
        recipientcountrycode: 'IE',
        channelcode: 'IEEXPSAP',
        applytime: '2024-04-23 18:39:39',
        insurancename: '已拒绝',
        insurancestatus: 3,
        refusaltime: '2024-11-27 14:08:22',
        companyid: 32_383,
        packagefreight: 0.49,
        refusalreason: '时效内扣关',
        shippingmethodcode: 'cscs',
        trackingnumber: 'TEST0000000060SY',
        claimsnum: 1,
        insuredamount: 0.98,
        updatetime: '2024-11-27 14:08:22',
        sortingresulttime: '2023-09-04 17:44:57',
        reuploadtimes: 0,
        channelid: 753,
      },
      {
        customerorderno: '99898989964',
        createtime: '2024-04-12 15:52:53',
        claimamount: 59.76,
        auditortime: '2024-11-27 14:10:15',
        policyuuid: 'e1c8ed9a96ba462486107e73e65e5290',
        packagecode: 'SYTXT000000115023',
        packageid: 121_511_904,
        recipientcountrycode: 'US',
        channelcode: 'MYAMVP',
        applytime: '2024-04-12 15:52:53',
        insurancename: '待赔付',
        insurancestatus: 4,
        refusaltime: '2024-11-27 14:10:15',
        companyid: 32_383,
        packagefreight: 29.88,
        shippingmethodcode: 'cscs',
        trackingnumber: 'TEST0000002804SY',
        claimsnum: 1,
        insuredamount: 59.76,
        updatetime: '2024-11-27 14:10:15',
        sortingresulttime: '2024-03-29 13:41:11',
        paidtime: '2024-04-12 15:57:22',
        reuploadtimes: 0,
        channelid: 285,
      },
    ],
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
