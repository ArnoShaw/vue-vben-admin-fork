/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 单个导出分拣明细
单个导出分拣明细
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.UnBilledChargeSortBo;
export type ResponseTypes = any;
const exportUnBilledChargeSort = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/bill/unfinishedBill/exportSort',
    { data: bodyParams },
    config,
  );
};
export default exportUnBilledChargeSort;
