/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 从申报信息选取
从申报信息选取
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** pageQuery */
  pageQuery: defs.apis.PageQuery;
  /** bo */
  bo: defs.apis.ProductListBO;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.TableDataInfoSyCPackageProduct;
const productList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/system/account/package/product/list',
    { params },
    config,
  );
};
export default productList;
