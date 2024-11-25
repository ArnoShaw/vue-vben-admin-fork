/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 向所有用户发送消息
向所有用户发送消息
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** 要发送的消息内容 */
  msg: string;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RVoid;
const send_1 = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>('/resource/sse/sendAll', params, config);
};
export default send_1;
