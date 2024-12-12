/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 导入平台账号
导入平台账号
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = object;
export type ResponseTypes = defs.apis.RObject;
const importThirdPlatformExcel = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/thirdPlatform/account/import',
    { data: bodyParams },
    config,
  );
};
export default importThirdPlatformExcel;
