<script setup lang="ts">
import { useVbenModal } from '@vben/common-ui';

import { useVbenForm } from '#/adapter/form';

import { addSchema } from './const-data';

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
  title: '新增账号',
  draggable: true,
  async onConfirm() {
    const { valid } = await FormApi.validate();
    if (!valid) return;
    ModalApi.close();
  },
});
</script>

<template>
  <Modal>
    <Form />
  </Modal>
</template>
