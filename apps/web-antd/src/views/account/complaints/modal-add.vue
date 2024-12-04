<script setup lang="ts">
import { ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';
import { IconifyIcon } from '@vben/icons';

import { message, Upload } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import { FILE_MIMES } from '#/constants/common';

import { addSchema } from './const-data';

const imgUrl = ref('');
const loading = ref(false);

const [Form, FormApi] = useVbenForm({
  schema: addSchema,
  wrapperClass: 'grid-cols-12',
  commonConfig: {
    formItemClass: 'col-span-11',
    labelWidth: 80,
  },
  showDefaultActions: false,
});

const [Modal, ModalApi] = useVbenModal({
  title: '投诉和建议',
  draggable: true,
  async onConfirm() {
    const { valid } = await FormApi.validate();
    if (!valid) return;
    ModalApi.close();
  },
});

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}

function beforeUpload(file: File) {
  if (![FILE_MIMES.JPG, FILE_MIMES.PNG].includes(file.type)) {
    message.warning('仅支持PNG、JPG格式图片');
    return false;
  }
  if (file.size / 1024 / 1024 > 10) {
    message.warning('图片大小不能超过10M');
    return false;
  }
  handleUpload(file);
  return false;
}

function handleUpload(file: File) {
  loading.value = true;
  getBase64(file, (base64Url: string) => {
    imgUrl.value = base64Url;
    loading.value = false;
  });
}
</script>

<template>
  <Modal class="w-[600px]">
    <Form>
      <template #complaintImage>
        <div>
          <Upload
            :before-upload="beforeUpload"
            :max-count="1"
            :show-upload-list="false"
            accept=".png,.jpg"
            list-type="picture-card"
          >
            <img v-if="imgUrl" :src="imgUrl" alt="avatar" />
            <div v-else class="text-foreground/60 text-3xl">
              <IconifyIcon v-if="loading" icon="eos-icons:bubble-loading" />
              <IconifyIcon v-else icon="ic:round-plus" />
            </div>
          </Upload>
          <span class="text-foreground/80 mr-2 text-xs"> 仅支持PNG、JPG格式图片</span>
        </div>
      </template>
    </Form>
  </Modal>
</template>
