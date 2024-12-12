/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 导出追踪号列表
导出追踪号列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.TrackingNoDownloadBOInteger;
export type ResponseTypes = any;
const exportTracking = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/tracking/number/export', { data: bodyParams }, config);
};
export default exportTracking;
