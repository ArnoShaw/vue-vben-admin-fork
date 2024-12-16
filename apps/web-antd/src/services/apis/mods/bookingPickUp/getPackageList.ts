/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 查询指定预约单的邮袋列表
查询指定预约单的邮袋列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** receiveMailbagTransferId */
  receiveMailbagTransferId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RReceiveMailBagVo;
const getPackageList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/package/operation/reservation/mailbagList',
    { params },
    config,
  );
};
export default getPackageList;
