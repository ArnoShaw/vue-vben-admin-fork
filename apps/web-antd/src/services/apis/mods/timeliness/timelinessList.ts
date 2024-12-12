/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取时效看板列表
获取时效看板列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** bo */
  bo: defs.apis.TimelinesBoardBo;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RListTimelinesBoardVo;
const timelinessList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/timeliness/list', { params }, config);
};
export default timelinessList;
