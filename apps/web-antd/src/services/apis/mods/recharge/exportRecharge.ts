/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 导出用户充值订单信息
导出用户充值订单信息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.RechargeBo;
export type ResponseTypes = any;
const exportRecharge = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/finance/recharge/export',
    { data: bodyParams },
    config,
  );
};
export default exportRecharge;
