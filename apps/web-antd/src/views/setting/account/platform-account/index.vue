<script setup lang="ts">
import type { defs } from '#/services/apis/api';

import { Page, useVbenModal } from '@vben/common-ui';

import { Button, message, Modal } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';
import { apis } from '#/services/apis';

import { baseColumns, baseSchema } from './const-data';
import ModalAddAccount from './modal-add-account.vue';
import ModalUploadComp from './modal-upload.vue';

defineOptions({
  name: 'SettingAccountPlatformAccount',
});

const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '平台账号列表',
  formOptions: {
    schema: baseSchema,
    showCollapseButton: false,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-span-8',
    submitOnEnter: true,
  },
  gridEvents: {
    sortChange: () => {
      TableApi.query();
    },
  },
  gridOptions: {
    columns: baseColumns,
    border: true,
    height: 'auto',
    columnConfig: {
      minWidth: 100,
    },
    proxyConfig: {
      ajax: {
        query: async ({ page, sort }: any, formValues: any) => {
          return await apis.thirdPlatformAccount.thirdPlatformList({
            pageNum: page.currentPage,
            pageSize: page.pageSize,
            order: sort.order,
            orderByColumn: sort.field,
            ...formValues,
          } as any);
        },
      },
    },
    sortConfig: {
      remote: true,
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
  },
});

const [ModalUpload, ModalUploadApi] = useVbenModal({
  connectedComponent: ModalUploadComp,
});

const [ModalAdd, ModalAddApi] = useVbenModal({
  connectedComponent: ModalAddAccount,
});

function handleDelete(row: defs.apis.SyCCompanyThirdplatformAccountVo) {
  const { platformAccountId = 0, userName } = row;
  Modal.confirm({
    iconType: 'warning',
    title: '删除',
    content: `您确定要删除账号“${userName}”吗？`,
    onOk: async () => {
      await apis.thirdPlatformAccount.editThirdPlatform({ platformAccountId } as any);
      message.success('删除成功');
    },
  });
}
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-tools>
        <Button class="mr-2" @click="ModalUploadApi.open()">Excel导入平台账号</Button>
        <Button type="primary" @click="ModalAddApi.open()">新增</Button>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '删除',
              // auth: 'POST:/client/package/operation/print/printPDF',
              onClick: handleDelete.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
    <ModalUpload />
    <ModalAdd />
  </Page>
</template>
