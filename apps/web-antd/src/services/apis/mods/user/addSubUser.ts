/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 新增子账户
新增子账户
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SysUserBo;
export type ResponseTypes = defs.apis.RVoid;
const addSubUser = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/system/user', { data: bodyParams }, config);
};
export default addSubUser;
