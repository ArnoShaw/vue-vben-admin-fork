/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 导出操作日志记录列表
导出操作日志记录列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** operLog */
  operLog: defs.apis.SyCUserOperLogBo;
}

export type RequestTypes = Params;
export type ResponseTypes = any;
const exportOperlog = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/monitor/operlog/export', { params }, config);
};
export default exportOperlog;
