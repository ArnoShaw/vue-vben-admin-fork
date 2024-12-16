import { type VbenFormSchema, z } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { message, type StepProps } from 'ant-design-vue';

export const userformSchema: VbenFormSchema[] = [
  {
    component: 'VbenInput',
    componentProps: {
      placeholder: '请输入用户名或手机号',
    },
    fieldName: 'keyword',
    rules: z.string().min(1, '请输入用户名或手机号'),
  },
  {
    component: 'VbenInput',
    componentProps: {
      placeholder: '请输入图形验证码',
    },
    fieldName: 'code',
    label: '图形验证码',
    rules: z.string().min(1, { message: '请输入图形验证码' }),
    formItemClass: 'col-span-1',
  },
  {
    component: 'VbenInput',
    fieldName: 'codeImg',
    hideLabel: true,
    formItemClass: 'ml-2 col-span-1',
  },
];

export const items: StepProps[] = [
  {
    description: '填写用户名',
    disabled: true,
  },
  {
    description: '验证身份',
    disabled: true,
  },
  {
    description: '重置密码',
    disabled: true,
  },
];

export const mobileSchema: VbenFormSchema[] = [
  {
    component: 'VbenInput',
    fieldName: 'userId',
    dependencies: {
      triggerFields: ['userId'],
      show() {
        return false;
      },
    },
  },
  {
    component: 'VbenPinInput',
    componentProps: ({ userId }, { validateField }) => {
      return {
        maxTime: 120,
        userId,
        sendCodeError: async (msg: string) => {
          message.error(msg);
        },
        sendCodeSuccess: async () => {
          message.success('发送成功');
        },
        handleSendCode: async () => {
          const { valid } = await validateField('userId');
          if (!valid) throw new Error('请输入手机号码');
        },
        createText: (countdown: number) => {
          const text =
            countdown > 0 ? $t('authentication.sendText', [countdown]) : '获取短信验证码';
          return text;
        },
        placeholder: $t('authentication.code'),
      };
    },
    fieldName: 'smsCode',
    label: '短信验证码',
    rules: z.string().min(1, { message: '请输入短信验证码' }),
  },
];

export const pswSchema: VbenFormSchema[] = [
  {
    component: 'VbenInputPassword',
    componentProps: {
      placeholder: '新密码',
    },
    fieldName: 'password',
    hideLabel: true,
    rules: z
      .string({ message: $t('authentication.passwordTip') })
      .min(8, '长度最少8位最多20位')
      .max(20, '长度最少8位最多20位')
      .regex(/[A-Z]/g, '必须包含大小写英文字母及数字')
      .regex(/[a-z]/g, '必须包含大小写英文字母及数字')
      .regex(/\d/g, '必须包含大小写英文字母及数字'),
  },
  {
    component: 'VbenInputPassword',
    componentProps: {
      placeholder: $t('authentication.confirmPassword'),
    },
    hideLabel: true,
    dependencies: {
      rules(values) {
        const { password } = values;
        return z
          .string({ required_error: $t('authentication.passwordTip') })
          .min(1, { message: $t('authentication.passwordTip') })
          .refine((value) => value === password, {
            message: $t('authentication.confirmPasswordTip'),
          });
      },
      triggerFields: ['password'],
    },
    fieldName: 'confirmPassword',
  },
];
