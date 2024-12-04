<script setup lang="ts">
import { Page } from '@vben/common-ui';
import { formatDateTime } from '@vben/utils';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';
import TableAction from '#/components/table-action.vue';

defineOptions({
  name: 'SettingAccountQuotationSheet',
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
        field: 'channelcnname',
        minWidth: 180,
        sortable: true,
        title: '邮寄方式',
      },
      {
        field: 'currency_second_name',
        title: '币种',
        sortable: true,
      },
      {
        field: 'createTime',
        minWidth: 165,
        title: '创建日期',
        formatter: ({ cellValue }: any) => formatDateTime(cellValue),
      },
      {
        field: 'updateTime',
        minWidth: 165,
        title: '更新日期',
        formatter: ({ cellValue }: any) => formatDateTime(cellValue),
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

function handleDownload(_row: any) {}
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-actions>
        <BasicTitle icon="material-symbols:download" icon-class="text-primary" title="下载报价表" />
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '下载报价',
              // auth: 'POST:/client/package/operation/print/printPDF',
              onClick: handleDownload.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
  </Page>
</template>
