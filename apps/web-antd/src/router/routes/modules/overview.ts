import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: $t('page.overview.index'),
      hideChildrenInMenu: true,
    },
    name: 'Index',
    path: '/',
    redirect: '/overview',
    children: [
      {
        name: 'Overview',
        path: '/overview',
        component: () => import('#/views/overview/index.vue'),
        meta: {
          affixTab: true,
          icon: 'lucide:layout-dashboard',
          title: $t('page.overview.index'),
          keepAlive: true,
        },
      },
    ],
  },
];

export default routes;
