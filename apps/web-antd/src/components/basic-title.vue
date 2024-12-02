<script lang="ts" setup>
import type { PropType } from 'vue';

import { IconifyIcon } from '@vben/icons';

import HelpTooltip from '../../../../packages/@core/ui-kit/shadcn-ui/src/components/tooltip/help-tooltip.vue';

defineProps({
  icon: {
    type: String as PropType<string>,
    default: '',
  },
  iconClass: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    default: '',
  },
  helpMessage: {
    type: [String, Array] as PropType<string | string[]>,
    default: '',
  },
});
</script>
<template>
  <div class="basic-title flex items-center justify-between text-lg">
    <div class="flex items-center">
      <IconifyIcon v-if="icon" :class="iconClass" :icon="icon" class="text-2xl" />
      <span class="basic-title__text mx-1 font-semibold">{{ title }}</span>
      <HelpTooltip v-if="helpMessage">{{ helpMessage }}</HelpTooltip>
    </div>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.basic-title {
  &.before {
    .basic-title__text {
      position: relative;
      padding-left: 6px;

      &::before {
        position: absolute;
        top: 4px;
        left: 0;
        width: 3px;
        height: 16px;
        margin-right: 4px;
        content: '';
        background-color: hsl(var(--primary));
      }
    }
  }
}
</style>
