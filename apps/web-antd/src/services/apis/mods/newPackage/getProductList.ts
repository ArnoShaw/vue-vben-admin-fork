/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 客户管理-代客操作-新建包裹-获取包裹商品列表
客户管理-代客操作-新建包裹-获取包裹商品列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** packageId */
  packageId: string;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RListSyBsPackageProductVO;
const getProductList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/client/package/product/list', { params }, config);
};
export default getProductList;
