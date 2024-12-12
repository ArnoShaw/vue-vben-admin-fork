/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 更改单件误差信息
更改单件误差信息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** bo */
  bo: defs.apis.SyCCompanyPackageDeviationBo;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const editPackageDeviation = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/package/deviation/update', { params }, config);
};
export default editPackageDeviation;
