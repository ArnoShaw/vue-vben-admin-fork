/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 更新客户公司资料
更新客户公司资料
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** bo */
  bo: defs.apis.CompleteCompanyBO;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const submitCompanyInfo = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/overview/submitCompanyInfo', { params }, config);
};
export default submitCompanyInfo;
