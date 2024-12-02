/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 忘记密码，第一步
忘记密码，第一步
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SysUserPasswordForgotBo;
export type ResponseTypes = defs.apis.RSysUserVo;
const forgotPwd = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>('/system/user/profile/forgotPwd', bodyParams, config);
};
export default forgotPwd;