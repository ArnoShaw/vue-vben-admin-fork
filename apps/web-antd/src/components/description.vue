<script setup lang="ts">
import type { DescItem } from '#/constants/common';

import { type CSSProperties, h, type PropType } from 'vue';

import { objectOmit } from '@vueuse/core';
import { Descriptions, type DescriptionsProps } from 'ant-design-vue';

const props = defineProps({
  items: {
    type: Array as PropType<DescItem[]>,
    default: () => [],
  },
  data: {
    type: Object,
    default: () => ({}),
  },
  options: {
    type: Object as PropType<{ labelMinWidth?: number } & DescriptionsProps>,
    default: () => ({}),
  },
});

function getContent(item: DescItem) {
  const val = props.data?.[item.field] || '';
  return val;
}

function renderLabel({ label, labelStyle }: DescItem) {
  if (!labelStyle && !props?.options?.labelMinWidth) {
    return label;
  }

  const labelStyles: CSSProperties = {
    ...labelStyle,
    minWidth: `${props.options.labelMinWidth}px `,
  };
  return h('div', { style: labelStyles }, label);
}
</script>

<template>
  <Descriptions v-bind="{ size: 'small', bordered: true, ...options }">
    <template v-for="item in items" :key="item.field">
      <Descriptions.Item
        v-if="!item?.show || (item?.show && item.show(data[item.field], data))"
        :label="renderLabel(item)"
        v-bind="objectOmit(item, ['show', 'render', 'label'])"
      >
        {{ item?.render ? item?.render?.(data[item.field], data) : getContent(item) }}
      </Descriptions.Item>
    </template>
  </Descriptions>
</template>
