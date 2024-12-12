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
    type: 'checkbox',
    width: 60,
    fixed: 'left',
  },
  {
    title: '账单编号',
    sortable: true,
    field: 'billcode',
  },
  {
    title: '账单周期',
    sortable: true,
    field: 'cyclename',
  },
  {
    title: '账单起始日',
    minWidth: 180,
    sortable: true,
    field: 'billstartdate',
  },
  {
    title: '账单结束日',
    sortable: true,
    field: 'billfinishdate',
  },
  {
    title: '最后结账日',
    sortable: true,
    field: 'billaccountday',
  },
  {
    title: '账单总金额',
    field: 'billtotalamount',
    sortable: true,
  },
  {
    title: '已结清金额',
    field: 'billpaidamount',
    sortable: true,
  },
  {
    title: '待支付金额',
    field: 'waitpayamount',
    sortable: true,
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

export const formSchema: VbenFormSchema[] = [
  {
    fieldName: 'searchText',
    label: '账单查询',
    labelWidth: 60,
    component: 'Input',
    componentProps: {
      placeholder: '支持模糊搜索账单编号',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'createTime',
    label: '起止时间',
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
];

export const itemPackage: DescItem[] = [
  { label: '消费单号', field: 'chargecode' },
  { label: '消费客户', field: 'companyname' },
  { label: '消费时间', field: 'chargetime' },
  { label: '录单人', field: 'chargeby' },
  { label: '入账状态', field: 'companybillid' },
  { label: '入账单号', field: 'billcode' },
  { label: '入账时间', field: 'companybilltime' },
];

export const detailColumns: VxeGridProps['columns'] = [
  {
    title: '消费内容',
    minWidth: 240,
    field: 'detail',
  },
  {
    title: '数量',
    field: 'quantity',
  },
  {
    title: '单价',
    field: 'unitprice',
  },
  {
    title: '小计',
    field: 'totalprice',
  },
];
