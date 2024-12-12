/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 导出时效看板列表
导出时效看板列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.TimelinesBoardBo;
export type ResponseTypes = any;
const exportTimeliness = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/timeliness/export', { data: bodyParams }, config);
};
export default exportTimeliness;
