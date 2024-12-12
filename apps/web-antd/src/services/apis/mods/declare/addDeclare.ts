/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 新增申报信息
新增申报信息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SyCPackageProductBo;
export type ResponseTypes = defs.apis.RVoid;
const addDeclare = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/package/declare/add', { data: bodyParams }, config);
};
export default addDeclare;
