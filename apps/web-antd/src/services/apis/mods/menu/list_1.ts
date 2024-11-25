/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取菜单列表
获取菜单列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** menu */
  menu: defs.apis.SysMenuBo;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RListSyCMenuVo;
const list_1 = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/system/menu/list', params, config);
};
export default list_1;
