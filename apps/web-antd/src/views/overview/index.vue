<script lang="ts" setup>
import { Alert } from 'ant-design-vue';

import AbnormalStatus from './components/abnormal-status.vue';
import Announcement from './components/announcement.vue';
import ServiceStaff from './components/service-staff.vue';
import UserInfo from './components/user-info.vue';
import WaybillStatus from './components/waybill-status.vue';

defineOptions({
  name: 'OverView',
});
</script>

<template>
  <div class="flex items-start overflow-x-auto p-5">
    <div class="flex-1">
      <UserInfo />
      <Alert :show-icon="false" banner class="mt-2 rounded-xl" type="error">
        <template #message>
          您存在 2 张过期的账单，需要立刻处理。
          <a class="vben-link">现在处理</a>
        </template>
      </Alert>
      <WaybillStatus />
      <AbnormalStatus />
      <ServiceStaff />
    </div>
    <Announcement />
  </div>
</template>
