<script setup lang="ts">
import { Page, useVbenModal } from '@vben/common-ui';

import { Modal as AModal, Button } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';
import { ActionEnum } from '#/constants/common';

import { baseSchema, productColumns } from './const-data';
import ModalAddProduct from './modal-add-product.vue';

defineOptions({
  name: 'SettingAccountDeclareInfo',
});

const [Table] = useVbenVxeGrid({
  tableTitle: '申报信息列表',
  formOptions: {
    schema: baseSchema,
    showCollapseButton: false,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-span-8',
  },
  gridOptions: {
    columns: productColumns,
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

const [Modal, ModalApi] = useVbenModal({
  connectedComponent: ModalAddProduct,
});

function handleDelete(row: any) {
  const { declareCnName } = row;
  AModal.confirm({
    title: '删除',
    content: `您确定要删除${declareCnName}吗？`,
    onOk: () => {
      //
    },
  });
}

function handleAdd() {
  ModalApi.setData({ actionType: ActionEnum.ADD });
  ModalApi.open();
}

function handleEdit(row: any) {
  ModalApi.setData({ actionType: ActionEnum.EDIT, row });
  ModalApi.open();
}
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-tools>
        <Button type="primary" @click="handleAdd">新增</Button>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              // auth: 'POST:/client/package/operation/print/printPDF',
              onClick: handleEdit.bind(null, row),
            },
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
  </Page>
</template>
