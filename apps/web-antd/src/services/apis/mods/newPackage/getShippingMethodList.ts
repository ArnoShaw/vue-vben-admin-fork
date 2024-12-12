/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取邮寄方式
获取邮寄方式
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.PackageInfoBO;
export type ResponseTypes = defs.apis.RListChannelPriceVO;
const getShippingMethodList = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/client/package/shippingmethod/list',
    { data: bodyParams },
    config,
  );
};
export default getShippingMethodList;
