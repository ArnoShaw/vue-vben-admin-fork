/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取菜单下拉树列表
获取菜单下拉树列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** menu */
  menu: defs.apis.SysMenuBo;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RListTreeInteger;
const treeselect = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/system/menu/treeselect', params, config);
};
export default treeselect;
