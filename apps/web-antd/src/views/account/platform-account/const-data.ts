import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { type VbenFormSchema } from '@vben/common-ui';
import { formatDateTime } from '@vben/utils';

export const baseColumns: VxeGridProps['columns'] = [
  {
    field: 'username',
    minWidth: 180,
    sortable: true,
    title: '账号',
  },
  {
    field: 'platformType',
    title: '所属平台',
    sortable: true,
  },
  {
    field: 'description',
    title: '备注',
    sortable: true,
  },
  {
    field: 'createTime',
    minWidth: 165,
    sortable: true,
    title: '创建时间',
    formatter: ({ cellValue }: any) => formatDateTime(cellValue),
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
    label: '平台账号',
    labelWidth: 60,
    component: 'Input',
    formItemClass: 'col-span-4',
  },
];

export const addSchema: VbenFormSchema[] = [
  {
    fieldName: 'platform',
    label: '平台',
    rules: 'selectRequired',
    component: 'Select',
    componentProps: {
      class: 'w-full',
    },
  },
  {
    fieldName: 'account',
    label: '账号',
    rules: 'required',
    component: 'Input',
  },
  {
    fieldName: 'remark',
    label: '备注',
    component: 'Textarea',
  },
];
