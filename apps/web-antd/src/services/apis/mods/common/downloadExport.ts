/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 本地路径或远程路径下载
本地路径或远程路径下载
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.DownloadBO;
export type ResponseTypes = any;
const downloadExport = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/common/file/download', { data: bodyParams }, config);
};
export default downloadExport;
