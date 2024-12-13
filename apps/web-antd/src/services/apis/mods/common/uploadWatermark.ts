/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 上传图像文件（可添加水印）
上传图像文件（可添加水印）
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = object;
export type ResponseTypes = defs.apis.RObject;
const uploadWatermark = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/common/watermark/upload',
    { data: bodyParams },
    config,
  );
};
export default uploadWatermark;
