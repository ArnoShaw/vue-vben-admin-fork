<script setup lang="ts">
import { ref, unref } from 'vue';

import { Page, useVbenModal } from '@vben/common-ui';
import { downloadExcel } from '@vben/utils';

import { useThrottleFn } from '@vueuse/core';
import { Alert, Button, Checkbox, message, Modal, Upload, type UploadProps } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';
import { FILE_MIMES } from '#/enums/common';

import { columns } from './const-data';
import ModalHelpDesc from './modal-help-desc.vue';

defineOptions({
  name: 'CustomerProxyImport',
});

const customerInfo = ref({});
const fileList = ref<UploadProps['fileList']>([]);
const prediction = ref(false);
const submitLoading = ref(false);
const templateList = ref([
  { format: '顺友标准格式2022版(Excel)', supportAuto: '支持', template: '', helpDesc: '' },
]);

const [Table] = useVbenVxeGrid({
  gridOptions: {
    columns,
    height: 'auto',
    minHeight: 0,
    border: true,
    data: unref(templateList),
    rowConfig: {
      isHover: true,
    },
    pagerConfig: {
      autoHidden: true,
    },
  },
});

const [DescModal, ModalApi] = useVbenModal({
  connectedComponent: ModalHelpDesc,
});
// const [registerModal, { openModal }] = useModal();
// const [registerTable] = useTable({
//   columns,
//   showIndexColumn: true,
//   bordered: true,
//   canResize: false,
//   pagination: false,
//   dataSource: templateList,
// });

function beforeUpload(file: any) {
  if (FILE_MIMES.EXCEL.includes(file.type)) {
    fileList.value = [file];
    return false;
  } else {
    message.warn('请选择excel文件');
    return Upload.LIST_IGNORE;
  }
}

const handleDownload = useThrottleFn(async () => {
  // const res = await apis.common.downloadExport(
  //   { filePath: 'template/顺友标准格式2022版(Excel).xlsx' },
  //   { responseType: 'blob' },
  //   { isReturnNativeResponse: true },
  // );
  // if (res?.data) downloadExcel(res.data, `顺友标准格式2022版(Excel)`);
}, 3000);

async function handleImport() {
  const { companyId = '', userId = '' } = unref(customerInfo);
  if (!unref(fileList)?.length) return message.warning('请上传文件');
  // const freezed = await apis.packagePrediction.selectFreezeStatusById({
  //   companyId: Number(companyId),
  // });
  // if (freezed) return message.error('当前用户已被冻结，不能进行预报和撤销预报操作，请解冻后重试！');
  const formData = new FormData();
  formData.append('myFile', unref(fileList)?.[0]?.originFileObj as Blob);
  formData.append('companyId', `${companyId}`);
  formData.append('userId', `${userId}`);
  formData.append('prediction', `${unref(prediction)}`);
  submitLoading.value = true;
  try {
    const nativeData = {};
    // await apis.importPackage.uploadInit(
    //   formData,
    //   {
    //     headers: { 'Content-Type': ContentTypeEnum.FORM_DATA },
    //     timeout: 5 * 60 * 1000,
    //   },
    //   { isTransformResponse: false },
    // );
    const { code, data, msg = '导入失败', success } = nativeData || {};
    const { flg, importResultVO = {}, isSpecify, ratifyStatus } = data || {};

    if (isSpecify) {
      Modal.confirm({
        iconType: 'warning',
        title: '提示',
        content: '已确认没有在执行导入操作',
        okText: '点此解决',
        onOk: async () => {
          // await apis.importPackage.uploadEnd({ companyId, userId } as any);
          message.success('操作成功，请重新导入');
        },
      });
      return;
    }

    if (importResultVO?.errorFileUrl) {
      downloadExcel(importResultVO?.errorFileUrl, '导入错误信息');
      message.error('文件中存在无法上传的数据，具体错误信息请查看返回的错误文件');
      return;
    }

    if (flg)
      message.error(
        '当前客户已逾期签署合同导致当前账号无法预报或预约揽收。如需申请逾期签署，请联系营销总监！',
      );

    if (ratifyStatus === false) message.error('当前账号正在审核中，如有疑问，请联系我司客服人员');

    if (code !== 200 || success !== true) return message.error(msg);

    fileList.value = [];
    prediction.value = false;
    message.success('导入成功');
  } finally {
    submitLoading.value = false;
  }
}
</script>

<template>
  <Page>
    <div class="card-box p-4">
      <BasicTitle icon="mdi:import" icon-class="text-primary" title="批量导入" />
      <Table class="my-3">
        <template #template>
          <a class="vben-link" @click="handleDownload">下载Excel模板文件</a>
        </template>
        <template #helpDesc>
          <a class="vben-link" @click="ModalApi.open()">查看格式说明</a>
        </template>
      </Table>
      <div :style="{ minHeight: '120px' }" class="flex justify-between px-3">
        <Upload
          v-model:file-list="fileList"
          :before-upload="beforeUpload"
          :max-count="1"
          accept=".xls,.xlsx"
          name="file"
        >
          <Button type="primary">选择文件</Button>
        </Upload>
        <div>
          <Checkbox v-model:checked="prediction"> 导入后自动预报 </Checkbox>
          <Button :loading="submitLoading" type="primary" @click="handleImport"> 开始导入 </Button>
        </div>
      </div>
      <Alert banner>
        <template #message>
          小贴士 : 以下这些情况都会影响您的导入速度，还有可能会导致您导入失败哦。
        </template>
        <template #description>
          <p>1. 同一个公司同一时间只能允许一个人执行导入操作，单次导入最大限制为10000条。</p>
          <p>2. 导入的文件请尽量使用我们提供的模板文件。文件内的包裹数据请不要使用格式或者公式。</p>
          <p>3. 在导入的过程中，请不要关闭浏览器或者导入页面。</p>
        </template>
      </Alert>

      <DescModal />
    </div>
  </Page>
</template>
