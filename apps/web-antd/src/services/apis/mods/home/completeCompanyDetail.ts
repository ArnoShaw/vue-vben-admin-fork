/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取客户公司详细信息
获取客户公司详细信息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RSyCCompanyVo;
const completeCompanyDetail = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/overview/detail', { params }, config);
};
export default completeCompanyDetail;
