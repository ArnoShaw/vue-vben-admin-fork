/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 查看充值信息详情
查看充值信息详情
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** rechargeOrderId */
  rechargeOrderId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RRechargeDetailVo;
const rechargeDetail = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/finance/recharge/detail', { params }, config);
};
export default rechargeDetail;
