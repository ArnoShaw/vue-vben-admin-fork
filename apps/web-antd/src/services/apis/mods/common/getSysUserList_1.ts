/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 根据名称获取运维人员用户列表
根据名称获取运维人员用户列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** nickname */
  nickname: string;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RListRemoteSysUserVO;
const getSysUserList_1 = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/common/getSysUserListByName', { params }, config);
};
export default getSysUserList_1;
