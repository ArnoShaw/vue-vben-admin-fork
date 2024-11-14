<script setup lang="ts">
import { computed, ref, unref } from 'vue';
import { useRouter } from 'vue-router';

import { Page, useVbenModal } from '@vben/common-ui';

import { useThrottleFn } from '@vueuse/core';
import { Button, Dropdown, Menu, MenuItem, message, Modal, TabPane, Tabs } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';

import { columns, formSchema, getOperateInfo, OperateType } from './const-data';
import ModalChangeStatus from './modal-change-status.vue';

defineOptions({
  name: 'PackageDailyOperationPrediction',
});

// const predictionStatusList = getOptionsByDict('sys_predict_status');
const predictionStatusList: any = [
  { label: '等待预报及预报失败', value: '0' },
  { label: '等待预报', value: '2' },
  { label: '预报失败', value: '3' },
  { label: '预报中', value: '10' },
  { label: '已预报', value: '4' },
];

const customerInfo = ref<any>({});
const statusList = ref();
const predictStatus = ref('0');
const selectedRowKeys = ref();
const selectedRows = ref();
const exportLoading = ref(false);
// const shippingMethodList = ref();
statusList.value = predictionStatusList;

const canEdit = computed(() => ['0', '2', '3', '10'].includes(unref(predictStatus)));

const router = useRouter();

const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '包裹预报列表',
  formOptions: {
    schema: formSchema(),
    showCollapseButton: false,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-span-4',
    commonConfig: {
      labelWidth: 90,
    },
  },
  gridOptions: {
    columns: columns(unref(predictStatus)),
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
      keyField: 'id',
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

const [ModalModify, ModalModifyApi] = useVbenModal({
  connectedComponent: ModalChangeStatus,
});

// function formatParams(ids: number[], isBatch: boolean) {
//   const { userId, companyId } = unref(customerInfo);
//   const params: Record<string, any> = {
//     userId,
//     packageIdListBO: {
//       companyId,
//       // ...getForm().getFieldsValue(),
//       predictStatus: unref(predictStatus),
//       selectAll: isBatch ? (unref(selectedRowKeys)?.length ? 'N' : 'Y') : 'N',
//       packageIds: ids,
//     },
//     packageId: ids[0],
//     ports: 'yunwei',
//   };
//   return params;
// }

async function handleSubmit(
  _ids: number[],
  _api: () => Promise<any>,
  _operateType: OperateType,
  _isBatch: boolean,
) {
  // const freezed = await apis.packagePrediction.selectFreezeStatusById({
  //   companyId: unref(customerInfo)?.companyId,
  // });
  // if (freezed && operateType !== OperateType.DELETE)
  // return message.error('当前用户已被冻结，不能进行预报和撤销预报操作，请解冻后重试！');
  // const params = formatParams(ids, isBatch);
  // const { flg } = (await api(params)) || {};
  // if (flg) {
  //   // reload();
  //   return message.error(
  //     '当前客户已逾期签署合同导致当前账号无法预报或预约揽收。如需申请逾期签署，请联系营销总监！',
  //   );
  // }
  message.success(`操作成功`);
  handleSuccess();
}

function getConfirmInfo(isBatch: boolean, operateType: OperateType, selectNum = 0, total = 0): any {
  return getOperateInfo(isBatch, selectNum, total)[operateType] || {};
}

function handleBatchOperate(operateType: OperateType) {
  if (TableApi.grid.getData().length === 0) return message.warning('暂无数据');
  if (
    operateType === OperateType.REVOKE_PREDICTION &&
    unref(selectedRows)?.some((row: any) => row.status !== '4')
  )
    return message.warning('包裹已分拣，不能进行撤销预报操作，请重新选择要撤销预报的包裹');
  if (operateType === OperateType.EDIT) {
    ModalModifyApi.setData({
      customerInfo: unref(customerInfo),
      rowKeys: unref(selectedRowKeys) || [],
      searchInfo: {
        ...TableApi.formApi.getValues(),
        predictStatus: unref(predictStatus),
        selectAll: unref(selectedRowKeys)?.length ? 'N' : 'Y',
        selectNum: unref(selectedRowKeys)?.length,
        total: (TableApi.grid.getProxyInfo() as any)?.total,
      },
    });
    return ModalModifyApi.open();
  }
  const { title, content, api } = getConfirmInfo(
    true,
    operateType,
    unref(selectedRowKeys)?.length,
    // (getPaginationRef() as any)?.total,
  );
  Modal.confirm({
    iconType: 'warning',
    title,
    content,
    onOk: () => handleSubmit(unref(selectedRowKeys), api, operateType, true),
  });
}

function handleOperate(record: any, operateType: OperateType) {
  const { packageId } = record;
  const { title, content, api } = getConfirmInfo(false, operateType);
  Modal.confirm({
    iconType: 'warning',
    title,
    content,
    onOk: () => handleSubmit([packageId], api, operateType, false),
  });
}

const handleExport = useThrottleFn(async (status, selectAll) => {
  if (
    TableApi.grid.getData().length === 0 ||
    (TableApi.grid.getCheckboxRecords().length > 0 && !selectAll)
  )
    return message.warning('暂无数据');
  // if (getDataSource().length === 0 || (!unref(selectedRowKeys)?.length && !selectAll))
  //   return message.warning('请选择包裹');
  // const { companyId } = unref(customerInfo);
  // const params: any = {
  //   // ...getForm().getFieldsValue(),
  //   predictStatus: unref(predictStatus),
  //   companyId: `${companyId}`,
  //   // createDate: status === '3' ? '-1' : getForm().getFieldsValue().predictedDays,
  //   checkedFlag: selectAll,
  //   packageIds: unref(selectedRowKeys) || [],
  // };
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
}, 2000);

function onOptionsSelect(val?: string) {
  if (val === 'predictStatus') {
    TableApi.setGridOptions({
      columns: columns(unref(predictStatus)),
    });
    // reload({ page: 1 });
  }
  getShippingMethodList();
}

// function handleSearchList(p) {
//   // const { createTimeFrom, createTimeTo, searchText } = getForm().getFieldsValue();
//   // clearSelectedRowKeys();
//   // getPredictionStatusNumber({ createTimeFrom, createTimeTo, searchText });
//   // return { ...p, companyId: unref(customerInfo).companyId, predictStatus: unref(predictStatus) };
// }

// function handleSearch(info: any) {
//   customerInfo.value = info;
//   onOptionsSelect();
//   // reload({ page: 1 });
// }

// function handleSelectChange(keys, rows) {
//   selectedRowKeys.value = keys;
//   selectedRows.value = rows;
// }

function handleEdit(record: any) {
  const { packageId } = record;
  const { companyId, companyCode, companyName, userName, ratifyStatus, userId } =
    unref(customerInfo);
  router.push({
    name: 'CustomerProxyPredictionEdit',
    query: {
      packageId,
      companyId,
      userId,
      companyCode,
      companyName,
      userName,
      ratifyStatus,
    },
  });
}

function handleSuccess() {
  onOptionsSelect();
  // reload();
}

// async function getPredictionStatusNumber(p) {
// if (!unref(customerInfo).companyId) return;
// const res = await apis.packagePrediction.refreshNum({
//   ...p,
//   companyId: unref(customerInfo).companyId,
// });
// const { waitAndFailurePredictCount, waitPredictCount, failurePredictCount, predictingCount } =
//   res;
// statusList.value = predictionStatusList.map((item: any) => {
//   const { value } = item;
//   const obj = { value, label: '已预报' };
//   if (value === '0') obj.label = `${item.label}(${waitAndFailurePredictCount})`;
//   if (value === '2') obj.label = `${item.label}(${waitPredictCount})`;
//   if (value === '3') obj.label = `${item.label}(${failurePredictCount})`;
//   if (value === '10') obj.label = `${item.label}(${predictingCount})`;
//   return obj;
// });
// }

async function getShippingMethodList() {
  // if (!unref(customerInfo).companyId) return;
  // getForm().setFieldsValue({
  //   paramShippingMethodId: undefined,
  // });
  // const { shippingMethodVOList = [], total = 0 } =
  //   (await apis.packagePrediction.getShippingMethodList({
  //     ...getForm().getFieldsValue(),
  //     predictStatus: unref(predictStatus),
  //     companyId: `${unref(customerInfo).companyId}`,
  //   })) || {};
  // shippingMethodList.value = [{ value: '', label: `全部(${total})` }]?.concat(
  //   shippingMethodVOList.map((item: any) => {
  //     return {
  //       value: item.shippingMethodId,
  //       label: `${item.shippingMethodCnName}(${item.pnum})`,
  //     };
  //   }),
  // );
  // getForm().updateSchema([
  //   {
  //     field: 'paramShippingMethodId',
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
      <template #top>
        <Tabs v-model:active-key="predictStatus" @change="onOptionsSelect('predictStatus')">
          <TabPane v-for="item in statusList" :key="item.value" :tab="item.label" />
        </Tabs>
      </template>
      <template #toolbar-tools>
        <div v-if="predictStatus !== '10'">
          <Button
            v-if="['0', '2', '3'].includes(predictStatus)"
            class="mr-2"
            type="primary"
            v-auth="'PUT:/client/package/operation/prediction/batch/predict'"
            @click="handleBatchOperate(OperateType.PREDICTION)"
          >
            批量预报
          </Button>
          <Button
            v-if="['0', '2', '3'].includes(predictStatus)"
            class="mr-2"
            v-auth="'PUT:/client/package/operation/prediction/batch/modify/save'"
            @click="handleBatchOperate(OperateType.EDIT)"
          >
            批量修改
          </Button>
          <Button
            v-if="['0', '2', '3'].includes(predictStatus)"
            class="mr-2"
            v-auth="'DELETE:/client/package/operation/prediction/batch/delete'"
            @click="handleBatchOperate(OperateType.DELETE)"
          >
            批量删除
          </Button>
          <Button
            v-if="['4'].includes(predictStatus)"
            class="mr-2"
            type="primary"
            v-auth="'PUT:/client/package/operation/prediction/batch/revoke'"
            @click="handleBatchOperate(OperateType.REVOKE_PREDICTION)"
          >
            批量撤销预报
          </Button>
          <Dropdown>
            <Button
              v-if="['3', '4'].includes(predictStatus)"
              :loading="exportLoading"
              class="mr-2"
              v-auth="'POST:/client/package/operation/prediction/exportExcel'"
            >
              导出Excel
            </Button>
            <template #overlay>
              <Menu>
                <MenuItem>
                  <a href="javascript:" @click="handleExport(predictStatus, false)">导出选中</a>
                </MenuItem>
                <MenuItem>
                  <a href="javascript:" @click="handleExport(predictStatus, true)">导出全部</a>
                </MenuItem>
              </Menu>
            </template>
          </Dropdown>
        </div>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              // auth: 'POST:/client/package/update',
              disabled: predictStatus === '10',
              ifShow: canEdit,
              onClick: handleEdit.bind(null, row),
            },
            {
              label: '预报',
              // auth: 'PUT:/client/package/operation/prediction/doprediction',
              disabled: predictStatus === '10' || row.stockFlag === '1',
              ifShow: canEdit,
              onClick: handleOperate.bind(null, row, OperateType.PREDICTION),
            },
            {
              label: '删除',
              // auth: 'DELETE:/client/package/operation/prediction/delete',
              disabled: predictStatus === '10',
              ifShow: canEdit,
              onClick: handleOperate.bind(null, row, OperateType.DELETE),
            },
            {
              label: '申请拦截',
              // auth: 'PUT:/client/package/operation/prediction/apply',
              ifShow: predictStatus === '4' && row.status !== '27',
              disabled: row.status !== '4',
              onClick: handleOperate.bind(null, row, OperateType.INTERCEPT),
            },
            {
              label: '取消拦截',
              // auth: 'PUT:/client/package/operation/prediction/cancelIntercept',
              ifShow: predictStatus === '4' && row.status === '27',
              onClick: handleOperate.bind(null, row, OperateType.REVOKE_INTERCEPT),
            },
            {
              label: '撤销预报',
              // auth: 'PUT:/client/package/operation/prediction/revoke',
              disabled: row.status !== '4',
              ifShow: predictStatus === '4',
              onClick: handleOperate.bind(null, row, OperateType.REVOKE_PREDICTION),
            },
          ]"
        />
      </template>
    </Table>
    <ModalModify @success="handleSuccess" />
  </Page>
</template>
