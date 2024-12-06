<script lang="ts" setup>
import { ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import Description from '#/components/description.vue';

import { itemPayment } from '../const-data';

const descOptions = {
  column: 1,
  contentStyle: {
    whiteSpace: 'pre-line',
    width: '680px',
  },
  labelMinWidth: 140,
};

const data = ref();

const [Modal, ModalApi] = useVbenModal({
  title: '支付信息',
  draggable: true,
  onOpenChange(isOpen) {
    if (isOpen) {
      const res: any = ModalApi.getData();
      data.value = res;
    }
  },
});
</script>
<template>
  <Modal class="w-[680px]">
    <Description :data="data" :items="itemPayment" :options="descOptions" />
  </Modal>
</template>
