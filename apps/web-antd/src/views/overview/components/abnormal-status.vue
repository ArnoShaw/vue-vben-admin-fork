<script setup lang="ts">
import { PhWarningBold } from '@vben/icons';
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
        <div class="p-2 text-lg">1</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-warning/20 p-2">安检退件</div>
        <div class="p-2 text-lg">2</div>
      </div>
      <div class="flex-1 transition-all hover:shadow-xl">
        <div class="bg-warning/20 p-2">异常包裹</div>
        <div class="p-2 text-lg">3</div>
      </div>
      <div class="flex-1 rounded-br-xl transition-all hover:shadow-xl">
        <div class="bg-warning/20 p-2">派送异常</div>
        <div class="p-2 text-lg">4</div>
      </div>
    </div>
  </div>
</template>
