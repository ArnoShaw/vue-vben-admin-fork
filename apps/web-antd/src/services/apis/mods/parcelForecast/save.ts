/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 批量修改预报包裹
批量修改预报包裹
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.PredictionBatchModifyBO;
export type ResponseTypes = defs.apis.RVoid;
const save = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>(
    '/client/package/operation/prediction/batch/modify/save',
    { data: bodyParams },
    config,
  );
};
export default save;
