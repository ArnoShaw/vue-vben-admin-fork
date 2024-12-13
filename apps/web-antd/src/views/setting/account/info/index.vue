<script setup lang="ts">
import type { defs } from '#/services/apis/api';

import { ref, unref } from 'vue';

import { Page, useVbenModal } from '@vben/common-ui';
import { useUserStore } from '@vben/stores';

import { Button, InputNumber } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import BasicTitle from '#/components/basic-title.vue';
import { apis } from '#/services/apis';
import ServiceStaff from '#/views/overview/components/service-staff.vue';
import UserInfo from '#/views/overview/components/user-info.vue';

import { baseSchema } from './const-data';
import ModalBindMobile from './modal-bind-mobile.vue';

defineOptions({
  name: 'SettingAccountInfo',
});

const userStore = useUserStore();

const info = ref<defs.apis.OverviewVo>({});
const detail = ref<defs.apis.SyCCompanyVo>({});

const [Modal, ModalApi] = useVbenModal({
  connectedComponent: ModalBindMobile,
});

const [Form, FormApi] = useVbenForm({
  schema: baseSchema,
  wrapperClass: 'grid-cols-12',
  submitButtonOptions: { show: false },
  resetButtonOptions: { show: false },
  commonConfig: {
    formItemClass: 'col-span-6',
    componentProps: {
      class: 'w-full',
    },
  },
});

async function getInfo() {
  const res = (await apis.home.overview({})) as any;
  info.value = res || {};
}
async function getDetail() {
  const res = (await apis.home.completeCompanyDetail({})) as any;
  const { userName = '', userCode = '' } = userStore.userInfo || {};
  const { mobile } = unref(info).accountInfo || {};
  detail.value = res || {};
  FormApi.setValues({ ...unref(detail), ...unref(detail).detail, userName, userCode, mobile });
}

getInfo();

getDetail();

function handleSubmit() {
  FormApi.validate();
}
</script>

<template>
  <Page auto-content-height content-class="!p-0">
    <div class="absolute h-full w-full overflow-auto">
      <div class="min-w-[830px] p-4">
        <UserInfo :data="info" />
        <ServiceStaff :data="info" />
        <div class="card-box mt-4 rounded-b-none p-4">
          <BasicTitle icon="tdesign:user" icon-class="text-primary" title="顺友用户信息" />
          <Form class="mt-4">
            <template #mobile>
              <a class="vben-link" @click="ModalApi.open()">未绑定</a>
            </template>
            <template #moneyRemindLimit="slotProps">
              可用余额<span class="mx-2">&lt;</span>
              <InputNumber
                v-bind="slotProps"
                :max="99999999.99"
                :min="0"
                :precision="2"
                class="mr-1 !w-[120px]"
              />时，发送邮件给财务联系人
            </template>
          </Form>
        </div>
        <div
          class="bg-card z-100 border-border sticky bottom-0 mt-2 rounded-xl rounded-t-none border p-2 text-center"
        >
          <Button type="primary" @click="handleSubmit">保存</Button>
        </div>
      </div>
    </div>
    <Modal />
  </Page>
</template>
