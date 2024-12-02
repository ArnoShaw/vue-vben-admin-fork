/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 批量删除登录日志
批量删除登录日志
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.CommonIdListBOInteger;
export type ResponseTypes = defs.apis.RVoid;
const remove_3 = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.delete<ResponseTypes>('/monitor/logininfor/delete', bodyParams, config);
};
export default remove_3;