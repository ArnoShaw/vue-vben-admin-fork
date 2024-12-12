import { type VbenFormSchema, z } from '@vben/common-ui';

export const addSchema: VbenFormSchema[] = [
  {
    fieldName: 'userName',
    label: '子账号',
    component: 'Input',
    rules: z
      .string()
      .min(4, '只允许输入4-20个字符')
      .max(20, '只允许输入4-20个字符')
      .regex(/^[A-Z]*$/i, '只能输入英文字母，不区分大小写'),
    formItemClass: 'col-span-10',
  },
];
