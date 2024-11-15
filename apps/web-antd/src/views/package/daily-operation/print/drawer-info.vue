<script lang="ts" setup>
import { useVbenDrawer } from '@vben/common-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';
import Description from '#/components/description.vue';

import {
  declareColumns,
  descItemBasic,
  descItemRecipient,
  descItemSender,
  descItemShipping,
  logColumns,
} from './const-data';

const descOptions = {
  titleSpan: true,
  column: 2,
  labelStyle: {
    width: '120px',
  },
  contentStyle: {
    whiteSpace: 'pre-line',
    width: '320px',
  },
  labelMinWidth: 80,
};

// const id = ref(0);

const [TableDeclare] = useVbenVxeGrid({
  class: 'h-auto',
  gridClass: 'p-0',
  gridOptions: {
    columns: declareColumns,
    border: true,
    minHeight: 200,
    maxHeight: 500,
    columnConfig: {
      minWidth: 80,
    },
    rowConfig: {
      isHover: true,
    },
    pagerConfig: {
      autoHidden: true,
    },
  },
});

const [TableLog] = useVbenVxeGrid({
  class: 'h-auto',
  gridClass: 'p-0',
  gridOptions: {
    columns: logColumns,
    border: true,
    minHeight: 200,
    maxHeight: 500,
    rowConfig: {
      isHover: true,
    },
    pagerConfig: {
      autoHidden: true,
    },
  },
});

// const [registerDeclareTable, { reload: reloadDeclare }] = useTable({
//   api: apis.viewPackage.loadDeclareDetil,
//   beforeFetch: handleBeforeFetch,
//   columns: declareColumns,
//   immediate: false,
//   bordered: true,
//   showIndexColumn: false,
//   isCanResizeParent: true,
//   minHeight: 300,
// });

// const [registerLogTable, { reload: reloadLog }] = useTable({
//   api: apis.viewPackage.loadPackageOperationDetail,
//   beforeFetch: handleBeforeFetch,
//   columns: logColumns,
//   immediate: false,
//   bordered: true,
//   showIndexColumn: false,
//   isCanResizeParent: true,
//   minHeight: 300,
// });

// 获取详情，渲染详情
// async function renderDetail() {
//   changeLoading(true);
//   const api = apis.viewPackage.loadPackageView;
//   const res: defs.apis.PackageInfoVO = await api({
//     packageId: unref(id),
//     companyId: unref(companyId),
//   });
//   detail.value = res || {};
//   reloadDeclare();
//   reloadLog();
//   changeLoading(false);
// }

// function handleBeforeFetch() {
//   return { packageId: unref(id), companyId: unref(companyId) };
// }
const [Drawer] = useVbenDrawer({
  title: '包裹详情',
  onOpenChange(isOpen) {
    if (isOpen) {
      // id.value = data?.id;
      // renderDetail();
    }
  },
});
const data = {};
</script>

<template>
  <Drawer class="w-[70%]">
    <BasicTitle class="before mb-2 text-base" title="顺友流水号" />
    <Description :data="data" :items="descItemBasic" :options="descOptions" class="!-mt-1" />
    <BasicTitle class="before mb-2 mt-4 text-base" title="收件人信息" />
    <Description :data="data" :items="descItemRecipient" :options="descOptions" />
    <BasicTitle class="before mb-2 mt-4 text-base" title="寄件人信息" />
    <Description :data="data" :items="descItemSender" :options="descOptions" />
    <BasicTitle class="before mb-2 mt-4 text-base" title="物流信息" />
    <Description :data="data" :items="descItemShipping" :options="descOptions" />
    <BasicTitle class="before mb-2 mt-4 text-base" title="报关信息" />
    <TableDeclare />
    <BasicTitle class="before mb-2 mt-4 text-base" title="包裹日志" />
    <TableLog />
  </Drawer>
</template>
