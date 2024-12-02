import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:settings',
      order: 2,
      title: $t('page.setting.index'),
    },
    name: 'Setting',
    path: '/setting',
    children: [
      {
        name: 'SettingAccount',
        path: 'account',
        redirect: '/setting/account/info',
        meta: {
          title: '我的账户',
        },
        children: [
          {
            name: 'SettingAccountInfo',
            path: 'info',
            component: () => import('#/views/account/info/index.vue'),
            meta: {
              title: '账户信息',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
