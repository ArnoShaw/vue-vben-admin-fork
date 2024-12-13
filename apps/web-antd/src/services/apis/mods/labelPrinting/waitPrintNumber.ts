/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 查询等待打印的包裹数
查询等待打印的包裹数
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** companyId */
  companyId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RObject;
const waitPrintNumber = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/package/operation/print/waitPrintNumber',
    { params },
    config,
  );
};
export default waitPrintNumber;
