/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 操作前校验用户是否冻结
操作前校验用户是否冻结
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** companyId */
  companyId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RInteger;
const selectFreezeStatusById = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/package/operation/selectFreezeStatusById',
    { params },
    config,
  );
};
export default selectFreezeStatusById;
