<script lang="ts" setup>
import type { defs } from '#/services/apis/api';

import { computed, unref } from 'vue';

import { F7MoneyYenCircle, HeroiconsCreditCard, IonWalletOutline } from '@vben/icons';
import { preferences } from '@vben/preferences';
import { useUserStore } from '@vben/stores';

import { Avatar, Button } from 'ant-design-vue';

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
    <div class="card-box flex justify-between">
      <div class="flex w-1/4 min-w-[255px] px-4 py-6">
        <Avatar
          :alt="userStore.userInfo?.userName"
          :src="userStore.userInfo?.headPortraitPath || preferences.app.defaultAvatar"
          class="size-20 shrink-0"
        />
        <div class="ml-6 mt-0 flex flex-col">
          <h1 class="text-md break-words text-xl font-semibold">
            {{ userStore.companyInfo?.companyName }}
          </h1>
          <div class="mb-4 mt-2 h-[21px]">
            <span class="text-[13px]">
              {{ userStore.companyInfo?.companyCode }}
            </span>
          </div>
          <div class="text-foreground/80 text-[13px]">
            上次登录时间：
            <p>{{ userStore.userInfo?.lastLoginTime }}</p>
          </div>
        </div>
      </div>
      <div
        class="border-border group flex w-1/4 min-w-[180px] flex-col items-center border-l border-r px-2 py-4"
      >
        <F7MoneyYenCircle
          class="text-primary size-10 transition-all duration-300 group-hover:scale-125"
        />
        <span class="text-foreground/80 mt-1">账户余额</span>
        <span class="mt-2">{{ `¥ ${data?.accountInfo?.companyAsset || 0} 元` }}</span>
      </div>
      <div class="border-border group flex w-1/4 min-w-[180px] flex-col items-center border-r p-4">
        <HeroiconsCreditCard
          class="text-primary size-10 transition-all duration-300 group-hover:scale-125"
        />
        <span class="text-foreground/80 mt-1">信用额度</span>
        <span class="mt-2">{{ `¥ ${data?.accountInfo?.companyCreditLimit || 0} 元` }}</span>
      </div>
      <div class="border-border group flex w-1/4 min-w-[180px] flex-col items-center p-4">
        <IonWalletOutline
          class="text-primary size-10 transition-all duration-300 group-hover:scale-125"
        />
        <span class="text-foreground/80 mt-1">可用额度</span>
        <span class="mt-2">{{ `¥ ${data?.accountInfo?.companyUsableCredit || 0} 元` }}</span>
      </div>
    </div>
    <div class="card-box mt-2 flex-1 p-8 text-center">
      <p class="mb-8 text-lg text-red-500">{{ getTitle }}</p>
      <Button v-if="status !== 1" type="primary" @click="emit('goSubmit')">
        {{ status === 0 ? '完善公司资料' : '重新填写公司资料' }}
      </Button>
      <p v-else>请耐心等待我司工作人员为您开通。</p>
      <p class="text-foreground/80 mt-8">如果您在完善公司资料的过程中存在疑问，请尽快与我司联系</p>
      <p class="text-foreground/80 mt-4">我司官方业务热线：400-607-5388</p>
    </div>
  </div>
</template>
