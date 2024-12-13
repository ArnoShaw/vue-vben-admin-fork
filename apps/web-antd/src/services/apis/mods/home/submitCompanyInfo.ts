/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 更新客户公司资料
更新客户公司资料
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.CompleteCompanyBO;
export type ResponseTypes = defs.apis.RVoid;
const submitCompanyInfo = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/overview/submitCompanyInfo',
    { data: bodyParams },
    config,
  );
};
export default submitCompanyInfo;
