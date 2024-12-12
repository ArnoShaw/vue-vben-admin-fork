/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 删除充值信息
删除充值信息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.CommonIdBOInteger;
export type ResponseTypes = defs.apis.RVoid;
const deleteRecharge = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.delete<ResponseTypes>(
    '/finance/recharge/delete',
    { data: bodyParams },
    config,
  );
};
export default deleteRecharge;
