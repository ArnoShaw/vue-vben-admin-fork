/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 新增邮袋---保存
新增邮袋---保存
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

export type RequestTypes = defs.apis.MailbagFormBO;
export type ResponseTypes = defs.apis.RVoid;
const addMailbagList = async (bodyParams: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.post<ResponseTypes>(
    '/client/package/operation/reservation/mailbag/add/save',
    { data: bodyParams },
    config,
  );
};
export default addMailbagList;
