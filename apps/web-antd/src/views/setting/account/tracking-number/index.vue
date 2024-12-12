<script setup lang="ts">
import type { defs } from '#/services/apis/api';

import { ref } from 'vue';

import { Page } from '@vben/common-ui';
import { downloadExcel, formatDate, formatDateTime } from '@vben/utils';

import { Modal } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';
import TableAction from '#/components/table-action.vue';
import { apis } from '#/services/apis';

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
    proxyConfig: {
      ajax: {
        query: async ({ page, sort }: any) => {
          return await apis.tracking.trackingList({
            pageNum: page.currentPage,
            pageSize: page.pageSize,
            order: sort.order,
            orderByColumn: sort.field,
          } as any);
        },
      },
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
        field: 'trackingNumberPoolName',
        minWidth: 180,
        title: '邮寄方式',
      },
      {
        field: 'trackingNoCount',
        title: '全部',
      },
      {
        field: 'usedNum',
        title: '已使用',
      },
      {
        field: 'unUseNum',
        title: '未使用',
      },
      {
        field: 'downloadCount',
        title: '已下载',
      },
      {
        field: 'lastDownloadTime',
        width: 165,
        title: '最后下载日期',
        formatter: ({ cellValue }: any) => {
          return cellValue ? formatDateTime(cellValue) : '未下载';
        },
      },
      {
        title: '操作',
        width: 160,
        field: 'action',
        showOverflow: false,
        slots: { default: 'action' },
        fixed: 'right',
      },
    ],
  },
});

const exportLoading = ref(false);

async function handleReDownload(row: defs.apis.TrackingNoVo, type: number) {
  // 重新下载二次确认
  if (type === 0)
    Modal.confirm({
      title: '确认下载',
      content: '您是否要下载最后一次成功的追踪号',
      onOk: () => doDownload(row, type),
    });
  else doDownload(row, type);
}

async function doDownload(row: defs.apis.TrackingNoVo, type: number) {
  const { trackingNumberPoolId = 0, trackingNumberPoolName } = row;
  exportLoading.value = true;
  try {
    const res = await apis.tracking.exportTracking(
      { id: trackingNumberPoolId, type },
      { headers: { Native: true }, responseType: 'blob' },
    );
    const suffix = res.headers?.['content-disposition']?.split?.('.')?.reverse?.()?.[0] || 'xlsx';
    if (res)
      downloadExcel(res, `${trackingNumberPoolName}-${formatDate(Date.now())}`, `.${suffix}`);
  } finally {
    exportLoading.value = false;
  }
}
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
              loading: exportLoading,
              onClick: handleReDownload.bind(null, row, 1),
            },
            {
              label: '重新下载',
              loading: exportLoading,
              // auth: 'POST:/client/package/operation/print/printPDF',
              onClick: handleReDownload.bind(null, row, 0),
            },
          ]"
        />
      </template>
    </Table>
  </Page>
</template>
