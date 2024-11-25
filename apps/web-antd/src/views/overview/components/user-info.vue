<script lang="ts" setup>
import { F7MoneyYenCircle, HeroiconsCreditCard, IonWalletOutline } from '@vben/icons';
import { preferences } from '@vben/preferences';
import { useUserStore } from '@vben/stores';

import { Avatar, Button } from 'ant-design-vue';

const userStore = useUserStore();
</script>
<template>
  <div class="card-box flex flex-wrap justify-between">
    <div class="flex flex-wrap px-4 py-6">
      <Avatar
        :alt="userStore.userInfo?.userName"
        :src="userStore.userInfo?.headPortraitPath || preferences.app.defaultAvatar"
        class="size-20"
      />
      <div class="flex max-w-[400px] flex-col md:ml-6 md:mt-0">
        <h1 class="text-md break-words font-semibold md:text-xl">
          {{ userStore.userInfo?.userName }}
        </h1>
        <a class="vben-link">修改个人信息 ></a>
        <span class="text-foreground/80 mt-1">
          上次登录时间：{{ userStore.userInfo?.lastLoginTime }}
        </span>
      </div>
    </div>
    <div class="flex justify-end">
      <div
        class="border-border group flex min-w-[200px] flex-col items-center border-l border-r p-4"
      >
        <F7MoneyYenCircle
          class="text-primary size-10 transition-all duration-300 group-hover:scale-125"
        />
        <span class="text-foreground/80 mt-1">账户余额</span>
        <span class="mt-2">¥4423432.34 元</span>
        <span class="mt-2">H232344.34 元</span>
        <span class="mb-3 mt-2">$626426.34 元</span>
        <Button class="!text-xs" size="small" type="primary">充值</Button>
      </div>
      <div class="border-border group flex min-w-[200px] flex-col items-center border-r p-4">
        <HeroiconsCreditCard
          class="text-primary size-10 transition-all duration-300 group-hover:scale-125"
        />
        <span class="text-foreground/80 mt-1">信用额度</span>
        <span class="mt-2">¥44432.34 元</span>
        <span class="mt-2">H2344.34 元</span>
        <span class="mb-3 mt-2">$6266.34 元</span>
      </div>
      <div class="border-border group flex min-w-[200px] flex-col items-center p-4">
        <IonWalletOutline
          class="text-primary size-10 transition-all duration-300 group-hover:scale-125"
        />
        <span class="text-foreground/80 mt-1">可用额度</span>
        <span class="mt-2">¥44232.34 元</span>
        <span class="mt-2">H2344.34 元</span>
        <span class="mb-3 mt-2">$6266.34 元</span>
      </div>
    </div>
  </div>
</template>
