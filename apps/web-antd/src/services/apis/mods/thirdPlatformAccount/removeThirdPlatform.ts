/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 删除平台账号
删除平台账号
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.CommonIdBOInteger;
export type ResponseTypes = defs.apis.RVoid;
const removeThirdPlatform = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.delete<ResponseTypes>(
    '/thirdPlatform/account/remove',
    { data: bodyParams },
    config,
  );
};
export default removeThirdPlatform;
