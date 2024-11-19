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
    ],
  },
];

export default routes;
