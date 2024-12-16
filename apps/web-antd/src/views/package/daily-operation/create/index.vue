<script setup lang="ts">
import type { Recordable } from '@vben/types';

import type { defs } from '#/services/apis/api';

import { ref, unref } from 'vue';
import { useRoute } from 'vue-router';

import { Page, useVbenModal } from '@vben/common-ui';
import { useTabs } from '@vben/hooks';
import { useUserStore } from '@vben/stores';
import { cloneDeep } from '@vben/utils';

import { Button, Checkbox, Input, message } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import { useVbenVxeGrid } from '#/adapter/vxe-table';
import BasicTitle from '#/components/basic-title.vue';
import { ActionEnum } from '#/constants/common';
import { apis } from '#/services/apis';

import ModalAddProduct from './components/modal-add-product.vue';
import ModalAutoPaste from './components/modal-auto-paste.vue';
import ModalSelectProduct from './components/modal-select-product.vue';
import { declareColumns, formSchemas, shippingColumns } from './const-data';

defineOptions({
  name: 'PackageDailyOperationCreate',
});

const { closeCurrentTab } = useTabs();

const userInfo = useUserStore().userInfo || {};

const shippingMethod = ref();
const trackingNumberCache = ref();
const forcast = ref(false);
const submitLoading = ref(false);
const loading = ref(false);
const route = useRoute();
const packageId = route?.params?.id;
const packageDetail = ref();

const isEdit = route.name === 'PackageMyPackageEdit';

if (isEdit) getPackageDetail();

const [Form, FormApi] = useVbenForm({
  wrapperClass: 'grid-cols-12',
  submitButtonOptions: { show: false },
  resetButtonOptions: { show: false },
  commonConfig: {
    componentProps: {
      class: 'w-full',
    },
  },
  schema: formSchemas(handleGoodsSelect, handleSearchShipping),
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

const [ShippingaTable, ShippingaTableApi] = useVbenVxeGrid({
  gridEvents: {
    radioChange: ({ newValue }: any) => (shippingMethod.value = newValue),
  },
  gridOptions: {
    columns: shippingColumns,
    border: true,
    height: 350,
    rowConfig: {
      isHover: true,
      keyField: 'shippingMethodId',
    },
    radioConfig: {
      highlight: true,
      trigger: 'row',
    },
    proxyConfig: {
      autoLoad: false,
      ajax: {
        query: async ({ page }: any) => {
          const values = await FormApi.getValues();
          return await apis.newPackage.getShippingMethodList({
            pageNum: page.currentPage,
            pageSize: page.pageSize,
            ...formatParams(cloneDeep(values)),
          } as any);
        },
        querySuccess: () => {
          if (isEdit && !unref(shippingMethod)?.shippingMethodId) {
            // setSelectedRowKeys([unref(packageDetail).shippingMethodId]);
            ShippingaTableApi.setGridOptions({
              radioConfig: {
                highlight: true,
                trigger: 'row',
                checkRowKey: unref(packageDetail).shippingMethodId,
              },
            });
          }
        },
      },
    },
    pagerConfig: {
      enabled: false,
    },
  },
});

const [DeclareTable, DeclareTableApi] = useVbenVxeGrid({
  gridOptions: {
    columns: declareColumns,
    border: true,
    height: 350,
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
  const p: any = { packageId: packageId || '' };
  try {
    const [detail, productList] = await Promise.all([
      apis.newPackage.showPackageInfoBase(p),
      apis.newPackage.getProductList(p),
    ]);
    initData(detail, productList as any);
  } finally {
    loading.value = false;
  }
}

function initData(detail: any, productList: defs.apis.SyBsPackageProductVO[]) {
  packageDetail.value = detail;
  const { packageCodAmount, isDrawBack, trackingNumber } = detail;
  detail.packageAttributes = detail.checkedPackageAttributeList;
  detail.isDrawBack = isDrawBack === 1;
  detail.packageCodFlag = !!packageCodAmount;
  trackingNumberCache.value = trackingNumber;
  FormApi.setValues(detail);
  DeclareTableApi.setGridOptions({ data: productList });
}

// 获取邮寄方式，编辑页面首次加载通过赋值国家触发
async function handleSearchShipping() {
  const { companyId } = userInfo as any;
  const { predictionWeight, recipientCountryCode } = await FormApi.getValues();
  if (companyId && predictionWeight && recipientCountryCode) {
    // clearSelectedRowKeys();
    shippingMethod.value = undefined;
    ShippingaTableApi.reload();
  }
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
  ProductModalApi.setData({ actionType: ActionEnum.EDIT, row: cloneDeep(row) });
  ProductModalApi.open();
}

function handleDeleteProduct(row: any) {
  DeclareTableApi.grid.remove(row);
}

function handleSelectProduct() {
  SelectProductModalApi.setData({
    companyId: (userInfo as any).companyId,
  });
  SelectProductModalApi.open();
}

function handlePasted(info = {}) {
  Object.entries(info).forEach(([key, val]) => {
    if (!val) Reflect.deleteProperty(info, key);
  });
  FormApi.setValues(info);
}

async function handleGoodsSelect(val?: number) {
  const { packageAttributes = [] } = await FormApi.getValues();
  const deleteId = val === 1 ? 2 : 1;
  if (packageAttributes.includes(deleteId) && [1, 2].includes(val || -1)) {
    const index = packageAttributes.indexOf(deleteId);
    const list = cloneDeep(packageAttributes);
    list.splice(index, 1);
    FormApi.setValues({ packageAttributes: list });
  }
  handleSearchShipping();
}

function formatParams(fields: Recordable) {
  const { packageAttributes = [], isDrawBack, packageCodFlag } = fields;
  const { companyId, userId } = userInfo as any;
  fields.packageAttributes = packageAttributes?.join(',');
  const p: defs.apis.PackageInfoBO = {
    ...fields,
    ...unref(shippingMethod),
    productList: DeclareTableApi.grid.getTableData().tableData,
    predictionFreight: unref(shippingMethod)?.estimateFreight,
    forcast: unref(forcast) ? '1' : '0',
    companyId,
    userId,
    ports: 'client',
    isDrawBack: isDrawBack ? '1' : '0',
    packageCodFlag: packageCodFlag ? '1' : '0',
    trackingNumber: unref(trackingNumberCache),
  };

  if (isEdit) p.packageId = unref(packageDetail).packageId;
  return p;
}

async function handleSubmit() {
  const { valid } = await FormApi.validate();
  if (!valid) return;
  if (!unref(shippingMethod)?.shippingMethodId) return message.warning('请选择邮寄方式');
  if (DeclareTableApi.grid.getTableData().tableData.length === 0)
    return message.warning('请添加申报商品');
  const p = formatParams(cloneDeep(await FormApi.getValues()));
  submitLoading.value = true;
  const api = isEdit ? apis.newPackage.updatePackage : apis.newPackage.savePackage;
  try {
    const { flg, isFreeze } = ((await api(p)) as any) || {};
    if (isFreeze)
      return message.error('当前用户已被冻结，不能进行预报和撤销预报操作，请解冻后重试！');
    if (flg)
      return message.error(
        '当前客户已逾期签署合同导致当前账号无法预报或预约揽收。如需申请逾期签署，请联系营销总监！',
      );
  } finally {
    submitLoading.value = false;
  }
  message.success('保存成功');
  if (isEdit)
    setTimeout(() => {
      closeCurrentTab();
    }, 1000);
  else resetInfo();
}

function resetInfo() {
  FormApi.resetForm();
  ShippingaTableApi.grid.remove();
  DeclareTableApi.grid.remove();
  forcast.value = false;
  shippingMethod.value = {};
  trackingNumberCache.value = '';
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
