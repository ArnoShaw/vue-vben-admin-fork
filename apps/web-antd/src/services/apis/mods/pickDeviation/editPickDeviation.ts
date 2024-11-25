/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 更改揽收误差信息
更改揽收误差信息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** bo */
  bo: defs.apis.SyCCompanyPickDeviationBo;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const editPickDeviation = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/pick/update', params, config);
};
export default editPickDeviation;
