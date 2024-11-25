/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 删除菜单
删除菜单
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** 菜单ID */
  menuId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const remove_1 = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.delete<ResponseTypes>('/system/menu/' + params, params, config);
};
export default remove_1;
