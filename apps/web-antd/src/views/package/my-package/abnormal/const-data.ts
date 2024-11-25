// const stockStatusList = getOptionsByDict('stock_status');
// const predictionDateList = getOptionsByDict('sys_printed_days');
// const printStatus = getOptionsByDict('sys_print_status');
// const packageStatusList = getOptionsByDict('package_status');

import type { VbenFormSchema } from '@vben/common-ui';
import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { formatDateTime } from '@vben/utils';

import dayjs from 'dayjs';

import { type DescItem, endTime, startTime } from '#/constants/common';

export const columns: VxeGridProps['columns'] = [
  {
    type: 'checkbox',
    width: 60,
    fixed: 'left',
  },
  {
    title: '流水号',
    sortable: true,
    minWidth: 160,
    fixed: 'left',
    field: 'packageCode',
  },
  {
    title: '追踪号',
    sortable: true,
    minWidth: 160,
    field: 'trackingNumber',
  },
  {
    title: '异常类型',
    sortable: true,
    field: 'type',
    // formatter: ({ cellValue, row }) => {
    //   const number = row?.customerreferenceno || '无';
    //   return `${cellValue || '无'}\n${number}`;
    // },
  },
  {
    title: '异常说明',
    field: 'words',
    className: 'text-red-500',
  },
  {
    title: '申请处理方式',
    sortable: true,
    minWidth: 120,
    field: 'clientChoice',
    // formatter: ({ cellValue, row }) => {
    //   const number = row?.customerreferenceno || '无';
    //   return `${cellValue || '无'}\n${number}`;
    // },
  },
  {
    title: '处理结果',
    sortable: true,
    field: 'adminHandle',
    // formatter: ({ cellValue, row }) => {
    //   const number = row?.customerreferenceno || '无';
    //   return `${cellValue || '无'}\n${number}`;
    // },
  },
  {
    title: '分拣记录',
    sortable: true,
    field: 'sortingCode',
  },
  {
    title: '预报重量(kg)',
    minWidth: 120,
    sortable: true,
    field: 'predictionWeight',
  },
  {
    title: '拦截时间',
    sortable: true,
    field: 'interceptTime',
    minWidth: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
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
    label: '包裹查询',
    labelWidth: 60,
    component: 'Input',
    componentProps: {
      placeholder: '流水号/追踪号',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'createTime',
    label: '异常时间',
    component: 'RangePicker',
    defaultValue: [startTime(0), endTime],
    componentProps: {
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
    fieldName: 'abnormalStatus',
    label: '异常状态',
    component: 'Select',
    componentProps: {
      placeholder: '全部',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'packageStatus',
    label: '处理状态',
    labelWidth: 60,
    component: 'Select',
    componentProps: {
      placeholder: '全部',
      allowClear: true,
    },
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
