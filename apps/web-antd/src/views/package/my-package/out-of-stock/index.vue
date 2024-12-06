<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { Page } from '@vben/common-ui';

import { Button, Dropdown, Menu, MenuItem, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableSideLeft from '#/components/table-side-left.vue';

import { columns, formSchema } from './const-data';

defineOptions({
  name: 'PackageMyPackageOutOfStock',
});

const router = useRouter();

// const selectAll = ref();
// const shippingMethodList = ref();
const exportLoading = ref(false);

const [Table, TableApi] = useVbenVxeGrid({
  // tableTitle: '标记缺货',
  formOptions: {
    schema: formSchema,
    collapsedRows: 1,
    collapsed: true,
    wrapperClass: 'grid-cols-12',
    actionWrapperClass: 'col-start-9 col-end-13',
    commonConfig: {
      labelWidth: 90,
    },
  },
  gridOptions: {
    columns,
    border: true,
    height: 'auto',
    columnConfig: {
      minWidth: 105,
    },
    checkboxConfig: {
      reserve: true,
      highlight: true,
      trigger: 'row',
    },
    rowConfig: {
      isHover: true,
      keyField: 'packageid',
    },
    pagerConfig: {
      autoHidden: true,
    },
    toolbarConfig: {
      custom: true,
      refresh: true,
      zoom: true,
    },
  },
});

async function handleExport(selectAll: boolean) {
  if (
    TableApi.grid.getData().length === 0 ||
    (TableApi.grid.getCheckboxRecords().length === 0 && !selectAll)
  )
    return message.warning('请选择包裹');
  exportLoading.value = true;
  try {
    // const res = await apis.packagePrediction.exportExcel(
    //   params,
    //   { responseType: 'blob' },
    //   { isReturnNativeResponse: true },
    // );
    // const suffix = res.headers?.['content-disposition']?.split?.('.')?.reverse?.()?.[0] || 'xlsx';
    // if (res?.data) downloadExcel(res.data, `包裹列表`, `.${suffix}`);
  } finally {
    exportLoading.value = false;
  }
}
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-actions>
        已标记为缺货的包裹请在 【
        <a class="vben-link" @click="router.push({ name: 'PackageMyPackageInStock' })">
          标记有货
        </a>
        】中查看
      </template>
      <template #toolbar-tools>
        <Dropdown>
          <Button :loading="exportLoading" class="mr-2" type="primary"> 标记为缺货 </Button>
          <template #overlay>
            <Menu>
              <MenuItem>
                <a href="javascript:" @click="handleExport(false)">标记选中</a>
              </MenuItem>
              <MenuItem>
                <a href="javascript:" @click="handleExport(true)">标记全部</a>
              </MenuItem>
            </Menu>
          </template>
        </Dropdown>
        <Dropdown>
          <Button
            :loading="exportLoading"
            class="mr-2"
            v-auth="'POST:/client/package/operation/prediction/exportExcel'"
          >
            批量删除
          </Button>
          <template #overlay>
            <Menu>
              <MenuItem>
                <a href="javascript:" @click="handleExport(false)">删除选中</a>
              </MenuItem>
              <MenuItem>
                <a href="javascript:" @click="handleExport(true)">删除全部</a>
              </MenuItem>
            </Menu>
          </template>
        </Dropdown>
      </template>
      <template #left>
        <TableSideLeft class="mr-2 w-[200px]" title="SKU" />
      </template>
    </Table>
  </Page>
</template>
