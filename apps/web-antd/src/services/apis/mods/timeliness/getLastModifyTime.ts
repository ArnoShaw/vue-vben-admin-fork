/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 时效看板获取更新时间
时效看板获取更新时间
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RLocalDateTime;
const getLastModifyTime = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/timeliness/getLastModifyTime', { params }, config);
};
export default getLastModifyTime;
