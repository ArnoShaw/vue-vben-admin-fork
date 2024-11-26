import { h } from 'vue';

import { setupVbenVxeTable, useVbenVxeGrid } from '@vben/plugins/vxe-table';
import { isFunction } from '@vben/utils';

import VxeUIPluginRenderAntd from '@vxe-ui/plugin-render-antd';
import { Button, Image, Tag } from 'ant-design-vue';

import { useVbenForm } from './form';

import '@vxe-ui/plugin-render-antd/dist/style.css';

setupVbenVxeTable({
  configVxeTable: (vxeUI) => {
    vxeUI.setConfig({
      grid: {
        align: 'center',
        layouts: ['Form', 'Top', 'Toolbar', 'Table', 'Bottom', 'Pager'],
        border: false,
        columnConfig: {
          resizable: true,
        },
        minHeight: 180,
        formConfig: {
          // 全局禁用vxe-table的表单配置，使用formOptions
          enabled: false,
        },
        proxyConfig: {
          autoLoad: true,
          response: {
            result: 'items',
            total: 'total',
            list: 'items',
          },
          showActiveMsg: true,
          showResponseMsg: false,
        },
        round: true,
        showOverflow: true,
        size: 'small',
      },
    });

    // 表格配置项可以用 cellRender: { name: 'CellImage' },
    vxeUI.renderer.add('CellImage', {
      renderTableDefault(_renderOpts, params) {
        const { column, row } = params;
        return h(Image, { src: row[column.field] });
      },
    });

    // 表格配置项可以用 cellRender: { name: 'CellLink' },
    vxeUI.renderer.add('CellLink', {
      renderTableDefault(renderOpts, params) {
        const { props } = renderOpts;
        const { row } = params;
        const val = props?.key ? row?.[props.key] : (props?.text ?? '');
        return h(
          Button,
          { size: 'small', type: 'link', onClick: () => props?.onClick?.(row) },
          { default: () => val },
        );
      },
    });

    vxeUI.renderer.add('CellTag', {
      renderTableDefault(renderOpts, params) {
        const { props } = renderOpts;
        const { column, row } = params;
        const color = props?.color
          ? // eslint-disable-next-line unicorn/no-nested-ternary
            isFunction(props.color)
            ? props.color(row[column.field], row)
            : props.color
          : 'default';
        const text = props?.text
          ? // eslint-disable-next-line unicorn/no-nested-ternary
            isFunction(props.text)
            ? props.text(row[column.field], row)
            : props.text
          : '';
        return h(Tag, { color }, () => text);
      },
    });

    vxeUI.use(VxeUIPluginRenderAntd);

    // 这里可以自行扩展 vxe-table 的全局配置，比如自定义格式化
    // vxeUI.formats.add
  },
  useVbenForm,
});

export { useVbenVxeGrid };

export type * from '@vben/plugins/vxe-table';
