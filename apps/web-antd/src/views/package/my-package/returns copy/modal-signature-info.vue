<script lang="ts" setup>
import type { DescItem } from '#/constants/common';

import { h, ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';
import { formatDateTime } from '@vben/utils';

import { Image } from 'ant-design-vue';

import Description from '#/components/description.vue';

// import { apis } from '@/services/apis';

const itemBasic: DescItem[] = [
  { label: '签收日期', field: 'time', render: (val) => formatDateTime(val) },
  {
    label: '签收图片',
    field: 'img',
    render(val) {
      return h(Image, { src: val });
    },
  },
];

const descOptions = {
  column: 1,
  labelStyle: {
    width: '60px',
  },
  contentStyle: {
    whiteSpace: 'pre-line',
    width: '760px',
  },
  labelMinWidth: 60,
};

const data = ref({
  time: Date.now(),
  img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
});

const [Modal, ModalApi] = useVbenModal({
  title: '查看签名',
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
  <Modal class="w-[760px]">
    <Description :data="data" :items="itemBasic" :options="descOptions" />
  </Modal>
</template>
