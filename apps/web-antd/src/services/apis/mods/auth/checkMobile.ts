/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 校验手机号是否已被使用
校验手机号是否已被使用
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** mobile */
  mobile: string;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const checkMobile = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/auth/check/mobile', { params }, config);
};
export default checkMobile;
