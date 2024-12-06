import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:receipt-japanese-yen',
      order: 2,
      title: $t('page.bill.index'),
    },
    name: 'Bill',
    path: '/bill',
    redirect: '/bill/management/unbilled',
    children: [
      {
        name: 'BillManagement',
        path: 'management',
        redirect: '/bill/management/unbilled',
        meta: {
          title: '账单管理',
        },
        children: [
          {
            name: 'BillManagementUnbilled',
            path: 'unbilled',
            component: () => import('#/views/bill/management/unbilled/index.vue'),
            meta: {
              title: '未出账',
            },
          },
          {
            name: 'BillManagementPaid',
            path: 'paid',
            component: () => import('#/views/bill/management/paid/index.vue'),
            meta: {
              title: '已支付',
            },
          },
        ],
      },
      {
        name: 'BillFinanceManagement',
        path: 'finance-management',
        redirect: '/bill/finance-management/',
        meta: {
          title: '财务管理',
        },
        children: [
          // {
          //   name: 'BillFinanceManagementRecharge',
          //   path: 'recharge',
          //   component: () => import('#/views/bill/finance-management/recharge/index.vue'),
          //   meta: {
          //     title: '充值',
          //   },
          // },
          {
            name: 'BillFinanceManagementAssetFlow',
            path: 'asset-flow',
            component: () => import('#/views/bill/finance-management/asset-flow/index.vue'),
            meta: {
              title: '资产流水',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
