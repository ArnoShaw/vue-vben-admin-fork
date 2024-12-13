/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 取消拦截
取消拦截
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.ApplyInterceptBO;
export type ResponseTypes = defs.apis.RObject;
const cancelIntercept = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>(
    '/client/package/operation/prediction/cancelIntercept',
    { data: bodyParams },
    config,
  );
};
export default cancelIntercept;
