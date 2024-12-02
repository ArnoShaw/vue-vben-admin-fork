<script setup lang="ts">
import BasicTitle from '#/components/basic-title.vue';
import ServiceStaff from '#/views/overview/components/service-staff.vue';
import UserInfo from '#/views/overview/components/user-info.vue';
</script>

<template>
  <div class="p-5">
    <UserInfo />
    <ServiceStaff />
    <div class="card-box mt-4 p-5">
      <BasicTitle icon="tdesign:user" icon-class="text-primary" title="顺友用户信息" />
    </div>
  </div>
</template>
