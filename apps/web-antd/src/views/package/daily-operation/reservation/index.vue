<script setup lang="ts">
import { Page, useVbenModal } from '@vben/common-ui';

import { Alert, Button, Modal } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';

import ModalAddMailbag from './components/modal-add-mailbag.vue';
import ModalEditMailbag from './components/modal-edit-mailbag.vue';
import { baseColumns } from './const-data';

defineOptions({
  name: 'PackageDailyOperationReservation',
});

const [Table] = useVbenVxeGrid({
  formOptions: {},
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

const [ModalEdit, ModalEditApi] = useVbenModal({
  connectedComponent: ModalEditMailbag,
});

const [ModalAdd, ModalAddApi] = useVbenModal({
  connectedComponent: ModalAddMailbag,
});

function handleEdit(row: any) {
  ModalEditApi.setData({ row });
  ModalEditApi.open();
}

function handleDelete(_row: any) {
  Modal.confirm({
    iconType: 'warning',
    title: '删除',
    content: '您确定要删除该邮袋吗？',
    onOk: () => {},
  });
}
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #form>
        <!-- <div class="card-box mb-2 p-3"> -->
        <Alert banner class="mb-2" message="本界面仅显示未揽收的邮袋" />
        <Alert banner class="mb-4" type="info">
          <template #message>
            <div class="flex justify-between">
              <div>
                <span class="font-semibold">交接单已创建</span>
                <span class="ml-4">交接单号：FH32-FH23124324324</span>
                <span class="ml-4">邮袋数：1</span>
                <span class="ml-4">总件数：1</span>
              </div>
              <a class="vben-link">打印交接单</a>
            </div>
          </template>
        </Alert>
        <!-- </div> -->
      </template>
      <template #toolbar-actions> 每天首次新增预约邮袋将自动创建当日交接单</template>
      <template #toolbar-tools>
        <Button class="mr-2" type="primary" @click="ModalAddApi.open()">新增预约揽收邮袋</Button>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              // auth: 'POST:/client/package/update',
              onClick: handleEdit.bind(null, row),
            },
            {
              label: '删除',
              // auth: 'DELETE:/client/package/operation/prediction/delete',
              onClick: handleDelete.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
    <ModalEdit />
    <ModalAdd />
  </Page>
</template>
