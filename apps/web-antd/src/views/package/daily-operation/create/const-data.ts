import type { VxeGridProps } from '@vben/plugins/vxe-table';
import type { Fn } from '@vueuse/core';

import { type VbenFormSchema, z } from '@vben/common-ui';

import Decimal from 'decimal.js';

export const formSchemas = (
  goodsSelectCb?: Fn,
  isCODChangeCb?: Fn,
  onSearchShipping?: Fn,
  productAttrsList = [],
): VbenFormSchema[] => [
  {
    fieldName: 'basic',
    hideLabel: true,
    component: 'BasicTitle',
    componentProps: {
      title: '基础信息',
      icon: 'lucide:info',
      iconClass: 'text-primary',
    },
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'customerOrderNo',
    label: '客户订单号',
    component: 'Input',
    componentProps: {
      placeholder: '必填，方便您 搜索、辨识您的订单，不可重复',
    },
    rules: z.string().max(100, '只允许输入100个字符'),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'customerReferenceNo',
    label: '客户参考号',
    component: 'Input',
    componentProps: {
      placeholder: '选填，eBay销售记录等其他平台相关编号，允许重复',
    },
    rules: z.string().max(100, '只允许输入100个字符').optional(),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'packageAttributes',
    label: '商品属性',
    component: 'Select',
    componentProps: {
      mode: 'multiple',
      options: productAttrsList,
      onSelect: goodsSelectCb,
    },
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'overseasRefund',
    label: '是否海外退件',
    labelWidth: 110,
    component: 'Checkbox',
    componentProps: {
      class: 'w-auto',
    },
    formItemClass: 'col-span-2',
  },
  {
    fieldName: 'isDrawBack',
    label: '是否退税',
    labelWidth: 60,
    component: 'Checkbox',
    componentProps: {
      class: 'w-auto',
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'packageCodFlag',
    label: '是否COD',
    component: 'Checkbox',
    componentProps: {
      onChange: isCODChangeCb,
      class: 'w-auto',
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'packageCodAmount',
    label: 'COD金额',
    labelWidth: 120,
    component: 'InputNumber',
    defaultValue: '',
    componentProps: {
      precision: 2,
      min: 0,
    },
    rules: z
      .number({ message: '请输入COD金额' })
      .min(0.01, '只允许输入0.01至5000')
      .max(5000, '只允许输入0.01至5000'),
    dependencies: {
      triggerFields: ['packageCodFlag'],
      if(values) {
        return values.packageCodFlag;
      },
    },
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'packageCodCurrencyCode',
    label: 'COD币种',
    rules: 'required',
    labelWidth: 80,
    dependencies: {
      triggerFields: ['packageCodFlag'],
      if(values) {
        return values.packageCodFlag;
      },
    },
    component: 'Select',
    componentProps: {
      // options: CODCurrencyList,
    },
    formItemClass: 'col-span-2',
  },
  {
    fieldName: 'wrapper1',
    component: 'Space',
    dependencies: {
      triggerFields: ['packageCodFlag'],
      if(values) {
        return !values.packageCodFlag;
      },
    },
    formItemClass: 'col-span-5',
  },
  {
    fieldName: 'predictionWeight',
    label: '包裹总重量',
    component: 'InputNumber',
    defaultValue: '',
    rules: z.number({ message: '请输入包裹总重量' }).max(100_000, '只允许输入0至100000'),
    componentProps: {
      onBlur: onSearchShipping,
      addonAfter: 'KG',
      min: 0,
      precision: 3,
    },
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'packageLength',
    label: '长',
    component: 'InputNumber',
    componentProps: {
      addonAfter: 'CM',
      min: 0,
      precision: 2,
    },
    rules: z.number().max(100_000, '只允许输入0至100000').nullish(),
    labelWidth: 35,
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'packageWidth',
    label: '宽',
    labelWidth: 35,
    component: 'InputNumber',
    componentProps: {
      addonAfter: 'CM',
      min: 0,
      precision: 2,
    },
    rules: z.number().max(100_000, '只允许输入0至100000').nullish(),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'packageHeight',
    label: '高',
    labelWidth: 35,
    component: 'InputNumber',
    componentProps: {
      addonAfter: 'CM',
      min: 0,
      precision: 2,
    },
    rules: z.number().max(100_000, '只允许输入0至100000').nullish(),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'packageSalesAmount',
    label: '销售总金额',
    component: 'InputNumber',
    componentProps: {
      min: 0,
      precision: 2,
      addonAfter: 'USD',
      placeholder: '选填，在分配物流时，方便您对包裹进行筛选',
    },
    rules: z.number().max(99_999_999.99, '只允许输入0至99999999.99').nullish(),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'addressee',
    hideLabel: true,
    component: 'BasicTitle',
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'recipientName',
    label: '收件人姓名',
    component: 'Input',
    rules: z.string().max(64, '只允许输入64个字符'),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'recipientEmail',
    label: '收件人邮箱',
    component: 'Input',
    rules: z
      .string()
      .email('请输入正确的邮箱地址')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'recipientPhone',
    label: '收件人电话',
    component: 'Input',
    rules: z.string().max(32, '只允许输入32个字符').optional(),
    dependencies: {
      triggerFields: ['recipientMobile'],
      required(values) {
        return !values.recipientMobile;
      },
    },
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'recipientMobile',
    label: '收件人手机',
    component: 'Input',
    rules: z.string().max(32, '只允许输入32个字符').optional(),
    dependencies: {
      triggerFields: ['recipientPhone'],
      required(values) {
        return !values.recipientPhone;
      },
    },
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'recipientTaxNumber',
    label: '收件人税号',
    component: 'Input',
    componentProps: {
      placeholder: '英国、巴西、智利路向需要填写',
    },
    rules: z.string().max(32, '只允许输入32个字符').optional(),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'recipientIdentityNumber',
    label: '身份证号码',
    component: 'Input',
    componentProps: {
      placeholder: '韩国专线需要填写',
    },
    rules: z.string().max(32, '只允许输入32个字符').optional(),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'recipientCountryCode',
    label: '国家/地区',
    component: 'Select',
    rules: 'required',
    // componentProps: {
    //   onChange: onSearchShipping,
    //   api: apis.common.getCountryList,
    //   showSearch: true,
    //   filterOption: (input: string, option: any) => {
    //     return option.label.toLowerCase().includes(input.toLowerCase());
    //   },
    // },
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'recipientState',
    label: '省/州',
    labelWidth: 60,
    component: 'Input',
    rules: z.string().max(64, '只允许输入64个字符'),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'recipientCity',
    label: '城市',
    labelWidth: 60,
    component: 'Input',
    rules: z.string().max(64, '只允许输入64个字符'),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'recipientPostCode',
    label: '邮编',
    labelWidth: 60,
    component: 'Input',
    componentProps: {
      onBlur: onSearchShipping,
    },
    rules: z.string().max(32, '只允许输入32个字符'),

    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'recipientAddress1',
    label: '地址1',
    component: 'Input',
    rules: z.string().max(200, '只允许输入200个字符'),
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'recipientAddress2',
    label: '地址2',
    component: 'Input',
    rules: z.string().max(200, '只允许输入200个字符').optional(),
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'sender',
    hideLabel: true,
    component: 'BasicTitle',
    componentProps: {
      title: '寄件信息',
      icon: 'ri:user-shared-line',
      iconClass: 'text-primary',
    },
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'senderName',
    label: '寄件人姓名',
    component: 'Input',
    rules: z.string().max(64, '只允许输入64个字符').optional(),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'senderEmail',
    label: '寄件人邮箱',
    rules: z
      .string()
      .email('请输入正确的邮箱地址')
      .optional()
      .or(z.string().refine((val) => !val)),
    component: 'Input',
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'senderPhone',
    label: '寄件人电话',
    component: 'Input',
    rules: z.string().max(32, '只允许输入32个字符').optional(),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'senderPostCode',
    label: '寄件人邮编',
    component: 'Input',
    rules: z.string().max(32, '只允许输入32个字符').optional(),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'senderTaxNumber',
    label: '寄件人税号',
    component: 'Input',
    componentProps: {
      placeholder: '挪威路向需要填写',
    },
    rules: z.string().max(32, '只允许输入32个字符').optional(),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'iossVatId',
    label: '增值税号/IOSS识别号',
    component: 'Input',
    labelWidth: 165,
    componentProps: {
      placeholder: '欧盟、新加坡、马来西亚需要填写',
    },
    rules: z.string().max(50, '只允许输入50个字符').optional(),
    formItemClass: 'col-span-6',
  },
  {
    fieldName: 'senderCountryCode',
    label: '国家/地区',
    component: 'Select',
    defaultValue: 'CN',
    componentProps: {
      options: [
        {
          value: 'CN',
          label: '中国',
        },
      ],
    },
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'senderState',
    label: '省/州',
    labelWidth: 60,
    component: 'Input',
    rules: z.string().max(64, '只允许输入64个字符').optional(),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'senderCity',
    label: '城市',
    labelWidth: 60,
    component: 'Input',
    rules: z.string().max(64, '只允许输入64个字符').optional(),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'senderDistrict',
    label: '行政区',
    labelWidth: 60,
    component: 'Input',
    rules: z.string().max(32, '只允许输入32个字符').optional(),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'senderAddress',
    label: '地址',
    component: 'Input',
    rules: z.string().max(200, '只允许输入200个字符').optional(),
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'post',
    hideLabel: true,
    component: 'BasicTitle',
    componentProps: {
      title: '邮寄方式',
      icon: 'hugeicons:delivery-truck-01',
      iconClass: 'text-primary',
    },
    formItemClass: 'col-span-12 pb-0',
  },
  {
    fieldName: 'shippingMethod',
    hideLabel: true,
    component: 'Space',
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'declare',
    hideLabel: true,
    component: 'BasicTitle',
    componentProps: {
      title: '报关信息',
      icon: 'f7:money-yen-circle',
      iconClass: 'text-primary',
    },
    formItemClass: 'col-span-12 pb-0',
  },
  {
    fieldName: 'productList',
    hideLabel: true,
    component: 'Space',
    formItemClass: 'col-span-12',
  },
];

export const shippingColumns: VxeGridProps['columns'] = [
  {
    title: '邮寄方式',
    field: 'channelName',
  },
  {
    title: '追踪号？',
    field: 'hasTrackingNumberFlag',
    // format: (val) => (val == '1' ? '有' : '无'),
  },
  {
    title: '预计时效（天）',
    field: 'overTime',
  },
  {
    title: '预估运费',
    field: 'estimateFreight',
  },
  {
    title: '币种',
    field: 'currencyCode',
  },
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
    title: '产品材质',
    field: 'productMaterial',
  },
  {
    title: '产品用途',
    field: 'productPurpose',
  },
  {
    title: '总价',
    field: 'totalPrice',
  },
  {
    title: '操作',
    field: 'action',
    slots: { default: 'action' },
    fixed: 'right',
    width: 100,
  },
];

export const productSchema: VbenFormSchema[] = [
  {
    fieldName: 'declareEnName',
    label: '申报品名（英文）',
    labelWidth: 135,
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
    labelWidth: 135,
    component: 'Input',
    rules: z
      .string()
      .min(2, '只允许输入2-50个字符')
      .max(50, '只允许输入2-50个字符')
      .regex(/[\u4E00-\u9FA5]/, '必须包含中文'),
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'quantity',
    label: '申报数量',
    component: 'InputNumber',
    componentProps: {
      min: 0,
      precision: 0,
    },
    defaultValue: '',
    rules: z.number({ message: '请输入申报数量' }).max(100_000, '只允许输入0至100000'),
    formItemClass: 'col-span-5',
  },
  {
    fieldName: 'declarePrice',
    label: '申报单价',
    labelWidth: 80,
    component: 'InputNumber',
    defaultValue: '',
    rules: z.number({ message: '请输入申报单价' }).max(99_999_999.99, '只允许输入0至99_999_999.99'),
    componentProps: {
      min: 0,
      precision: 2,
    },
    formItemClass: 'col-span-5',
  },
  {
    fieldName: 'currencyCode',
    hideLabel: true,
    component: 'Select',
    defaultValue: 'USD',
    componentProps: {
      defaultValue: 'USD',
      filterOption: true,
      options: [
        { label: 'USD', value: 'USD' },
        { label: 'CNY', value: 'CNY' },
      ],
      allowClear: false,
    },
    formItemClass: 'col-span-2',
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
  {
    fieldName: 'totalPrice',
    label: '申报总价',
    component: 'Input',
    dependencies: {
      triggerFields: ['quantity', 'declarePrice', 'currencyCode'],
      trigger(values) {
        const { quantity, declarePrice, currencyCode } = values || {};
        values.totalPrice = `${currencyCode} ${new Decimal(declarePrice || 0).mul(new Decimal(quantity || 0))}`;
      },
    },
    formItemClass: 'col-span-12',
  },
];

export const productColumns: VxeGridProps['columns'] = [
  { type: 'radio', width: 60 },
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
    title: '产品SKU',
    field: 'productSku',
  },
  {
    title: '海关编码',
    field: 'customCode',
  },
];

export const productSearchSchema: VbenFormSchema[] = [
  {
    fieldName: 'productName',
    label: '搜索',
    labelWidth: 30,
    component: 'Input',
    componentProps: {
      placeholder: '支持模糊搜索 中/英品名/SKU/海关编码',
    },
    formItemClass: 'col-span-6',
  },
];
