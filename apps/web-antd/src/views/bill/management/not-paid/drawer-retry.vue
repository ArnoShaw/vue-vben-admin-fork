<script lang="ts" setup>
import { reactive, ref } from 'vue';

import { useVbenDrawer, useVbenForm, z } from '@vben/common-ui';
import { IconifyIcon } from '@vben/icons';

import { Alert, message, Upload } from 'ant-design-vue';

import { FILE_MIMES } from '#/constants/common';

const data = ref();
const formState = reactive({
  refundUrl: '',
  tradeUrl: '',
  refundLoading: false,
  tradeLoading: false,
});

const [Form, FormApi] = useVbenForm({
  showDefaultActions: false,
  schema: [
    {
      fieldName: 'path',
      label: '上传附件',
      rules: z.string().min(1, '请上传平台退款截图'),
      component: 'VbenInput',
    },
    {
      fieldName: 'type',
      label: '理赔类型',
      rules: 'required',
      defaultValue: 1,
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '境外丢失或延误',
            value: 1,
          },
          {
            label: '境外丢失或损坏',
            value: 2,
          },
          {
            label: '重新补发',
            value: 3,
          },
          {
            label: '其他',
            value: 4,
          },
        ],
      },
    },
  ],
});

const [Drawer, DrawerApi] = useVbenDrawer({
  title: '申请理赔',
  onOpenChange(isOpen) {
    if (isOpen) {
      const res: any = DrawerApi.getData();
      data.value = res;
    }
    formState.refundUrl = '';
    formState.tradeUrl = '';
  },
  onConfirm() {
    FormApi.validate();
  },
});

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}

function handleUpload(file: File, type: string) {
  if (type === 'refund') {
    formState.refundLoading = true;
    getBase64(file, (base64Url: string) => {
      formState.refundUrl = base64Url;
      formState.refundLoading = false;
    });
  } else {
    formState.tradeLoading = true;
    getBase64(file, (base64Url: string) => {
      formState.tradeUrl = base64Url;
      formState.tradeLoading = false;
    });
  }
}

function beforeUpload(file: File, type: string) {
  if (![FILE_MIMES.JPG, FILE_MIMES.PNG].includes(file.type)) {
    message.warning('仅支持PNG、JPG格式图片');
    return false;
  }
  if (file.size / 1024 / 1024 > 10) {
    message.warning('图片大小不能超过10M');
    return false;
  }
  handleUpload(file, type);
  return false;
}
</script>
<template>
  <Drawer class="w-[760px]">
    <Form class="mt-4">
      <template #path>
        <div class="flex">
          <div>
            <Upload
              :before-upload="(file) => beforeUpload(file, 'refund')"
              :max-count="1"
              :show-upload-list="false"
              accept=".png,.jpg"
              list-type="picture-card"
            >
              <img v-if="formState.refundUrl" :src="formState.refundUrl" alt="avatar" />
              <div v-else class="text-foreground/60 text-3xl">
                <IconifyIcon v-if="formState.refundLoading" icon="eos-icons:bubble-loading" />
                <IconifyIcon v-else icon="ic:round-plus" />
              </div>
            </Upload>
            <p class="text-center text-xs text-red-500">
              *<span class="text-foreground/80 mr-2">平台退款截图</span>
            </p>
          </div>
          <div class="ml-8">
            <Upload
              :before-upload="(file) => beforeUpload(file, 'trade')"
              :max-count="1"
              :show-upload-list="false"
              accept=".png,.jpg"
              list-type="picture-card"
            >
              <img v-if="formState.tradeUrl" :src="formState.tradeUrl" alt="avatar" />
              <div v-else class="text-foreground/60 text-3xl">
                <IconifyIcon v-if="formState.tradeLoading" icon="eos-icons:bubble-loading" />
                <IconifyIcon v-else icon="ic:round-plus" />
              </div>
            </Upload>
            <p class="text-center text-xs">
              <span class="text-foreground/80 mr-2">平台交易截图</span>
            </p>
          </div>
        </div>
      </template>
    </Form>
    <Alert :show-icon="false" banner class="mt-8">
      <template #message> 注意事项： </template>
      <template #description>
        <p>1. 附件截图请上传 JPG、PNG 格式，单个图片文件大小不超过2M。</p>
        <p>2. 确保截图清晰可见网址，体现具体退款原因、退款金额和对应的追踪号/顺友流水号。</p>
        <p>3. 单个包裹申请理赔的次数不超过3次。</p>
      </template>
    </Alert>
  </Drawer>
</template>
