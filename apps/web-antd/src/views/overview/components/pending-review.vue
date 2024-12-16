<script lang="ts" setup>
import type { defs } from '#/services/apis/api';

import { computed, unref } from 'vue';

import { useUserStore } from '@vben/stores';

import { Button } from 'ant-design-vue';

import Announcement from './announcement.vue';
import UserInfo from './user-info.vue';

withDefaults(defineProps<{ data: defs.apis.OverviewVo | undefined }>(), {
  data: () => ({}),
});

const emit = defineEmits(['goSubmit']);

const userStore = useUserStore();

const status = computed(() => userStore.companyInfo?.ratifyStatus);

const getTitle = computed(() => {
  return unref(status) === 0
    ? '您的账号未完善公司资料，无法审核，请立即进行完善'
    : // eslint-disable-next-line unicorn/no-nested-ternary
      unref(status) === 1
      ? '您的账号处于审批状态，暂时无法使用。'
      : `您的账号审批失败，失败原因【${userStore.companyInfo?.ratifyMemo}】，请重新填写资料后再提交审批`;
});
</script>
<template>
  <div class="flex h-full flex-1 flex-col">
    <UserInfo :data="data" />
    <div class="card-box mt-4 p-8 text-center">
      <template v-if="userStore.companyInfo">
        <p class="mb-8 text-lg text-red-500">{{ getTitle }}</p>
        <Button v-if="status !== 1" type="primary" @click="emit('goSubmit')">
          {{ status === 0 ? '完善公司资料' : '重新填写公司资料' }}
        </Button>
        <p v-else>请耐心等待我司工作人员为您开通。</p>
        <p class="text-foreground/80 mt-8">
          如果您在完善公司资料的过程中存在疑问，请尽快与我司联系
        </p>
        <p class="text-foreground/80 mt-4">我司官方业务热线：400-607-5388</p>
      </template>
    </div>
    <Announcement :data="data?.noticeList" class="!mt-4 !max-h-max min-h-[125px] !w-full flex-1" />
  </div>
</template>
