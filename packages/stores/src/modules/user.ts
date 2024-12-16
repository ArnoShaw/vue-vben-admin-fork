import { acceptHMRUpdate, defineStore } from 'pinia';

interface BasicUserInfo {
  [key: string]: any;
  companyId: number;
  /**
   * 头像
   */
  headPortraitPath: string;
  lastLoginTime: string;
  mobile: string;
  /**
   * 用户角色
   */
  roles?: string[];
  userCode: string;
  userEmail?: string;
  /**
   * 用户id
   */
  userId: number;
  /**
   * 用户昵称
   */
  userName: string;
  /**
   * 用户名
   */
  username: string;
  userType: string;
}

interface AllUsersInfo {
  avatar: string;
  email: string;
  gender: string; // 性别：1-男 2-女
  mobile: string;
  nickname: string;
  qq: string;
  status: string; // 用户状态：1-正常 0-禁用
  userId: number;
  username: string;
}

interface CompanyInfo {
  companyCode: string;
  companyId: number;
  companyName: string;
  ratifyMemo: string;
  /**
   * 审批状态 0:待完善资料 1:待审核 2:审核失败 3:审核成功
   */
  ratifyStatus: number;
  /**
   * 补齐证件弹窗显示状态
   */
  showProvideTip: boolean;
  /**
   * 注册状态 1:个人 0/null:公司
   */
  signupType: number;
}

interface AccessState {
  /**
   * 所有运维用户
   */
  allUsers: AllUsersInfo[];
  /**
   * 公司信息
   */
  companyInfo: CompanyInfo | null;
  /**
   * 用户信息
   */
  userInfo: BasicUserInfo | null;
  /**
   * 用户角色
   */
  userRoles: string[];
}

/**
 * @zh_CN 用户信息相关
 */
export const useUserStore = defineStore('core-user', {
  actions: {
    setAllUsers(users: AllUsersInfo[]) {
      this.allUsers = users ?? [];
    },
    setCompanyInfo(company: CompanyInfo) {
      this.companyInfo = company;
    },
    setUserInfo(userInfo: BasicUserInfo | null) {
      // 设置用户信息
      this.userInfo = userInfo;
      // 设置角色信息
      const roles = userInfo?.roles ?? [];
      this.setUserRoles(roles);
    },
    setUserRoles(roles: string[]) {
      this.userRoles = roles;
    },
  },
  persist: { pick: ['allUsers'] },
  state: (): AccessState => ({
    allUsers: [],
    companyInfo: null,
    userInfo: null,
    userRoles: [],
  }),
});

// 解决热更新问题
const hot = import.meta.hot;
if (hot) {
  hot.accept(acceptHMRUpdate(useUserStore, hot));
}
