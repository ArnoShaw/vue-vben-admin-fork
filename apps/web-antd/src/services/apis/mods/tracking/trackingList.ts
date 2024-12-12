/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取追踪号列表
获取追踪号列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** pageQuery */
  pageQuery: defs.apis.PageQuery;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.TableDataInfoTrackingNoVo;
const trackingList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/tracking/number/list', { params }, config);
};
export default trackingList;
