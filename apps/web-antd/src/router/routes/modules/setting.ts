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
    redirect: '/setting/account/info',
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
            component: () => import('#/views/setting/account/info/index.vue'),
            meta: {
              title: '账户信息',
            },
          },
          {
            name: 'SettingAccountModifyPassword',
            path: 'modify-password',
            component: () => import('#/views/setting/account/modify-password/index.vue'),
            meta: {
              title: '修改密码',
            },
          },
          {
            name: 'SettingAccountDeveloper',
            path: 'developer',
            component: () => import('#/views/setting/account/developer/index.vue'),
            meta: {
              title: '开发者',
            },
          },
          {
            name: 'SettingAccountTrackingNubmer',
            path: 'tracking-number',
            component: () => import('#/views/setting/account/tracking-number/index.vue'),
            meta: {
              title: '下载追踪号',
            },
          },
          {
            name: 'SettingAccountQuotationSheet',
            path: 'quotation-sheet',
            component: () => import('#/views/setting/account/quotation-sheet/index.vue'),
            meta: {
              title: '下载报价表',
            },
          },
          {
            name: 'SettingAccountPlatformAccount',
            path: 'platform-account',
            component: () => import('#/views/setting/account/platform-account/index.vue'),
            meta: {
              title: '平台账号',
            },
          },
          {
            name: 'SettingAccountLoginLog',
            path: 'login-log',
            component: () => import('#/views/setting/account/login-log/index.vue'),
            meta: {
              title: '登录日志',
            },
          },
          {
            name: 'SettingAccountComplaints',
            path: 'complaints',
            component: () => import('#/views/setting/account/complaints/index.vue'),
            meta: {
              title: '投诉建议',
            },
          },
          {
            name: 'SettingAccountDeclareInfo',
            path: 'declare-info',
            component: () => import('#/views/setting/account/declare-info/index.vue'),
            meta: {
              title: '申报信息',
            },
          },
        ],
      },
      {
        name: 'SettingFinance',
        path: 'billing',
        redirect: '/setting/billing/',
        meta: {
          title: '账务设置',
        },
        children: [
          {
            name: 'SettingFinanceExchangeRate',
            path: 'exchange-rate',
            component: () => import('#/views/setting/billing/exchange-rate/index.vue'),
            meta: {
              title: '汇率',
            },
          },
          {
            name: 'SettingFinanceCollectionError',
            path: 'collection-error',
            component: () => import('#/views/setting/billing/collection-error/index.vue'),
            meta: {
              title: '揽收误差',
            },
          },
          {
            name: 'SettingFinancePackageError',
            path: 'package-error',
            component: () => import('#/views/setting/billing/package-error/index.vue'),
            meta: {
              title: '单件误差',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
