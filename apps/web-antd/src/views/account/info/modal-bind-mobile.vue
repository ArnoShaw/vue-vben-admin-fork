<script setup lang="ts">
import { ref } from 'vue';

import { useVbenModal, type VbenFormSchema, z } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { useThrottleFn } from '@vueuse/core';

import { useVbenForm } from '#/adapter/form';
import { apis } from '#/services/apis';

const schema: VbenFormSchema[] = [
  {
    component: 'VbenInput',
    componentProps: {
      placeholder: '手机号码',
    },
    fieldName: 'mobile',
    hideLabel: false,
    label: '手机号码',
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
    label: '图形验证码',
    rules: z.string().min(1, { message: '请输入计算结果' }),
    formItemClass: 'col-span-9',
  },
  {
    component: 'VbenInput',
    fieldName: 'codeImg',
    hideLabel: true,
    formItemClass: 'ml-2 col-span-3',
  },
  {
    component: 'VbenPinInput',
    componentProps: ({ mobile }: any, { validateField }: any) => {
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
    label: '短信验证码',
    rules: z.string().min(1, { message: '请输入短信验证码' }),
  },
];

const codeUuid = ref();
const codeImg = ref();

const [Form, FormApi] = useVbenForm({
  schema,
  wrapperClass: 'grid-cols-12',
  commonConfig: {
    formItemClass: 'col-span-full',
    labelWidth: 80,
  },
  showDefaultActions: false,
});

const [Modal, ModalApi] = useVbenModal({
  title: '绑定手机号码',
  draggable: true,
  onOpenChange(isOpen) {
    if (isOpen) {
      getCodeImg();
    }
  },
  async onConfirm() {
    const { valid } = await FormApi.validate();
    if (!valid) return;
    ModalApi.close();
  },
});

async function getCodeImg() {
  const { uuid, img }: any = await apis.captcha.getCode({});
  codeUuid.value = uuid;
  codeImg.value = img;
}

const updateCode = useThrottleFn(getCodeImg, 500);
</script>

<template>
  <Modal>
    <Form>
      <template #codeImg>
        <div class="flex w-full justify-end">
          <img
            :src="`data:image/png;base64,${codeImg}`"
            alt=""
            class="h-[39px] w-[104px] cursor-pointer rounded-sm"
            @click="updateCode"
          />
        </div>
      </template>
    </Form>
  </Modal>
</template>
