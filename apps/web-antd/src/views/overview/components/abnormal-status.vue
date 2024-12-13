<script setup lang="ts">
import type { defs } from '#/services/apis/api';

import { computed } from 'vue';

import { Card, CardContent, CardHeader, CardTitle } from '@vben-core/shadcn-ui';

const props = withDefaults(defineProps<{ data: defs.apis.OverviewVo | undefined }>(), {
  data: () => ({}),
});

const items = computed(() => {
  const data = props.data;
  return [
    { title: '海外退件', content: data?.overseasReturn },
    { title: '安检退件', content: data?.securityCheck },
    { title: '异常包裹', content: data?.sortingReturn },
    { title: '派送异常', content: 0 },
  ];
});
</script>

<template>
  <Card class="mt-4">
    <CardHeader class="py-4">
      <CardTitle class="text-lg">异常情况（30天）</CardTitle>
    </CardHeader>
    <CardContent class="flex flex-wrap p-0">
      <template v-for="(item, index) in items" :key="item.title">
        <div
          :class="{
            'border-r-0': index === 3,
          }"
          class="border-border group w-1/4 cursor-pointer border-r border-t p-2 transition-all hover:shadow-xl"
        >
          <div class="flex items-center justify-center">
            <span class="text-md text-foreground/80 ml-4">{{ item.title }}</span>
          </div>
          <div class="mt-2 flex justify-center text-base font-medium">
            {{ item.content || 0 }}
          </div>
        </div>
      </template>
    </CardContent>
  </Card>
</template>
