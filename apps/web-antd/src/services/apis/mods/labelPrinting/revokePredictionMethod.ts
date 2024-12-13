/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 撤销预报
撤销预报
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.PrintPDFBO;
export type ResponseTypes = defs.apis.RVoid;
const revokePredictionMethod = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/client/package/operation/revokePrediction',
    { data: bodyParams },
    config,
  );
};
export default revokePredictionMethod;
