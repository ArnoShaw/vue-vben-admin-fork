/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 根据菜单编号获取详细信息
根据菜单编号获取详细信息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** 菜单ID */
  menuId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RSyCMenuVo;
const getMenuInfo = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/system/menu/detail', { params }, config);
};
export default getMenuInfo;
