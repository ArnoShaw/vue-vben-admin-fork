<script lang="ts" setup>
import { h, ref, unref } from 'vue';

import { useVbenModal } from '@vben/common-ui';
import { IconifyIcon } from '@vben/icons';
import { downloadExcel } from '@vben/utils';

import {
  Alert,
  Modal as AModal,
  Button,
  message,
  UploadDragger,
  type UploadFile,
} from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import { ContentTypeEnum, FILE_MIMES } from '#/constants/common';
import { apis } from '#/services/apis';

const emit = defineEmits(['success']);

const fileList = ref([]) as any;
const uploading = ref(false);
const downloading = ref(false);

const [Form, FormApi] = useVbenForm({
  schema: [
    {
      fieldName: 'platform',
      label: '所属平台',
      labelWidth: 80,
      rules: 'selectRequired',
      component: 'Select',
      componentProps: {
        options: [
          { label: 'Amazon', value: 'amazon' },
          { label: 'Ebay', value: 'ebay' },
        ],
        class: 'w-2/3',
      },
    },
  ],
  showDefaultActions: false,
});

const [Modal, ModalApi] = useVbenModal({
  title: 'Excel导入平台账号',
  confirmText: '开始导入',
  cancelText: '取消',
  draggable: true,
  onCancel: handleCancel,
  onConfirm: handleSubmit,
});

// 上传前校验
function beforeUpload(file: File) {
  // 设置最大值，则判断
  if (file.size / 1024 / 1024 >= 10) {
    message.error(`只能上传不超过10MB的文件`);
    return false;
  }

  // 设置文件后缀类型，则判断
  if (!FILE_MIMES.EXCEL.includes(file.type)) {
    message.error(`只能上传excel格式文件`);
    return false;
  }

  fileList.value.push(file);
  return false;
}

function handleRemove(file: UploadFile<any>) {
  const index = fileList.value.indexOf(file);
  const newFileList = [...fileList.value];
  newFileList.splice(index, 1);
  fileList.value = newFileList;
}

function handleCancel() {
  fileList.value = [];
  ModalApi.close();
}

// 上传文件
async function handleSubmit() {
  if (unref(fileList).length === 0) return message.warning('请选择文件');
  uploading.value = true;
  ModalApi.setState({ loading: true });
  try {
    const formData = new FormData();
    formData.append('file', unref(fileList)[0]);
    const { valid, values } = await FormApi.validate();
    if (!valid) return;
    formData.append('platform', values?.platform);
    const res = await api(formData, {
      headers: {
        'Content-type': ContentTypeEnum.FORM_DATA,
      },
    });
    const { code, data, msg } = res || {};
    if (code && code === 200) {
      emit('success');
      handleCancel();
      message.success('导入成功');
    } else {
      if (data?.errorFileUrl) {
        AModal.error({
          title: '导入失败',
          content: h('div', {}, [
            h('div', {
              innerHTML: data?.errorMsg,
              class: 'mb-2',
            }),
            h('a', {
              innerHTML: '下载错误文件',
              onClick: () => {
                downloadExcel(data.errorFileUrl);
              },
            }),
          ]),
          centered: true,
          okText: '关闭',
          okType: 'default',
        });
      } else {
        const _msg = data?.errorMsg ?? (msg || '导入失败，请重试');
        message.error(_msg);
      }
    }
  } finally {
    uploading.value = false;
    ModalApi.setState({ loading: false });
  }
}

async function downloadTemp() {
  downloading.value = true;
  try {
    const res = await apis.common.downloadExport({ filePath: 'tempUrl' }, { responseType: 'blob' });
    if (res?.data) downloadExcel(res.data, 'tempName');
  } finally {
    downloading.value = false;
  }
}
</script>

<template>
  <Modal class="w-[680px]" wrap-class-name="share-doc-batch-upload-modal">
    <Form />
    <UploadDragger
      :before-upload="beforeUpload"
      :file-list="fileList"
      :max-count="1"
      :multiple="false"
      accept=".xlsx,.xls"
      @remove="handleRemove"
    >
      <div class="flex justify-center">
        <IconifyIcon class="text-primary text-4xl" icon="ant-design:inbox-outlined" />
      </div>
      <p class="my-2">选择文件</p>
    </UploadDragger>
    <Alert :show-icon="false" banner class="mt-4 p-2">
      <template #description>
        <p>
          1. 文件大小需小于10MB。
          <Button :loading="downloading" type="link" @click="downloadTemp">下载模版</Button>
        </p>
        <p>2. 仅支持excel格式文件。</p>
      </template>
    </Alert>
  </Modal>
</template>
