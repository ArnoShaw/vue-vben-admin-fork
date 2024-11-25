/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 忘记密码，第三步(加密)
忘记密码，第三步(加密)
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SysUserEditPasswordBo;
export type ResponseTypes = defs.apis.RVoid;
const resetPwd = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>('/system/user/profile/resetPwd', bodyParams, config);
};
export default resetPwd;
