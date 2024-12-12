<script setup lang="ts">
import type { defs } from '#/services/apis/api';

import { useUserStore } from '@vben/stores';

import { apis } from '#/services/apis';

withDefaults(defineProps<{ data: defs.apis.OverviewVo | undefined }>(), {
  data: () => ({}),
});

const userStore = useUserStore();
async function getAllUsers() {
  const res = (await apis.common.getSysUserList({} as any)) as any;
  userStore.setAllUsers(res ?? []);
}
getAllUsers();

function getNickname(id: number) {
  return userStore.allUsers.find((item) => item.userId === id)?.nickname || '未分配';
}

function getMobile(id: number) {
  return userStore.allUsers.find((item) => item.userId === id)?.mobile || '';
}

function getEmail(id: number) {
  return userStore.allUsers.find((item) => item.userId === id)?.email || '';
}
</script>

<template>
  <div class="mt-4 flex h-[140px]">
    <div class="card-box px-4 py-3 transition-all hover:shadow-xl">
      <span>您的业务专员</span>
      <div class="mt-2">
        <p class="text-lg">
          {{ getNickname(data?.accountInfo?.servicePersonnel || 0) }}
        </p>
        <p>
          {{ getMobile(data?.accountInfo?.servicePersonnel || 0) }}
        </p>
      </div>
      <div class="mt-3">{{ getEmail(data?.accountInfo?.servicePersonnel || 0) }}</div>
    </div>
    <div class="card-box mx-2 px-4 py-3 transition-all hover:shadow-xl">
      <span>您的客服专员</span>
      <div class="mt-2">
        <p class="text-lg">
          {{ getNickname(data?.accountInfo?.businessPersonnel || 0) }}
        </p>
        <p>
          {{ getMobile(data?.accountInfo?.businessPersonnel || 0) }}
        </p>
      </div>
      <div class="mt-3">{{ getEmail(data?.accountInfo?.businessPersonnel || 0) }}</div>
    </div>
    <div class="card-box mr-2 px-4 py-3 transition-all hover:shadow-xl">
      <span>您的揽收专员</span>
      <div class="mt-2">
        <p class="text-lg">
          {{ getNickname(data?.accountInfo?.receivePersonnel || 0) }}
        </p>
        <p>
          {{ getMobile(data?.accountInfo?.receivePersonnel || 0) }}
        </p>
      </div>
      <div class="mt-3">{{ getEmail(data?.accountInfo?.receivePersonnel || 0) }}</div>
    </div>
    <div class="card-box px-4 py-3 transition-all hover:shadow-xl">
      <span>您的财务专员</span>
      <div class="mt-2">
        <p class="text-lg">
          {{ getNickname(data?.accountInfo?.financePersonnel || 0) }}
        </p>
        <p>
          {{ getMobile(data?.accountInfo?.financePersonnel || 0) }}
        </p>
      </div>
      <div class="mt-3">{{ getEmail(data?.accountInfo?.financePersonnel || 0) }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-box {
  flex: 1;
  color: #fff;
  word-break: break-word;
  background-repeat: no-repeat;
  background-position: right;

  &:first-of-type {
    background-color: #0d57a7;
    background-image: url('../../../assets/img/viewcard1.png');
  }

  &:nth-of-type(2) {
    background-color: #2eb042;
    background-image: url('../../../assets/img/viewcard2.png');
  }

  &:nth-of-type(3) {
    background-color: #424242;
    background-image: url('../../../assets/img/viewcard3.png');
  }

  &:last-of-type {
    background-color: #fd932b;
    background-image: url('../../../assets/img/viewcard4.png');
  }

  & > span {
    padding-bottom: 4px;
    border-bottom: 1px solid #fff;
  }
}
</style>
