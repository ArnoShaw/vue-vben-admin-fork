<script lang="ts" setup>
interface Props {
  companyName: string;
  companySiteLink?: string;
  date: string;
  icp?: string;
  icpLink?: string;
}

defineOptions({
  name: 'Copyright',
});

withDefaults(defineProps<Props>(), {
  companyName: 'Vben Admin',
  companySiteLink: '',
  date: '2024',
  icp: '',
  icpLink: '',
});
</script>

<template>
  <div class="text-md text-center">
    <p>Copyright 2008-{{ new Date().getFullYear() }} SunYou Logistics All Rights Reserved.</p>
    <div class="mt-1 flex">
      <p>深圳市顺友跨境物流股份有限公司</p>
      <p class="mx-2">版权所有</p>
      <a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备2021106733号</a>
    </div>
  </div>
</template>
