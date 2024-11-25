/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 重置密码(加密)
重置密码(加密)
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SysUserPasswordBo;
export type ResponseTypes = defs.apis.RVoid;
const updatePwd = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>('/system/user/profile/updatePwd', bodyParams, config);
};
export default updatePwd;
