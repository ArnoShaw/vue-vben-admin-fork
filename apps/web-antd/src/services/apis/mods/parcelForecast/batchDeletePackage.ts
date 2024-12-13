/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 批量删除
批量删除
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.PredictionBatchRevokeBO;
export type ResponseTypes = defs.apis.RObject;
const batchDeletePackage = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.delete<ResponseTypes>(
    '/client/package/operation/prediction/batch/delete',
    { data: bodyParams },
    config,
  );
};
export default batchDeletePackage;
