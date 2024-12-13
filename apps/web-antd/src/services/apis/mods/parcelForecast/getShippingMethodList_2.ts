/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取邮寄方式
获取邮寄方式
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** bo */
  bo: defs.apis.ShippingMethodListBO;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RShippingMethodListVO;
const getShippingMethodList_2 = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/package/operation/getShippingMethodList',
    { params },
    config,
  );
};
export default getShippingMethodList_2;
