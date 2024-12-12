/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 上传文件到阿里云
上传文件到阿里云
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = object;
export type ResponseTypes = defs.apis.RObject;
const uploadFile = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/common/file/upload', { data: bodyParams }, config);
};
export default uploadFile;
