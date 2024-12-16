<script lang="ts" setup>
import type { VbenFormSchema } from '@vben/common-ui';
import type { Recordable } from '@vben/types';

import { computed, ref } from 'vue';

import { AuthenticationCodeLogin, z } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { message } from 'ant-design-vue';

import { apis } from '#/services/apis';
import { useAuthStore } from '#/store';

defineOptions({ name: 'CodeLogin' });

const loading = ref(false);
const CODE_LENGTH = 6;

const formSchema = computed((): VbenFormSchema[] => {
  return [
    {
      component: 'VbenInput',
      componentProps: {
        placeholder: $t('authentication.mobile'),
      },
      fieldName: 'mobile',
      label: $t('authentication.mobile'),
      rules: z
        .string()
        .min(1, { message: $t('authentication.mobileTip') })
        .refine((v) => /^\d{11}$/.test(v), {
          message: $t('authentication.mobileErrortip'),
        }),
    },
    {
      component: 'VbenPinInput',
      componentProps: ({ mobile }, { validateField }) => {
        return {
          maxTime: 120,
          mobile,
          sendCodeError: async (msg: string) => {
            message.error(msg);
          },
          sendCodeSuccess: async () => {
            message.success('发送成功');
          },
          handleSendCode: async () => {
            const { valid } = await validateField('mobile');
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
      label: $t('authentication.code'),
      rules: z.string().length(CODE_LENGTH, {
        message: $t('authentication.codeTip', [CODE_LENGTH]),
      }),
    },
  ];
});
/**
 * 异步处理登录操作
 * Asynchronously handle the login process
 * @param values 登录表单数据
 */
async function handleLogin(values: Recordable<any>) {
  try {
    const { code, data, msg } = await apis.auth.login({ ...values, grantType: 'sms' } as any, {
      headers: { Encrypted: true, Native: true },
    });
    // code为空或5001都为验证失败
    if (code === 200) {
      useAuthStore().authLogin(data || {});
    } else message.error(msg);
  } catch {}
}
</script>

<template>
  <AuthenticationCodeLogin :form-schema="formSchema" :loading="loading" @submit="handleLogin" />
</template>
