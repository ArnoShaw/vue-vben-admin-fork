<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import { Page, useVbenModal } from '@vben/common-ui';

import { Button, Checkbox, Input } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';
import { ActionEnum } from '#/constants/common';

import ModalAddProduct from './components/modal-add-product.vue';
import ModalAutoPaste from './components/modal-auto-paste.vue';
import ModalSelectProduct from './components/modal-select-product.vue';
import { declareColumns, formSchemas, shippingColumns } from './const-data';

defineOptions({
  name: 'PackageDailyOperationCreate',
});

const shippingMethod = ref();
const trackingNumberCache = ref();
const forcast = ref(false);
const submitLoading = ref(false);
const loading = ref(false);
const route = useRoute();
// const packageId = route?.params?.id;
const isEdit = route.name === 'PackageMyPackageEdit';

if (isEdit) getPackageDetail();

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
// const [
//     registerShippingaTable,
//     {
//       reload,
//       setTableData,
//       setPagination,
//       clearSelectedRowKeys,
//       setSelectedRowKeys,
//       getDataSource: getDataSourceShipping,
//     },
//   ] = useTable({
//     api: apis.package.getShippingMethodList,
//     beforeFetch: handleBeforeFetchShipping,
//     afterFetch: handleAfterFetchFetchShipping,
//     columns: shippingColumns,
//     bordered: true,
//     showIndexColumn: false,
//     isCanResizeParent: true,
//     rowKey: 'shippingMethodId',
//     immediate: false,
//     rowSelection: {
//       type: 'radio',
//       fixed: 'left',
//       onChange: handleSelectShipping,
//     },
//   });

const [DeclareTable, DeclareTableApi] = useVbenVxeGrid({
  gridOptions: {
    columns: declareColumns,
    border: true,
    minHeight: 300,
    maxHeight: 500,
    columnConfig: {
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

async function getPackageDetail() {
  loading.value = true;
  // const p: any = { packageId: packageId || '' };
  try {
    // const [detail, productList] = await Promise.all([
    //   apis.package.showPackageInfoBase(p),
    //   apis.package.getProductList(p),
    // ]);
    // initData(detail, productList);
  } finally {
    loading.value = false;
  }
}

// function initData(detail: any, productList: defs.apis.SyBsPackageProductVO[]) {
// packageDetail.value = detail;
// const { packageCodAmount, isDrawBack, senderCity, senderState, senderDistrict, trackingNumber } =
//   detail;
// detail.packageAttributes = detail.checkedPackageAttributeList;
// detail.isDrawBack = isDrawBack == 1 ? true : false;
// detail.packageCodFlag = !!packageCodAmount;
// trackingNumberCache.value = trackingNumber;
// if (Number(senderCity)) getCityOrDistrictList(senderState, 3);
// if (Number(senderDistrict)) getCityOrDistrictList(senderCity, 4);
// isCOD.value = !!packageCodAmount;
// setFieldsValue(detail);
// setTableDataDeclare(productList);
// updateForm();
// clearValidate();
// }

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

async function handleSubmit() {
  // if (!unref(customerInfo).companyId) return createMessage.warning('请先查询客户');
  // const fields = await validate();
  // if (!unref(shippingMethod)?.shippingMethodId) return createMessage.warning('请选择邮寄方式');
  // if (!getDataSource()?.length) return createMessage.warning('请添加申报商品');
  // const p = formatParams(cloneDeep(fields));
  // console.log(p);
  // submitLoading.value = true;
  // const api = isEdit ? apis.package.updatePackage : apis.package.savePackage;
  // try {
  //   const { flg, isFreeze } = (await api(p)) || {};
  //   if (isFreeze)
  //     return createMessage.error('当前用户已被冻结，不能进行预报和撤销预报操作，请解冻后重试！');
  //   if (flg)
  //     return createMessage.error(
  //       '当前客户已逾期签署合同导致当前账号无法预报或预约揽收。如需申请逾期签署，请联系营销总监！',
  //     );
  // } finally {
  //   submitLoading.value = false;
  // }
  // createMessage.success('保存成功');
  // if (isEdit)
  //   setTimeout(() => {
  //     closeCurrent();
  //     go({ name: 'CustomerProxyPrediction' });
  //   }, 1000);
  // else resetInfo();
}
</script>

<template>
  <Page auto-content-height content-class="!p-0">
    <div class="absolute h-full w-full overflow-auto">
      <div class="p-4">
        <div class="card-box relative rounded-b-none p-4">
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
                  <div
                    v-show="shippingMethod?.hasTrackingNumberFlag === '1'"
                    class="whitespace-nowrap"
                  >
                    您选择的邮寄方式需要追踪号
                    <Input v-model:value="trackingNumberCache" :maxlength="50" class="w-[165px]" />
                    此处留空系统将自动分配追踪号
                  </div>
                </template>
                <template #toolbar-tools>
                  <Button
                    class="!text-xs"
                    size="small"
                    type="primary"
                    @click="handleSearchShipping"
                  >
                    查询支持上述目的地的邮寄方式
                  </Button>
                </template>
              </ShippingaTable>
            </template>
            <template #productList>
              <DeclareTable class="w-full">
                <template #toolbar-tools>
                  <Button
                    class="mr-2 !text-xs"
                    size="small"
                    type="primary"
                    @click="handleAddProduct"
                  >
                    添加
                  </Button>
                  <Button class="!text-xs" size="small" type="primary" @click="handleSelectProduct">
                    从申报信息选取
                  </Button>
                </template>
                <template #action="{ row }">
                  <a class="vben-link mr-3" @click="handleEditProduct(row)">编辑</a>
                  <a class="vben-link" @click="handleDeleteProduct(row)">移除</a>
                  <a class="vben-link mr-3" @click="handleEditProduct(row)">编辑</a>
                  <a class="vben-link" @click="handleDeleteProduct(row)">移除</a>
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
        <div
          class="bg-card z-100 border-border sticky bottom-0 mt-2 rounded-xl rounded-t-none border p-4 text-right"
        >
          <Checkbox v-model:checked="forcast">直接提交预报</Checkbox>
          <span class="mx-4">运费：¥ {{ shippingMethod?.estimateFreight || '0.00' }}</span>
          <Button :loading="submitLoading" type="primary" @click="handleSubmit"> 保存包裹 </Button>
        </div>
      </div>
    </div>
  </Page>
</template>
