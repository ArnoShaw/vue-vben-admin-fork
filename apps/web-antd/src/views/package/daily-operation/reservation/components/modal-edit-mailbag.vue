<script lang="ts" setup>
import { ref, unref } from 'vue';

import { useVbenModal } from '@vben/common-ui';
import { cloneDeep } from '@vben/utils';

import { useVbenForm } from '#/adapter/form';

import { editSchema } from '../const-data';

const emit = defineEmits(['success']);

const row = ref({});

const [Form, FormApi] = useVbenForm({
  wrapperClass: 'grid-cols-12',
  submitButtonOptions: { show: false },
  resetButtonOptions: { show: false },
  commonConfig: {
    labelWidth: 80,
    componentProps: {
      class: 'w-full',
    },
  },
  schema: editSchema,
});

const [Modal, ModalApi] = useVbenModal({
  draggable: true,
  onConfirm: async () => {
    await handleSubmit();
  },

  onOpenChange(isOpen) {
    if (isOpen) {
      const data = ModalApi.getData() || {};
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
  const values: any = cloneDeep(await FormApi.getValues()) || {};
  emit('success', values, unref(row));
  ModalApi.close();
}
</script>
<template>
  <Modal title="编辑预约揽收邮袋">
    <Form>
      <template #mailbagcode="slotProps">
        {{ slotProps.value }}
      </template>
    </Form>
  </Modal>
</template>
