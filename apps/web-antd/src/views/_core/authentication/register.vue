<script lang="ts" setup>
import type { VbenFormSchema } from '@vben/common-ui';
import type { Recordable } from '@vben/types';

import type { defs } from '#/services/apis/api';

import { computed, h, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import { AuthenticationRegister, z } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { useThrottleFn } from '@vueuse/core';

import { apis } from '#/services/apis';

defineOptions({ name: 'Register' });

const router = useRouter();

const loading = ref(false);

const formSchema = computed((): VbenFormSchema[] => {
  return [
    {
      component: 'VbenInput',
      componentProps: {
        placeholder: $t('authentication.usernameTip'),
      },
      fieldName: 'username',
      label: $t('authentication.username'),
      rules: z
        .string({ message: $t('authentication.usernameTip') })
        .min(4, '长度最少4位最多20位')
        .max(20, '长度最少4位最多20位')
        .regex(/^[A-Z]+$/i, '只能输入英文字母，不区分大小写'),
    },
    {
      component: 'VbenInputPassword',
      componentProps: {
        // passwordStrength: true,
        placeholder: $t('authentication.password'),
      },
      fieldName: 'password',
      label: $t('authentication.password'),
      // renderComponentContent() {
      //   return {
      //     strengthText: () => $t('authentication.passwordStrength'),
      //   };
      // },
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
      label: $t('authentication.confirmPassword'),
    },
    {
      component: 'VbenInput',
      componentProps: {
        placeholder: '手机号码',
      },
      fieldName: 'mobile',
      hideLabel: false,
      label: '+86',
      labelWidth: 30,
      rules: z
        .string()
        .min(1, { message: '请输入手机号码' })
        .regex(/^1[3-9]\d{9}$/, '请输入正确的手机号码'),
    },
    {
      component: 'VbenInput',
      componentProps: {
        placeholder: '图形验证码',
      },
      fieldName: 'code',
      label: '验证码',
      rules: z.string().min(1, { message: '请输入计算结果' }),
      formItemClass: 'col-span-1',
    },
    {
      component: 'VbenInput',
      fieldName: 'codeImg',
      formItemClass: 'col-span-1 ml-2',
    },
    {
      component: 'VbenPinInput',
      componentProps: ({ mobile }, { validateField }) => {
        return {
          maxTime: 120,
          handleSendCode: async () => {
            const { valid } = await validateField('mobile');
            if (!valid) throw new Error('请输入手机号码');
            await apis.captcha.smsCode({ mobile });
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
      label: $t('authentication.code'),
      rules: z.string().min(1, { message: '请输入短信验证码' }),
    },
    {
      component: 'VbenCheckbox',
      fieldName: 'agreePolicy',
      renderComponentContent: () => ({
        default: () =>
          h('span', [
            '我已阅读并接受顺友物流',
            h(
              'a',
              {
                class: 'vben-link ml-1 ',
                href: 'https://www.sypost.com/views/document-1.html',
                target: '_blank',
              },
              `服务条款`,
            ),
          ]),
      }),
      rules: z.boolean().refine((value) => !!value, {
        message: $t('authentication.agreeTip'),
      }),
    },
  ];
});

const codeImg = ref();
const formState = reactive<defs.apis.RegisterBody>({
  grantType: 'password',
  code: '',
  uuid: '',
  username: '',
  password: '',
  mobile: '',
  smsCode: '',
});

async function getCodeImg() {
  const { uuid, img }: any = await apis.captcha.getCode({});
  formState.uuid = uuid;
  codeImg.value = img;
}

getCodeImg();

const updateCode = useThrottleFn(getCodeImg, 500);

async function handleSubmit(value: Recordable<any>) {
  const { code, username, password, mobile, smsCode } = value;
  await apis.auth
    .register(
      { ...formState, code, username, password, mobile, smsCode },
      {
        headers: {
          Encrypted: true,
        },
      },
    )
    .catch(() => updateCode());
  router.push({ name: 'Login' });
}
</script>

<template>
  <AuthenticationRegister
    :code-img="codeImg"
    :form-schema="formSchema"
    :loading="loading"
    @submit="handleSubmit"
    @update-code="updateCode"
  />
</template>
