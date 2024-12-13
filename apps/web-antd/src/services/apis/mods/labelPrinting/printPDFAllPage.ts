/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 批量打印和下载PDF
批量打印和下载PDF
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.PrintPdfBatchBO;
export type ResponseTypes = defs.apis.RFileVO;
const printPDFAllPage = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/client/package/operation/print/printPdfBatch',
    { data: bodyParams },
    config,
  );
};
export default printPDFAllPage;
