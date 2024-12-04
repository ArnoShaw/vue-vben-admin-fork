<script setup lang="ts">
import { Page, useVbenModal } from '@vben/common-ui';

import { Button } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';

import { baseColumns } from './const-data';
import ModalAdd from './modal-add.vue';

defineOptions({
  name: 'SettingAccountComplaints',
});

const [Table] = useVbenVxeGrid({
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

const [Modal, ModalApi] = useVbenModal({
  connectedComponent: ModalAdd,
});
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-actions>
        <BasicTitle
          help-message="为了确保我们的客户能得到最优质的服务和最美好的体验，您们的“投诉和建议”是我们的前进的方向！"
          icon="icon-park-outline:log"
          icon-class="text-primary"
          title="投诉和建议"
        />
      </template>
      <template #toolbar-tools>
        <Button type="primary" @click="ModalApi.open()">新增</Button>
      </template>
    </Table>
    <Modal />
  </Page>
</template>
