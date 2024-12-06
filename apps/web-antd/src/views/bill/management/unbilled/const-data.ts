// const stockStatusList = getOptionsByDict('stock_status');
// const predictionDateList = getOptionsByDict('sys_printed_days');
// const printStatus = getOptionsByDict('sys_print_status');
// const packageStatusList = getOptionsByDict('package_status');

import type { VbenFormSchema } from '@vben/common-ui';
import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { type DescItem } from '#/constants/common';

export const columns: VxeGridProps['columns'] = [
  {
    type: 'checkbox',
    width: 60,
    fixed: 'left',
  },
  {
    title: '费用编号',
    sortable: true,
    field: 'chargecode',
  },
  {
    title: '费用类型',
    sortable: true,
    field: 'chargetype',
  },
  {
    title: '费用内容',
    minWidth: 180,
    sortable: true,
    field: 'chargedetail',
  },
  {
    title: '结单日期',
    sortable: true,
    field: 'chargetime',
  },
  {
    title: '费用生成时间',
    field: 'createtime',
    sortable: true,
    width: 160,
    // formatter: ({ cellValue }) => formatDateTime(cellValue),
  },
  {
    title: '总费用',
    field: 'charge',
    sortable: true,
  },
  {
    title: '操作',
    width: 100,
    field: 'action',
    showOverflow: false,
    slots: { default: 'action' },
    fixed: 'right',
  },
];

export const formSchema: VbenFormSchema[] = [
  {
    fieldName: 'status',
    label: '费用类型',
    labelWidth: 60,
    component: 'Select',
    componentProps: {
      options: [],
    },
    formItemClass: 'col-span-4',
  },
];

export const itemPackage: DescItem[] = [
  { label: '消费单号', field: 'chargecode' },
  { label: '消费客户', field: 'companyname' },
  { label: '消费时间', field: 'chargetime' },
  { label: '录单人', field: 'chargeby' },
  { label: '入账状态', field: 'companybillid' },
  { label: '入账单号', field: 'billcode' },
  { label: '入账时间', field: 'companybilltime' },
];

export const detailColumns: VxeGridProps['columns'] = [
  {
    title: '消费内容',
    minWidth: 240,
    field: 'detail',
  },
  {
    title: '数量',
    field: 'quantity',
  },
  {
    title: '单价',
    field: 'unitprice',
  },
  {
    title: '小计',
    field: 'totalprice',
  },
];
