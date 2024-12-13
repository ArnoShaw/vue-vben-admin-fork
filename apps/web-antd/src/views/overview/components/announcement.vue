<script setup lang="ts">
import type { defs } from '#/services/apis/api';

import { useVbenDrawer, useVbenModal } from '@vben/common-ui';

import ListDrawer from './drawer-announcement.vue';
import DetailModal from './modal-announcement.vue';

const props = withDefaults(defineProps<{ data: defs.apis.SySysNotice[] | undefined }>(), {
  data: () => [],
});

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
  DrawerApi.setData(props.data);
  DrawerApi.open();
}
</script>

<template>
  <div
    class="card-box group mt-4 flex max-h-[307px] w-1/2 flex-col overflow-hidden xl:mt-0 xl:w-full"
  >
    <div class="flex items-center justify-between border-b p-4">
      <div class="flex items-center">
        <!-- <IconParkOutlineVolumeNotice
          class="text-primary mr-2 text-xl transition-all duration-300 group-hover:scale-125"
        /> -->
        <span class="text-lg font-semibold">公告</span>
      </div>
      <span class="text-foreground/80 cursor-pointer" @click="handleOpenDrawer"> 更多 </span>
    </div>
    <div class="flex-1 overflow-y-auto">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="hover:bg-primary/20 w-full cursor-pointer justify-between border-b px-4 py-2 transition-all"
        @click="handleOpen(item)"
      >
        <p class="truncate">{{ item.title }}</p>
        <p class="text-foreground/60 shrink-0 text-[13px]">{{ item.createTime }}</p>
      </div>
    </div>
    <Modal />
    <Drawer />
  </div>
</template>
