/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 修改平台账号
修改平台账号
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.SyCCompanyThirdplatformAccountBo;
export type ResponseTypes = defs.apis.RVoid;
const editThirdPlatform = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>(
    '/thirdPlatform/account/edit',
    { data: bodyParams },
    config,
  );
};
export default editThirdPlatform;
