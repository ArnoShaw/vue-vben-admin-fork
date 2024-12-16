/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 批量预报
批量预报
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.PredictionBatchModifyBO;
export type ResponseTypes = defs.apis.RUploadInitVo;
const batchPredictMethod = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>(
    '/client/package/operation/prediction/batch/predict',
    { data: bodyParams },
    config,
  );
};
export default batchPredictMethod;
