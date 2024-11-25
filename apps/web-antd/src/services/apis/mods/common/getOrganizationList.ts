/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取分支机构列表
获取分支机构列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** status */
  status: string;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RListRemoteSysOrganizationVO;
const getOrganizationList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/common/getOrganizationList', params, config);
};
export default getOrganizationList;
