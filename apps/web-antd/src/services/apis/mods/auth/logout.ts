/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 退出登录
退出登录
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const logout = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/auth/logout', { params }, config);
};
export default logout;
