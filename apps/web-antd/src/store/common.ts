import type { Recordable } from '@vben/types';

import type { defs } from '#/services/apis/api';

import { acceptHMRUpdate, defineStore } from 'pinia';

import { apis } from '#/services/apis';

interface CommonState {
  /**
   * 所有字典信息
   */
  allDict: Recordable<defs.apis.RemoteDictDataVO[]>;
}

/**
 * @zh_CN 用户信息相关
 */
export const useCommonStore = defineStore('core-common', {
  actions: {
    async getAllDict() {
      const dict = (await apis.common.getRemoteDictDataMap({
        clientId: 'hdxt-client-service',
        status: '1',
      })) as any;
      this.allDict = dict ?? [];
      localStorage.setItem('allDict', JSON.stringify(this.allDict));
    },
  },
  persist: { pick: ['allDict'] },
  state: (): CommonState => ({
    allDict: JSON.parse(localStorage.getItem('allDict') || '{}'),
  }),
});

// 解决热更新问题
const hot = import.meta.hot;
if (hot) {
  hot.accept(acceptHMRUpdate(useCommonStore, hot));
}
