/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 批量上传文件
批量上传文件
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = object;
export type ResponseTypes = defs.apis.RUploadInitVO;
const uploadInit = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/client/package/operation/importpackage/uploadInit',
    { data: bodyParams },
    config,
  );
};
export default uploadInit;
