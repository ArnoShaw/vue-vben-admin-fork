<script setup lang="ts">
import type { PinInputProps } from './types';

import { computed, onBeforeUnmount, onMounted, onUnmounted, ref, useId, watch } from 'vue';

// eslint-disable-next-line no-restricted-imports
import { apis } from '@vben/web-antd/src/services/apis';

import { PinInput, PinInputGroup, PinInputInput } from '../../ui';
import { VbenButton } from '../button';

defineOptions({
  inheritAttrs: false,
});

const {
  codeLength = 6,
  createText = async () => {},
  disabled = false,
  handleSendCode = async () => {},
  loading = false,
  maxTime = 60,
  mobile = '',
  sendCodeError = async () => {},
  sendCodeSuccess = async () => {},
} = defineProps<PinInputProps>();

const emit = defineEmits<{
  complete: [];
  sendError: [error: any];
}>();

const timer = ref<ReturnType<typeof setTimeout>>();

const modelValue = defineModel<string>();

const inputValue = ref<string[]>([]);
const countdown = ref(0);

const btnText = computed(() => {
  const countdownValue = countdown.value;
  return createText?.(countdownValue);
});

const btnLoading = computed(() => {
  return loading || countdown.value > 0;
});

watch(
  () => modelValue.value,
  () => {
    inputValue.value = modelValue.value?.split('') ?? [];
  },
);

function handleComplete(e: string[]) {
  modelValue.value = e.join('');
  emit('complete');
}

async function handleSend() {
  try {
    // e?.preventDefault();
    // await handleSendCode();
    countdown.value = maxTime;
    startCountdown();
  } catch (error) {
    console.error('Failed to send code:', error);
    // Consider emitting an error event or showing a notification
    emit('sendError', error);
  }
}

function startCountdown() {
  if (countdown.value > 0) {
    timer.value = setTimeout(() => {
      countdown.value--;
      startCountdown();
    }, 1000);
  }
}

onBeforeUnmount(() => {
  countdown.value = 0;
  clearTimeout(timer.value);
});

const id = useId();

async function handleClick(e: Event) {
  try {
    e?.preventDefault();
    e?.stopPropagation();
    await handleSendCode();
    (document.querySelector('#captcha-button') as any)?.click();
  } catch {}
}

async function handleVerify(captchaVerifyParam: string) {
  // 验证码结果服务端返回
  let captchaResult = false;
  try {
    const { code, msg } = await apis.captcha.smsCode(
      { captchaVerifyParam, mobile },
      { headers: { Native: true } },
    );
    captchaResult = !((code ?? '') === '' || code === 5001);
    if (code === 200) {
      sendCodeSuccess();
      handleSend();
    } else sendCodeError(msg);
  } catch {}
  return captchaResult;
}

// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-vars
let captcha;

// 绑定验证码实例函数。该函数为固定写法，无需修改
function getInstance(instance: any) {
  captcha = instance;
}

// 业务请求(带验证码校验)回调函数
/**
 * @name captchaVerifyCallback
 * @function
 * 请求参数：由验证码脚本回调的验证参数，不需要做任何处理，直接传给服务端即可
 * @params {string} captchaVerifyParam
 * 返回参数：字段名固定，captchaResult为必选；如无业务验证场景时，bizResult为可选
 * @returns {{captchaResult: boolean, bizResult?: boolean|undefined}}
 */
async function captchaVerifyCallback(captchaVerifyParam: string) {
  // 1.向后端发起业务请求，获取验证码验证结果和业务结果
  const captchaResult = await handleVerify(captchaVerifyParam);
  // 2.构造标准返回参数
  const verifyResult = {
    bizResult: '', // 业务验证是否通过，boolean类型，可选；若为无业务验证结果的场景，bizResult可以为空
    captchaResult, // 验证码验证是否通过，boolean类型，必选
  };
  return verifyResult;
}

// 业务请求验证结果回调函数
function onBizResultCallback(_bizResult: any) {}

onMounted(() => {
  (window as any)?.initAliyunCaptcha?.({
    button: '#captcha-button', // 触发验证码弹窗的元素。button表示单击登录按钮后，触发captchaVerifyCallback函数。您可以根据实际使用的元素修改element的值
    captchaVerifyCallback, // 业务请求(带验证码校验)回调函数，无需修改
    element: '#captcha-element', // 页面上预留的渲染验证码的元素，与原代码中预留的页面元素保持一致。
    getInstance, // 绑定验证码实例函数，无需修改
    language: 'cn', // 验证码语言类型，支持简体中文（cn）、繁体中文（tw）、英文（en）
    mode: 'popup', // 验证码模式。popup表示要集成的验证码模式为弹出式。无需修改
    onBizResultCallback, // 业务请求结果回调函数，无需修改
    prefix: '1wgsm2', // 身份标。开通阿里云验证码2.0后，您可以在控制台概览页面的实例基本信息卡片区域，获取身份标
    region: 'cn', // 验证码示例所属地区，支持中国内地（cn）、新加坡（sgp）
    SceneId: '1ei2avxg', // 场景ID。根据步骤二新建验证场景后，您可以在验证码场景列表，获取该场景的场景ID
    slideStyle: {
      height: 40,
      width: 360,
    }, // 滑块验证码样式，支持自定义宽度和高度，单位为px。其中，width最小值为320 px
  });
});

onUnmounted(() => {
  // 必须删除相关元素，否则再次mount多次调用 initAliyunCaptcha 会导致多次回调 captchaVerifyCallback
  document.querySelector('#aliyunCaptcha-mask')?.remove();
  document.querySelector('#aliyunCaptcha-window-popup')?.remove();
});
</script>

<template>
  <div class="w-full">
    <PinInput
      :id="id"
      v-model="inputValue"
      :disabled="disabled"
      class="flex w-full justify-between"
      otp
      placeholder="○"
      type="number"
      @complete="handleComplete"
    >
      <div class="relative flex w-full">
        <PinInputGroup class="mr-2">
          <PinInputInput v-for="(item, index) in codeLength" :key="item" :index="index" />
        </PinInputGroup>
        <VbenButton
          :disabled="disabled"
          :loading="btnLoading"
          class="flex-grow"
          size="lg"
          variant="outline"
          @click="handleClick"
        >
          {{ btnText }}
        </VbenButton>
      </div>
    </PinInput>
    <div id="captcha-element"></div>
    <div id="captcha-button"></div>
  </div>
</template>
