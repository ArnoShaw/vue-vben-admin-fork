<script setup lang="ts">
import type { SelectOption } from '@vben/types';

import { type PropType, ref, watch } from 'vue';

import { Empty } from 'ant-design-vue';

import BasicTitle from '#/components/basic-title.vue';

defineOptions({
  name: 'TableSideLeft',
});

const props = defineProps({
  title: { type: String, default: '' },
  data: {
    type: Array as PropType<SelectOption[]>,
    default: () => [
      { label: 'test', value: 1 },
      { label: 'test22', value: 2 },
    ],
  },
});

const emit = defineEmits(['onChange']);

const activedValue = ref<number | string>('');

watch(
  () => props.data,
  (val) => {
    activedValue.value = val?.[0]?.value || '';
  },
);

function handleClick(item: SelectOption, index: number) {
  const { value } = item;
  activedValue.value = value;
  emit('onChange', value, index);
}
</script>

<template>
  <div class="table-side-left flex h-full flex-col overflow-hidden rounded border">
    <BasicTitle :title="title" class="before h-[41px] overflow-hidden border-b p-2 !text-base" />
    <div class="content flex-1 overflow-y-auto">
      <div v-if="data?.length" class="wrapper py-1">
        <div
          v-for="(item, index) in data"
          :key="item.value || index"
          :class="{ actived: activedValue === item.value }"
          class="item hover:bg-accent mx-1 cursor-pointer truncate rounded-md p-2 transition-all"
          @click="handleClick(item, index)"
        >
          {{ item.label }}
        </div>
      </div>
      <Empty v-else :image="Empty.PRESENTED_IMAGE_SIMPLE" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.table-side-left {
  .item {
    &.actived {
      background-color: hsl(var(--primary) / 0.15);
    }
  }
}
</style>
