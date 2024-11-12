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
