/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 客户管理-新建包裹-修改包裹
客户管理-新建包裹-修改包裹
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.PackageInfoBO;
export type ResponseTypes = defs.apis.RSavePackageVO;
const updatePackage = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>('/client/package/update', { data: bodyParams }, config);
};
export default updatePackage;
