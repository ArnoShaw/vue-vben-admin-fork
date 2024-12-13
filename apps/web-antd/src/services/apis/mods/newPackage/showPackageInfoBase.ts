/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取商品详情
获取商品详情
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** packageId */
  packageId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RSyBsPackageDetailVO;
const showPackageInfoBase = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/client/package/base/detail', { params }, config);
};
export default showPackageInfoBase;
