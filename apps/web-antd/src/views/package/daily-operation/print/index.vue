<!-- eslint-disable unicorn/no-nested-ternary -->
<script setup lang="ts">
import type { Recordable } from '@vben/types';

import { Page, useVbenDrawer } from '@vben/common-ui';

import { useThrottleFn } from '@vueuse/core';
import { Button, message, Modal } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';

import { columns, formSchema, OperateType } from './const-data';
import DrawerInfo from './drawer-info.vue';

defineOptions({
  name: 'PackageDailyOperationPrint',
});

// const selectAll = ref();
// const shippingMethodList = ref();

const [Drawer, DrawerApi] = useVbenDrawer({
  connectedComponent: DrawerInfo,
});
// const [registerDrawer, { openDrawer }] = useDrawer();
const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '面单打印列表',
  formOptions: {
    schema: formSchema(onOptionsSelect),
    showCollapseButton: false,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-span-4',
    commonConfig: {
      labelWidth: 90,
    },
  },
  gridOptions: {
    columns,
    data: [
      {
        packageId: 121_523_615,
        packageCode: 'TEMP75042',
        customerOrderNo: 'TS66008499',
        customerReferenceNo: null,
        updateTime: 1_720_669_786_455,
        recipientCountryCode: 'US',
        shippingmethodname: '赤道几内亚平邮小包',
        predictionWeight: '0.230',
        predictionFreight: '4.65',
        createTime: 1_731_291_010_000,
        printTime: null,
        status: '4',
        productskus: '*1;*3',
        trackingNumber: 'test000113',
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
// const [registerTable, { getForm, reload, setTableData, setPagination, clearSelectedRowKeys }] =
//   useTable({
//     api: apis.viewPackage.packageList,
//     columns,
//     title: '面单打印列表',
//     showIndexColumn: false,
//     bordered: true,
//     showTableSetting: true,
//     useSearchForm: true,
//     immediate: false,
//     rowKey: 'packageId',
//     rowSelection: {
//       type: 'checkbox',
//       onChange: handleSelectChange,
//       getCheckboxProps: () => {
//         return {
//           disabled: unref(selectAll),
//         };
//       },
//     },
//     formConfig: {
//       schemas: formSchema(onOptionsSelect),
//       showAdvancedButton: false,
//       labelWidth: 80,
//       fieldMapToTime: [['createTime', ['createTimeFrom', 'createTimeTo'], 'YYYY-MM-DD HH:mm:ss']],
//       actionColOptions: { span: 24 },
//     },
//   });

// function formatParams(ids: number[]) {
//   const { userId } = unref(customerInfo);
//   const params: Recordable = {
//     userId,
//     packageIdList: ids,
//     ports: 'yunwei',
//   };
//   return params;
// }

function getSelectedKeys() {
  return TableApi.grid.getCheckboxRecords().map((item) => item.packageId);
}

async function handleSubmit(_ids: number[]) {
  // const freezed = await apis.packagePrediction.selectFreezeStatusById({
  //   companyId: unref(customerInfo)?.companyId,
  // });
  // if (freezed) return message.error('当前用户已被冻结，不能进行预报和撤销预报操作，请解冻后重试！');
  // const params = formatParams(ids);
  // const api = apis.viewPackage.revokePredictBatch;
  // const { flg } = (await api(params)) || {};
  // if (flg)
  //   return message.error(
  //     '当前客户已逾期签署合同导致当前账号无法预报或预约揽收。如需申请逾期签署，请联系营销总监！',
  //   );
  message.success(`操作成功`);
  handleSuccess();
}

function handleRevokePrediction(isBatch: boolean, record?: Recordable) {
  if (!getSelectedKeys()?.length && isBatch) return message.warning('请选择包裹');
  if (isBatch && TableApi.grid.getCheckboxRecords().some((row: any) => row.status !== '4'))
    return message.warning('选择的包裹已分拣，不能进行撤销预报操作，请重新选择要撤销预报的包裹');
  const title = `${isBatch ? '批量' : ''}撤销预报`;
  const content = `您确定要撤销预报${isBatch ? '选择的' : '该'}包裹吗？\n撤销预报，追踪号将会回收，重新分配`;
  Modal.confirm({
    iconType: 'warning',
    title,
    content,
    onOk: () => handleSubmit(isBatch ? getSelectedKeys() : [record?.packageId]),
  });
}

const handlePrintOrDownload = useThrottleFn(
  async (operateType: OperateType, record?: Recordable) => {
    if (!getSelectedKeys()?.length && !record) return message.warning('请选择包裹');
    // const { packageId } = record || {};
    // const { userId } = unref(customerInfo);
    // const params: Recordable = {
    //   // ...getForm().getFieldsValue(),
    //   userId,
    //   ports: 'yunwei',
    //   packageIdList: packageId ? [packageId] : getSelectedKeys(),
    // };
    const win = window.open();
    win && (win.document.body.innerHTML = '资源加载中...');
    // try {
    //   const { url } = (await apis.viewPackage.printPDFAllPage(params)) || {};
    //   if (url && win) win.location.href = url;
    //   else win?.close();
    // } catch {
    //   win?.close();
    // }
  },
  1000,
);

function onOptionsSelect() {
  getShippingMethodList();
}

function handleView(_record: Recordable) {
  // const { packageId } = record;
  // const { companyId } = unref(customerInfo);
  // openDrawer(true, {
  //   id: packageId,
  //   companyId,
  // });
  DrawerApi.open();
}

function handleSuccess() {
  onOptionsSelect();
  // reload();
}

async function getShippingMethodList() {
  // if (!unref(customerInfo).companyId) return;
  // getForm().setFieldsValue({
  //   shippingMethodId: undefined,
  // });
  // const fields = cloneDeep(getForm().getFieldsValue());
  // fields.printStatus === '1'
  //   ? Reflect.deleteProperty(fields, 'printedDays')
  //   : fields.printStatus === '2'
  //     ? Reflect.deleteProperty(fields, 'createdDays')
  //     : (fields.printedDays = '');
  // const { shippingMethodVOList = [], total = 0 } =
  //   (await apis.viewPackage.getShippingMethodList({
  //     ...fields,
  //     companyId: `${unref(customerInfo).companyId}`,
  //   })) || {};
  // shippingMethodList.value = [{ value: '', label: `全部(${total})` }].concat(
  //   shippingMethodVOList.map((item) => {
  //     return {
  //       value: item.shippingMethodId,
  //       label: `${item.shippingMethodCnName}(${item.pnum})`,
  //     };
  //   }),
  // );
  // getForm().updateSchema([
  //   {
  //     field: 'shippingMethodId',
  //     label: '邮寄方式',
  //     component: 'Select',
  //     componentProps: {
  //       options: unref(shippingMethodList),
  //       showSearch: true,
  //       filterOption: (input: string, option: any) => {
  //         return option.label.toLowerCase().includes(input.toLowerCase());
  //       },
  //     },
  //     colProps: { span: 8 },
  //   },
  // ]);
}
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-tools>
        <Button
          class="mr-2"
          type="primary"
          v-auth="'POST:/client/package/operation/print/printpdfbatch/do'"
          @click="handlePrintOrDownload(OperateType.PRINT)"
        >
          打印面单
        </Button>
        <Button
          class="mr-2"
          v-auth="'POST:/client/package/operation/print/printpdfbatch/do'"
          @click="handlePrintOrDownload(OperateType.DOWNLOAD)"
        >
          下载PDF
        </Button>
        <Button class="mr-2" @click="handleRevokePrediction(true)"> 批量撤销预报 </Button>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '查看',
              onClick: handleView.bind(null, row),
            },
            {
              label: '打印面单',
              // auth: 'POST:/client/package/operation/print/printPDF',
              onClick: handlePrintOrDownload.bind(null, OperateType.PRINT, row),
            },
          ]"
          :drop-down-actions="[
            {
              label: '下载PDF',
              // auth: 'POST:/client/package/operation/print/printPDF',
              onClick: handlePrintOrDownload.bind(null, OperateType.DOWNLOAD, row),
            },
            {
              label: '撤销预报',
              // auth: 'POST:/client/package/operation/revokePrediction',
              disabled: row.status !== '4',
              onClick: handleRevokePrediction.bind(null, false, row),
            },
          ]"
        />
      </template>
    </Table>
    <Drawer />
  </Page>
</template>
