/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 判断邮袋是否可操作
判断邮袋是否可操作
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** receiveMailbagId */
  receiveMailbagId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const mailbagIsReceive = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/package/operation/reservation/mailbag/operation',
    { params },
    config,
  );
};
export default mailbagIsReceive;
