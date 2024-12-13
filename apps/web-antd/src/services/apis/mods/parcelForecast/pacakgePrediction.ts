/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 包裹预报
包裹预报
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.DopreDictionBO;
export type ResponseTypes = defs.apis.RSavePackageVO;
const pacakgePrediction = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>(
    '/client/package/operation/prediction/doprediction',
    { data: bodyParams },
    config,
  );
};
export default pacakgePrediction;
