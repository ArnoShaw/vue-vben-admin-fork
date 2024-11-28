<script lang="ts" setup>
import { ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';

import BasicTitle from '#/components/basic-title.vue';
import Description from '#/components/description.vue';

import { itemAudit, itemClaim, itemPackage } from './const-data';

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
  title: '查看资料',
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
    <BasicTitle class="before mb-2 !text-base" title="包裹信息" />
    <Description :data="data" :items="itemPackage" :options="descOptions" />
    <BasicTitle class="before mb-2 mt-3 !text-base" title="理赔信息" />
    <Description :data="data" :items="itemClaim" :options="descOptions" />
    <BasicTitle class="before mb-2 mt-3 !text-base" title="审核信息" />
    <Description :data="data" :items="itemAudit" :options="descOptions" />
  </Drawer>
</template>
