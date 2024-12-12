<script lang="ts" setup>
import { ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';

import BasicTitle from '#/components/basic-title.vue';
import Description from '#/components/description.vue';

import { itemBase, itemInfo, itemPayee, itemPayer } from './const-data';

const descOptions = {
  column: 2,
  contentStyle: {
    whiteSpace: 'pre-line',
    width: '760px',
  },
  labelMinWidth: 100,
};

const data = ref();

const [Drawer, DrawerApi] = useVbenDrawer({
  title: '充值信息',
  showConfirmButton: false,
  cancelText: '关闭',
  onOpenChange(isOpen) {
    if (isOpen) {
      const res: any = DrawerApi.getData();
      data.value = res;
    }
  },
});
</script>
<template>
  <Drawer class="w-[760px]">
    <BasicTitle class="before mb-2 !text-base" title="基本信息" />
    <Description :data="data" :items="itemBase" :options="descOptions" />
    <BasicTitle class="before mb-2 mt-3 !text-base" title="付款方信息" />
    <Description :data="data" :items="itemPayer" :options="descOptions" />
    <BasicTitle class="before mb-2 mt-3 !text-base" title="交易信息" />
    <Description :data="data" :items="itemInfo" :options="descOptions" />
    <BasicTitle class="before mb-2 mt-3 !text-base" title="收款方信息" />
    <Description :data="data" :items="itemPayee" :options="descOptions" />
  </Drawer>
</template>
