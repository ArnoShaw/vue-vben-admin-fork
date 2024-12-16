/* eslint-disable perfectionist/sort-imports */
// @ts-nocheck auto generated apis

/**
    * @description 加载计费分区---未选择为-1
加载计费分区---未选择为-1
    */

import type { AxiosRequestConfig } from '@vben/request';
import type { defs } from '../../api';
import { requestClient } from '#/api/request';

class Params {
  /** channelId */
  channelId: number;
}

export type RequestTypes = Params;
export type ResponseTypes = defs.apis.RListShippingMethodForReservationVo;
const getChargeZoneList1 = async (params: RequestTypes, config?: AxiosRequestConfig) => {
  return requestClient.get<ResponseTypes>(
    '/client/package/operation/reservation/chargeZone/chargeZoneList1',
    { params },
    config,
  );
};
export default getChargeZoneList1;
