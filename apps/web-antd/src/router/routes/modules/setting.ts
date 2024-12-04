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
          {
            name: 'SettingAccountModifyPassword',
            path: 'modify-password',
            component: () => import('#/views/account/modify-password/index.vue'),
            meta: {
              title: '修改密码',
            },
          },
          {
            name: 'SettingAccountDeveloper',
            path: 'developer',
            component: () => import('#/views/account/developer/index.vue'),
            meta: {
              title: '开发者',
            },
          },
          {
            name: 'SettingAccountTrackingNubmer',
            path: 'tracking-number',
            component: () => import('#/views/account/tracking-number/index.vue'),
            meta: {
              title: '下载追踪号',
            },
          },
          {
            name: 'SettingAccountQuotationSheet',
            path: 'quotation-sheet',
            component: () => import('#/views/account/quotation-sheet/index.vue'),
            meta: {
              title: '下载报价表',
            },
          },
          {
            name: 'SettingAccountPlatformAccount',
            path: 'platform-account',
            component: () => import('#/views/account/platform-account/index.vue'),
            meta: {
              title: '平台账号',
            },
          },
          {
            name: 'SettingAccountLoginLog',
            path: 'login-log',
            component: () => import('#/views/account/login-log/index.vue'),
            meta: {
              title: '登录日志',
            },
          },
          {
            name: 'SettingAccountComplaints',
            path: 'complaints',
            component: () => import('#/views/account/complaints/index.vue'),
            meta: {
              title: '投诉建议',
            },
          },
          {
            name: 'SettingAccountDeclareInfo',
            path: 'declare-info',
            component: () => import('#/views/account/declare-info/index.vue'),
            meta: {
              title: '申报信息',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
