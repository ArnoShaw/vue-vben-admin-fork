<script setup lang="ts">
import type { Nullable } from '@vben/types';

import { IconifyIcon } from '@vben/icons';

import { useVbenForm } from '#/adapter/form';

import { mobileSchema } from './const-data';

const props = withDefaults(
  defineProps<{
    data: {
      sensitiveMobile: Nullable<string>;
      userId: Nullable<number>;
      userName: Nullable<string>;
    };
  }>(),
  { data: () => ({ userId: 0, sensitiveMobile: '', userName: '' }) },
);

const [Form, FormApi] = useVbenForm({
  schema: mobileSchema,
  commonConfig: {
    hideLabel: true,
    hideRequiredMark: true,
  },
  showDefaultActions: false,
});

FormApi.setValues({ userId: props.data.userId });

defineExpose({
  mobileFormApi: FormApi,
});
</script>

<template>
  <div>
    <div class="flex items-center">
      您正在重置账号
      <IconifyIcon class="text-primary ml-1" icon="ant-design:user-outlined" />
      <span class="mx-1 font-semibold">{{ data.userName ?? '' }}</span>
      的密码
    </div>
    <div class="mb-4 mt-2 flex items-center">
      请通过验证注册手机号
      <IconifyIcon class="text-primary ml-1" icon="ant-design:mobile-outlined" />
      <span class="mx-1 font-semibold">{{ data.sensitiveMobile ?? '' }} </span>进行重置
    </div>
    <Form />
  </div>
</template>
