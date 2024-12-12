/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 清理操作日志记录
清理操作日志记录
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const cleanOperlog = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.delete<ResponseTypes>('/monitor/operlog/clean', { params }, config);
};
export default cleanOperlog;
