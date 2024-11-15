import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { type VbenFormSchema, z } from '@vben/common-ui';

export const baseColumns: VxeGridProps['columns'] = [
  {
    title: '报价名称',
    sortable: true,
    field: 'priceName',
  },
  {
    title: '邮寄方式',
    sortable: true,
    field: 'shippingMethodCnName',
  },
  {
    title: '结算重量',
    sortable: true,
    field: 'weight',
  },
  {
    title: '计算公式',
    minWidth: 240,
    sortable: true,
    field: 'formula',
  },
  {
    title: '折扣',
    sortable: true,
    field: 'rebate',
  },
  {
    title: '加收费用',
    sortable: true,
    field: 'additional',
  },
  {
    title: '合计',
    sortable: true,
    field: 'amt',
  },
  {
    title: '币种',
    sortable: true,
    field: 'currencyCode',
  },
  {
    title: '备注',
    field: 'remark',
  },
];

export const baseSchema: VbenFormSchema[] = [
  {
    fieldName: 'countryCode',
    label: '目的国家',
    component: 'Select',
    rules: 'required',
    componentProps: {
      options: [],
      showSearch: true,
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'weight',
    label: '入仓重量',
    component: 'InputNumber',
    componentProps: {
      precision: 3,
      addonAfter: 'KG',
      min: 0,
      max: 99_999.999,
    },
    rules: 'required',
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'post',
    label: '收件邮编',
    component: 'Input',
    rules: z.string().max(100, '只允许输入100个字符').optional(),
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'length',
    label: '体积参数',
    help: '无需区分长宽高',
    component: 'InputNumber',
    componentProps: {
      precision: 2,
      min: 0,
      max: 99_999.999,
    },
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'width',
    label: '*',
    labelWidth: 15,
    component: 'InputNumber',
    componentProps: {
      precision: 2,
      min: 0,
      max: 99_999.999,
    },
    formItemClass: 'col-span-2',
  },
  {
    fieldName: 'height',
    label: '*',
    labelWidth: 15,
    component: 'InputNumber',
    componentProps: {
      precision: 2,
      min: 0,
      max: 99_999.999,
    },
    formItemClass: 'col-span-2',
  },
];
