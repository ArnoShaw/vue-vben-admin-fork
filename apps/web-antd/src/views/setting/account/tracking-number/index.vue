<script setup lang="ts">
import { Page } from '@vben/common-ui';
import { formatDateTime } from '@vben/utils';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';
import TableAction from '#/components/table-action.vue';

defineOptions({
  name: 'SettingAccountTrackingNubmer',
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
        field: 'tracking_number_pool_name',
        minWidth: 180,
        title: '邮寄方式',
      },
      {
        field: 'trackingnocount',
        title: '全部',
      },
      {
        field: 'usednumb',
        title: '已使用',
      },
      {
        field: 'usenumb',
        title: '未使用',
      },
      {
        field: 'downloadcount',
        title: '已下载',
      },
      {
        field: 'lastdownloadtime',
        width: 165,
        title: '最后下载日期',
        formatter: ({ cellValue }: any) => {
          return cellValue ? formatDateTime(cellValue) : '未下载';
        },
      },
      {
        title: '操作',
        width: 120,
        field: 'action',
        showOverflow: false,
        slots: { default: 'action' },
        fixed: 'right',
      },
    ],
  },
});

function handleReDownload(_row: any) {}
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-actions>
        <BasicTitle
          help-message="只允许下载尚未使用的追踪号，请妥善保管，以免泄漏。"
          icon="material-symbols:download"
          icon-class="text-primary"
          title="下载追踪号"
        />
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '下载',
            },
            {
              label: '重新下载',
              // auth: 'POST:/client/package/operation/print/printPDF',
              onClick: handleReDownload.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
  </Page>
</template>
