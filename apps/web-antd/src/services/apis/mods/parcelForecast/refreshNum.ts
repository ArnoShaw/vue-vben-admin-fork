/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 预报状态中的各状态数量
预报状态中的各状态数量
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** bo */
  bo: defs.apis.PredictionBO;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RPredictionVO;
const refreshNum = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/package/operation/prediction/refreshNum',
    { params },
    config,
  );
};
export default refreshNum;
