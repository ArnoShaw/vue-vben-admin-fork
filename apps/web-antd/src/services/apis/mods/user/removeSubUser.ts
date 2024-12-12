/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 删除子账户
删除子账户
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.CommonIdBOInteger;
export type ResponseTypes = defs.apis.RVoid;
const removeSubUser = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.delete<ResponseTypes>('/system/user/delete', { data: bodyParams }, config);
};
export default removeSubUser;
