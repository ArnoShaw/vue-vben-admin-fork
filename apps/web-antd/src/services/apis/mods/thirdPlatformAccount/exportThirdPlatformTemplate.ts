/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 获取导入平台账号模板
获取导入平台账号模板
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {}

export type RequestTypes = Params;
export type ResponseTypes = any;
const exportThirdPlatformTemplate = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/thirdPlatform/account/export/template',
    { params },
    config,
  );
};
export default exportThirdPlatformTemplate;
