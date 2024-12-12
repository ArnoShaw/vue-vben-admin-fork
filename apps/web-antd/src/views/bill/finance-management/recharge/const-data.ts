// const stockStatusList = getOptionsByDict('stock_status');
// const predictionDateList = getOptionsByDict('sys_printed_days');
// const printStatus = getOptionsByDict('sys_print_status');
// const packageStatusList = getOptionsByDict('package_status');

import type { VbenFormSchema } from '@vben/common-ui';
import type { VxeGridProps } from '@vben/plugins/vxe-table';

import dayjs from 'dayjs';

import { type DescItem, endTime, startTime } from '#/constants/common';

export const columns: VxeGridProps['columns'] = [
  {
    title: '付款方流水号',
    sortable: true,
    minWidth: 120,
    field: 'rechargecode',
  },
  {
    title: '付款金额',
    sortable: true,
    field: 'rechargeamount',
  },
  {
    title: '付款方式',
    sortable: true,
    field: 'trademode',
  },
  {
    title: '付款状态',
    sortable: true,
    field: 'paymentstatus',
  },
  {
    title: '交易状态',
    sortable: true,
    field: 'tradeconfirmby',
  },
  {
    title: '付款账户\n付款账号',
    minWidth: 170,
    showOverflow: false,
    field: 'payerbankcardnumber',
    formatter: ({ cellValue, row }) => {
      return `${row?.payerbankname || ''}\n${cellValue || ''}`;
    },
  },
  {
    title: '收款账户\n收款账号',
    minWidth: 170,
    showOverflow: false,
    field: 'payeebankcardnumber',
    formatter: ({ cellValue, row }) => {
      return `${row?.payeebankname || ''}\n${cellValue || ''}`;
    },
  },
  {
    title: '充值备注',
    sortable: true,
    field: 'rechargeremark',
  },
  {
    title: '创建时间',
    field: 'createtime',
    sortable: true,
    width: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '创建人',
    field: 'createby',
    sortable: true,
  },
  {
    title: '操作',
    width: 80,
    field: 'action',
    showOverflow: false,
    slots: { default: 'action' },
    fixed: 'right',
  },
];

export const formSchema: VbenFormSchema[] = [
  {
    fieldName: 'status',
    label: '支付状态',
    labelWidth: 60,
    component: 'Select',
    componentProps: {
      options: [],
      placeholder: '全部',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'status',
    label: '交易状态',
    component: 'Select',
    componentProps: {
      options: [],
      placeholder: '全部',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'status',
    label: '付款方式',
    component: 'Select',
    componentProps: {
      options: [],
      placeholder: '全部',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'createTime',
    label: '创建日期',
    labelWidth: 60,
    component: 'RangePicker',
    defaultValue: [startTime(29), endTime],
    componentProps: {
      allowClear: false,
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
    fieldName: 'searchText',
    label: '账户查询',
    component: 'Input',
    componentProps: {
      placeholder: '支持模糊搜索账户/账号',
    },
    formItemClass: 'col-span-4',
  },
];

export const itemBase: DescItem[] = [
  { label: '付款交易号', field: 'chargecode' },
  { label: '支付方式', field: 'companyname' },
  { label: '付款状态', field: 'chargetime' },
  { label: '交易状态', field: 'companybilltime' },
];

export const itemPayer: DescItem[] = [
  { label: '付款方户号', field: 'chargecode' },
  { label: '付款方账号', field: 'companyname' },
  { label: '付款方开户行', field: 'chargetime' },
];

export const itemInfo: DescItem[] = [
  { label: '币种', field: 'chargecode' },
  { label: '金额', field: 'companyname' },
  { label: '回单号', field: 'chargetime' },
  { label: '回单截图', field: 'companybilltime' },
];

export const itemPayee: DescItem[] = [
  { label: '收款方户号', field: 'chargecode' },
  { label: '收款方账号', field: 'companyname' },
  { label: '收款方开户行', field: 'chargetime' },
];
