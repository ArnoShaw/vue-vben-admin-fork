/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 编辑
编辑
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** receiveMailbagId */
  receiveMailbagId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RSyBsReceiveMailbagVo;
const editMailbag = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/package/operation/reservation/mailbag/edit',
    { params },
    config,
  );
};
export default editMailbag;
