<!-- eslint-disable unicorn/no-nested-ternary -->
<script setup lang="ts">
import type { Recordable } from '@vben/types';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { Page } from '@vben/common-ui';

import { Button, Dropdown, Menu, MenuItem, message, Modal } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import TableAction from '#/components/table-action.vue';

import { columns, formSchema } from './const-data';

defineOptions({
  name: 'PackageMyPackageAbnormal',
});

// const selectAll = ref();
// const shippingMethodList = ref();
const exportLoading = ref(false);
const router = useRouter();

const [Table, TableApi] = useVbenVxeGrid({
  tableTitle: '包裹异常列表',
  formOptions: {
    schema: formSchema,
    collapsedRows: 2,
    showCollapseButton: false,
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
      keyField: 'packageId',
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

function handleEdit(record: Recordable) {
  const { packageId } = record;
  router.push({
    name: 'PackageMyPackageEdit',
    params: {
      id: packageId,
    },
  });
}

function getSelectedKeys() {
  return TableApi.grid.getCheckboxRecords().map((item) => item.packageId);
}

async function handleSubmit(_ids: number[]) {
  message.success(`操作成功`);
}

function handleReturn(isBatch: boolean, record?: Recordable) {
  if (!getSelectedKeys()?.length && isBatch) return message.warning('请选择包裹');
  if (isBatch && TableApi.grid.getCheckboxRecords().some((row: any) => row.clientChoice === 1))
    return message.warning('选择的包裹已分拣，不能进行撤销预报操作，请重新选择要撤销预报的包裹');
  const title = `${isBatch ? '批量' : ''}撤销预报`;
  const content = `您确定要撤销预报${isBatch ? '选择的' : '该'}包裹吗？\n撤销预报，追踪号将会回收，重新分配`;
  Modal.confirm({
    iconType: 'warning',
    title,
    content,
    onOk: () => handleSubmit(isBatch ? getSelectedKeys() : [record?.packageId]),
  });
}

function handleDeliver(isBatch: boolean, record?: Recordable) {
  if (!getSelectedKeys()?.length && isBatch) return message.warning('请选择包裹');
  if (isBatch && TableApi.grid.getCheckboxRecords().some((row: any) => row.clientChoice === 2))
    return message.warning('选择的包裹已分拣，不能进行撤销预报操作，请重新选择要撤销预报的包裹');
  const title = `${isBatch ? '批量' : ''}撤销预报`;
  const content = `您确定要撤销预报${isBatch ? '选择的' : '该'}包裹吗？\n撤销预报，追踪号将会回收，重新分配`;
  Modal.confirm({
    iconType: 'warning',
    title,
    content,
    onOk: () => handleSubmit(isBatch ? getSelectedKeys() : [record?.packageId]),
  });
}

function handleDestory(isBatch: boolean, record?: Recordable) {
  if (!getSelectedKeys()?.length && isBatch) return message.warning('请选择包裹');
  if (isBatch && TableApi.grid.getCheckboxRecords().some((row: any) => row.clientChoice === 3))
    return message.warning('选择的包裹已分拣，不能进行撤销预报操作，请重新选择要撤销预报的包裹');
  const title = `${isBatch ? '批量' : ''}撤销预报`;
  const content = `您确定要撤销预报${isBatch ? '选择的' : '该'}包裹吗？\n撤销预报，追踪号将会回收，重新分配`;
  Modal.confirm({
    iconType: 'warning',
    title,
    content,
    onOk: () => handleSubmit(isBatch ? getSelectedKeys() : [record?.packageId]),
  });
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
          v-auth="'POST:/client/package/operation/print/printpdfbatch/do'"
          @click="handleReturn(true)"
        >
          批量申请退回
        </Button>
        <Button
          class="mr-2"
          v-auth="'POST:/client/package/operation/print/printpdfbatch/do'"
          @click="handleDeliver(true)"
        >
          批量申请发货
        </Button>
        <Button
          class="mr-2"
          type="primary"
          v-auth="'POST:/client/package/operation/print/printpdfbatch/do'"
          @click="handleDestory(true)"
        >
          批量申请销毁
        </Button>
      </template>
      <template #action="{ row }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              onClick: handleEdit.bind(null, row),
            },
            {
              label: '申请退回',
              disabled: row.clientChoice === 1 && row.clientChoice !== 0,
              onClick: handleReturn.bind(null, false, row),
            },
          ]"
          :drop-down-actions="[
            {
              label: '申请发货',
              disabled: row.clientChoice === 2 && row.clientChoice !== 0,
              onClick: handleDeliver.bind(null, false, row),
            },
            {
              label: '申请销毁',
              disabled: row.clientChoice === 3 && row.clientChoice !== 0,
              onClick: handleDestory.bind(null, false, row),
            },
          ]"
        />
      </template>
    </Table>
    <Modal />
  </Page>
</template>
