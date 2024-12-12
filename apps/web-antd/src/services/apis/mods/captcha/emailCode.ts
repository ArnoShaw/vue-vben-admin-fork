/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 邮箱验证码
邮箱验证码
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** 邮箱 */
  email: string;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const emailCode = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/resource/email/code', { params }, config);
};
export default emailCode;
