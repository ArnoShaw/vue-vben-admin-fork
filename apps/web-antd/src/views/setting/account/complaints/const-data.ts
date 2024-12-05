import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { type VbenFormSchema } from '@vben/common-ui';
import { formatDateTime } from '@vben/utils';

export const baseColumns: VxeGridProps['columns'] = [
  {
    field: 'createtime',
    minWidth: 165,
    title: '创建时间',
    formatter: ({ cellValue }: any) => formatDateTime(cellValue),
  },
  {
    field: 'complaintcontent',
    title: '内容描述',
  },
  {
    field: 'complaintimage',
    title: '内容截图',
    cellRender: {
      name: 'CellImage',
    },
  },
  {
    field: 'complaintstatus',
    title: '当前状态',
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
    fieldName: 'complaintContent',
    label: '内容描述',
    rules: 'required',
    component: 'Textarea',
    componentProps: {
      rows: 5,
    },
  },
  {
    fieldName: 'complaintImage',
    label: '内容截图',
    component: 'Input',
  },
  {
    fieldName: 'companyId',
    label: '是否匿名',
    component: 'RadioGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 },
      ],
    },
  },
];
