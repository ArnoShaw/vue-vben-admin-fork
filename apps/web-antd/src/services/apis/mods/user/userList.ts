/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取子账户列表
获取子账户列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RListSysUserVo;
const userList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/system/user/list', { params }, config);
};
export default userList;
