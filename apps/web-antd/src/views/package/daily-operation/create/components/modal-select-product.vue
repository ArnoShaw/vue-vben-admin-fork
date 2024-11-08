<script lang="ts" setup>
import { useVbenModal } from '@vben/common-ui';
import { cloneDeep } from '@vben/utils';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

import { productColumns, productSearchSchema } from '../const-data';

const emit = defineEmits(['success']);

// const companyId = ref();
// const rowData = ref();

const [Grid, GridApi] = useVbenVxeGrid({
  formOptions: {
    schema: productSearchSchema,
    showCollapseButton: false,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-span-6',
  },
  // gridEvents: {

  // },
  gridOptions: {
    columns: productColumns,
    border: true,
    height: 'auto',
    minHeight: 300,
    radioConfig: {
      reserve: true,
      highlight: true,
      trigger: 'row',
      checkRowKey: 2,
    },
    rowConfig: {
      isHover: true,
      keyField: 'id',
    },
    pagerConfig: {
      autoHidden: true,
    },
  },
});

const [Modal, ModalApi] = useVbenModal({
  title: '选择申报信息',
  // onOpenChange(isOpen) {
  //   if (isOpen) {
  //   }
  // },
  onConfirm() {
    const selectedRow = GridApi.grid.getRadioRecord();
    emit('success', cloneDeep(selectedRow));
    ModalApi.close();
  },
});

// function handleBeforeFetch(p) {
//   return {
//     ...p,
//     companyId: unref(companyId),
//   };
// }
</script>
<template>
  <Modal class="w-[760px]">
    <Grid />
  </Modal>
</template>
