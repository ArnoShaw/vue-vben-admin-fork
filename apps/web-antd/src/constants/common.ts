import type { Recordable } from '@vben/types';
import type { Fn } from '@vueuse/core';
import type { ButtonProps } from 'ant-design-vue';
import type { DescriptionsItemProp } from 'ant-design-vue/es/descriptions';

import type { VNode } from 'vue';

import dayjs from 'dayjs';

/**
 * 操作列 类型
 */
export enum ActionEnum {
  // 新增
  ADD = 'add',
  // 审批
  AUDIT = 'audit',
  // 复制
  COPY = 'copy',
  // 版本记录-复制
  COPYVERSION = 'copyVersion',
  // 删除
  DELETE = 'delete',
  // 编辑
  EDIT = 'edit',
  // 更新
  UPDATE = 'update',
  // 详情
  VIEW = 'view',
}

export const FILE_MIMES = {
  EXCEL: [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],
};

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // json
  JSON = 'application/json;charset=UTF-8',
}

export interface ActionItem extends ButtonProps {
  onClick?: Fn;
  label?: string;
  color?: 'error' | 'success' | 'warning';
  icon?: string;
  disabled?: boolean;
  // 权限编码控制是否显示
  auth?: string | string[];
  // 业务控制是否显示
  ifShow?: ((action: ActionItem) => boolean) | boolean;
}

export interface DescItem extends DescriptionsItemProp {
  field: string;
  show?: (val: any, data: Recordable) => boolean;
  render?: (val: any, data: Recordable) => Element | number | string | undefined | VNode;
}

export const startTime = (dayNum: number) => dayjs().subtract(dayNum, 'day').startOf('day');
export const endTime = dayjs().endOf('day');
