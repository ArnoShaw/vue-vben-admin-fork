import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { type VbenFormSchema } from '@vben/common-ui';

export const baseColumns: VxeGridProps['columns'] = [
  {
    title: '揽收日期',
    field: 'collectDate',
  },
  {
    title: '邮袋编号',
    field: 'mailbagCode',
  },
  {
    title: '邮袋数量',
    field: 'mailbagNum',
  },
  {
    title: '揽收重量(kg)',
    sortable: true,
    minWidth: 120,
    field: 'weight',
  },
  {
    title: '实际重量(kg)',
    sortable: true,
    minWidth: 120,
    field: 'weight2',
  },
  {
    title: '入库时间',
    sortable: true,
    field: 'time',
  },
  {
    title: '入库人',
    sortable: true,
    field: 'by',
  },
  {
    title: '状态',
    sortable: true,
    field: 'status',
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
