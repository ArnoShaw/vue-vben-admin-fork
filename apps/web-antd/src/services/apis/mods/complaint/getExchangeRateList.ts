/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 新增投诉和建议
新增投诉和建议
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SyCUserComplaintBo;
export type ResponseTypes = defs.apis.RVoid;
const getExchangeRateList = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/complaint/add', bodyParams, config);
};
export default getExchangeRateList;
