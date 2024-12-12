/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 导出用户资产流水信息
导出用户资产流水信息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.AssetBo;
export type ResponseTypes = any;
const exportAsset = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/finance/asset/export', { data: bodyParams }, config);
};
export default exportAsset;
