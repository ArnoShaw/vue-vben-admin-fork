<script setup lang="ts">
import type { WorkbenchProjectItem, WorkbenchQuickNavItem } from '@vben/common-ui';

import { useRouter } from 'vue-router';

import { openWindow } from '@vben/utils';
import { Card, CardContent, CardHeader, CardTitle, VbenIcon } from '@vben-core/shadcn-ui';

defineOptions({
  name: 'WorkbenchQuickNav',
});

const router = useRouter();

const quickNavItems: WorkbenchQuickNavItem[] = [
  {
    color: '#1fdaca',
    icon: 'lucide:package',
    title: '新建包裹',
    url: '/package/daily-operation/create',
  },
  {
    color: '#bf0c2c',
    icon: 'mdi:import',
    title: '批量导入',
    url: '/package/daily-operation/import',
  },
  {
    color: '#e18525',
    icon: 'ion:layers-outline',
    title: '包裹预报',
    url: '/package/daily-operation/prediction',
  },
  {
    color: '#3fb27f',
    icon: 'lucide:receipt-japanese-yen',
    title: '每日费用',
    url: '/bill/management/unbilled', // 这里的 URL 是示例，实际项目中需要根据实际情况进行调整
  },
];

function navTo(nav: WorkbenchProjectItem | WorkbenchQuickNavItem) {
  if (nav.url?.startsWith('http')) {
    openWindow(nav.url);
    return;
  }
  if (nav.url?.startsWith('/')) {
    router.push(nav.url).catch((error) => {
      console.error('Navigation failed:', error);
    });
  } else {
    console.warn(`Unknown URL for navigation item: ${nav.title} -> ${nav.url}`);
  }
}
</script>

<template>
  <Card class="ml-2 mt-4 w-1/2 xl:ml-0 xl:w-full">
    <CardHeader class="py-4">
      <CardTitle class="text-lg">快捷导航</CardTitle>
    </CardHeader>
    <CardContent class="flex flex-wrap p-0">
      <template v-for="(item, index) in quickNavItems" :key="item.title">
        <div
          :class="{
            'border-r-0': index % 2 === 1,
          }"
          class="flex-col-center border-border group w-1/2 cursor-pointer border-r border-t py-8 hover:shadow-xl"
          @click="navTo(item)"
        >
          <VbenIcon
            :color="item.color"
            :icon="item.icon"
            class="size-7 transition-all duration-300 group-hover:scale-125"
          />
          <span class="text-md mt-2 truncate">{{ item.title }}</span>
        </div>
      </template>
    </CardContent>
  </Card>
</template>
