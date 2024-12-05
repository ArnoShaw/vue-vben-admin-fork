import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { type VbenFormSchema, z } from '@vben/common-ui';

export const productColumns: VxeGridProps['columns'] = [
  {
    title: '中文品名',
    field: 'declareCnName',
  },
  {
    title: '英文品名',
    field: 'declareEnName',
    // format: (val) => (val == '1' ? '有' : '无'),
  },
  {
    title: '配货名称/SKU',
    field: 'productSku',
  },
  {
    title: '海关编码',
    field: 'customCode',
  },
  {
    title: '报价单号',
    field: 'declarePrice',
  },
  {
    title: '申报币种',
    field: 'currencyCode',
  },
  {
    title: '操作',
    width: 120,
    field: 'action',
    showOverflow: false,
    slots: { default: 'action' },
    fixed: 'right',
  },
];

export const baseSchema: VbenFormSchema[] = [
  {
    fieldName: 'searchValue',
    label: '搜索条件',
    labelWidth: 60,
    component: 'Input',
    componentProps: {
      placeholder: '支持模糊搜索 中/英品名/海关编码',
    },
    formItemClass: 'col-span-4',
  },
];

export const addSchema: VbenFormSchema[] = [
  {
    fieldName: 'declareEnName',
    label: '申报品名（英文）',
    component: 'Input',
    rules: z
      .string()
      .min(2, '只允许输入2-50个字符')
      .max(50, '只允许输入2-50个字符')
      .regex(/[a-z]/i, '必须包含英文'),
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'declareCnName',
    label: '申报品名（中文）',
    component: 'Input',
    rules: z
      .string()
      .min(2, '只允许输入2-50个字符')
      .max(50, '只允许输入2-50个字符')
      .regex(/[\u4E00-\u9FA5]/, '必须包含中文'),
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'declarePrice',
    label: '申报单价',
    component: 'InputNumber',
    defaultValue: '',
    rules: z.number({ message: '请输入申报单价' }).max(99_999_999.99, '只允许输入0至99_999_999.99'),
    componentProps: {
      min: 0,
      precision: 2,
    },
    formItemClass: 'col-span-9',
  },
  {
    fieldName: 'currencyCode',
    hideLabel: true,
    component: 'Select',
    defaultValue: 'USD',
    componentProps: {
      // options: declareCurrencyCodes,
      defaultValue: 'USD',
      showSearch: true,
      options: [
        { label: 'USD', value: 'USD' },
        { label: 'CNY', value: 'CNY' },
      ],
      allowClear: false,
    },
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'productSku',
    label: '配货名称/SKU',
    component: 'Input',
    rules: z.string().max(100, '只允许输入100个字符').optional(),
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'customCode',
    label: '海关编码',
    component: 'Input',
    rules: z
      .string()
      .min(6, '只允许输入6-10个字符')
      .max(10, '只允许输入6-10个字符')
      .regex(/^\d*$/g, '请输入正整数')
      .optional(),
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'productMaterial',
    label: '产品材质',
    component: 'Input',
    rules: z.string().max(50, '只允许输入50个字符').optional(),
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'productPurpose',
    label: '产品用途',
    component: 'Input',
    rules: z.string().max(50, '只允许输入50个字符').optional(),
    formItemClass: 'col-span-12',
  },
];
