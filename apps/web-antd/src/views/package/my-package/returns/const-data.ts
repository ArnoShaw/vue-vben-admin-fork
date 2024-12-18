// const stockStatusList = getOptionsByDict('stock_status');
// const predictionDateList = getOptionsByDict('sys_printed_days');
// const printStatus = getOptionsByDict('sys_print_status');
// const packageStatusList = getOptionsByDict('package_status');

import type { VbenFormSchema } from '@vben/common-ui';
import type { VxeGridProps } from '@vben/plugins/vxe-table';

import dayjs from 'dayjs';

import { endTime, startTime } from '#/constants/common';

export const columns: VxeGridProps['columns'] = [
  {
    type: 'checkbox',
    width: 60,
    fixed: 'left',
  },
  {
    title: '顺友流水号',
    minWidth: 160,
    fixed: 'left',
    field: 'packagecode',
  },
  {
    title: '追踪号',
    minWidth: 160,
    field: 'trackingnumber',
  },
  {
    title: '目的国',
    field: 'countrycode',
  },
  {
    title: '重量(kg)',
    field: 'sortingweight',
  },
  {
    title: '包裹运费',
    field: 'sortingfreight',
  },
  {
    title: '退件类型',
    field: 'returntype',
    // formatter: ({ cellValue, row }) => {
    //   const number = row?.customerreferenceno || '无';
    //   return `${cellValue || '无'}\n${number}`;
    // },
  },
  {
    title: '退件状态',
    field: 'status',
    cellRender: {
      name: 'CellTag',
      props: {
        color(value: any) {
          return value === 2 ? 'success' : 'error';
        },
        text: (value: any) => value,
      },
    },
  },
  {
    title: '退件编号',
    field: 'returncode',
  },

  {
    title: '退件时间',
    field: 'returntime',
    minWidth: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '操作',
    width: 150,
    field: 'action',
    showOverflow: false,
    slots: { default: 'action' },
    fixed: 'right',
  },
];

export const formSchema: VbenFormSchema[] = [
  {
    fieldName: 'searchText',
    label: '包裹查询',
    labelWidth: 60,
    component: 'Input',
    componentProps: {
      placeholder: '流水号/追踪号/退件编号',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'createTime',
    label: '退件时间',
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
  {
    fieldName: 'abnormalStatus',
    label: '退件状态',
    component: 'Select',
    componentProps: {
      placeholder: '全部',
    },
    formItemClass: 'col-span-4',
  },
];
