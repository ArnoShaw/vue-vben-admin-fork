/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 批量撤销预报
批量撤销预报
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.PredictionBatchRevokeBO;
export type ResponseTypes = defs.apis.RObject;
const batchRevokePrediction = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>(
    '/client/package/operation/prediction/batch/revoke',
    { data: bodyParams },
    config,
  );
};
export default batchRevokePrediction;
