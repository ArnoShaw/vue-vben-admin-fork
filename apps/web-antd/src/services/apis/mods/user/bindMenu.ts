/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 授权子账户菜单权限
授权子账户菜单权限
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SysUserMenuBindBo;
export type ResponseTypes = defs.apis.RVoid;
const bindMenu = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>('/system/user/bind/menu', { data: bodyParams }, config);
};
export default bindMenu;
