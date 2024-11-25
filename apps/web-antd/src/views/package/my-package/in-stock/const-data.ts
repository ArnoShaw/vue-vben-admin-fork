// const stockStatusList = getOptionsByDict('stock_status');
// const predictionDateList = getOptionsByDict('sys_printed_days');
// const printStatus = getOptionsByDict('sys_print_status');
// const packageStatusList = getOptionsByDict('package_status');

import type { VbenFormSchema } from '@vben/common-ui';
import type { VxeGridProps } from '@vben/plugins/vxe-table';

import dayjs, { type Dayjs } from 'dayjs';

import { endTime, startTime } from '#/constants/common';

export const columns: VxeGridProps['columns'] = [
  {
    type: 'checkbox',
    width: 60,
    fixed: 'left',
  },
  {
    title: '流水号',
    minWidth: 160,
    fixed: 'left',
    sortable: true,
    field: 'packagecode',
  },
  {
    title: '追踪号',
    minWidth: 160,
    sortable: true,
    field: 'trackingnumber',
  },
  {
    title: '客户订单号\n客户参考号',
    minWidth: 160,
    showOverflow: false,
    field: 'customerorderno',
    formatter: ({ cellValue, row }) => {
      const number = row?.customerreferenceno || '无';
      return `${cellValue || '无'}\n${number}`;
    },
  },
  {
    title: '邮寄方式',
    sortable: true,
    field: 'shippingMethodName',
  },
  {
    title: '目的地',
    sortable: true,
    field: 'recipientcountrycode',
  },
  {
    title: '重量(kg)',
    sortable: true,
    field: 'weight',
  },
  {
    title: '运费(¥)',
    sortable: true,
    field: 'freight',
  },
  {
    title: '商品信息',
    field: 'productDetail',
  },
  {
    title: '创建时间',
    sortable: true,
    field: 'createtime',
    minWidth: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '缺货天数',
    sortable: true,
    field: 'productDetail',
  },
];

export const formSchema: VbenFormSchema[] = [
  // {
  //   fieldName: 'searchText',
  //   label: '包裹查询',
  //   labelWidth: 75,
  //   component: 'Input',
  //   componentProps: {
  //     placeholder: '流水号/追踪号/订单号/参考号',
  //   },
  //   formItemClass: 'col-span-4',
  // },
  {
    fieldName: 'timeType',
    hideLabel: true,
    component: 'Select',
    defaultValue: 1,
    componentProps: {
      allowClear: false,
      options: [
        { value: 1, label: '创建时间' },
        { value: 2, label: '入仓时间' },
        { value: 3, label: '发货时间' },
      ],
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'dateStatus',
    hideLabel: true,
    component: 'RangePicker',
    defaultValue: [startTime(0), endTime],
    componentProps: () => {
      let dates: [Dayjs?, Dayjs?] = [dayjs().startOf('d'), dayjs().endOf('d')];
      return {
        showTime: true,
        disabledDate: (current: Dayjs) => {
          if (!dates?.length) return false;
          const tooLate = dates[0] && current.diff(dates[0], 'days') > 30;
          const tooEarly = dates[1] && dates[1].diff(current, 'days') > 30;
          return !!tooEarly || !!tooLate;
        },
        onCalendarChange(values: [Dayjs, Dayjs]) {
          dates = values;
        },
        presets: [
          { label: '今天', value: [startTime(0), endTime] },
          { label: '昨天', value: [startTime(1), dayjs().subtract(1, 'day').endOf('day')] },
          { label: '7天', value: [startTime(6), endTime] },
          { label: '15天', value: [startTime(14), endTime] },
          { label: '30天', value: [startTime(29), endTime] },
        ],
      };
    },
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'packageStatus',
    label: '包裹状态',
    component: 'Select',
    componentProps: {
      placeholder: '全部',
      allowClear: true,
      options: [
        { label: '等待预报', value: 1 },
        { label: '预报失败', value: 2 },
      ],
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'dataType',
    label: '包裹来源',
    component: 'Select',
    defaultValue: 1,
    componentProps: {
      allowClear: false,
      options: [
        { value: 1, label: '顺友' },
        { value: 2, label: 'Wish邮' },
      ],
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'shippingMethodId',
    label: '邮寄方式',
    labelWidth: 60,
    component: 'Select',
    defaultValue: '',
    componentProps: {
      options: [],
      showSearch: true,
      optionFilterProp: 'label',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'countryCode',
    label: '目的国家',
    component: 'Select',
    componentProps: {
      showSearch: true,
      optionFilterProp: 'label',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'productSku',
    label: 'SKU包含',
    help: '多个SKU请用分号“;”隔开，包裹中任一商品与您输入的多个SKU匹配原则本条件成立',
    component: 'Input',
    formItemClass: 'col-span-4',
  },
];
