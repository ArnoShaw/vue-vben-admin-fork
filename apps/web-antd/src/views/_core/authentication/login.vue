<script lang="ts" setup>
import type { VbenFormSchema } from '@vben/common-ui';

import { computed, onActivated, onDeactivated, ref, unref } from 'vue';

import { AuthenticationLogin, z } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { message } from 'ant-design-vue';

import { apis } from '#/services/apis';
import { useAuthStore } from '#/store';

defineOptions({ name: 'Login' });

const authStore = useAuthStore();

const formSchema = computed((): VbenFormSchema[] => {
  return [
    {
      component: 'VbenInput',
      componentProps: {
        placeholder: $t('authentication.username'),
      },
      fieldName: 'username',
      label: $t('authentication.username'),
      rules: z.string().min(1, { message: $t('authentication.usernameTip') }),
    },
    {
      component: 'VbenInputPassword',
      componentProps: {
        placeholder: $t('authentication.password'),
      },
      fieldName: 'password',
      label: $t('authentication.password'),
      rules: z.string().min(1, { message: $t('authentication.passwordTip') }),
    },
  ];
});

const formParams = ref();

async function handleLogin(params: any) {
  formParams.value = params;
  (document.querySelector('#captcha-button') as any)?.click();
}

async function handleVerify(captchaVerifyParam: string) {
  // 验证码结果服务端返回
  let captchaResult = false;
  try {
    const { code, data, msg } = await apis.auth.login(
      { ...unref(formParams), grantType: 'password', captchaVerifyParam },
      {
        headers: { Encrypted: true, Native: true },
      },
    );
    // code为空或5001都为验证失败
    captchaResult = !((code ?? '') === '' || code === 5001);
    if (code === 200) {
      authStore.authLogin(data || {});
    } else message.error(msg);
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

onActivated(() => {
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

onDeactivated(() => {
  // 必须删除相关元素，否则再次mount多次调用 initAliyunCaptcha 会导致多次回调 captchaVerifyCallback
  document.querySelector('#aliyunCaptcha-mask')?.remove();
  document.querySelector('#aliyunCaptcha-window-popup')?.remove();
});
</script>

<template>
  <div>
    <AuthenticationLogin
      :form-schema="formSchema"
      :loading="authStore.loginLoading"
      @submit="handleLogin"
    />
    <div id="captcha-element"></div>
    <div id="captcha-button"></div>
  </div>
</template>
