/**
 * 该文件可自行根据业务逻辑进行调整
 */
import type { HttpResponse, InternalAxiosRequestConfig } from '@vben/request';

import { useAppConfig } from '@vben/hooks';
import { $t } from '@vben/locales';
import { preferences } from '@vben/preferences';
import {
  authenticateResponseInterceptor,
  errorMessageResponseInterceptor,
  RequestClient,
} from '@vben/request';
import { useAccessStore } from '@vben/stores';
import { encrypt, encryptBase64, encryptWithAes, generateAesKey } from '@vben/utils';

import { message } from 'ant-design-vue';

import { useAuthStore } from '#/store';

import { refreshTokenApi } from './core';

const { apiURL } = useAppConfig(import.meta.env, import.meta.env.PROD);

const encryptHeader = 'encrypt-key';

function handleEncrypt(config: InternalAxiosRequestConfig) {
  const aesKey = generateAesKey();
  config.headers[encryptHeader] = encrypt(encryptBase64(aesKey));
  config.data =
    typeof config.data === 'object'
      ? encryptWithAes(JSON.stringify(config.data), aesKey)
      : encryptWithAes(config.data, aesKey);
}

function createRequestClient(baseURL: string) {
  const client = new RequestClient({
    baseURL,
  });

  /**
   * 重新认证逻辑
   */
  async function doReAuthenticate() {
    console.warn('Access token or refresh token is invalid or expired. ');
    const accessStore = useAccessStore();
    const authStore = useAuthStore();
    accessStore.setAccessToken(null);
    if (preferences.app.loginExpiredMode === 'modal' && accessStore.isAccessChecked) {
      accessStore.setLoginExpired(true);
    } else {
      await authStore.logout();
    }
  }

  /**
   * 刷新token逻辑
   */
  async function doRefreshToken() {
    const accessStore = useAccessStore();
    const resp = await refreshTokenApi();
    const newToken = resp.data;
    accessStore.setAccessToken(newToken);
    return newToken;
  }

  function formatToken(token: null | string) {
    return token ? `bearer ${token}` : null;
  }

  // 请求头处理
  client.addRequestInterceptor({
    fulfilled: async (config: InternalAxiosRequestConfig) => {
      const accessStore = useAccessStore();
      if (config.headers?.Encrypted) handleEncrypt(config);
      config.headers.CToken = formatToken(accessStore.accessToken);
      config.headers['Accept-Language'] = preferences.app.locale;
      return config;
    },
  });

  // response数据解构
  client.addResponseInterceptor<HttpResponse>({
    fulfilled: (response) => {
      const { data: responseData, status, config } = response;
      // 返回原生响应responseData 通常用于下载文件流
      const { Native } = config.headers;
      const { code, data } = responseData;
      if (Native) return responseData;
      if (status >= 200 && status < 400 && code === 200) {
        return data;
      }

      throw Object.assign({}, response, { response });
    },
  });

  // token过期的处理
  client.addResponseInterceptor(
    authenticateResponseInterceptor({
      client,
      doReAuthenticate,
      doRefreshToken,
      enableRefreshToken: preferences.app.enableRefreshToken,
      formatToken,
    }),
  );

  // 通用的错误处理,如果没有进入上面的错误处理逻辑，就会进入这里
  client.addResponseInterceptor(
    errorMessageResponseInterceptor((msg: string, error) => {
      // 这里可以根据业务进行定制,你可以拿到 error 内的信息进行定制化处理，根据不同的 code 做不同的提示，而不是直接使用 message.error 提示 msg
      // 当前mock接口返回的错误字段是 error 或者 message
      const { config, response } = error;
      const responseData = response?.data ?? {};
      // 下载文件流报错处理
      if (config.responseType === 'blob' && responseData?.type === 'application/json') {
        const data = new FileReader(); // 文件API用于读取文件
        data.readAsText(responseData, 'utf8'); // 将文件以utf8编码方式读取，结果为string文本
        data.addEventListener('load', () => {
          // 文件读取完成触发
          const dataResult: any = data.result; // result为读取后的结果
          const parseObj = JSON.parse(dataResult); // 将读取后的string文本转为json数据
          message.error(parseObj?.msg ?? '');
        });
        return;
      }
      const errorMessage =
        responseData?.msg ?? responseData?.message ?? $t('ui.fallback.http.internalServerError');
      // 如果没有错误信息，则会根据状态码进行提示
      message.error(msg ?? errorMessage);
    }),
  );

  return client;
}

export const requestClient = createRequestClient(apiURL);

export const baseRequestClient = new RequestClient({ baseURL: apiURL });
