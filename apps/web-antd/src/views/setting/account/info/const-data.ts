import { type VbenFormSchema, z } from '@vben/common-ui';
import { useUserStore } from '@vben/stores';

import { apis } from '#/services/apis';

const company = useUserStore().companyInfo;
const genderList = [
  {
    label: '先生',
    value: 0,
  },
  {
    label: '女士',
    value: 1,
  },
];

export const baseSchema: VbenFormSchema[] = [
  {
    fieldName: 'userName',
    label: '登录用户名',
    component: 'Input',
    disabled: true,
  },
  {
    fieldName: 'userCode',
    label: '顺友用户ID',
    component: 'Input',
    disabled: true,
  },
  {
    fieldName: 'signupType',
    label: '注册类型',
    rules: 'required',
    defaultValue: 0,
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: '公司',
          value: 0,
        },
        {
          label: '个人',
          value: 1,
        },
      ],
    },
    dependencies: {
      show() {
        return (company?.signupType ?? '') === '';
      },
      triggerFields: ['signupType'],
    },
    formItemClass: 'col-span-12',
  },
  {
    fieldName: 'companyName',
    label: company?.signupType === 1 ? '真实姓名' : '公司全称',
    component: 'Input',
    disabled: true,
  },
  {
    fieldName: 'businessLicenseNumber',
    label: company?.signupType === 1 ? '身份证号码' : '社会信用代码',
    component: 'Input',
    disabled: true,
  },
  {
    fieldName: 'mobile',
    label: '绑定手机',
    component: 'Input',
  },
  {
    fieldName: 'moneyRemindLimit',
    label: '余额提醒',
    component: 'Input',
  },
  {
    fieldName: 'companyState',
    label: '办公地址',
    component: 'ApiSelect',
    componentProps: {
      api: () => apis.common.getRegionSelect({ type: 2, countryCode: 'CN' }),
    },
    formItemClass: 'col-span-3 mr-2',
  },
  {
    fieldName: 'companyCity',
    hideLabel: true,
    component: 'Select',
    dependencies: {
      triggerFields: ['companyState'],
      async componentProps({ companyState }) {
        let res = [];
        if (companyState)
          res = (await apis.common.getRegionSelect({ type: 3, id: companyState })) as any;
        return {
          options: res,
        };
      },
    },
    formItemClass: 'col-span-2 mr-2',
  },
  {
    fieldName: 'companyArea',
    hideLabel: true,
    component: 'Select',
    dependencies: {
      triggerFields: ['companyCity'],
      async componentProps({ companyCity }) {
        let res = [];
        if (companyCity)
          res = (await apis.common.getRegionSelect({ type: 4, id: companyCity })) as any;
        return {
          options: res,
        };
      },
    },
    formItemClass: 'col-span-2 mr-2',
  },
  {
    fieldName: 'companyAddress',
    hideLabel: true,
    component: 'Input',
    componentProps: {
      placeholder: '请填写办公详细地址',
    },
    rules: z.string().min(2, '只允许输入2-200个字符').max(200, '只允许输入200个字符'),
    formItemClass: 'col-span-5',
  },
  {
    fieldName: 'pickupState',
    label: '揽收地址',
    component: 'ApiSelect',
    componentProps: {
      api: () => apis.common.getRegionSelect({ type: 2, countryCode: 'CN' }),
    },
    formItemClass: 'col-span-3 mr-2',
  },
  {
    fieldName: 'pickupCity',
    hideLabel: true,
    component: 'Select',
    dependencies: {
      triggerFields: ['pickupState'],
      async componentProps({ pickupState }) {
        let res = [];
        if (pickupState)
          res = (await apis.common.getRegionSelect({ type: 3, id: pickupState })) as any;
        return {
          options: res,
        };
      },
    },
    formItemClass: 'col-span-2 mr-2',
  },
  {
    fieldName: 'pickupArea',
    hideLabel: true,
    component: 'Select',
    dependencies: {
      triggerFields: ['pickupCity'],
      async componentProps({ pickupCity }) {
        let res = [];
        if (pickupCity)
          res = (await apis.common.getRegionSelect({ type: 4, id: pickupCity })) as any;
        return {
          options: res,
        };
      },
    },
    formItemClass: 'col-span-2 mr-2',
  },
  {
    fieldName: 'pickupAddress',
    hideLabel: true,
    component: 'Input',
    componentProps: {
      placeholder: '请填写揽收详细地址',
    },
    rules: z.string().min(2, '只允许输入2-200个字符').max(200, '只允许输入200个字符'),
    formItemClass: 'col-span-5',
  },
  {
    fieldName: 'contacts',
    component: 'BasicTitle',
    labelWidth: 0,
    formItemClass: 'col-span-12',
    componentProps: {
      class: 'before !text-base',
      title: '相关联系人',
      helpMessage:
        '请正确填写贵公司的相关联系人，以便在包裹出现异常时我们能够及时通知您。（至少填写一个联系人）',
    },
  },
  {
    fieldName: 'businessContact',
    component: 'BasicTitle',
    labelWidth: 15,
    formItemClass: 'col-span-12',
    componentProps: {
      class: 'text-sm',
      title: '业务联系人',
      helpMessage: '新增优惠邮路、邮路价格变更时，我们将与业务联系人联络',
    },
  },
  {
    fieldName: 'businessContactName',
    label: '称呼',
    component: 'Input',
    rules: z.string().min(0).max(20, '只允许输入20个字符').optional(),
    formItemClass: 'col-span-3 mr-2',
  },
  {
    fieldName: 'businessContactSex',
    hideLabel: true,
    component: 'Select',
    componentProps: {
      options: genderList,
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'businessContactMobile',
    label: '手机',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .regex(/^1\d{10}$/, '请输入正确的手机号码')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'businessContactQq',
    label: 'QQ',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .regex(/^[1-9]\d{4,9}$/, '请输入正确的QQ号')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-2',
  },
  {
    fieldName: 'businessContactEmail',
    label: '邮箱',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .email('请输入正确的邮箱地址')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'businessContact',
    component: 'BasicTitle',
    labelWidth: 15,
    formItemClass: 'col-span-12',
    componentProps: {
      class: 'text-sm',
      title: '操作联系人',
      helpMessage: '包裹出现超重、违禁品等异常等情况时，我们将与操作联系人联络',
    },
  },
  {
    fieldName: 'operatorContactName',
    label: '称呼',
    component: 'Input',
    rules: z.string().min(0).max(20, '只允许输入20个字符').optional(),
    formItemClass: 'col-span-3 mr-2',
  },
  {
    fieldName: 'operatorContactSex',
    hideLabel: true,
    component: 'Select',
    componentProps: {
      options: genderList,
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'operatorContactMobile',
    label: '手机',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .regex(/^1\d{10}$/, '请输入正确的手机号码')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'operatorContactQq',
    label: 'QQ',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .regex(/^[1-9]\d{4,9}$/, '请输入正确的QQ号')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-2',
  },
  {
    fieldName: 'operatorContactEmail',
    label: '邮箱',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .email('请输入正确的邮箱地址')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'businessContact',
    component: 'BasicTitle',
    labelWidth: 15,
    formItemClass: 'col-span-12',
    componentProps: {
      class: 'text-sm',
      title: '财务联系人',
      helpMessage: '账单欠费逾期时，我们将与财务联系人联络',
    },
  },
  {
    fieldName: 'financeContactName',
    label: '称呼',
    rules: z.string().min(0).max(20, '只允许输入20个字符').optional(),
    component: 'Input',
    formItemClass: 'col-span-3 mr-2',
  },
  {
    fieldName: 'financeContactSex',
    hideLabel: true,
    component: 'Select',
    componentProps: {
      options: genderList,
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'financeContactMobile',
    label: '手机',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .regex(/^1\d{10}$/, '请输入正确的手机号码')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'financeContactQq',
    label: 'QQ',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .regex(/^[1-9]\d{4,9}$/, '请输入正确的QQ号')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-2',
  },
  {
    fieldName: 'financeContactEmail',
    label: '邮箱',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .email('请输入正确的邮箱地址')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'businessContact',
    component: 'BasicTitle',
    labelWidth: 15,
    formItemClass: 'col-span-12',
    componentProps: {
      class: 'text-sm',
      title: '揽收联系人',
      helpMessage: '上门揽件时，我们将与揽收联系人联络',
    },
  },
  {
    fieldName: 'collectContactName',
    label: '称呼',
    rules: z.string().min(0).max(20, '只允许输入20个字符').optional(),
    component: 'Input',
    formItemClass: 'col-span-3 mr-2',
  },
  {
    fieldName: 'collectContactSex',
    hideLabel: true,
    component: 'Select',
    componentProps: {
      options: genderList,
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'collectContactMobile',
    label: '手机',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .regex(/^1\d{10}$/, '请输入正确的手机号码')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'collectContactQq',
    label: 'QQ',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .regex(/^[1-9]\d{4,9}$/, '请输入正确的QQ号')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-2',
  },
  {
    fieldName: 'collectContactEmail',
    label: '邮箱',
    labelWidth: 50,
    component: 'Input',
    rules: z
      .string()
      .max(50, '请输入正确的邮箱地址')
      .email('请输入正确的邮箱地址')
      .optional()
      .or(z.string().refine((val) => !val)),
    formItemClass: 'col-span-3',
  },
];
