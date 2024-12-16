/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 检验邮袋编码 通过flag进行错误提示
检验邮袋编码 通过flag进行错误提示
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** bo */
  bo: defs.apis.CheckMailbagCodeBO;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RCheckMailbagCodeVo;
const checkMailbagCode = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/package/operation/reservation/add/checkMailbagCode',
    { params },
    config,
  );
};
export default checkMailbagCode;
