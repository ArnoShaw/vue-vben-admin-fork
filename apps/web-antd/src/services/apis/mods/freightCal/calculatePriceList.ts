/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 运费试算
运费试算
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** 分页参数 */
  pageQuery: defs.apis.PageQuery;
  /** 运费试算参数 */
  bo: defs.apis.CalCuLatePriceBO;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RCalCuLatePriceVO;
const calculatePriceList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/package/operation/calculateprice/query',
    { params },
    config,
  );
};
export default calculatePriceList;
