import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { type VbenFormSchema, z } from '@vben/common-ui';

export const baseColumns: VxeGridProps['columns'] = [
  {
    title: '邮袋编号',
    minWidth: 160,
    field: 'mailbagcode',
  },
  {
    title: '邮寄方式',
    field: 'channelcnname',
  },
  {
    title: '计费分区',
    minWidth: 120,
    field: 'chargezonename',
  },
  {
    title: '包裹数量',
    field: 'packagenumber',
  },
  {
    title: '邮袋重量(kg)',
    minWidth: 120,
    field: 'mailbagweight',
  },
  {
    title: '预约时间',
    minWidth: 160,
    field: 'reservationtime',
  },
  {
    title: '操作',
    field: 'action',
    showOverflow: false,
    fixed: 'right',
    width: 120,
    slots: { default: 'action' },
  },
];

export const baseSchema: VbenFormSchema[] = [
  {
    fieldName: 'collectDate',
    label: '揽收日期',
    labelWidth: 60,
    component: 'Select',
    componentProps: {
      options: [],
      allowClear: false,
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'status',
    label: '揽收状态',
    component: 'Select',
    componentProps: {
      options: [],
      placeholder: '全部',
      allowClear: true,
    },
    formItemClass: 'col-span-4',
  },
];

export const editSchema: VbenFormSchema[] = [
  {
    fieldName: 'mailbagcode',
    label: '邮袋编号',
    component: 'Input',
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'shippingMethodId',
    label: '邮寄方式',
    component: 'Select',
    rules: 'selectRequired',
    componentProps: {
      showSearch: true,
    },
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'chargeZoneId',
    label: '计费方式',
    component: 'Select',
    rules: 'selectRequired',
    componentProps: {
      showSearch: true,
    },
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'reservationPackageNumber',
    label: '邮袋数量',
    component: 'InputNumber',
    componentProps: {
      min: 0,
      precision: 0,
    },
    defaultValue: '',
    rules: z.number({ message: '请输入邮袋数量' }).max(100_000, '只允许输入0至100000'),
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'reservationWeight',
    label: '邮袋重量',
    component: 'InputNumber',
    defaultValue: '',
    rules: z
      .number({ message: '请输入邮袋重量' })
      .max(99_999_999.999, '只允许输入0至99_999_999.999'),
    componentProps: {
      min: 0,
      precision: 3,
      addonAfter: 'kg',
    },
    formItemClass: 'col-span-12',
  },
];

export const totalColumns: VxeGridProps['columns'] = [
  {
    title: '邮寄方式',
    minWidth: 120,
    field: 'shippingMethodCnName',
  },
  {
    title: '预报数量',
    field: 'predictionNum',
  },
  {
    title: '预报重量(kg)',
    field: 'predictionWeight',
  },
  {
    title: '已预约数量',
    field: 'reservationPackageNumber',
  },
  {
    title: '已预约重量',
    field: 'reservationWeight',
  },
  {
    title: '操作',
    field: 'action',
    showOverflow: false,
    fixed: 'right',
    width: 80,
    slots: { default: 'action' },
  },
];

export const addColumns: VxeGridProps['columns'] = [
  {
    title: '邮袋编号',
    field: 'mailbagCode',
    editRender: {},
    slots: { edit: 'edit_mailbagCode' },
  },
  {
    title: '邮寄方式',
    field: 'shippingMethodId',
    editRender: {},
    slots: { edit: 'edit_shippingMethodId' },
  },
  {
    title: '计费分区',
    field: 'chargeZoneId',
    editRender: {},
    slots: { edit: 'edit_chargeZoneId' },
  },
  {
    title: '包裹数量',
    field: 'packageNumber',
    editRender: {},
    slots: { edit: 'edit_packageNumber' },
  },
  {
    title: '邮袋重量(kg)',
    field: 'mailbagWeight',
    editRender: {},
    slots: { edit: 'edit_mailbagWeight' },
  },
  {
    title: '操作',
    field: 'action',
    showOverflow: false,
    fixed: 'right',
    width: 80,
    slots: { default: 'action' },
  },
];
