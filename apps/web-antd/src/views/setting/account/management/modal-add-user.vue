<script lang="ts" setup>
import { computed, ref, unref } from 'vue';

import { useVbenModal } from '@vben/common-ui';
import { cloneDeep } from '@vben/utils';

import { message } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import { ActionEnum } from '#/constants/common';
import { apis } from '#/services/apis';

import { addSchema } from './const-data';

const emit = defineEmits(['success']);

const row = ref({});
const actionType = ref<ActionEnum>();

const isAdd = computed(() => unref(actionType) === ActionEnum.ADD);

const getTitle = computed(() => {
  return unref(isAdd) ? '新增' : '编辑';
});

const [Form, FormApi] = useVbenForm({
  wrapperClass: 'grid-cols-12',
  submitButtonOptions: { show: false },
  resetButtonOptions: { show: false },
  commonConfig: {
    componentProps: {
      class: 'w-full',
    },
  },
  schema: addSchema,
});

const [Modal, ModalApi] = useVbenModal({
  draggable: true,
  onConfirm: async () => {
    await handleSubmit();
  },

  onOpenChange(isOpen) {
    if (isOpen) {
      const data = ModalApi.getData() || {};
      actionType.value = data?.actionType;
      row.value = data?.row;
      if (data?.row) {
        FormApi.setValues(cloneDeep(unref(row)));
      }
    }
  },
});

async function handleSubmit() {
  const { valid } = await FormApi.validate();
  if (!valid) return;
  const values: any = await FormApi.getValues();
  ModalApi.setState({ confirmLoading: true });
  const api = unref(isAdd) ? apis.user.addSubUser : apis.user.editSubUser;
  try {
    await api({ ...unref(row), ...values });
    emit('success');
    ModalApi.close();
    message.success('操作成功');
  } finally {
    ModalApi.setState({ confirmLoading: false });
  }
}
</script>
<template>
  <Modal :title="getTitle">
    <Form>
      <template #totalPrice="slotProps">
        {{ slotProps.value }}
      </template>
    </Form>
  </Modal>
</template>
