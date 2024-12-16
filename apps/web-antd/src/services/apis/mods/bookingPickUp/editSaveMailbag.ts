/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 保存编辑信息
保存编辑信息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** bo */
  bo: defs.apis.ReceiveMailbagFormBO;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const editSaveMailbag = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.put<ResponseTypes>(
    '/client/package/operation/reservation/mailbag/edit/save',
    { params },
    config,
  );
};
export default editSaveMailbag;
