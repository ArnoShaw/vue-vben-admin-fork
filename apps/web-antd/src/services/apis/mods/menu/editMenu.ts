/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 修改菜单
修改菜单
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SysMenuBo;
export type ResponseTypes = defs.apis.RVoid;
const editMenu = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>('/system/menu', { data: bodyParams }, config);
};
export default editMenu;
