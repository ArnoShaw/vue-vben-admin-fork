/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取合同签署url
获取合同签署url
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** contractId */
  contractId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RString;
const getSignUrl = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/contract/getSignUrl', { params }, config);
};
export default getSignUrl;
