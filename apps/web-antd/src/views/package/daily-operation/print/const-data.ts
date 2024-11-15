// const stockStatusList = getOptionsByDict('stock_status');
// const predictionDateList = getOptionsByDict('sys_printed_days');
// const printStatus = getOptionsByDict('sys_print_status');
// const packageStatusList = getOptionsByDict('package_status');

import type { VbenFormSchema } from '@vben/common-ui';
import type { VxeGridProps } from '@vben/plugins/vxe-table';
import type { Fn } from '@vueuse/core';

import type { DescItem } from '#/constants/common';

import { formatDateTime } from '@vben/utils';

export enum OperateType {
  DOWNLOAD = 'download',
  PRINT = 'print',
}

export const columns: VxeGridProps['columns'] = [
  {
    type: 'checkbox',
    width: 60,
    fixed: 'left',
  },
  {
    title: '流水号',
    minWidth: 160,
    sortable: true,
    fixed: 'left',
    field: 'packageCode',
  },
  {
    title: '追踪号',
    sortable: true,
    field: 'trackingNumber',
  },
  {
    title: '客户订单号',
    sortable: true,
    field: 'customerOrderNo',
  },
  {
    title: '目的地',
    field: 'recipientCountryCode',
  },
  {
    title: '重量(kg)',
    field: 'predictionWeight',
  },
  {
    title: 'SKU/数量',
    sortable: true,
    field: 'productskus',
  },
  {
    title: '运费(¥)',
    sortable: true,
    field: 'predictionFreight',
  },
  {
    title: '创建时间',
    sortable: true,
    field: 'createTime',
    minWidth: 160,
    formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '打印时间',
    sortable: true,
    field: 'printTime',
    minWidth: 160,
    formatter: ({ cellValue }) => formatDateTime(cellValue),
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

export const formSchema = (
  onOptionsSelect: Fn,
  ShippingMethodList = [{ value: '', label: `全部(0)` }],
): VbenFormSchema[] => [
  {
    fieldName: 'searchText',
    label: '包裹查询',
    component: 'Input',
    componentProps: {
      placeholder: '流水号/追踪号/订单号/参考号',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'printStatus',
    label: '打印状态',
    component: 'Select',
    defaultValue: '1',
    componentProps: {
      allowClear: false,
      onSelect: onOptionsSelect,
      options: [
        { value: '', label: '全部' },
        { value: '1', label: '未打印' },
        { value: '2', label: '已打印' },
      ],
      // options: [{ value: '', label: '全部' }, ...printStatus],
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'printedDays',
    label: '打印日期',
    component: 'Select',
    defaultValue: '0',
    dependencies: {
      triggerFields: ['printStatus'],
      if(values) {
        return values.printStatus === '2';
      },
    },
    componentProps: {
      allowClear: false,
      onSelect: onOptionsSelect,
      // options: predictionDateList,
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'createdDays',
    label: '创建日期',
    component: 'Select',
    defaultValue: '0',
    dependencies: {
      triggerFields: ['printStatus'],
      if(values) {
        return values.printStatus === '1' || !values.printStatus;
      },
    },
    componentProps: {
      allowClear: false,
      onSelect: onOptionsSelect,
      // options: predictionDateList,
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
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'shippingMethodId',
    label: '邮寄方式',
    component: 'Select',
    defaultValue: '',
    componentProps: {
      options: ShippingMethodList,
      showSearch: true,
      filterOption: (input: string, option: any) => {
        return option.label.toLowerCase().includes(input.toLowerCase());
      },
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
