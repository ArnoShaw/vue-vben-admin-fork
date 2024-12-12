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
              keepAlive: true,
            },
          },
          {
            name: 'SettingAccountModifyPassword',
            path: 'modify-password',
            component: () => import('#/views/setting/account/modify-password/index.vue'),
            meta: {
              title: '修改密码',
              keepAlive: true,
            },
          },
          {
            name: 'SettingAccountDeveloper',
            path: 'developer',
            component: () => import('#/views/setting/account/developer/index.vue'),
            meta: {
              title: '开发者',
              keepAlive: true,
            },
          },
          {
            name: 'SettingAccountTrackingNubmer',
            path: 'tracking-number',
            component: () => import('#/views/setting/account/tracking-number/index.vue'),
            meta: {
              title: '下载追踪号',
              keepAlive: true,
            },
          },
          {
            name: 'SettingAccountQuotationSheet',
            path: 'quotation-sheet',
            component: () => import('#/views/setting/account/quotation-sheet/index.vue'),
            meta: {
              title: '下载报价表',
              keepAlive: true,
            },
          },
          {
            name: 'SettingAccountPlatformAccount',
            path: 'platform-account',
            component: () => import('#/views/setting/account/platform-account/index.vue'),
            meta: {
              title: '平台账号',
              keepAlive: true,
            },
          },
          {
            name: 'SettingAccountManagement',
            path: 'management',
            component: () => import('#/views/setting/account/management/index.vue'),
            meta: {
              title: '子账号',
              keepAlive: true,
            },
          },
          {
            name: 'SettingAccountLoginLog',
            path: 'login-log',
            component: () => import('#/views/setting/account/login-log/index.vue'),
            meta: {
              title: '登录日志',
              keepAlive: true,
            },
          },
          {
            name: 'SettingAccountComplaints',
            path: 'complaints',
            component: () => import('#/views/setting/account/complaints/index.vue'),
            meta: {
              title: '投诉建议',
              keepAlive: true,
            },
          },
          {
            name: 'SettingAccountDeclareInfo',
            path: 'declare-info',
            component: () => import('#/views/setting/account/declare-info/index.vue'),
            meta: {
              title: '申报信息',
              keepAlive: true,
            },
          },
          {
            name: 'SettingAccountTimelinessDashBoard',
            path: 'timeliness-dashboard',
            component: () => import('#/views/setting/account/timeliness-dashboard/index.vue'),
            meta: {
              title: '时效看板',
              keepAlive: true,
            },
          },
          {
            name: 'SettingAccountContract',
            path: 'contract',
            component: () => import('#/views/setting/account/contract/index.vue'),
            meta: {
              title: '合同信息',
              keepAlive: true,
            },
          },
        ],
      },
      {
        name: 'SettingFinance',
        path: 'billing',
        redirect: '/setting/billing/exchange-rate',
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
              keepAlive: true,
            },
          },
          {
            name: 'SettingFinanceCollectionError',
            path: 'collection-error',
            component: () => import('#/views/setting/billing/collection-error/index.vue'),
            meta: {
              title: '揽收误差',
              keepAlive: true,
            },
          },
          {
            name: 'SettingFinancePackageError',
            path: 'package-error',
            component: () => import('#/views/setting/billing/package-error/index.vue'),
            meta: {
              title: '单件误差',
              keepAlive: true,
            },
          },
        ],
      },
    ],
  },
];

export default routes;
