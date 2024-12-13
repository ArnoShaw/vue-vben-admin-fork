/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 短信验证码(需要阿里云验证码才能获取)
短信验证码(需要阿里云验证码才能获取)
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SmsCodeBo;
export type ResponseTypes = defs.apis.RVoid;
const smsCode = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/resource/sms/code', { data: bodyParams }, config);
};
export default smsCode;
