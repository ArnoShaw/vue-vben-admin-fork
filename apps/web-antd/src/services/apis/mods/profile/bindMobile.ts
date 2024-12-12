/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 绑定手机号
绑定手机号
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SysUserBindMobileBo;
export type ResponseTypes = defs.apis.RVoid;
const bindMobile = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>(
    '/system/user/profile/bind/mobile',
    { data: bodyParams },
    config,
  );
};
export default bindMobile;
