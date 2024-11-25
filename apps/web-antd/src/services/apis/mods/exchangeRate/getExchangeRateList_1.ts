/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取汇率常用币种
获取汇率常用币种
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {}

export type RequestTypes = Params;
export type ResponseTypes = Array<defs.apis.SyExchangeRateVo>;
const getExchangeRateList_1 = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/exchange/rate/often/list', params, config);
};
export default getExchangeRateList_1;
