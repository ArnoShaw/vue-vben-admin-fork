<script setup lang="ts">
import type { defs } from '#/services/apis/api';

import { IconParkOutlineTransactionOrder } from '@vben/icons';

withDefaults(defineProps<{ data: defs.apis.OverviewVo | undefined }>(), {
  data: () => ({}),
});
</script>

<template>
  <div class="card-box group mt-4 pt-2 text-center">
    <p class="flex items-center px-4 pb-2 text-left text-lg font-semibold">
      <IconParkOutlineTransactionOrder
        class="text-primary mr-2 text-xl transition-all duration-300 group-hover:scale-125"
      />
      运单情况（30天内）
    </p>
    <div class="flex">
      <div class="flex-1 rounded-bl-xl transition-all hover:shadow-xl">
        <div class="bg-primary/20 p-2">等待预报</div>
        <div class="p-2 text-lg">{{ data?.waitPredictionCount || 0 }}</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-primary/20 p-2">等待入仓</div>
        <div class="p-2 text-lg">{{ data?.waitStorageCount || 0 }}</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-primary/20 p-2">等待揽收</div>
        <div class="p-2 text-lg">{{ data?.waitReceivedCount || 0 }}</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-primary/20 p-2">等待发货</div>
        <div class="p-2 text-lg">{{ data?.waitDeliveryCount || 0 }}</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-primary/20 p-2">昨日揽收</div>
        <div class="p-2 text-lg">{{ data?.yesterdayReceivedCount || 0 }}</div>
      </div>
      <div class="flex-1 rounded-br-xl transition-all hover:shadow-xl">
        <div class="bg-primary/20 p-2">昨日发货</div>
        <div class="p-2 text-lg">{{ data?.yesterdayDeliveredCount || 0 }}</div>
      </div>
    </div>
  </div>
</template>
