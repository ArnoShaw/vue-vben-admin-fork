<script setup lang="ts">
import type { defs } from '#/services/apis/api';

import { computed } from 'vue';

import { Card, CardContent, CardHeader, CardTitle, VbenIcon } from '@vben-core/shadcn-ui';

const props = withDefaults(defineProps<{ data: defs.apis.OverviewVo | undefined }>(), {
  data: () => ({}),
});

const items = computed(() => {
  const { businessUser, serviceUser, financeUser, receiveUser } = props.data.accountInfo || {};
  return [
    {
      title: '业务专员',
      avatar: businessUser?.avatar || 'stash:user-avatar-light',
      email: businessUser?.email,
      name: businessUser?.nickname,
      mobile: businessUser?.mobile,
    },
    {
      title: '客服专员',
      avatar: serviceUser?.avatar || 'stash:user-avatar-light',
      email: serviceUser?.email,
      name: serviceUser?.nickname,
      mobile: serviceUser?.mobile,
    },
    {
      title: '揽收专员',
      avatar: receiveUser?.avatar || 'stash:user-avatar-light',
      email: receiveUser?.email,
      name: receiveUser?.nickname,
      mobile: receiveUser?.mobile,
    },
    {
      title: '财务专员',
      avatar: financeUser?.avatar || 'stash:user-avatar-light',
      email: financeUser?.email,
      name: financeUser?.nickname,
      mobile: financeUser?.mobile,
    },
  ];
});
</script>

<template>
  <Card class="mt-4 xl:mb-4">
    <CardHeader class="py-4">
      <CardTitle class="text-lg">专属服务人员</CardTitle>
    </CardHeader>
    <CardContent class="flex flex-wrap p-0">
      <template v-for="(item, index) in items" :key="item.title">
        <div
          :class="{
            'border-r-0': index === 3,
          }"
          class="border-border group w-1/4 cursor-pointer border-r border-t p-4 transition-all hover:shadow-xl"
        >
          <div class="flex items-center">
            <VbenIcon
              :icon="item.avatar"
              class="text-foreground/60 size-8 transition-all duration-300 group-hover:scale-110"
            />
            <span class="ml-4 text-base font-medium">{{ item.name || '未分配' }}</span>
          </div>
          <div class="text-foreground/80 my-2 flex justify-between">
            <span>{{ item.title }}</span>
            <span>{{ item.mobile }}</span>
          </div>
          <div class="text-foreground/80 flex">
            {{ item.email }}
          </div>
        </div>
      </template>
    </CardContent>
  </Card>
</template>
