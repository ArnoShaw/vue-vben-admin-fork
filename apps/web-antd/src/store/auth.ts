import type { defs } from '#/services/apis/api';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { DEFAULT_HOME_PATH, LOGIN_PATH } from '@vben/constants';
import { resetAllStores, useAccessStore, useUserStore } from '@vben/stores';

import { notification } from 'ant-design-vue';
import { defineStore } from 'pinia';

import { $t } from '#/locales';
import { apis } from '#/services/apis';

import { useCommonStore } from './common';

export const useAuthStore = defineStore('auth', () => {
  const accessStore = useAccessStore();
  const userStore = useUserStore();
  const router = useRouter();

  const loginLoading = ref(false);

  /**
   * 异步处理登录操作
   * Asynchronously handle the login process
   * @param params 登录表单数据
   */
  async function authLogin(data: defs.apis.LoginVo, onSuccess?: () => Promise<void> | void) {
    // 异步处理用户登录操作并获取 access_token
    try {
      loginLoading.value = true;
      // 如果成功获取到 access_token
      const { access_token } = data;
      if (access_token) {
        accessStore.setAccessToken(access_token);

        // 获取用户信息并存储到 accessStore 中
        const { user, permissions = [] } = (await fetchUserInfo()) as defs.apis.ProfileVo;

        accessStore.setAccessCodes(permissions);

        if (accessStore.loginExpired) {
          accessStore.setLoginExpired(false);
        } else {
          onSuccess ? await onSuccess?.() : await router.push(DEFAULT_HOME_PATH);
        }
        if (user?.userName) {
          notification.success({
            description: `${$t('authentication.loginSuccessDesc')}:${user?.userName}`,
            duration: 3,
            message: $t('authentication.loginSuccess'),
          });
        }
      }
    } catch {}
  }

  async function logout(redirect: boolean = true) {
    try {
      await apis.auth.logout({});
    } catch {}
    resetAllStores();
    accessStore.setLoginExpired(false);

    // 回登录页带上当前路由地址
    await router.replace({
      path: LOGIN_PATH,
      query: redirect
        ? {
            redirect: encodeURIComponent(router.currentRoute.value.fullPath),
          }
        : {},
    });
  }

  async function fetchUserInfo() {
    useCommonStore().getAllDict();
    const { user, company, permissions } = (await apis.profile.profile({})) as any;
    userStore.setUserInfo(user);
    userStore.setCompanyInfo(company);
    return { user, company, permissions };
  }

  function $reset() {
    loginLoading.value = false;
  }

  return {
    $reset,
    authLogin,
    fetchUserInfo,
    loginLoading,
    logout,
  };
});
