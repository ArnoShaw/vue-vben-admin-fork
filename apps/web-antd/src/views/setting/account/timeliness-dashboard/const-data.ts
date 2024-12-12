import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { type VbenFormSchema } from '@vben/common-ui';

export const baseColumns: VxeGridProps['columns'] = [
  {
    title: '国家名称',
    minWidth: 100,
    field: 'countrycnname',
  },
  {
    title: '妥投率（%）',
    field: 'percent',
    children: [
      {
        title: '10天',
        field: 'packegenumber1',
      },
      {
        title: '15天',
        field: 'packegenumber2',
      },
      {
        title: '20天',
        field: 'packegenumber3',
      },
      {
        title: '25天',
        field: 'packegenumber4',
      },
      {
        title: '30天',
        field: 'packegenumber5',
      },
      {
        title: '45天',
        field: 'packegenumber6',
      },
      {
        title: '60天',
        field: 'packegenumber7',
      },
      {
        title: '90天',
        field: 'packegenumber8',
      },
      {
        title: '120天',
        field: 'packegenumber9',
      },
    ],
  },
];

export const baseSchema: VbenFormSchema[] = [
  {
    fieldName: 'searchText',
    label: '国家查询',
    labelWidth: 60,
    component: 'Input',
    componentProps: {
      placeholder: '支持模糊搜索国家代码/国家名称',
    },
    formItemClass: 'col-span-4',
  },
];
