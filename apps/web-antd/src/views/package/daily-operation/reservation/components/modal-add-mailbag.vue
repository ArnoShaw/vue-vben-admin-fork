<script lang="ts" setup>
import { ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import { Button, Input, InputNumber, Select } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';

import { addColumns } from '../const-data';

const emit = defineEmits(['success']);

// const companyId = ref();
// const rowData = ref();
const shippingMethodOptions = ref<any>([
  { value: 111, label: 111 },
  { value: 222, label: 222 },
]);
const chargeZoneOptions = ref<any>([]);

// const [TableTotal] = useVbenVxeGrid({
//   gridClass: 'p-0',
//   gridOptions: {
//     columns: totalColumns,
//     border: true,
//     minHeight: 150,
//     maxHeight: 350,
//     columnConfig: {
//       minWidth: 80,
//     },
//     rowConfig: {
//       isHover: true,
//       keyField: 'id',
//     },
//     pagerConfig: {
//       autoHidden: true,
//     },
//   },
// });

const [TableAdd, TableAddApi] = useVbenVxeGrid({
  gridClass: 'p-0',
  gridOptions: {
    columns: addColumns,
    border: true,
    minHeight: 150,
    maxHeight: 450,
    editRules: {
      mailbagCode: [{ required: true, content: '请输入邮袋编号' }],
      shippingMethodId: [{ required: true, content: '请选择邮寄方式' }],
      chargeZoneId: [{ required: true, content: '请选择计费分区' }],
      packageNumber: [{ required: true, content: '请输入包裹数量' }],
      mailbagWeight: [{ required: true, content: '请输入邮袋重量' }],
    },
    columnConfig: {
      minWidth: 80,
    },
    editConfig: {
      mode: 'row',
      trigger: 'click',
    },
    rowConfig: {
      // isHover: true,
      keyField: 'id',
    },
    pagerConfig: { enabled: false },
  },
});

const [Modal, ModalApi] = useVbenModal({
  title: '新增预约揽收邮袋',
  draggable: true,
  // onOpenChange(isOpen) {
  //   if (isOpen) {
  //   }
  // },
  async onConfirm() {
    const valid = await TableAddApi.grid.validate(true);
    if (valid) return;
    emit('success');
    ModalApi.close();
  },
});

// function handleBeforeFetch(p) {
//   return {
//     ...p,
//     companyId: unref(companyId),
//   };
// }
async function handleAdd() {
  const { row } = await TableAddApi.grid.insertAt({}, -1);
  setTimeout(() => {
    TableAddApi.grid.setEditRow(row);
  }, 0);
}

function setChargeZoneList(index: number, value: number) {
  chargeZoneOptions.value[index] = [{ value, label: value }];
}

function onMailbagCodeChange(_row: any, _index: number) {}

function onShippingMethodChange(value: any, row: any, index: number) {
  setChargeZoneList(index, value);
  TableAddApi.grid.setRow(row, { chargeZoneId: null });
}

function handleRemove(row: any, index: number) {
  chargeZoneOptions.value.splice(index, 1);
  TableAddApi.grid.remove(row);
}
</script>
<template>
  <Modal class="w-[960px]">
    <BasicTitle class="before my-1 !text-base" title="今日汇总" />
    <TableTotal>
      <template #action>
        <a class="vben-link">新增</a>
      </template>
    </TableTotal>
    <BasicTitle class="before mb-2 mt-4 !text-base" title="即将创建的邮袋">
      <div class="text-sm">
        创建包含多个邮寄方式包裹的邮袋，请点击
        <Button type="primary" @click="handleAdd"> 新增 </Button>
      </div>
    </BasicTitle>
    <TableAdd>
      <template #edit_mailbagCode="{ row, $rowIndex }">
        <Input
          v-model:value="row.mailbagCode"
          placeholder="请输入邮袋编号"
          @blur="onMailbagCodeChange(row, $rowIndex)"
        />
      </template>
      <template #edit_shippingMethodId="{ row, $rowIndex }">
        <Select
          v-model:value="row.shippingMethodId"
          :options="shippingMethodOptions"
          class="w-full"
          placeholder="请选择邮寄方式"
          @change="onShippingMethodChange($event, row, $rowIndex)"
        />
      </template>
      <template #edit_chargeZoneId="{ row, $rowIndex }">
        <Select
          v-model:value="row.chargeZoneId"
          :options="chargeZoneOptions[$rowIndex]"
          class="w-full"
          placeholder="请选择计费分区"
        />
      </template>
      <template #edit_packageNumber="{ row }">
        <InputNumber
          v-model:value="row.packageNumber"
          :min="0"
          :precision="0"
          class="w-full"
          placeholder="请输入包裹数量"
        />
      </template>
      <template #edit_mailbagWeight="{ row }">
        <InputNumber
          v-model:value="row.mailbagWeight"
          :max="50"
          :min="0"
          :precision="3"
          class="w-full"
          placeholder="请输入邮袋重量"
        />
      </template>
      <template #action="{ row, $rowIndex }">
        <a class="vben-link" @click="handleRemove(row, $rowIndex)">移除</a>
      </template>
    </TableAdd>
  </Modal>
</template>
