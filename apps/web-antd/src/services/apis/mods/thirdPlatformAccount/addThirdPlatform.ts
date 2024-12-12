/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 新增平台账号
新增平台账号
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SyCCompanyThirdplatformAccountBo;
export type ResponseTypes = defs.apis.RVoid;
const addThirdPlatform = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/thirdPlatform/account/add',
    { data: bodyParams },
    config,
  );
};
export default addThirdPlatform;
