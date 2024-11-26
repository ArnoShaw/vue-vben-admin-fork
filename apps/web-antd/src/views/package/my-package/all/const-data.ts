// const stockStatusList = getOptionsByDict('stock_status');
// const predictionDateList = getOptionsByDict('sys_printed_days');
// const printStatus = getOptionsByDict('sys_print_status');
// const packageStatusList = getOptionsByDict('package_status');

import type { VbenFormSchema } from '@vben/common-ui';
import type { VxeGridProps } from '@vben/plugins/vxe-table';
import type { Fn } from '@vueuse/core';

import { formatDateTime } from '@vben/utils';

import dayjs, { type Dayjs } from 'dayjs';

import { type DescItem, endTime, startTime } from '#/constants/common';

export const columns: VxeGridProps['columns'] = [
  {
    type: 'checkbox',
    width: 60,
    fixed: 'left',
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
    title: '目的地',
    field: 'recipientcountrycode',
  },
  {
    title: '预报重量(kg)',
    minWidth: 120,
    sortable: true,
    field: 'weight',
  },
  {
    title: 'SKU/数量',
    minWidth: 160,
    field: 'declare_cn_name',
  },
  {
    title: '创建时间',
    sortable: true,
    field: 'createtime',
    minWidth: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '运费(¥)',
    sortable: true,
    field: 'freight',
  },
  {
    title: '计费重量(kg)',
    minWidth: 120,
    sortable: true,
    field: 'reviseWeight',
  },
  {
    title: '入仓时间',
    sortable: true,
    field: 'sortingTime',
    minWidth: 160,
    formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '操作',
    width: 110,
    field: 'action',
    showOverflow: false,
    slots: { default: 'action' },
    fixed: 'right',
  },
];

export const formSchema = (
  onOptionsSelect: Fn,
  ShippingMethodList = [{ value: '', label: `全部(0)` }],
): VbenFormSchema[] => [
  {
    fieldName: 'searchText',
    label: '包裹查询',
    labelWidth: 75,
    component: 'Input',
    componentProps: {
      placeholder: '流水号/追踪号/订单号/参考号',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'dataType',
    label: '包裹来源',
    component: 'Select',
    defaultValue: 1,
    componentProps: {
      allowClear: false,
      onSelect: onOptionsSelect,
      options: [
        { value: 1, label: '顺友' },
        { value: 2, label: 'Wish邮' },
      ],
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'packageStatus',
    label: '包裹状态',
    component: 'Select',
    componentProps: {
      onSelect: onOptionsSelect,
      placeholder: '全部',
      allowClear: true,
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'timeType',
    hideLabel: true,
    component: 'Select',
    defaultValue: 1,
    componentProps: {
      allowClear: false,
      options: [
        { value: 1, label: '创建时间' },
        { value: 2, label: '入仓时间' },
        { value: 3, label: '发货时间' },
      ],
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'dateStatus',
    hideLabel: true,
    component: 'RangePicker',
    defaultValue: [startTime(0), endTime],
    componentProps: () => {
      let dates: [Dayjs?, Dayjs?] = [dayjs().startOf('d'), dayjs().endOf('d')];
      return {
        onOpenChange: onOptionsSelect,
        showTime: true,
        disabledDate: (current: Dayjs) => {
          if (!dates?.length) return false;
          const tooLate = dates[0] && current.diff(dates[0], 'days') > 30;
          const tooEarly = dates[1] && dates[1].diff(current, 'days') > 30;
          return !!tooEarly || !!tooLate;
        },
        onCalendarChange(values: [Dayjs, Dayjs]) {
          dates = values;
        },
        presets: [
          { label: '今天', value: [startTime(0), endTime] },
          { label: '昨天', value: [startTime(1), dayjs().subtract(1, 'day').endOf('day')] },
          { label: '7天', value: [startTime(6), endTime] },
          { label: '15天', value: [startTime(14), endTime] },
          { label: '30天', value: [startTime(29), endTime] },
        ],
      };
    },
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'shippingMethodId',
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
    fieldName: 'countryCode',
    label: '目的国家',
    component: 'Select',
    componentProps: {
      showSearch: true,
      optionFilterProp: 'label',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'productSku',
    label: 'SKU包含',
    help: '多个SKU请用分号“;”隔开，包裹中任一商品与您输入的多个SKU匹配原则本条件成立',
    labelWidth: 75,
    component: 'Input',
    formItemClass: 'col-span-4',
  },
];

export const descItemBasic: DescItem[] = [
  { label: '顺友流水号', field: 'packageCode' },
  {
    label: '预报状态',
    field: 'packageStatus',
    // render(val) {
    //   return packageStatusList.find((item) => item.value == val)?.label;
    // },
  },
  {
    label: '商品属性',
    field: 'productAttributes',
  },
  { label: '包裹总重量', field: 'reviseWeight', render: (val) => `${val} KG` },
  {
    label: '包裹体积',
    field: 'packageLength',
    render(val, data: any) {
      const { packageHeight, packageWidth } = data;
      return `${val || '0.00'} x ${packageWidth || '0.00'} x ${packageHeight || '0.00'} CM`;
    },
  },
  {
    label: '销售总金额',
    field: 'salesAmount',
    render(val) {
      return `USD ${val || '0.00'}`;
    },
  },
];

export const descItemRecipient: DescItem[] = [
  { label: '收件人姓名', field: 'recipientName' },
  { label: '收件人电话', field: 'recipientPhone' },
  { label: '收件人手机', field: 'recipientMobile' },
  { label: '收件人邮箱', field: 'recipientEmail' },
  { label: '收件人税号', field: 'recipientTaxNumber' },
  { label: '身份证号码', field: 'recipientIdentityNumber' },
  {
    label: '收件人地址',
    field: 'recipientFullAddress',
    span: 2,
    render(_val, data: any) {
      const {
        recipientAddress1,
        recipientAddress2,
        recipientAddress3,
        recipientCity,
        recipientState,
        recipientPostCode,
        countryEnName,
      } = data;

      return `${recipientAddress1 || ''} ${recipientAddress2 || ''} ${recipientAddress3 || ''}
      ${recipientCity || ''} ${recipientState || ''} ${recipientPostCode || ''}
      ${countryEnName || ''}`;
    },
  },
];

export const descItemSender: DescItem[] = [
  { label: '寄件人姓名', field: 'senderName' },
  { label: '寄件人电话', field: 'senderPhone' },
  { label: '寄件人邮编', field: 'senderPostCode' },
  { label: '寄件人税号', field: 'senderTaxNumber' },
  { label: 'IOSS识别码', field: 'iossVatId', span: 2 },
  {
    label: '寄件人地址',
    field: 'senderFullAddress',
    span: 2,
    render(_val, data: any) {
      const { senderDistrict, senderCity, senderState, senderCountryCode } = data;
      return `${senderDistrict || ''} ${senderCity || ''} ${senderState || ''} ${senderCountryCode || ''}`;
    },
  },
];

export const descItemShipping: DescItem[] = [
  { label: '邮寄方式', field: 'shippingMethodName' },
  { label: '追踪号', field: 'trackingNumber' },
  { label: '内单号', field: 'otherNumber' },
  {
    label: '运费',
    field: 'freight',
    render(val, record: any) {
      const { currencyCode } = record;
      return `${currencyCode} ${val || '0.00'}`;
    },
  },
  { label: '退税手续费', field: 'taxRefundAmount', span: 2 },
];

export const declareColumns: VxeGridProps['columns'] = [
  {
    title: '申报品名（英文）',
    minWidth: 125,
    field: 'declareEnName',
  },
  {
    title: '申报品名（中文）',
    minWidth: 125,
    field: 'declareCnName',
  },
  {
    title: '数量',
    field: 'quantity',
  },
  {
    title: '单价',
    field: 'declarePrice',
  },
  {
    title: '币种',
    field: 'currencyCode',
  },
  {
    title: 'SKU',
    field: 'productSku',
  },
  {
    title: '海关编码',
    field: 'customCode',
  },
  {
    title: '总价',
    field: 'totalPrice',
  },
];

export const logColumns: VxeGridProps['columns'] = [
  {
    title: '操作',
    field: 'operationContent',
  },
  {
    title: '时间',
    field: 'operationTime',
    formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '操作人',
    field: 'operationBy',
  },
];
