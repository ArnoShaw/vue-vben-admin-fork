<!-- eslint-disable unicorn/no-nested-ternary -->
<script setup lang="ts">
import type { Recordable } from '@vben/types';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { Page, useVbenDrawer, useVbenModal } from '@vben/common-ui';

import { Button, Dropdown, Menu, MenuItem, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';
import DrawerInfo from '#/views/package/daily-operation/print/drawer-info.vue';

import { columns, formSchema } from './const-data';
import ModalModifyWeight from './modal-modify-weight.vue';

defineOptions({
  name: 'PackageMyPackageAll',
});

// const selectAll = ref();
// const shippingMethodList = ref();
const exportLoading = ref(false);
const router = useRouter();

const [Drawer, DrawerApi] = useVbenDrawer({
  connectedComponent: DrawerInfo,
});
const [Modal, ModalApi] = useVbenModal({
  connectedComponent: ModalModifyWeight,
});
const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '全部包裹列表',
  formOptions: {
    schema: formSchema(onOptionsSelect),
    collapsedRows: 2,
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
// const [registerTable, { getForm, reload, setTableData, setPagination, clearSelectedRowKeys }] =
//   useTable({
//     api: apis.viewPackage.packageList,
//     columns,
//     title: '面单打印列表',
//     showIndexColumn: false,
//     bordered: true,
//     showTableSetting: true,
//     useSearchForm: true,
//     immediate: false,
//     rowKey: 'packageId',
//     rowSelection: {
//       type: 'checkbox',
//       onChange: handleSelectChange,
//       getCheckboxProps: () => {
//         return {
//           disabled: unref(selectAll),
//         };
//       },
//     },
//     formConfig: {
//       schemas: formSchema(onOptionsSelect),
//       showAdvancedButton: false,
//       labelWidth: 80,
//       fieldMapToTime: [['createTime', ['createTimeFrom', 'createTimeTo'], 'YYYY-MM-DD HH:mm:ss']],
//       actionColOptions: { span: 24 },
//     },
//   });

// function formatParams(ids: number[]) {
//   const { userId } = unref(customerInfo);
//   const params: Recordable = {
//     userId,
//     packageIdList: ids,
//     ports: 'yunwei',
//   };
//   return params;
// }

// function getSelectedKeys() {
//   return TableApi.grid.getCheckboxRecords().map((item) => item.packageId);
// }

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

function onOptionsSelect() {
  getShippingMethodList();
}

function handleView(_record: Recordable) {
  // const { packageId } = record;
  // const { companyId } = unref(customerInfo);
  // openDrawer(true, {
  //   id: packageId,
  //   companyId,
  // });
  DrawerApi.open();
}

function handleEdit(record: Recordable) {
  const { packageid } = record;
  router.push({
    name: 'PackageMyPackageEdit',
    params: {
      id: packageid,
    },
  });
}

async function getShippingMethodList() {
  // if (!unref(customerInfo).companyId) return;
  // getForm().setFieldsValue({
  //   shippingMethodId: undefined,
  // });
  // const fields = cloneDeep(getForm().getFieldsValue());
  // fields.printStatus === '1'
  //   ? Reflect.deleteProperty(fields, 'printedDays')
  //   : fields.printStatus === '2'
  //     ? Reflect.deleteProperty(fields, 'createdDays')
  //     : (fields.printedDays = '');
  // const { shippingMethodVOList = [], total = 0 } =
  //   (await apis.viewPackage.getShippingMethodList({
  //     ...fields,
  //     companyId: `${unref(customerInfo).companyId}`,
  //   })) || {};
  // shippingMethodList.value = [{ value: '', label: `全部(${total})` }].concat(
  //   shippingMethodVOList.map((item) => {
  //     return {
  //       value: item.shippingMethodId,
  //       label: `${item.shippingMethodCnName}(${item.pnum})`,
  //     };
  //   }),
  // );
  // getForm().updateSchema([
  //   {
  //     field: 'shippingMethodId',
  //     label: '邮寄方式',
  //     component: 'Select',
  //     componentProps: {
  //       options: unref(shippingMethodList),
  //       showSearch: true,
  //       filterOption: (input: string, option: any) => {
  //         return option.label.toLowerCase().includes(input.toLowerCase());
  //       },
  //     },
  //     colProps: { span: 8 },
  //   },
  // ]);
}
</script>

<template>
  <Page auto-content-height>
    <Table>
      <template #toolbar-tools>
        <Dropdown>
          <Button
            :loading="exportLoading"
            class="mr-2"
            v-auth="'POST:/client/package/operation/prediction/exportExcel'"
          >
            导出Excel
          </Button>
          <template #overlay>
            <Menu>
              <MenuItem>
                <a href="javascript:" @click="handleExport(false)">导出选中</a>
              </MenuItem>
              <MenuItem>
                <a href="javascript:" @click="handleExport(true)">导出全部</a>
              </MenuItem>
            </Menu>
          </template>
        </Dropdown>
        <Button
          class="mr-2"
          type="primary"
          v-auth="'POST:/client/package/operation/print/printpdfbatch/do'"
          @click="ModalApi.open()"
        >
          修改预报重量
        </Button>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '查看',
              onClick: handleView.bind(null, row),
            },
            {
              label: '编辑',
              onClick: handleEdit.bind(null, row),
            },
          ]"
        />
      </template>
    </Table>
    <Drawer />
    <Modal />
  </Page>
</template>
