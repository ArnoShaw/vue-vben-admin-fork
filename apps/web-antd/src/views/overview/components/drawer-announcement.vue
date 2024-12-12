<script setup lang="ts">
import type { VxeGridProps } from '@vben/plugins/vxe-table';

import { ref, unref } from 'vue';

import { useVbenDrawer, useVbenModal } from '@vben/common-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

import DetailModal from './modal-announcement.vue';

const list = ref([]);

const [Modal, ModalApi] = useVbenModal({
  connectedComponent: DetailModal,
});

const gridOptions: VxeGridProps = {
  columns: [
    {
      field: 'title',
      title: '公告标题',
      cellRender: {
        name: 'CellLink',
        props: {
          key: 'title',
          onClick(row: any) {
            ModalApi.setData(row);
            ModalApi.open();
          },
        },
      },
    },
    { field: 'createTime', title: '发表时间', width: 200 },
  ],
  border: true,
  data: unref(list),
  height: 'auto',
  rowConfig: {
    isHover: true,
  },
  pagerConfig: {
    autoHidden: true,
  },
};

const [Grid, gridApi] = useVbenVxeGrid({ gridOptions });

const [Drawer, DrawerApi] = useVbenDrawer({
  title: '公告',
  cancelText: '关闭',
  showConfirmButton: false,
  onOpenChange(isOpen) {
    list.value = isOpen ? DrawerApi.getData() || [] : [];
    gridApi.setGridOptions({
      data: unref(list),
    });
  },
});
</script>

<template>
  <Drawer class="w-[760px]">
    <Grid />
    <Modal />
  </Drawer>
</template>
