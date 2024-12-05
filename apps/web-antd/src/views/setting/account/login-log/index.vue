<script setup lang="ts">
import { Page } from '@vben/common-ui';
import { formatDateTime } from '@vben/utils';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';

defineOptions({
  name: 'SettingAccountLoginLog',
});

const [Table] = useVbenVxeGrid({
  gridOptions: {
    border: true,
    height: 'auto',
    columnConfig: {
      minWidth: 100,
    },
    rowConfig: {
      isHover: true,
    },
    pagerConfig: {
      autoHidden: true,
    },
    toolbarConfig: {
      custom: true,
      refresh: true,
      zoom: true,
    },
    columns: [
      {
        field: 'createTime',
        width: 165,
        title: '登录时间',
        formatter: ({ cellValue }: any) => formatDateTime(cellValue),
      },
      {
        field: 'loginAddress',
        title: '登录IP',
      },
      {
        field: 'loginPosition',
        title: '地理位置',
      },
      {
        field: 'loginStatus',
        title: '登录状态',
      },
    ],
  },
});
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-actions>
        <BasicTitle
          help-message="查询账户登陆IP和地理位置日志"
          icon="icon-park-outline:log"
          icon-class="text-primary"
          title="登录日志"
        />
      </template>
    </Table>
  </Page>
</template>
