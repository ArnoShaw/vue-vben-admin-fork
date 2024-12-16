<script lang="ts" setup>
import { ref, unref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import { Button, message, Textarea } from 'ant-design-vue';

const emit = defineEmits(['success']);

const text = ref('');
const history = ref<any>({});
const countryList = ref<any>([]);
const keys = ref(['姓名', '电话', '手机', '国家', '省州', '城市', '邮编', '地址1', '地址2']);
const paramKeys = [
  'recipientName',
  'recipientPhone',
  'recipientMobile',
  'recipientCountryCode',
  'recipientState',
  'recipientCity',
  'recipientPostCode',
  'recipientAddress1',
  'recipientAddress2',
];

const [Modal, ModalApi] = useVbenModal({
  title: '地址智能粘贴',
  draggable: true,

  onConfirm() {
    handleSubmit();
  },
  onOpenChange(isOpen) {
    if (isOpen) {
      text.value = '';
      if (countryList.value.length === 0) getCountryList();
      try {
        history.value = JSON.parse(localStorage.getItem('_RECIPIENT_COUNTRY_CODE_') || '') || {};
      } catch {}
    }
  },
});

async function getCountryList() {
  // countryList.value = await apis.common.getCountryList({});
}

function handlePaste() {
  text.value = '';
  paramKeys.forEach((key) => {
    if (key in unref(history)) {
      text.value += `${unref(history)[key]}\n`;
    }
  });
}

function handleSubmit() {
  const vals = unref(text).split(/\r|\n/);
  const info: any = {};
  vals.forEach((t, i) => {
    info[paramKeys[i] ?? ''] = t.trim();
  });
  const { recipientCountryCode, recipientName } = info;
  if (recipientCountryCode) {
    const countryCode = unref(countryList).find(
      (item: any) => item.value === recipientCountryCode || item.label === recipientCountryCode,
    )?.countryCode;
    if (!countryCode) return message.warning('收件人国家未能识别');
  }
  if (recipientName) {
    localStorage.setItem('_RECIPIENT_COUNTRY_CODE_', JSON.stringify(info));
  }
  emit('success', info);
  ModalApi.close();
}
</script>
<template>
  <Modal class="w-[680px]">
    <div class="flex px-3 py-0 text-sm">
      <div>
        <p class="mb-2 font-semibold">收件信息</p>
        <div class="flex">
          <div class="flex flex-col pt-[5px] leading-[22px]">
            <span v-for="v in keys" :key="v" class="w-[50px]">{{ v }}</span>
          </div>
          <Textarea v-model:value="text" :rows="9" class="w-[400px]" />
        </div>
      </div>
      <div class="ml-7 flex-1">
        <p class="font-semibold">历史记录</p>
        <Button v-if="history?.recipientName" type="link" @click="handlePaste">
          {{ history?.recipientName }}
        </Button>
      </div>
    </div>
  </Modal>
</template>
