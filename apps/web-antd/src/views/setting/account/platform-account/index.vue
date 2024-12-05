<script setup lang="ts">
import { Page, useVbenModal } from '@vben/common-ui';

import { Button } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';

import { baseColumns, baseSchema } from './const-data';
import ModalAddAccount from './modal-add-account.vue';
import ModalUpload from './modal-upload.vue';

defineOptions({
  name: 'SettingAccountPlatformAccount',
});

const [Table] = useVbenVxeGrid({
  tableTitle: '平台账号列表',
  formOptions: {
    schema: baseSchema,
    showCollapseButton: false,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-span-8',
  },
  gridOptions: {
    columns: baseColumns,
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
  },
});

const [Modal, ModalUploadApi] = useVbenModal({
  connectedComponent: ModalUpload,
});

const [ModalAdd, ModalAddApi] = useVbenModal({
  connectedComponent: ModalAddAccount,
});

function handleDelete(_row: any) {}
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
    <Modal />
    <ModalAdd />
  </Page>
</template>
