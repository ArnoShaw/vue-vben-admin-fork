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
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <IconifyIcon v-if="icon" :class="iconClass" :icon="icon" class="text-2xl" />
      <span class="ml-2 mr-1 text-lg font-semibold">{{ title }}</span>
      <HelpTooltip v-if="helpMessage">{{ helpMessage }}</HelpTooltip>
    </div>
    <slot></slot>
  </div>
</template>
