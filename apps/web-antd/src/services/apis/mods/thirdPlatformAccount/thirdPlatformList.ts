/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 平台账号列表
平台账号列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** keyword */
  keyword: string;
  /** pageQuery */
  pageQuery: defs.apis.PageQuery;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.TableDataInfoSyCCompanyThirdplatformAccountVo;
const thirdPlatformList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/thirdPlatform/account/list', { params }, config);
};
export default thirdPlatformList;
