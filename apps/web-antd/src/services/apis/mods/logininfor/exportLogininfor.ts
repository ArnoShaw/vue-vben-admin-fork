/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 导出系统访问记录列表
导出系统访问记录列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** logininfor */
  logininfor: defs.apis.SysLogininforBo;
}

export type RequestTypes = Params;
export type ResponseTypes = any;
const exportLogininfor = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/monitor/logininfor/export', { params }, config);
};
export default exportLogininfor;
