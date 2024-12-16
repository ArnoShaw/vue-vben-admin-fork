/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 完成支付后获取支付结果
完成支付后获取支付结果
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** orderNo */
  orderNo: string;
  /** orderId */
  orderId: string;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RString;
const completePay = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/client/pay/wechat/complete', { params }, config);
};
export default completePay;
