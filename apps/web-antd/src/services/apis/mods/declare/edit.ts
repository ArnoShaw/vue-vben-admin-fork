/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 修改申报信息
修改申报信息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SyCPackageProductBo;
export type ResponseTypes = defs.apis.RVoid;
const edit = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>('/package/declare/update', { data: bodyParams }, config);
};
export default edit;
