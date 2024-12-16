/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 检查订单状态
检查订单状态
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** orderId */
  orderId: string;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RString;
const checkOrderStatus = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/pay/wechat/checkOrderStatus',
    { params },
    config,
  );
};
export default checkOrderStatus;
