import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { type VbenFormSchema } from '@vben/common-ui';

import dayjs from 'dayjs';

import { endTime, startTime } from '#/constants/common';

export const baseColumns: VxeGridProps['columns'] = [
  {
    title: '交易流水号',
    sortable: true,
    field: 'collectDate',
  },
  {
    title: '交易时间',
    sortable: true,
    field: 'mailbagCode',
  },
  {
    title: '交易类型',
    sortable: true,
    field: 'mailbagNum',
  },
  {
    title: '交易前账户余额',
    sortable: true,
    minWidth: 120,
    field: 'weight',
  },
  {
    title: '交易金额',
    sortable: true,
    minWidth: 120,
    field: 'weight2',
  },
  {
    title: '交易后账户余额',
    sortable: true,
    field: 'time',
  },
  {
    title: '单据名称',
    sortable: true,
    field: 'by',
  },
  {
    title: '单据编号',
    sortable: true,
    field: 'status',
  },
];

export const baseSchema: VbenFormSchema[] = [
  {
    fieldName: 'collectDate',
    label: '财务类型',
    labelWidth: 60,
    component: 'Select',
    componentProps: {
      options: [],
      allowClear: false,
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'createTime',
    label: '交易日期',
    component: 'RangePicker',
    defaultValue: [startTime(29), endTime],
    componentProps: {
      allowClear: false,
      presets: [
        { label: '今天', value: [startTime(0), endTime] },
        { label: '昨天', value: [startTime(1), dayjs().subtract(1, 'day').endOf('day')] },
        { label: '7天', value: [startTime(6), endTime] },
        { label: '30天', value: [startTime(29), endTime] },
        { label: '60天', value: [startTime(59), endTime] },
        { label: '90天', value: [startTime(89), endTime] },
      ],
    },
    formItemClass: 'col-span-4',
  },
];
