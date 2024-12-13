/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获得邮寄方式列表
获得邮寄方式列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** bo */
  bo: defs.apis.PrintPackageBO;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RShippingMethodListVO;
const getShippingMethodList_1 = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/package/operation/print/shippingMethod/shippingMethodList',
    { params },
    config,
  );
};
export default getShippingMethodList_1;
