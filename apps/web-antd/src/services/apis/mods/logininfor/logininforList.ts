/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取系统访问记录列表
获取系统访问记录列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** logininfor */
  logininfor: defs.apis.SysLogininforBo;
  /** pageQuery */
  pageQuery: defs.apis.PageQuery;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.TableDataInfoSysLogininforVo;
const logininforList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/monitor/logininfor/list', { params }, config);
};
export default logininforList;
