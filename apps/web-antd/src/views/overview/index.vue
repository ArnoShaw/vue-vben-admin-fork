<script lang="ts" setup>
import type { defs } from '#/services/apis/api';

import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import { Page } from '@vben/common-ui';
import { useUserStore } from '@vben/stores';

import { Alert } from 'ant-design-vue';

import { apis } from '#/services/apis';

import AbnormalStatus from './components/abnormal-status.vue';
import Announcement from './components/announcement.vue';
import PendingReview from './components/pending-review.vue';
import QuickNav from './components/quick-nav.vue';
import ServiceStaff from './components/service-staff.vue';
import UserInfo from './components/user-info.vue';
import WaybillStatus from './components/waybill-status.vue';
import FormSubmit from './form-submit.vue';

defineOptions({
  name: 'Overview',
});

const router = useRouter();
const userStore = useUserStore();

const info = ref<defs.apis.OverviewVo>();
const showForm = ref(false);

const ratifySuccess = computed(() => userStore.companyInfo?.ratifyStatus === 3);

async function getInfo() {
  const res = (await apis.home.overview({})) as any;
  info.value = res || {};
}

getInfo();
</script>

<template>
  <Page auto-content-height>
    <section v-if="!showForm" class="h-full w-full min-w-[789px] items-start xl:flex">
      <template v-if="ratifySuccess">
        <div class="w-full xl:w-3/4">
          <UserInfo :data="info" />
          <Alert
            v-if="info?.accountInfo?.billCount && info?.accountInfo?.billCount > 0"
            :show-icon="false"
            banner
            class="mt-2 rounded-xl"
          >
            <template #message>
              您存在 {{ info?.accountInfo?.billCount }} 张过期的账单，需要立刻处理。
              <a class="vben-link" @click="router.push({ name: 'BillManagementBilled' })">
                现在处理
              </a>
            </template>
          </Alert>
          <Alert
            v-if="info?.accountInfo?.amountShortage"
            :show-icon="false"
            banner
            class="mt-2 rounded-xl"
          >
            <template #message>
              您的账户余额不足，请及时充值。
              <a class="vben-link"> 充值 </a>
            </template>
          </Alert>
          <WaybillStatus :data="info" />
          <AbnormalStatus :data="info" />
          <ServiceStaff :data="info" />
        </div>
        <div class="flex w-full pb-4 xl:block xl:w-1/4 xl:pb-0 xl:pl-4">
          <Announcement :data="info?.noticeList" />
          <QuickNav />
        </div>
      </template>
      <PendingReview v-else :data="info" @go-submit="showForm = true" />
    </section>
    <FormSubmit v-else />
  </Page>
</template>
