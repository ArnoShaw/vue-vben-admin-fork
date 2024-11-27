<script lang="ts" setup>
import { ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import { Select, Textarea } from 'ant-design-vue';

const emit = defineEmits(['success']);

const text = ref('');
const type = ref(1);
const options = [
  {
    label: '顺友流水号',
    value: 1,
  },
  {
    label: '客户订单号',
    value: 2,
  },
];

const [Modal, ModalApi] = useVbenModal({
  title: '修改预报重量',
  draggable: true,

  onConfirm() {
    handleSubmit();
  },
  onOpenChange(isOpen) {
    if (isOpen) {
      text.value = '';
    }
  },
});

function handleSubmit() {
  emit('success');
  ModalApi.close();
}
</script>
<template>
  <Modal>
    <div class="text-sm">
      <div class="mb-1 pl-[76px]">
        <Select v-model:value="type" :options="options" class="mr-8 w-[120px]" />
        预报重量
      </div>
      <div class="flex w-full items-center">
        <span class="mr-3 shrink-0 font-medium">Excel数据</span>
        <Textarea v-model:value="text" :rows="9" placeholder="一次导入不能超过100条" />
      </div>
      <div class="my-4 mb-8 flex">
        <span class="shrink-0 font-medium">导入结果：</span>
        <div class="text-red-500" style="word-break: break-word"></div>
      </div>
    </div>
  </Modal>
</template>
