/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 批量删除操作日志记录
批量删除操作日志记录
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.CommonIdListBOLong;
export type ResponseTypes = defs.apis.RVoid;
const removeOperlog = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.delete<ResponseTypes>(
    '/monitor/operlog/delete',
    { data: bodyParams },
    config,
  );
};
export default removeOperlog;
