<script lang="ts" setup>
import { computed, ref, unref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import { Alert, message } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';

const emit = defineEmits(['success']);

const apis: any = {};

const rowKeys = ref();
const customerInfo = ref();
const searchInfo = ref();
const getNumMsg = computed(() => {
  const { selectNum = 0, total = 0 } = unref(searchInfo) || {};
  return selectNum ? `${selectNum}条` : `全部${total}条`;
});

const [Modal, ModalApi] = useVbenModal({
  title: '批量修改',
  onOpenChange(isOpen) {
    if (isOpen) {
      const data = ModalApi.getData() || {};
      rowKeys.value = data?.rowKeys;
      customerInfo.value = data?.customerInfo;
      searchInfo.value = data?.searchInfo;
    }
  },
  onConfirm: () => handleSubmit(),
});

const [Form, FormApi] = useVbenForm({
  showDefaultActions: false,
  schema: [
    {
      label: '邮寄方式',
      labelWidth: 65,
      fieldName: 'modifyShippingMethodId',
      component: 'Select',
      rules: 'selectRequired',
      componentProps: {
        // api: apis.packagePrediction.modifyBatch,
        // valueField: 'shippingMethodId',
        showSearch: true,
        optionFilterProp: 'label',
        allowClear: true,
        class: 'w-full',
      },
    },
  ],
});

function formatParams() {
  const { userId, companyId } = unref(customerInfo);
  const params: any = {
    userId,
    packageIdListBO: {
      companyId,
      ...unref(searchInfo),
      packageIds: unref(rowKeys),
    },
    packageId: unref(rowKeys)[0],
    ports: 'yunwei',
  };
  Object.assign(params, FormApi.getValues());
  return params;
}

async function handleSubmit() {
  const { valid } = await FormApi.validate();
  if (!valid) return;
  const api = apis.packagePrediction.save;
  const freezed = await apis.packagePrediction.selectFreezeStatusById({
    companyId: unref(customerInfo)?.companyId,
  });
  if (freezed) return message.error('当前用户已被冻结，不能进行预报和撤销预报操作，请解冻后重试！');
  const params = formatParams();
  ModalApi.setState({ confirmLoading: true });
  try {
    const { flg } = (await api(params)) || {};
    if (flg)
      return message.error(
        '当前客户已逾期签署合同导致当前账号无法预报或预约揽收。如需申请逾期签署，请联系营销总监！',
      );
  } finally {
    ModalApi.setState({ confirmLoading: false });
  }
  message.success(`操作成功`);
  emit('success');
  ModalApi.close();
}
</script>
<template>
  <Modal>
    <Form />
    <Alert banner class="mt-4">
      <template #message> 注意事项： </template>
      <template #description>
        <p>
          1. 已选择“
          <span style="color: red"> {{ getNumMsg }} </span>”数据，
        </p>
        <p>2. 包裹必须是【等待预报】或者【预报失败】的状态。</p>
        <p>3. 为了避免数据混乱，同一个公司同一时间只能一个人执行操作。</p>
      </template>
    </Alert>
  </Modal>
</template>
