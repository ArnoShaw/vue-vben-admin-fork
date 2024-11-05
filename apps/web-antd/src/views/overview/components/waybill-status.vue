<script setup lang="ts">
import { IconParkOutlineTransactionOrder } from '@vben/icons';
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
        <div class="p-2 text-lg">1</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-primary/20 p-2">等待入仓</div>
        <div class="p-2 text-lg">2</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-primary/20 p-2">等待揽收</div>
        <div class="p-2 text-lg">3</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-primary/20 p-2">等待发货</div>
        <div class="p-2 text-lg">4</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-primary/20 p-2">昨日揽收</div>
        <div class="p-2 text-lg">5</div>
      </div>
      <div class="flex-1 rounded-br-xl transition-all hover:shadow-xl">
        <div class="bg-primary/20 p-2">昨日发货</div>
        <div class="p-2 text-lg">6</div>
      </div>
    </div>
  </div>
</template>
