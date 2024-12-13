/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 导出包裹
导出包裹
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.ExportExcelBO;
export type ResponseTypes = any;
const exportExcel = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/client/package/operation/prediction/exportExcel',
    { data: bodyParams },
    config,
  );
};
export default exportExcel;
