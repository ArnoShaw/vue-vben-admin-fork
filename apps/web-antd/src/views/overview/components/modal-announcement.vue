<script setup lang="ts">
import { ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

const notice = ref<any>({});

const [Modal, ModalApi] = useVbenModal({
  title: '公告',
  draggable: true,
  onOpenChange(isOpen) {
    isOpen ? (notice.value = ModalApi.getData() || {}) : (notice.value = {});
  },
});
</script>

<template>
  <Modal class="w-[760px]">
    <p class="text-center font-semibold">{{ notice.title }}</p>
    <p class="mb-2 text-right text-sm">{{ notice.time }}</p>
    <div class="whitespace-pre-wrap text-sm" v-html="notice.content"></div>
  </Modal>
</template>
