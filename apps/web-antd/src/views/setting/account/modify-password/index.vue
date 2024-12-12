<script setup lang="ts">
import { Page, type VbenFormSchema } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { message } from 'ant-design-vue';

import { useVbenForm, z } from '#/adapter/form';
import BasicTitle from '#/components/basic-title.vue';
import { apis } from '#/services/apis';

defineOptions({
  name: 'SettingAccountModifyPassword',
});

const schema: VbenFormSchema[] = [
  {
    component: 'VbenInputPassword',
    componentProps: {
      placeholder: '旧密码',
    },
    rules: z
      .string({ required_error: $t('authentication.passwordTip') })
      .min(1, { message: $t('authentication.passwordTip') }),
    fieldName: 'oldPassword',
    label: '旧密码',
  },
  {
    component: 'VbenInputPassword',
    componentProps: {
      // passwordStrength: true,
      placeholder: '新密码',
    },
    fieldName: 'newPassword',
    label: '新密码',
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
        const { newPassword } = values;
        return z
          .string({ required_error: $t('authentication.passwordTip') })
          .min(1, { message: $t('authentication.passwordTip') })
          .refine((value) => value === newPassword, {
            message: $t('authentication.confirmPasswordTip'),
          });
      },
      triggerFields: ['newPassword'],
    },
    fieldName: 'confirmPassword',
    label: $t('authentication.confirmPassword'),
  },
];

const [Form, FormApi] = useVbenForm({
  schema,
  commonConfig: {
    labelWidth: 80,
  },
  handleSubmit: async ({ oldPassword, newPassword }) => {
    FormApi.setState({ submitButtonOptions: { loading: true } });
    try {
      await apis.profile.updatePwd({ oldPassword, newPassword }, { headers: { Encrypted: true } });
      FormApi.resetForm();
      message.success('修改成功');
    } finally {
      FormApi.setState({ submitButtonOptions: { loading: false } });
    }
  },
});
</script>

<template>
  <Page>
    <div class="card-box p-4">
      <BasicTitle icon="solar:password-linear" icon-class="text-primary" title="修改密码" />
      <div class="mt-8 flex justify-center">
        <Form class="w-[500px]" />
      </div>
    </div>
  </Page>
</template>
