<script lang="ts" setup>
import type { defs } from '#/services/apis/api';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { Page } from '@vben/common-ui';

import { Alert } from 'ant-design-vue';

import { apis } from '#/services/apis';

import AbnormalStatus from './components/abnormal-status.vue';
import Announcement from './components/announcement.vue';
import ServiceStaff from './components/service-staff.vue';
import UserInfo from './components/user-info.vue';
import WaybillStatus from './components/waybill-status.vue';

defineOptions({
  name: 'Overview',
});

const router = useRouter();

const info = ref<defs.apis.OverviewVo>();

async function getInfo() {
  const res = (await apis.home.overview({})) as any;
  info.value = res || {};
}

getInfo();
</script>

<template>
  <Page>
    <div class="flex flex-wrap items-start">
      <div class="mb-4 min-w-[860px] flex-1">
        <UserInfo :data="info" />
        <Alert
          v-if="info?.accountInfo?.billCount && info?.accountInfo?.billCount > 0"
          :show-icon="false"
          banner
          class="mt-2 rounded-xl"
          type="error"
        >
          <template #message>
            您存在 {{ info?.accountInfo?.billCount }} 张过期的账单，需要立刻处理。
            <a class="vben-link" @click="router.push({ name: 'BillManagementBilled' })">现在处理</a>
          </template>
        </Alert>
        <WaybillStatus :data="info" />
        <AbnormalStatus :data="info" />
        <ServiceStaff :data="info" />
      </div>
      <Announcement :data="info?.noticeList" />
    </div>
  </Page>
</template>
