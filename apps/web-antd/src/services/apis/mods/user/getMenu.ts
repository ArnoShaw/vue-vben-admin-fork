/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取子账户菜单权限
获取子账户菜单权限
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** subUserId */
  subUserId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RListTreeVO;
const getMenu = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/system/user/menu/list', { params }, config);
};
export default getMenu;
