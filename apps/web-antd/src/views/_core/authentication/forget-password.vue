<script lang="ts" setup>
import { ref, unref } from 'vue';
import { useRouter } from 'vue-router';

import { AuthTitle, VbenButton } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { useThrottleFn } from '@vueuse/core';
import { message, Steps } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import { apis } from '#/services/apis';

import { items, pswSchema, userformSchema } from './const-data';
import VerifyMethod from './verify-method.vue';

defineOptions({ name: 'ForgetPassword' });

const router = useRouter();

const loading = ref(false);
const currentStep = ref(0);
const codeUuid = ref('');
const codeImg = ref('');
const userInfo = ref();
const verifyMethodRef = ref();
const smsCode = ref('');

const [FormUser, FormUserApi] = useVbenForm({
  commonConfig: {
    hideLabel: true,
    hideRequiredMark: true,
    formItemClass: 'col-span-2',
  },
  schema: userformSchema,
  showDefaultActions: false,
});

const [FormPsw, FormPswApi] = useVbenForm({
  commonConfig: {
    hideLabel: true,
    hideRequiredMark: true,
    formItemClass: 'col-span-2',
  },
  schema: pswSchema,
  showDefaultActions: false,
});

const updateCode = useThrottleFn(getCodeImg, 500);

async function handleSubmit() {
  const step = unref(currentStep);
  if (step === 0) {
    const { valid, values } = await FormUserApi.validate();
    if (!valid) return;
    try {
      loading.value = true;
      const res = await apis.profile.forgotPwd({ ...values, uuid: unref(codeUuid) } as any);
      userInfo.value = res;
      currentStep.value++;
    } catch {
      updateCode();
      FormUserApi.setFieldValue('code', '');
    } finally {
      loading.value = false;
    }
  } else if (step === 1) handleVerify();
  else handleReset();
}

async function handleVerify() {
  const ref = unref(verifyMethodRef);
  const { valid, values } = await ref.mobileFormApi.validate();
  if (!valid) return;
  smsCode.value = values.smsCode;
  currentStep.value++;
}

async function handleReset() {
  const { valid, values = {} } = await FormPswApi.validate();
  if (!valid) return;
  try {
    loading.value = true;
    await apis.profile.resetPwd(
      {
        password: values.password,
        smsCode: unref(smsCode),
        userId: unref(userInfo).userId,
      },
      { headers: { Encrypted: true } },
    );
    message.success('密码重置成功, 请重新登录');
    router.push('/auth/login');
  } catch {
    currentStep.value--;
    smsCode.value = '';
    unref(verifyMethodRef).mobileFormApi.resetFields();
  } finally {
    loading.value = false;
  }
}

async function getCodeImg() {
  const { uuid, img }: any = await apis.captcha.getCode({});
  codeUuid.value = uuid;
  codeImg.value = img;
}

getCodeImg();

function handleBack() {
  const step = unref(currentStep);
  if (step === 0) router.push('/auth/login');
  else {
    currentStep.value--;
    if (currentStep.value === 0) updateCode();
  }
}
</script>

<template>
  <div>
    <AuthTitle class="!mb-14"> 忘记密码？🤦🏻‍♂️</AuthTitle>
    <Steps
      :current="currentStep"
      :items="items"
      class="mb-8"
      label-placement="vertical"
      progress-dot
    />
    <FormUser v-if="currentStep === 0" class="mb-1">
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
    </FormUser>
    <VerifyMethod v-if="currentStep === 1" ref="verifyMethodRef" :data="userInfo" />
    <FormPsw v-if="currentStep === 2" class="mb-1" />
    <div>
      <VbenButton
        :class="{
          'cursor-wait': loading,
        }"
        aria-label="submit"
        class="mt-2 w-full"
        @click="handleSubmit"
      >
        {{ currentStep === 1 ? '验证' : '确认' }}
      </VbenButton>
      <VbenButton class="mt-4 w-full" variant="outline" @click="handleBack">
        {{ $t('common.back') }}
      </VbenButton>
    </div>
  </div>
</template>
