/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 清理系统访问记录
清理系统访问记录
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const cleanLogininfor = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.delete<ResponseTypes>('/monitor/logininfor/clean', { params }, config);
};
export default cleanLogininfor;
