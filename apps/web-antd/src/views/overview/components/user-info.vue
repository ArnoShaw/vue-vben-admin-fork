<script lang="ts" setup>
import type { defs } from '#/services/apis/api';

import { useRoute, useRouter } from 'vue-router';

import { F7MoneyYenCircle, HeroiconsCreditCard, IonWalletOutline } from '@vben/icons';
import { preferences } from '@vben/preferences';
import { useUserStore } from '@vben/stores';

import { Avatar, Button } from 'ant-design-vue';

withDefaults(defineProps<{ data: defs.apis.OverviewVo | undefined }>(), {
  data: () => ({}),
});
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
</script>
<template>
  <div class="card-box flex justify-between">
    <div class="flex w-1/4 min-w-[255px] px-4 py-6">
      <Avatar
        :alt="userStore.userInfo?.userName"
        :src="userStore.userInfo?.headPortraitPath || preferences.app.defaultAvatar"
        class="size-20 shrink-0"
      />
      <div class="ml-6 mt-0 flex max-w-[400px] flex-col">
        <h1 class="break-words text-xl font-semibold">
          {{ userStore.userInfo?.userName }}
        </h1>
        <div class="mb-4 mt-2 h-[21px]">
          <a
            v-if="route.name === 'Overview'"
            class="vben-link text-[13px]"
            @click="router.push({ name: 'SettingAccountInfo' })"
          >
            修改个人信息 >
          </a>
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
      <span v-for="item in data?.foreignAccountList" :key="item.currencySymbol">
        {{ `${item.currencySymbol} ${item.accountAsset} 元` }}
      </span>
      <Button class="mt-3 !text-xs" size="small" type="primary">充值</Button>
    </div>
    <div class="border-border group flex w-1/4 min-w-[180px] flex-col items-center border-r p-4">
      <HeroiconsCreditCard
        class="text-primary size-10 transition-all duration-300 group-hover:scale-125"
      />
      <span class="text-foreground/80 mt-1">信用额度</span>
      <span class="mt-2">{{ `¥ ${data?.accountInfo?.companyCreditLimit || 0} 元` }}</span>
      <span v-for="item in data?.foreignAccountList" :key="item.currencySymbol">
        {{ `${item.currencySymbol} ${item.creditLimitAmount} 元` }}
      </span>
      <p class="mt-3 w-full"></p>
    </div>
    <div class="border-border group flex w-1/4 min-w-[180px] flex-col items-center p-4">
      <IonWalletOutline
        class="text-primary size-10 transition-all duration-300 group-hover:scale-125"
      />
      <span class="text-foreground/80 mt-1">可用额度</span>
      <span class="mt-2">{{ `¥ ${data?.accountInfo?.companyUsableCredit || 0} 元` }}</span>
      <span v-for="item in data?.foreignAccountList" :key="item.currencySymbol">
        {{ `${item.currencySymbol} ${item.usableCreditAmount} 元` }}
      </span>
      <p class="mt-3 w-full"></p>
    </div>
  </div>
</template>
