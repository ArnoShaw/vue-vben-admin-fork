import { type VbenFormSchema } from '@vben/common-ui';

const genderList = [
  {
    label: '先生',
    value: 1,
  },
  {
    label: '女士',
    value: 2,
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
    fieldName: 'companyName',
    label: '公司全称',
    component: 'Input',
    disabled: true,
  },
  {
    fieldName: 'businessLicensenumber',
    label: '社会信用代码',
    component: 'Input',
    disabled: true,
  },
  {
    fieldName: 'mobile',
    label: '绑定手机',
    component: 'Input',
  },
  {
    fieldName: 'balance',
    label: '余额提醒',
    component: 'Input',
  },
  {
    fieldName: 'companyState',
    label: '办公地址',
    component: 'Select',
    formItemClass: 'col-span-4 mr-2',
  },
  {
    fieldName: 'companyCity',
    hideLabel: true,
    component: 'Select',
    formItemClass: 'col-span-2 mr-2',
  },
  {
    fieldName: 'companyArea',
    hideLabel: true,
    component: 'Select',
    formItemClass: 'col-span-2 mr-2',
  },
  {
    fieldName: 'companyAddress',
    hideLabel: true,
    component: 'Input',
    componentProps: {
      placeholder: '请填写办公详细地址',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'pickupState',
    label: '揽收地址',
    component: 'Select',
    formItemClass: 'col-span-4 mr-2',
  },
  {
    fieldName: 'pickupCity',
    hideLabel: true,
    component: 'Select',
    formItemClass: 'col-span-2 mr-2',
  },
  {
    fieldName: 'pickupArea',
    hideLabel: true,
    component: 'Select',
    formItemClass: 'col-span-2 mr-2',
  },
  {
    fieldName: 'pickupAddress',
    hideLabel: true,
    component: 'Input',
    componentProps: {
      placeholder: '请填写揽收详细地址',
    },
    formItemClass: 'col-span-4',
  },
  {
    fieldName: 'contacts',
    component: 'BasicTitle',
    labelWidth: 0,
    formItemClass: 'col-span-12',
    componentProps: {
      class: 'before text-base',
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
    fieldName: 'businesscontactname',
    label: '称呼',
    component: 'Input',
    formItemClass: 'col-span-3 mr-2',
  },
  {
    fieldName: 'businesscontactsex',
    hideLabel: true,
    component: 'Select',
    componentProps: {
      options: genderList,
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'businesscontactmobile',
    label: '手机',
    labelWidth: 50,
    component: 'Input',
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'businesscontactqq',
    label: 'QQ',
    labelWidth: 50,
    component: 'Input',
    formItemClass: 'col-span-2',
  },
  {
    fieldName: 'businesscontactemail',
    label: '邮箱',
    labelWidth: 50,
    component: 'Input',
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
    fieldName: 'operatorcontactname',
    label: '称呼',
    component: 'Input',
    formItemClass: 'col-span-3 mr-2',
  },
  {
    fieldName: 'operatorcontactsex',
    hideLabel: true,
    component: 'Select',
    componentProps: {
      options: genderList,
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'operatorcontactmobile',
    label: '手机',
    labelWidth: 50,
    component: 'Input',
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'operatorcontactqq',
    label: 'QQ',
    labelWidth: 50,
    component: 'Input',
    formItemClass: 'col-span-2',
  },
  {
    fieldName: 'operatorcontactemail',
    label: '邮箱',
    labelWidth: 50,
    component: 'Input',
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
    fieldName: 'financecontactname',
    label: '称呼',
    component: 'Input',
    formItemClass: 'col-span-3 mr-2',
  },
  {
    fieldName: 'financecontactsex',
    hideLabel: true,
    component: 'Select',
    componentProps: {
      options: genderList,
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'financecontactmobile',
    label: '手机',
    labelWidth: 50,
    component: 'Input',
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'financecontactqq',
    label: 'QQ',
    labelWidth: 50,
    component: 'Input',
    formItemClass: 'col-span-2',
  },
  {
    fieldName: 'financecontactemail',
    label: '邮箱',
    labelWidth: 50,
    component: 'Input',
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
    fieldName: 'collectcontactname',
    label: '称呼',
    component: 'Input',
    formItemClass: 'col-span-3 mr-2',
  },
  {
    fieldName: 'collectcontactsex',
    hideLabel: true,
    component: 'Select',
    componentProps: {
      options: genderList,
    },
    formItemClass: 'col-span-1',
  },
  {
    fieldName: 'collectcontactmobile',
    label: '手机',
    labelWidth: 50,
    component: 'Input',
    formItemClass: 'col-span-3',
  },
  {
    fieldName: 'collectcontactqq',
    label: 'QQ',
    labelWidth: 50,
    component: 'Input',
    formItemClass: 'col-span-2',
  },
  {
    fieldName: 'collectcontactemail',
    label: '邮箱',
    labelWidth: 50,
    component: 'Input',
    formItemClass: 'col-span-3',
  },
];
