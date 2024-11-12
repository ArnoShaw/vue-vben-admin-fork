import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { type VbenFormSchema, z } from '@vben/common-ui';

export const baseColumns: VxeGridProps['columns'] = [
  {
    title: '报价名称',
    field: 'priceName',
  },
  {
    title: '邮寄方式',
    field: 'shippingMethodCnName',
  },
  {
    title: '结算重量',
    field: 'weight',
  },
  {
    title: '计算公式',
    width: 240,
    field: 'formula',
  },
  {
    title: '折扣',
    field: 'rebate',
  },
  {
    title: '加收费用',
    field: 'additional',
  },
  {
    title: '合计',
    field: 'amt',
  },
  {
    title: '币种',
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
