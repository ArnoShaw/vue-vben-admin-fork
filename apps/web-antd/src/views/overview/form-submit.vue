<script setup lang="ts">
import type { Recordable } from '@vben/types';

import { reactive } from 'vue';

import { IconifyIcon } from '@vben/icons';
import { useUserStore } from '@vben/stores';

import { Alert, message, Upload } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import BasicTitle from '#/components/basic-title.vue';
import { ContentTypeEnum, FILE_MIMES } from '#/constants/common';
import { apis } from '#/services/apis';

import { baseSchema } from './const-data';

const [Form, FormApi] = useVbenForm({
  schema: baseSchema,
  wrapperClass: 'grid-cols-12',
  resetButtonOptions: { show: false },
  actionWrapperClass: 'col-span-12',
  commonConfig: {
    formItemClass: 'col-span-6',
    componentProps: {
      class: 'w-full',
    },
  },
  handleSubmit: async (values) => {
    const { businessContactName, operatorContactName, financeContactName, collectContactName } =
      values;
    if (!businessContactName && !operatorContactName && !financeContactName && !collectContactName)
      return message.warning('至少填写一位联系人');
    FormApi.setState({ submitButtonOptions: { loading: true } });
    try {
      await apis.home.submitCompanyInfo(values as any);
      message.success('提交成功');
      setTimeout(() => {
        location.reload();
      }, 3000);
    } finally {
      FormApi.setState({ submitButtonOptions: { loading: false } });
    }
  },
});

const { userCode = '', userName = '', mobile = '' } = useUserStore().userInfo || {};

const formState = reactive<Recordable>({
  idCardHeadPath: '',
  idCardHeadPathLoading: false,
  idCardEmblemPath: '',
  idCardEmblemPathLoading: false,
  certificatePath: '',
  certificatePathLoading: false,
});

async function getDetail() {
  FormApi.setState({ submitButtonOptions: { loading: true } });
  try {
    const res = ((await apis.home.completeCompanyDetail({})) as any) || {};
    const { idCardHeadPath, idCardEmblemPath, certificatePath } = res;
    formState.idCardHeadPath = idCardHeadPath;
    formState.idCardEmblemPath = idCardEmblemPath;
    formState.certificatePath = certificatePath;
    FormApi.setValues({ ...res, ...res?.detail, userName, userCode, mobile });
  } finally {
    FormApi.setState({ submitButtonOptions: { loading: false } });
  }
}

getDetail();

function beforeUpload(file: File, type: string) {
  if (![FILE_MIMES.JPG, FILE_MIMES.PNG].includes(file.type)) {
    message.warning('仅支持PNG、JPG格式图片');
    return false;
  }
  if (file.size / 1024 / 1024 > 1) {
    message.warning('图片大小不能超过1M');
    return false;
  }
  handleUpload(file, type);
  return false;
}

async function doUpload(file: File, callback: (url: string) => void) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('isWater', 'true');
  formData.append('watermarkWord', '仅限顺友物流系统注册使用');
  const { url = '' } = (await apis.common.uploadWatermark(formData, {
    headers: { 'Content-Type': ContentTypeEnum.FORM_DATA },
  })) as any;
  callback(url);
}

function handleUpload(file: File, type: any) {
  formState[`${type}Loading`] = true;
  doUpload(file, (url: string) => {
    formState[type] = url;
    FormApi.setFieldValue(type, url);
    formState[`${type}Loading`] = false;
  });
}
</script>

<template>
  <div class="card-box min-w-[820px] p-4">
    <BasicTitle icon="ant-design:form-outlined" icon-class="text-primary" title="完善资料" />
    <Alert :show-icon="false" banner class="my-2 p-2">
      <template #description>
        <p>
          您需要立刻完善资料，完善之后，顺友工作人员将在1个工作日内联系您，并为您的账号进行审核确认。
        </p>
        <p>1. 有效证件包括：营业执照（正副本均可）或身份证人像面和国徽面</p>
        <p>2. 上传的文件请使用“JPG/PNG”格式，不超过1M大小的图片，保证清晰</p>
        <p>
          3.上传成功之后，系统自动增加文字水印【仅限顺友物流系统注册使用】
          <a
            class="vben-link"
            href="https://fs.sypost.com/file/headportraitpath/system/demo.png"
            target="_blank"
          >
            点击查看示例
          </a>
        </p>
      </template>
    </Alert>
    <Form>
      <template #idCardHeadPath>
        <div>
          <Upload
            :before-upload="(file) => beforeUpload(file, 'idCardHeadPath')"
            :max-count="1"
            :show-upload-list="false"
            accept=".png,.jpg"
            list-type="picture-card"
          >
            <img v-if="formState.idCardHeadPath" :src="formState.idCardHeadPath" alt="avatar" />
            <div v-else class="text-foreground/60 text-3xl">
              <IconifyIcon v-if="formState.idCardHeadPathLoading" icon="eos-icons:bubble-loading" />
              <IconifyIcon v-else icon="ic:round-plus" />
            </div>
          </Upload>
        </div>
      </template>
      <template #idCardEmblemPath>
        <div>
          <Upload
            :before-upload="(file) => beforeUpload(file, 'idCardEmblemPath')"
            :max-count="1"
            :show-upload-list="false"
            accept=".png,.jpg"
            list-type="picture-card"
          >
            <img v-if="formState.idCardEmblemPath" :src="formState.idCardEmblemPath" alt="avatar" />
            <div v-else class="text-foreground/60 text-3xl">
              <IconifyIcon
                v-if="formState.idCardEmblemPathLoading"
                icon="eos-icons:bubble-loading"
              />
              <IconifyIcon v-else icon="ic:round-plus" />
            </div>
          </Upload>
        </div>
      </template>
      <template #certificatePath>
        <div>
          <Upload
            :before-upload="(file) => beforeUpload(file, 'certificatePath')"
            :max-count="1"
            :show-upload-list="false"
            accept=".png,.jpg"
            list-type="picture-card"
          >
            <img v-if="formState.certificatePath" :src="formState.certificatePath" alt="avatar" />
            <div v-else class="text-foreground/60 text-3xl">
              <IconifyIcon
                v-if="formState.certificatePathLoading"
                icon="eos-icons:bubble-loading"
              />
              <IconifyIcon v-else icon="ic:round-plus" />
            </div>
          </Upload>
        </div>
      </template>
    </Form>
  </div>
</template>

<style scoped></style>
