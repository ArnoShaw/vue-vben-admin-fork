/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取操作日志记录列表
获取操作日志记录列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** operLog */
  operLog: defs.apis.SyCUserOperLogBo;
  /** pageQuery */
  pageQuery: defs.apis.PageQuery;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.TableDataInfoSyCUserOperLogVo;
const operlogList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/monitor/operlog/list', { params }, config);
};
export default operlogList;
