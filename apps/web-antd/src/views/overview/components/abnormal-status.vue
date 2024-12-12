<script setup lang="ts">
import type { defs } from '#/services/apis/api';

import { PhWarningBold } from '@vben/icons';

withDefaults(defineProps<{ data: defs.apis.OverviewVo | undefined }>(), {
  data: () => ({}),
});
</script>

<template>
  <div class="card-box group mt-4 pt-2 text-center">
    <p class="flex items-center px-4 pb-2 text-left text-lg font-semibold">
      <PhWarningBold
        class="text-warning mr-2 text-xl transition-all duration-300 group-hover:scale-125"
      />
      异常情况（30天内）
    </p>
    <div class="flex">
      <div class="flex-1 rounded-bl-xl transition-all hover:shadow-xl">
        <div class="bg-warning/20 p-2">海外退件</div>
        <div class="p-2 text-lg">{{ data?.overseasReturn || 0 }}</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-warning/20 p-2">安检退件</div>
        <div class="p-2 text-lg">{{ data?.securityCheck || 0 }}</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-warning/20 p-2">异常包裹</div>
        <div class="p-2 text-lg">{{ data?.sortingReturn || 0 }}</div>
      </div>
      <div class="flex-1 rounded-br-xl transition-all hover:shadow-xl">
        <div class="bg-warning/20 p-2">派送异常</div>
        <div class="p-2 text-lg">{{ 0 }}</div>
      </div>
    </div>
  </div>
</template>
