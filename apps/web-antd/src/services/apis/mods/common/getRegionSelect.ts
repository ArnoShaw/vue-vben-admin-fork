/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取地理位置通用接口（需登录状态）
获取地理位置通用接口（需登录状态）
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** type */
  type: number;
  /** countryCode */
  countryCode?: string;
  /** id */
  id?: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RListMapStringObject;
const getRegionSelect = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/common/location/optionselect', params, config);
};
export default getRegionSelect;
