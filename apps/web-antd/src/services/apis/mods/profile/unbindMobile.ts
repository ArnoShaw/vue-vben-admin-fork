/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 解绑手机号
解绑手机号
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SysUserUnbindMobileBo;
export type ResponseTypes = defs.apis.RVoid;
const unbindMobile = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>(
    '/system/user/profile/unbind/mobile',
    { data: bodyParams },
    config,
  );
};
export default unbindMobile;
