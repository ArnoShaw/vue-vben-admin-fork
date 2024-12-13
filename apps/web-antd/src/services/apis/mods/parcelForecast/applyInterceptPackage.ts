/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 申请拦截
申请拦截
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.ApplyInterceptBO;
export type ResponseTypes = defs.apis.RObject;
const applyInterceptPackage = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>(
    '/client/package/operation/prediction/apply',
    { data: bodyParams },
    config,
  );
};
export default applyInterceptPackage;
