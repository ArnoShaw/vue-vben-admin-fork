/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 下载合同
下载合同
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RString;
const downloadContract = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/contract/download', { params }, config);
};
export default downloadContract;
