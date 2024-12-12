/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取用户资产流水列表
获取用户资产流水列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** bo */
  bo: defs.apis.AssetBo;
  /** pageQuery */
  pageQuery: defs.apis.PageQuery;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.TableDataInfoAssetVo;
const assetList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/finance/asset/list', { params }, config);
};
export default assetList;
