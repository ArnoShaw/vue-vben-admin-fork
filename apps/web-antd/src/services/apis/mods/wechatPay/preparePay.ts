/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取支付跳转地址
获取支付跳转地址
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.WechatPayBo;
export type ResponseTypes = defs.apis.RWechatPayVO;
const preparePay = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/client/pay/wechat', { data: bodyParams }, config);
};
export default preparePay;
