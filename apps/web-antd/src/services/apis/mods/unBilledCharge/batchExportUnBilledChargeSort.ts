/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 批量导出分拣明细
批量导出分拣明细
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.UnBilledChargeSortBo;
export type ResponseTypes = any;
const batchExportUnBilledChargeSort = async (
  bodyParams: RequestTypes,
  config?: AxiosRequestConfig,
) => {
  return requestClient.post<ResponseTypes>(
    '/bill/unfinishedBill/batchExportSort',
    { data: bodyParams },
    config,
  );
};
export default batchExportUnBilledChargeSort;
