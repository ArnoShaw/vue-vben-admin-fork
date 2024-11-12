import { isString } from '@vben-core/shared/utils';

export * from './helpers';
export * from '@vben-core/shared/cache';
export * from '@vben-core/shared/color';
export * from '@vben-core/shared/utils';

/**
 * 导出文件
 *
 * @param data {String | Blob} - 文件数据或文件URL
 * @param title {string} - 文件标题，默认为'filename'
 * @param suffix {string} - 文件后缀，默认为'.xlsx'
 * @param fullName {string} - 完整文件名，如果提供，则忽略title和suffix
 */
export const downloadExcel = (
  data: Blob | string,
  title = 'filename',
  suffix = '.xlsx',
  fullName?: string,
) => {
  // 根据数据类型创建Blob对象或直接使用传入的字符串URL
  const blob = isString(data) ? data : new Blob([data]);

  // 构造文件名，如果未提供fullName，则使用title和suffix组合
  const fileName = fullName || title + suffix;

  // 创建一个隐藏的<a>元素用于触发下载
  const alink = document.createElement('a');
  alink.download = fileName;
  alink.style.display = 'none';

  // 根据数据类型设置<a>元素的href属性
  alink.href = isString(data) ? data : URL.createObjectURL(blob as Blob);

  // 将<a>元素添加到文档中并触发点击事件
  document.body.append(alink);
  alink.click();

  // 下载完成后清理资源
  URL.revokeObjectURL(alink.href);
  alink.remove();
};
