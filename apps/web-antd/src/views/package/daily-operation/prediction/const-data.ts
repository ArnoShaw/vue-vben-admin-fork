import type { VbenFormSchema } from '@vben/common-ui';
import type { VxeGridProps } from '@vben/plugins/vxe-table';
import type { Fn } from '@vueuse/core';

import { h } from 'vue';

import { formatDateTime } from '@vben/utils';

import dayjs from 'dayjs';

// const stockStatusList = getOptionsByDict('stock_status');
// const predictionDateList = getOptionsByDict('sys_printed_days');

export enum OperateType {
  DELETE = 'delete',
  EDIT = 'edit',
  INTERCEPT = 'intercept', // 拦截
  PREDICTION = 'prediction', // 预报
  REVOKE_INTERCEPT = 'revoke_intercept', // 撤销拦截
  REVOKE_PREDICTION = 'revoke_prediction', // 撤销预报
}

const getBatchMsg = (isBatch: boolean, selectNum: number, total: number) => {
  if (!isBatch) return '';
  return `已选择“${selectNum ? `${selectNum}条` : `<span style="color: red;">全部${total}条</span>`}”数据，`;
};

export const getCommonBatchMsg = (selectNum: number, total: number, title: string) => {
  return h('div', {
    innerHTML: `${getBatchMsg(true, selectNum, total)}确定${title}吗？`,
  });
};

export const getOperateInfo = (isBatch: boolean, selectNum: number, total: number) => {
  return {
    prediction: {
      title: `${isBatch ? '批量' : ''}预报`,
      content: h('div', {
        innerHTML: `${getBatchMsg(isBatch, selectNum, total)}确定预报${isBatch ? '这些' : '该'}包裹吗？`,
      }),
      // api: apis.packagePrediction.batchPredictMethod,
    },
    revoke_prediction: {
      title: `${isBatch ? '批量' : ''}撤销预报`,
      content: h('div', {
        innerHTML: `${getBatchMsg(isBatch, selectNum, total)}确定撤销预报${isBatch ? '这些' : '该'}包裹吗？\n撤销预报，追踪号将会回收，重新分配`,
      }),
      // api: apis.packagePrediction.batchRevokePrediction,
    },
    delete: {
      title: `${isBatch ? '批量' : ''}删除`,
      content: h('div', {
        innerHTML: `${getBatchMsg(isBatch, selectNum, total)}确定删除${isBatch ? '这些' : '该'}包裹吗？`,
      }),
      // api: apis.packagePrediction.batchDeletePackage,
    },
    revoke_intercept: {
      title: `取消拦截`,
      content: `您确定要取消拦截该包裹吗？`,
      // api: apis.packagePrediction.cancelIntercept,
    },
    intercept: {
      title: `拦截`,
      content: `您确定要申请拦截该包裹吗？`,
      // api: apis.packagePrediction.applyInterceptPackage,
    },
    edit: {},
  };
};

export const columns = (status: string): VxeGridProps['columns'] => [
  {
    type: 'checkbox',
    width: 60,
    fixed: 'left',
  },
  {
    title: '流水号',
    sortable: true,
    minWidth: 160,
    showOverflow: false,
    field: 'packageCode',
    fixed: 'left',
  },
  {
    title: '追踪号',
    sortable: true,
    minWidth: 160,
    showOverflow: false,
    field: 'trackingNumber',
  },
  {
    title: '客户订单号',
    sortable: true,
    showOverflow: false,
    field: 'customerOrderNo',
  },
  {
    title: '客户参考号',
    sortable: true,
    field: 'customerReferenceNo',
  },
  {
    title: '目的地',
    sortable: true,
    field: 'recipientCountryCode',
  },
  {
    title: '重量(kg)',
    sortable: true,
    field: 'predictionWeight',
  },
  {
    title: '订单生成时间',
    field: 'createTime',
    minWidth: 160,
    sortable: true,
    formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '预报时间',
    field: 'predictionTime',
    minWidth: 160,
    sortable: true,
    visible: status === '4',
    formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '失败原因',
    field: 'predictionFailReason',
    minWidth: 160,
    visible: status === '0' || status === '3',
    showOverflow: false,
    className: 'text-xs text-red-500',
  },
  {
    title: '操作',
    width: 160,
    field: 'action',
    showOverflow: false,
    slots: { default: 'action' },
    fixed: 'right',
  },
];

const startTime = (dayNum: number) => dayjs().subtract(dayNum, 'day').startOf('day');
const endTime = dayjs().endOf('day');

export const formSchema = (
  onOptionsSelect?: Fn,
  ShippingMethodList = [{ value: '', label: `全部(0)` }],
): VbenFormSchema[] => [
  {
    fieldName: 'searchText',
    label: '包裹查询',
    labelWidth: 60,
    component: 'Input',
    componentProps: {
      placeholder: '流水号/追踪号/订单号/参考号',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'paramShippingMethodId',
    label: '邮寄方式',
    component: 'Select',
    defaultValue: '',
    componentProps: {
      options: ShippingMethodList,
      showSearch: true,
      optionFilterProp: 'label',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'stockStatus',
    label: '库存状态',
    component: 'Select',
    defaultValue: '0',
    componentProps: {
      allowClear: false,
      onSelect: onOptionsSelect,
      // options: stockStatusList,
      options: [],
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'createTime',
    label: '生成时间',
    labelWidth: 60,
    component: 'RangePicker',
    defaultValue: [startTime(0), endTime],
    componentProps: {
      onOpenChange: onOptionsSelect,
      allowClear: false,
      showTime: true,
      presets: [
        { label: '今天', value: [startTime(0), endTime] },
        { label: '昨天', value: [startTime(1), dayjs().subtract(1, 'day').endOf('day')] },
        { label: '7天', value: [startTime(6), endTime] },
        { label: '30天', value: [startTime(29), endTime] },
        { label: '60天', value: [startTime(59), endTime] },
        { label: '90天', value: [startTime(89), endTime] },
      ],
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'predictedDays',
    label: '预报日期',
    component: 'Select',
    defaultValue: '0',
    componentProps: {
      allowClear: false,
      onSelect: onOptionsSelect,
      // options: predictionDateList,
      options: [],
    },
    formItemClass: 'col-span-4',
  },
];
