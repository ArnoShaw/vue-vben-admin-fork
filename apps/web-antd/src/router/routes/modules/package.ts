import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:package',
      order: 1,
      title: $t('page.package.index'),
    },
    name: 'Package',
    path: '/package',
    redirect: '/package/daily-operation/create',
    children: [
      {
        name: 'PackageDailyOperation',
        path: 'daily-operation',
        redirect: '/package/daily-operation/create',
        meta: {
          title: '日常操作',
        },
        children: [
          {
            name: 'PackageDailyOperationCreate',
            path: 'create',
            component: () => import('#/views/package/daily-operation/create/index.vue'),
            meta: {
              title: '新建包裹',
            },
          },
          {
            name: 'PackageDailyOperationCalculation',
            path: 'calculation',
            component: () => import('#/views/package/daily-operation/calculation/index.vue'),
            meta: {
              title: '运费试算',
            },
          },
          {
            name: 'PackageDailyOperationImport',
            path: 'import',
            component: () => import('#/views/package/daily-operation/import/index.vue'),
            meta: {
              title: '批量导入',
            },
          },
          {
            name: 'PackageDailyOperationPrediction',
            path: 'prediction',
            component: () => import('#/views/package/daily-operation/prediction/index.vue'),
            meta: {
              title: '包裹预报',
            },
          },
          {
            name: 'PackageDailyOperationPrint',
            path: 'print',
            component: () => import('#/views/package/daily-operation/print/index.vue'),
            meta: {
              title: '面单打印',
            },
          },
          {
            name: 'PackageDailyOperationReservation',
            path: 'reservation',
            component: () => import('#/views/package/daily-operation/reservation/index.vue'),
            meta: {
              title: '预约揽收',
            },
          },
          {
            name: 'PackageDailyOperationRecord',
            path: 'record',
            component: () => import('#/views/package/daily-operation/record/index.vue'),
            meta: {
              title: '揽收记录',
            },
          },
        ],
      },
      {
        name: 'PackageMyPackage',
        path: 'my-package',
        redirect: '/package/my-package/all',
        meta: {
          title: '我的包裹',
        },
        children: [
          {
            name: 'PackageMyPackageAll',
            path: 'all',
            component: () => import('#/views/package/my-package/all/index.vue'),
            meta: {
              title: '全部包裹',
            },
          },
          {
            name: 'PackageMyPackageEdit',
            path: 'edit/:id',
            component: () => import('#/views/package/daily-operation/create/index.vue'),
            meta: {
              title: '编辑包裹',
              hideInMenu: true,
            },
          },
          {
            name: 'PackageMyPackageOutOfStock',
            path: 'out-of-stock',
            component: () => import('#/views/package/my-package/out-of-stock/index.vue'),
            meta: {
              title: '标记缺货',
            },
          },
          {
            name: 'PackageMyPackageInStock',
            path: 'in-stock',
            component: () => import('#/views/package/my-package/in-stock/index.vue'),
            meta: {
              title: '标记有货',
            },
          },
          {
            name: 'PackageMyPackageClaim',
            path: 'claim',
            component: () => import('#/views/package/my-package/claim/index.vue'),
            meta: {
              title: '包裹理赔',
            },
          },
          {
            name: 'PackageMyPackageAbnormal',
            path: 'abnormal',
            component: () => import('#/views/package/my-package/abnormal/index.vue'),
            meta: {
              title: '包裹异常',
            },
          },
          {
            name: 'PackageMyPackageReturns',
            path: 'returns',
            component: () => import('#/views/package/my-package/returns/index.vue'),
            meta: {
              title: '包裹退件',
            },
          },
          {
            name: 'PackageMyPackageDeliveryAbnormal',
            path: 'delivery-abnormal',
            component: () => import('#/views/package/my-package/delivery-abnormal/index.vue'),
            meta: {
              title: '派送异常',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
