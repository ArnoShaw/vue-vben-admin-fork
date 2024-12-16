/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 删除指定邮袋
删除指定邮袋
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.ReservationDeleteBO;
export type ResponseTypes = defs.apis.RVoid;
const mailbagDelete = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.delete<ResponseTypes>(
    '/client/package/operation/reservation/mailbag/delete',
    { data: bodyParams },
    config,
  );
};
export default mailbagDelete;
