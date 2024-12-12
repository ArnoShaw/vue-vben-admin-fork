/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 重置子账户密码
重置子账户密码
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.CommonIdBOInteger;
export type ResponseTypes = defs.apis.RVoid;
const resetSubUser = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>('/system/user/reset', { data: bodyParams }, config);
};
export default resetSubUser;
