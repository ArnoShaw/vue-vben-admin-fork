<script lang="ts" setup>
import { useVbenModal } from '@vben/common-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

import { type DataSource, helpDescColumns, helpDescription } from './const-data';

const props = withDefaults(
  defineProps<{
    dataSource?: DataSource[];
    title?: string;
  }>(),
  {
    title: '顺友标准格式帮助说明',
    dataSource: () => helpDescription,
  },
);

const [Table] = useVbenVxeGrid({
  gridOptions: {
    columns: helpDescColumns,
    // height: 'auto',
    border: true,
    data: props.dataSource,
    mergeCells: [
      { row: 5, col: 1, rowspan: 3, colspan: 1 },
      { row: 5, col: 2, rowspan: 3, colspan: 1 },
    ],
    rowConfig: {
      isHover: true,
    },
    pagerConfig: {
      enabled: false,
    },
  },
});

const [Modal] = useVbenModal({
  title: props.title,
  draggable: true,
});
</script>
<template>
  <Modal :show-ok-btn="false" cancel-text="关闭" class="w-[760px]">
    <Table>
      <template #toolbar-actions>
        <span :style="{ color: 'red' }">红色标题为必填项</span>
        <span :style="{ color: 'green' }" class="mx-4">绿色标题为至少选择一项</span>
        <span :style="{ color: 'blue' }">蓝色标题为可选项</span>
      </template>
      <template #title="{ row }">
        <span
          :style="{
            color: row.priority === 1 ? 'red' : row.priority === 2 ? 'green' : 'blue',
          }"
          >{{ row.title }}
        </span>
      </template>
    </Table>
  </Modal>
</template>
