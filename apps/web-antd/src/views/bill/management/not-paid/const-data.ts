// const stockStatusList = getOptionsByDict('stock_status');
// const predictionDateList = getOptionsByDict('sys_printed_days');
// const printStatus = getOptionsByDict('sys_print_status');
// const packageStatusList = getOptionsByDict('package_status');

import type { VbenFormSchema } from '@vben/common-ui';
import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { h } from 'vue';

import { Image } from 'ant-design-vue';
import dayjs from 'dayjs';

import { type DescItem, endTime, startTime } from '#/constants/common';

export const columns = (status: number): VxeGridProps['columns'] => [
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
    title: '客户订单号',
    minWidth: 160,
    field: 'customerorderno',
  },
  {
    title: '目的国',
    field: 'recipientcountrycode',
  },
  {
    title: '包裹运费¥',
    field: 'packagefreight',
  },
  {
    title: '理赔金额¥',
    field: 'claimamount',
  },
  {
    title: '赔付金额¥',
    visible: status === 5,
    field: 'insuredamount',
  },
  {
    title: '理赔状态',
    field: 'insurancename',
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
    title: '拒绝原因',
    visible: status === 3,
    field: 'refusalreason',
    className: 'text-red-500',
  },
  {
    title: '入仓日期',
    field: 'sortingresulttime',
    minWidth: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '创建日期',
    field: 'createtime',
    visible: !status || status === 1,
    minWidth: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '申请日期',
    field: 'applytime',
    visible: status === 2 || status === 6,
    minWidth: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '拒绝日期',
    field: 'refusaltime',
    visible: status === 3,
    minWidth: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '审核日期',
    field: 'auditortime',
    visible: status === 4,
    minWidth: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '赔付日期',
    field: 'paidtime',
    visible: status === 5,
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

export const formSchema = (
  status: number,
  onStatusChange?: (status: number) => void,
): VbenFormSchema[] => {
  let label;
  switch (status) {
    case 2: {
      label = '申请日期';
      break;
    }
    case 3: {
      label = '拒绝日期';
      break;
    }
    case 4: {
      label = '审核日期';
      break;
    }
    case 5: {
      label = '赔付日期';
      break;
    }
  }
  return [
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
      label,
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
      fieldName: 'status',
      label: '理赔状态',
      component: 'Select',
      defaultValue: 2,
      componentProps: {
        onChange: onStatusChange,
        options: [
          { label: '待审核', value: 2 },
          { label: '已拒绝', value: 3 },
          { label: '待赔付', value: 4 },
          { label: '已赔付', value: 5 },
        ],
      },
      formItemClass: 'col-span-4',
    },
  ];
};

export const itemPackage: DescItem[] = [
  { label: '顺友流水号', field: 'packagecode' },
  { label: '追踪号', field: 'consigneeno' },
  { label: '客户订单号', field: 'consignorid' },
  { label: '邮寄方式', field: 'channelcnname' },
  { label: '国家', field: 'countrycode' },
  { label: '物流状态', field: 'packagestatus' },
  { label: '入仓时间', field: 'sortingresulttime' },
  { label: '物流费用', field: 'packagefreight' },
];

export const itemClaim: DescItem[] = [
  { label: '已申请次数', field: 'claimsnum' },
  { label: '理赔类型', field: 'claimtype' },
  {
    label: '理赔附件',
    field: 'createTime',
    span: 2,
    render(_val: any, _data: any) {
      return h('div', { class: 'flex' }, [
        h('div', { class: 'text-center' }, [
          h(Image, {
            width: 100,
            height: 100,
            src: 'https://picsum.photos/320/640',
            placeholder: true,
            class: 'object-cover',
          }),
          h('div', { class: 'text-center text-foreground/60 text-xs' }, '平台退款截图'),
        ]),
        h('div', { class: 'text-center ml-8' }, [
          h(Image, {
            width: 100,
            height: 100,
            placeholder: true,
            preview: false,
            class: 'object-cover',
          }),
          h('div', { class: 'text-center text-foreground/60 text-xs' }, '平台交易截图（未上传）'),
        ]),
      ]);
    },
  },
  { label: '已重新上传次数', field: 'reuploadtimes' },
  { label: '申请金额', field: 'claimamount' },
  { label: '申请时间', field: 'applytime' },
  { label: '申请人', field: 'applyname' },
];

export const itemAudit: DescItem[] = [
  { label: '审核结果', field: 'insurancestatus' },
  { label: '审核时间', field: 'refusaltime' },
];
