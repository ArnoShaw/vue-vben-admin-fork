/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取字典
获取字典
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** status */
  status: string;
  /** clientId */
  clientId: string;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RMapStringListRemoteDictDataVO;
const getRemoteDictDataMap = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/common/getAllDictData', params, config);
};
export default getRemoteDictDataMap;
