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
    redirect: '/bill/management/not-paid',
    children: [
      {
        name: 'BillManagement',
        path: 'management',
        redirect: '/bill/management/not-paid',
        meta: {
          title: '账单管理',
        },
        children: [
          {
            name: 'BillManagementNotPaid',
            path: 'not-paid',
            component: () => import('#/views/bill/management/not-paid/index.vue'),
            meta: {
              title: '未出账',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
