/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取费用明细
获取费用明细
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** companyChargeId */
  companyChargeId: number;
  /** chargeType */
  chargeType: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RObject;
const UnBilledChargeDetail = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/bill/unfinishedBill/detail', { params }, config);
};
export default UnBilledChargeDetail;
