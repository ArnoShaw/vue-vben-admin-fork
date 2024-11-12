import type { VxeGridProps } from '@vben/plugins/vxe-table';

export interface DataSource {
  title: string;
  desc?: string;
  demo?: string;
  priority: 1 | 2 | 3;
}

export const columns: VxeGridProps['columns'] = [
  {
    title: '格式',
    field: 'format',
  },
  {
    title: '是否支持导入后自动交运',
    field: 'supportAuto',
  },
  {
    title: '模板文件',
    field: 'template',
    slots: { default: 'template' },
  },
  {
    title: '帮助说明',
    field: 'helpDesc',
    slots: { default: 'helpDesc' },
  },
];

export const helpDescColumns: VxeGridProps['columns'] = [
  {
    title: '标题名称',
    field: 'title',
    slots: { default: 'title' },
  },
  {
    title: '字段说明',
    field: 'desc',
    showOverflow: false,
    className: '!text-left',
  },
  {
    title: '示例值',
    field: 'demo',
  },
];

export const helpDescription: DataSource[] = [
  {
    title: '客户订单号',
    desc: '必填，自行编录，不允许重复',
    demo: 'CC123456789',
    priority: 1,
  },
  {
    title: '客户参考号',
    desc: '选填，长度不可超过50',
    demo: ' ',
    priority: 3,
  },
  {
    title: '邮寄方式代码',
    desc: '必填',
    demo: 'SYBRAM',
    priority: 1,
  },
  {
    title: '包裹总重量(kg)',
    desc: '必填，大于0的整数或小数',
    demo: '0.88',
    priority: 1,
  },
  {
    title: '追踪号',
    desc: '选填，如果顺友已经提前分配给您，您可以录入',
    demo: '',
    priority: 3,
  },
  {
    title: '目的地国家(二字代码)',
    desc: '至少录入一个，如果二字代码非空，则使用二字代码匹配国家，如果二字 代码为空，则使用目的国家英文名匹配国家，如果英文名为空，则使用国 家中文名进行匹配。',
    demo: 'US',
    priority: 2,
  },
  {
    title: '目的地国家名称(英文)',
    priority: 2,
  },
  {
    title: '目的地国家名称(中文)',
    priority: 2,
  },
  {
    title: '收件人姓名',
    desc: '必填，长度不可超过64',
    demo: 'michael',
    priority: 1,
  },
  {
    title: '收件人邮编',
    desc: '必填，长度不可超过32',
    demo: '12345',
    priority: 1,
  },
  {
    title: '收件人地址1',
    desc: '必填，长度不可超过100',
    demo: 'address1',
    priority: 1,
  },
  {
    title: '收件人地址2',
    desc: '选填，长度不可超过100',
    demo: ' ',
    priority: 3,
  },
  {
    title: '收件人省/州',
    desc: '必填，长度不可超过64',
    demo: 'Louisiana',
    priority: 1,
  },
  {
    title: '收件人城市',
    desc: '必填，长度不可超过64',
    demo: 'West Monroe',
    priority: 1,
  },
  {
    title: '收件人电话',
    desc: '至少录入一个，必填，长度不可超过32',
    demo: '123456789',
    priority: 2,
  },
  {
    title: '收件人手机',
    priority: 2,
  },
  {
    title: '收件人邮箱',
    desc: '选填，长度不可超过128',
    demo: ' ',
    priority: 3,
  },
  {
    title: '收件人税号',
    desc: '选填，长度不可超过32',
    demo: ' ',
    priority: 3,
  },
  {
    title: '身份证号码',
    desc: '选填，长度不可超过32',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品属性',
    desc: '选填，留空或者000代表没有属性\n第一位\n0：不含电池\n1：含电池\n2：纯电池\n第二位\n0：不含液体及粉末\n1：含液体或粉末\n第三位\n0：不是食品\n1：是食品\nLength = 3',
    demo: '000',
    priority: 3,
  },
  {
    title: '销售总金额(USD)',
    desc: '选填，小于等于10000000的正整数或小数',
    demo: ' ',
    priority: 3,
  },
  {
    title: '是否退税',
    desc: '选填，1代表退税，留空或填0代表不退税',
    demo: ' ',
    priority: 3,
  },
  {
    title: '是否投保',
    desc: '选填，1代表投保（投保金额默认为申报总价值），留空或填0代表不投保',
    demo: ' ',
    priority: 3,
  },
  {
    title: '寄件人姓名',
    desc: '选填，长度不可超过64',
    demo: ' ',
    priority: 3,
  },
  {
    title: '寄件人国家',
    desc: '选填，这里可以录入国家二字代码或者国家中文名称或者国家英文名称，如果在顺友系统中未匹配到国家信息，那么这个字段将不会被保存',
    demo: ' ',
    priority: 3,
  },
  {
    title: '寄件人省州',
    desc: '选填，长度不可超过64',
    demo: ' ',
    priority: 3,
  },
  {
    title: '寄件人城市',
    desc: '选填，长度不可超过64',
    demo: ' ',
    priority: 3,
  },
  {
    title: '寄件人区域',
    desc: '选填，长度不可超过64',
    demo: ' ',
    priority: 3,
  },
  {
    title: '寄件人街道地址',
    desc: '选填，长度不可超过200',
    demo: ' ',
    priority: 3,
  },
  {
    title: '寄件人完整地址',
    desc: '选填，长度不可超过500',
    demo: ' ',
    priority: 3,
  },
  {
    title: '寄件人电话',
    desc: '选填，长度不可超过32',
    demo: ' ',
    priority: 3,
  },
  {
    title: '寄件人邮编',
    desc: '选填，长度不可超过32',
    demo: ' ',
    priority: 3,
  },
  {
    title: '寄件人税号',
    desc: '选填，长度不可超过32',
    demo: ' ',
    priority: 3,
  },
  {
    title: 'IOSS税号',
    desc: '选填，长度不可超过32',
    demo: 'IM**********',
    priority: 3,
  },
  {
    title: '商品1申报品名(英文)',
    desc: '必填，长度不可超过50',
    demo: 'mobile',
    priority: 1,
  },
  {
    title: '商品1申报品名(中文)',
    desc: '选填，长度不可超过50',
    demo: '手机',
    priority: 1,
  },
  {
    title: '商品1配货名称/SKU',
    desc: '选填，长度不可超过100',
    demo: 'SY001_8754',
    priority: 3,
  },
  {
    title: '商品1申报数量',
    desc: '必填，小于等于10000000的非负整数',
    demo: '1',
    priority: 1,
  },
  {
    title: '商品1申报单价',
    desc: '必填，小于等于10000000的正整数或小数',
    demo: '88.99',
    priority: 1,
  },
  {
    title: '商品1申报币种',
    desc: '选填，默认USD',
    demo: 'USD',
    priority: 3,
  },
  {
    title: '商品1海关编码',
    desc: '选填，10位数字',
    demo: '1000000001',
    priority: 3,
  },
  {
    title: '商品2申报品名(英文)',
    desc: '选填，如果填写，则本组申报数量与申报单价必须同时填写',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品2申报品名(中文)',
    desc: '选填，长度不可超过50',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品2配货名称/SKU',
    desc: '选填，长度不可超过100',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品2申报数量',
    desc: '选填，小于等于10000000的非负整数',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品2申报单价',
    desc: '选填，小于等于10000000的正整数或小数',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品2申报币种',
    desc: '选填，默认USD',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品2海关编码',
    desc: '选填，10位数字',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品3申报品名(英文)',
    desc: '选填，如果填写，则本组申报数量与申报单价必须同时填写',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品3申报品名(中文)',
    desc: '选填，长度不可超过50',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品3配货名称/SKU',
    desc: '选填，长度不可超过100',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品3申报数量',
    desc: '选填，小于等于10000000的非负整数',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品3申报单价',
    desc: '选填，小于等于10000000的正整数或小数',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品3申报币种',
    desc: '选填，默认USD',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品3海关编码',
    desc: '选填，10位数字',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品4申报品名(英文)',
    desc: '选填，如果填写，则本组申报数量与申报单价必须同时填写',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品4申报品名(中文)',
    desc: '选填，长度不可超过50',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品4配货名称/SKU',
    desc: '选填，长度不可超过100',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品4申报数量',
    desc: '选填，小于等于10000000的非负整数',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品4申报单价',
    desc: '选填，小于等于10000000的正整数或小数',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品4申报币种',
    desc: '选填，默认USD',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品4海关编码',
    desc: '选填，10位数字',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品5申报品名(英文)',
    desc: '选填，如果填写，则本组申报数量与申报单价必须同时填写',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品5申报品名(中文)',
    desc: '选填，长度不可超过50',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品5配货名称/SKU',
    desc: '选填，长度不可超过100',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品5申报数量',
    desc: '选填，小于等于10000000的非负整数',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品5申报单价',
    desc: '选填，小于等于10000000的正整数或小数',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品5申报币种',
    desc: '选填，默认USD',
    demo: ' ',
    priority: 3,
  },
  {
    title: '商品5海关编码',
    desc: '选填，10位数字',
    demo: ' ',
    priority: 3,
  },
];
