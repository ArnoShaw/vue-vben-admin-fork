/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 短信验证码
短信验证码
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** 用户手机号 */
  mobile: string;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const smsCode = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/resource/sms/code', params, config);
};
export default smsCode;
