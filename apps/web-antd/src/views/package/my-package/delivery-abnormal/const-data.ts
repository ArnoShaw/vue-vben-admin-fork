// const stockStatusList = getOptionsByDict('stock_status');
// const predictionDateList = getOptionsByDict('sys_printed_days');
// const printStatus = getOptionsByDict('sys_print_status');
// const packageStatusList = getOptionsByDict('package_status');

import type { VbenFormSchema } from '@vben/common-ui';
import type { VxeGridProps } from '@vben/plugins/vxe-table';

import dayjs from 'dayjs';

import { type DescItem, endTime, startTime } from '#/constants/common';

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
    title: '异常原因',
    field: 'statusCode',
    // formatter: ({ cellValue, row }) => {
    //   const number = row?.customerreferenceno || '无';
    //   return `${cellValue || '无'}\n${number}`;
    // }
  },
  {
    title: '最新动态',
    field: 'operationContent',
  },
  {
    title: '异常时间',
    field: 'operationTime',
  },
  {
    title: '异常天数(天)',
    field: 'abnormalDays',
  },
  {
    title: '处理状态',
    field: 'handleStatus',
    // formatter: ({ cellValue, row }) => {
    //   const number = row?.customerreferenceno || '无';
    //   return `${cellValue || '无'}\n${number}`;
    // }
  },
  {
    title: '处理结果',
    field: 'remark',
  },

  {
    title: '邮件提醒结果',
    field: 'sendStatus',
    minWidth: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '操作',
    width: 180,
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
      placeholder: '流水号/追踪号',
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
    label: '处理状态',
    component: 'Select',
    componentProps: {
      placeholder: '全部',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'email',
    label: '邮件提醒',
    labelWidth: 60,
    component: 'Select',
    componentProps: {
      placeholder: '全部',
    },
    formItemClass: 'col-span-4',
  },
];

export const itemBasic: DescItem[] = [
  { label: '收件人姓名', field: 'recipientName' },
  { label: '收件人电话', field: 'recipientPhone' },
  { label: '收件人邮箱', field: 'recipientEmail' },
  { label: '收件人手机', field: 'recipientMobile' },
  { label: '收件人地址', field: 'recipientFullAddress' },
];

export const itemPackage: DescItem[] = [
  { label: '计费重量(kg)', field: 'weight' },
  { label: '运费', field: 'freight' },
  { label: '下单时间', field: 'createTime' },
];
