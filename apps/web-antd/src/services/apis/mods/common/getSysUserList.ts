/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取运维人员用户列表
获取运维人员用户列表
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** status */
  status: string;
  /** roleId */
  roleId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RListRemoteSysUserVO;
const getSysUserList = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/common/getSysUserList', params, config);
};
export default getSysUserList;
