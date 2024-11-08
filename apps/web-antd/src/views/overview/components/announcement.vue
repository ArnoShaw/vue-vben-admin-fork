<script setup lang="ts">
import { unref } from 'vue';

import { useVbenDrawer, useVbenModal } from '@vben/common-ui';
import { IconParkOutlineVolumeNotice } from '@vben/icons';

import ListDrawer from './drawer-announcement.vue';
import DetailModal from './modal-announcement.vue';

const list = [
  {
    title: 'TITLE 1111111111111111111111111111',
    content: '<img class="ant-image-img" src="https://aliyuncdn.antdv.com/vue.png">',
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

const [Drawer, DrawerApi] = useVbenDrawer({
  connectedComponent: ListDrawer,
});

function handleOpen(item: any) {
  ModalApi.setData(item);
  ModalApi.open();
}

function handleOpenDrawer() {
  DrawerApi.setData(unref(list));
  DrawerApi.open();
}
</script>

<template>
  <div
    class="card-box group ml-4 flex max-h-[calc(100vh-172px)] w-1/4 min-w-[300px] flex-col overflow-hidden"
  >
    <div class="flex items-center justify-between border-b px-4 py-2">
      <div class="flex items-center">
        <IconParkOutlineVolumeNotice
          class="text-primary mr-2 text-xl transition-all duration-300 group-hover:scale-125"
        />
        <span class="text-lg font-semibold">公告</span>
      </div>
      <span class="text-foreground/80 cursor-pointer" @click="handleOpenDrawer"> 更多 </span>
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
    <Drawer />
  </div>
</template>
