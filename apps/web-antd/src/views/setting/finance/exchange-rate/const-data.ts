import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { formatDateTime } from '@vben/utils';

export const baseColumns: VxeGridProps['columns'] = [
  {
    field: 'currencycode',
    minWidth: 180,
    title: '代码',
  },
  {
    field: 'currencyname',
    title: '名称',
  },
  {
    field: 'currencysymbol',
    title: '符号',
  },
  {
    field: 'officialexchangerate',
    title: '官方汇率',
  },
  {
    field: 'officialupdatedtime',
    minWidth: 165,
    title: '官方汇率更新时间',
    formatter: ({ cellValue }: any) => formatDateTime(cellValue),
  },
];
