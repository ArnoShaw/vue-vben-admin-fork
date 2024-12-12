/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 合同提醒
合同提醒
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RContractRemindVo;
const contractRemind = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/contract/remind', { params }, config);
};
export default contractRemind;
