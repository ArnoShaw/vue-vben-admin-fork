/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 删除申报信息
删除申报信息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.CommonIdBOInteger;
export type ResponseTypes = defs.apis.RVoid;
const remove = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.delete<ResponseTypes>(
    '/package/declare/delete',
    { data: bodyParams },
    config,
  );
};
export default remove;
