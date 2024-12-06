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
    field: 'billaccountday',
    sortable: true,
    // formatter: ({ cellValue }) => formatDate(cellValue),
  },
  {
    title: '账单总金额',
    sortable: true,
    field: 'billtotalamount',
  },
  {
    title: '结清日期',
    sortable: true,
    field: 'billlastpaytime',
  },
  {
    title: '操作',
    width: 150,
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

export const formSchemaCost: VbenFormSchema[] = [
  {
    fieldName: 'status',
    label: '费用类型',
    labelWidth: 60,
    component: 'Select',
    componentProps: {
      options: [],
    },
    formItemClass: 'col-span-4',
  },
];

export const formSchemaSort: VbenFormSchema[] = [
  {
    fieldName: 'status',
    label: '有效性',
    labelWidth: 45,
    component: 'Select',
    componentProps: {
      options: [],
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'type',
    label: '分拣方式',
    component: 'Select',
    componentProps: {
      options: [],
    },
    formItemClass: 'col-span-4',
  },
];

export const itemPayment: DescItem[] = [
  { label: '账单起始', field: 'billstartdate' },
  { label: '账单结束日', field: 'billfinishdate' },
  { label: '账单总金额（CNY）', field: 'billtotalamount' },
  { label: '财务账本代码', field: 'companyaccountbookcode' },
  { label: '交易确认金额（CNY）', field: 'tradeconfirmamount' },
];

export const itemBill: DescItem[] = [
  { label: '账单编号', field: 'billcode' },
  { label: '账单总金额', field: 'billtotalamount' },
  { label: '已结清金额', field: 'billpaidamount' },
  { label: '待支付金额', field: 'waitpayamount' },
  { label: '账单周期', field: 'cyclename' },
  { label: '账单起止日期', field: 'billstartdate' },
  { label: '最后结账日', field: 'billaccountday' },
];

export const itemCost: DescItem[] = [
  { label: '费用编号', field: 'chargecode' },
  { label: '费用类型', field: 'chargetype' },
  { label: '费用金额', field: 'charge' },
  { label: '费用时间', field: 'createtime' },
  { label: '结单日期', field: 'chargetime' },
];

export const columnsCost: VxeGridProps['columns'] = [
  {
    title: '费用编号',
    sortable: true,
    field: 'chargecode',
  },
  {
    title: '费用类型',
    sortable: true,
    field: 'chargetype',
  },
  {
    title: '费用内容',
    minWidth: 180,
    sortable: true,
    field: 'chargedetail',
  },
  {
    title: '结单日期',
    sortable: true,
    field: 'chargetime',
  },
  {
    title: '费用生成时间',
    width: 160,
    sortable: true,
    field: 'createtime',
  },
  {
    title: '总费用',
    sortable: true,
    field: 'charge',
  },
  {
    title: '操作',
    width: 60,
    field: 'action',
    showOverflow: false,
    slots: { default: 'action' },
    fixed: 'right',
  },
];

export const columnsSort: VxeGridProps['columns'] = [
  {
    title: '邮寄方式',
    field: 'channelcnname',
  },
  {
    title: '重量',
    field: 'reviseweight',
  },
  {
    title: '运费',
    field: 'revisefreight',
  },
  {
    title: '费用小计',
    field: 'totalcharge',
  },
];

export const columnsWarehouse: VxeGridProps['columns'] = [
  {
    title: '邮寄方式',
    minWidth: 120,
    field: 'channelcnname',
  },
  {
    title: '重量',
    field: 'reviseweight',
  },
  {
    title: '包裹数',
    field: 'packagenum',
  },
  {
    title: '运费',
    field: 'revisefreight',
  },
  {
    title: '保险费',
    field: 'insuranceamount',
  },
  {
    title: '退税手续费',
    field: 'taxrefundamount',
  },
  {
    title: '费用小计',
    field: 'totalcharge',
  },
];

export const columnsSortDetail: VxeGridProps['columns'] = [
  {
    title: '分拣记录号',
    minWidth: 160,
    fixed: 'left',
    field: 'packagecode',
  },
  {
    title: '顺友流水号',
    minWidth: 160,
    fixed: 'left',
    field: 'packagecode',
  },
  {
    title: '追踪号',
    minWidth: 160,
    field: 'trackingnumber',
  },
  {
    title: '客户订单号\n客户参考号',
    minWidth: 160,
    showOverflow: false,
    field: 'customerorderno',
    formatter: ({ cellValue, row }) => {
      const number = row?.customerreferenceno || '无';
      return `${cellValue || '无'}\n${number}`;
    },
  },
  {
    title: '邮寄方式',
    field: 'shippingMethodName',
  },
  {
    title: '国家编码',
    field: 'recipientcountrycode',
  },
  {
    title: '国家中文名',
    field: 'recipientcountryname',
  },
  {
    title: '包裹数',
    field: 'packagenum',
  },
  {
    title: '体积(cm)',
    field: 'weight',
  },
  {
    title: '体积计重(kg)',
    field: 'weight',
  },
  {
    title: '计费重量(kg)',
    field: 'weight',
  },
  {
    title: '运费(¥)',
    field: 'freight',
  },
  {
    title: '退税手续费',
    field: 'productDetail',
  },
  {
    title: '小计',
    field: 'productDetail',
  },
  {
    title: '入仓时间',
    field: 'createtime',
    minWidth: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
];
