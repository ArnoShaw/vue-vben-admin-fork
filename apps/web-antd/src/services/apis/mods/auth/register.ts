/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 用户注册(接口加密)
用户注册(接口加密)
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.RegisterBody;
export type ResponseTypes = defs.apis.RVoid;
const register = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/auth/register', { data: bodyParams }, config);
};
export default register;
