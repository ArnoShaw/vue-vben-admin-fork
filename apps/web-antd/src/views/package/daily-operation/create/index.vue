<script setup lang="ts">
import { ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import { Button, Input } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';
import { ActionEnum } from '#/enums/common';

import ModalAddProduct from './components/modal-add-product.vue';
import ModalAutoPaste from './components/modal-auto-paste.vue';
import ModalSelectProduct from './components/modal-select-product.vue';
import { declareColumns, formSchemas, shippingColumns } from './const-data';

const shippingMethod = ref();
const trackingNumberCache = ref();

const [Form] = useVbenForm({
  wrapperClass: 'grid-cols-12',
  submitButtonOptions: { show: false },
  resetButtonOptions: { show: false },
  commonConfig: {
    componentProps: {
      class: 'w-full',
    },
  },
  schema: formSchemas(),
});

const [PasteModal, PasteModalApi] = useVbenModal({
  connectedComponent: ModalAutoPaste,
});

const [ProductModal, ProductModalApi] = useVbenModal({
  connectedComponent: ModalAddProduct,
});

const [SelectProductModal, SelectProductModalApi] = useVbenModal({
  connectedComponent: ModalSelectProduct,
});

const [ShippingaTable] = useVbenVxeGrid({
  gridOptions: {
    columns: shippingColumns,
    border: true,
    minHeight: 300,
    maxHeight: 500,
    rowConfig: {
      isHover: true,
    },
    pagerConfig: {
      autoHidden: true,
    },
  },
});

const [DeclareTable, DeclareTableApi] = useVbenVxeGrid({
  gridOptions: {
    columns: declareColumns,
    border: true,
    minHeight: 300,
    maxHeight: 500,
    columnConfig: {
      resizable: false,
      minWidth: 80,
    },
    rowConfig: {
      isHover: true,
    },
    pagerConfig: {
      autoHidden: true,
    },
  },
});

// 获取邮寄方式，编辑页面首次加载通过赋值国家触发
function handleSearchShipping() {
  // if (!unref(customerInfo).companyId)
  //   return createMessage.warning('请先查询客户');
  // const { companyId } = unref(customerInfo);
  // const { predictionWeight, recipientCountryCode } = getFieldsValue();
  // if (companyId && predictionWeight && recipientCountryCode) {
  //   clearSelectedRowKeys();
  //   shippingMethod.value = undefined;
  //   reload();
  // }
}

function handleAddProduct() {
  ProductModalApi.setData({ actionType: ActionEnum.ADD });
  ProductModalApi.open();
}

function handleAddedProduct(record: any, row: any) {
  if (row) {
    DeclareTableApi.grid.setRow(row, record);
  } else {
    DeclareTableApi.grid.insertAt(record, -1);
  }
}

function handleEditProduct(row: any) {
  ProductModalApi.setData({ actionType: ActionEnum.EDIT, row });
  ProductModalApi.open();
}

function handleDeleteProduct(row: any) {
  DeclareTableApi.grid.remove(row);
}

function handleSelectProduct() {
  SelectProductModalApi.open();
  // if (!unref(customerInfo).companyId) return createMessage.warning('请先查询客户');
  // openModalProduct(true, {
  //   companyId: unref(customerInfo).companyId,
  // });
}

function handlePasted(info = {}) {
  Object.entries(info).forEach(([key, val]) => {
    if (!val) Reflect.deleteProperty(info, key);
  });
  // setFieldsValue(info);
}
</script>

<template>
  <div class="card-box m-4 p-4">
    <Form>
      <template #addressee>
        <BasicTitle
          class="w-full"
          icon="ri:user-received-line"
          icon-class="text-primary"
          title="收件信息"
        >
          <Button class="!text-xs" size="small" type="primary" @click="PasteModalApi.open()">
            智能粘贴
          </Button>
        </BasicTitle>
      </template>
      <template #shippingMethod>
        <ShippingaTable class="w-full">
          <template #toolbar-actions>
            <div v-show="shippingMethod?.hasTrackingNumberFlag === '1'" class="whitespace-nowrap">
              您选择的邮寄方式需要追踪号
              <Input v-model:value="trackingNumberCache" :maxlength="50" class="w-[165px]" />
              此处留空系统将自动分配追踪号
            </div>
          </template>
          <template #toolbar-tools>
            <Button class="!text-xs" size="small" type="primary" @click="handleSearchShipping">
              查询支持上述目的地的邮寄方式
            </Button>
          </template>
        </ShippingaTable>
      </template>
      <template #productList>
        <DeclareTable class="w-full">
          <template #toolbar-tools>
            <Button class="mr-2 !text-xs" size="small" type="primary" @click="handleAddProduct">
              添加
            </Button>
            <Button class="!text-xs" size="small" type="primary" @click="handleSelectProduct">
              从申报信息选取
            </Button>
          </template>
          <template #action="{ row }">
            <a class="vben-link mr-3" @click="handleEditProduct(row)">编辑</a>
            <a class="vben-link" @click="handleDeleteProduct(row)">移除</a>
          </template>
        </DeclareTable>
      </template>
    </Form>
    <PasteModal @success="handlePasted" />
    <ProductModal @success="handleAddedProduct" />
    <SelectProductModal />
  </div>
</template>

<style scoped></style>
