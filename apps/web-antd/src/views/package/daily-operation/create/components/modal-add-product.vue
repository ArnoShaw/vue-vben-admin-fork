<script lang="ts" setup>
import { computed, ref, unref } from 'vue';

import { useVbenModal } from '@vben/common-ui';
import { cloneDeep } from '@vben/utils';

import Decimal from 'decimal.js';

import { useVbenForm } from '#/adapter/form';
import { ActionEnum } from '#/constants/common';

import { productSchema } from '../const-data';

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
    labelWidth: 135,
    componentProps: {
      class: 'w-full',
    },
  },
  schema: productSchema,
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
  const values: any = cloneDeep(await FormApi.getValues()) || {};
  const {
    // customCode,
    // declareCnName = '',
    // declareEnName = '',
    declarePrice = 0,
    quantity = 0,
  } = values as any;
  // if (!customCode) {
  //   const code = await apis.customsCode.matchCustomsCode({ declareCnName, declareEnName });
  //   if (code) values.customCode = code;
  // }
  values.totalPrice = Number(new Decimal(declarePrice || 0).mul(new Decimal(quantity || 0)));
  emit('success', values, unref(row));
  ModalApi.close();
}
</script>
<template>
  <Modal :title="getTitle" class="w-[680px]">
    <Form>
      <template #totalPrice="slotProps">
        {{ slotProps.value }}
      </template>
    </Form>
  </Modal>
</template>
