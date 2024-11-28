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
    data: [
      {
        subareaname: '赤道几内亚平邮小包[US]',
        channelcnname: '赤道几内亚平邮小包',
        returncode: 'TJ109',
        packagecode: 'SIX2311111115112',
        countrycode: 'US',
        returntype: 0,
        lineid: 163_993,
        remark: '测试2',
        channelcode: 'GQPNAM',
        sortingfreight: 22.62,
        companyid: 32_392,
        refundstatus: 0,
        returnby: '易洋',
        companyname: '66科技有限公司',
        shippingmethodcode: 'rrtest',
        trackingnumber: 'test000317',
        sortingweight: 1.12,
        channelid: 607,
        username: 'user',
        returntime: '2024-10-25 10:46:21',
        status: 2,
      },
      {
        subareaname: '赤道几内亚平邮小包[US]',
        channelcnname: '赤道几内亚平邮小包',
        returncode: 'TJ109',
        packagecode: 'SIX2311111125112',
        countrycode: 'US',
        returntype: 5,
        lineid: 163_992,
        remark: '测试1',
        channelcode: 'GQPNAM',
        sortingfreight: 40.4,
        companyid: 32_392,
        refundstatus: 1,
        returnby: '易洋',
        companyname: '66科技有限公司',
        shippingmethodcode: 'rrtest',
        trackingnumber: 'test000358',
        sortingweight: 2,
        channelid: 607,
        username: 'user',
        returntime: '2024-10-25 10:46:21',
        status: 0,
      },
      {
        subareaname: '赤道几内亚平邮小包[US]',
        channelcnname: '赤道几内亚平邮小包',
        packagecode: 'SIX2311111128118',
        countrycode: 'US',
        returntype: 1,
        lineid: 163_990,
        channelcode: 'GQPNAM',
        sortingfreight: 40.4,
        companyid: 32_392,
        refundstatus: 0,
        returnby: '易洋',
        companyname: '66科技有限公司',
        shippingmethodcode: 'rrtest',
        trackingnumber: 'test000382',
        sortingweight: 2,
        channelid: 607,
        username: 'user',
        returntime: '2024-10-25 09:33:49',
        status: 0,
      },
      {
        subareaname: '赤道几内亚平邮小包[PR]',
        channelcnname: '赤道几内亚平邮小包',
        packagecode: 'SIX2111111114316',
        countrycode: 'PR',
        returntype: 1,
        lineid: 163_985,
        channelcode: 'GQPNAM',
        sortingfreight: 3.2,
        companyid: 32_392,
        refundstatus: 0,
        returnby: '易洋',
        companyname: '66科技有限公司',
        shippingmethodcode: 'rrtest',
        trackingnumber: 'TEST0000025946SY',
        sortingweight: 0.16,
        channelid: 607,
        username: 'user',
        returntime: '2024-10-16 15:29:52',
        status: 0,
      },
    ],
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
