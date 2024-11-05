<script setup lang="ts">
import { useVbenModal } from '@vben/common-ui';
import { IconParkOutlineVolumeNotice } from '@vben/icons';

import DetailModal from './modal-announcement.vue';

const list = [
  {
    title: 'titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    content: `1111112111424234211111212121212121212111111121114242342111112121212121212121111111211142423421111121212121212121211111112111424234211111212121212121212111111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    
    
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    11111121114242342111112121212121212121
    
    
    11111121114242342111112121212121212121
    `,
    time: '2022-01-01',
  },
  {
    title: 'title',
    content: '1111',
    time: '2022-01-01',
  },
  {
    title: 'title',
    content: '1111',
    time: '2022-01-01',
  },
  {
    title: 'title',
    content: '1111',
    time: '2022-01-01',
  },
  {
    title: 'title',
    content: '11111121114242342111112121212121212121',
    time: '2022-01-01',
  },
  {
    title: 'title',
    content: '11111121114242342111112121212121212121',
    time: '2022-01-01',
  },
];

const [Modal, ModalApi] = useVbenModal({
  connectedComponent: DetailModal,
});

function handleOpen(item: any) {
  ModalApi.setData(item);
  ModalApi.open();
}
</script>

<template>
  <div
    class="card-box group ml-4 flex max-h-[calc(100vh-172px)] w-1/4 min-w-[300px] flex-col"
  >
    <div class="flex items-center justify-between border-b px-4 py-2">
      <div class="flex items-center">
        <IconParkOutlineVolumeNotice
          class="text-primary mr-2 text-xl transition-all duration-300 group-hover:scale-125"
        />
        <span class="text-lg font-semibold">公告</span>
      </div>
      <span class="text-foreground/80 cursor-pointer">更多</span>
    </div>
    <div class="flex-1 overflow-y-auto">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="hover:bg-primary/20 flex w-full cursor-pointer justify-between border-b px-4 py-2 transition-all"
        @click="handleOpen(item)"
      >
        <span class="mr-4 truncate">{{ item.title }}</span>
        <span class="shrink-0">{{ item.time }}</span>
      </div>
    </div>
    <Modal />
  </div>
</template>
