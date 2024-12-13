/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 新增银行转账声明
新增银行转账声明
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.BankTransferFormBeanBO;
export type ResponseTypes = defs.apis.RObject;
const saveBankTransfer = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/client/bill/finance/bankTransfer/save',
    { data: bodyParams },
    config,
  );
};
export default saveBankTransfer;
