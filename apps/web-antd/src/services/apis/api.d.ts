// @ts-nocheck auto generated apis

export declare namespace defs {
  export namespace apis {
    export interface CaptchaVo {
      /** 是否开启验证码 */
      captchaEnabled?: boolean;

      /** 验证码图片 */
      img?: string;

      /** uuid */
      uuid?: string;
    }

    export interface CommonIdListBOInteger {
      /** ids */
      ids?: Array<number>;
    }

    export interface CommonIdListBOLong {
      /** ids */
      ids?: Array<number>;
    }

    export interface DownloadBO {
      /** filePath */
      filePath?: string;
    }

    export interface ForeignCurrencyVo {
      /** 账户资产 */
      accountAsset?: number;

      /** 余额 */
      balanceAmount?: number;

      /** 账户信用额度 */
      creditLimitAmount?: number;

      /** 货币符号 */
      currencySymbol?: string;

      /** 可用额度 */
      usableCreditAmount?: number;
    }

    export interface LoginVo {
      /** 授权令牌 */
      access_token?: string;

      /** 授权令牌 access_token 的有效期 */
      expire_in?: number;

      /** 用户 openid */
      openid?: string;

      /** 刷新令牌 refresh_token 的有效期 */
      refresh_expire_in?: number;

      /** 刷新令牌 */
      refresh_token?: string;

      /** 令牌权限 */
      scope?: string;
    }

    export interface MetaVo {
      /** 设置该路由的图标，对应路径src/assets/icons/svg */
      icon?: string;

      /** 内链地址（http(s)://开头） */
      link?: string;

      /** 设置为true，则不会被 <keep-alive>缓存 */
      noCache?: boolean;

      /** 设置该路由在侧边栏和面包屑中展示的名字 */
      title?: string;
    }

    export interface OverviewVo {
      /** abnormal */
      abnormal?: number;

      /** accountInfo */
      accountInfo?: apis.SyAccountInfoVo;

      /** disposeStatus */
      disposeStatus?: number;

      /** 账户外币 */
      foreignAccountList?: Array<apis.ForeignCurrencyVo>;

      /** 通知公告列表 */
      noticeList?: Array<apis.SySysNotice>;

      /** 海外退件数 */
      overseasReturn?: number;

      /** 安检退件数 */
      securityCheck?: number;

      /** 检查是否弹窗提醒客户未提供营业执照或身份证正反面证件 */
      showProvideTip?: boolean;

      /** 后端版本号 */
      version?: string;
    }

    export interface PageQuery {
      /** 排序的方向desc或者asc */
      order?: string;

      /** 排序列 */
      orderByColumn?: string;

      /** 当前页数 */
      pageNum?: number;

      /** 分页大小 */
      pageSize?: number;
    }

    export interface ProfileVo {
      /** permissions */
      permissions?: Array<string>;

      /** user */
      user?: apis.SysUserVo;
    }

    export interface RCaptchaVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.CaptchaVo;

      /** msg */
      msg?: string;
    }

    export interface RListMapStringObject {
      /** code */
      code?: number;

      /** data */
      data?: Array<object>;

      /** msg */
      msg?: string;
    }

    export interface RListRemoteSysOrganizationVO {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.RemoteSysOrganizationVO>;

      /** msg */
      msg?: string;
    }

    export interface RListRemoteSysUserVO {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.RemoteSysUserVO>;

      /** msg */
      msg?: string;
    }

    export interface RListRouterVo {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.RouterVo>;

      /** msg */
      msg?: string;
    }

    export interface RListSyCMenuVo {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.SyCMenuVo>;

      /** msg */
      msg?: string;
    }

    export interface RListTreeInteger {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.TreeInteger>;

      /** msg */
      msg?: string;
    }

    export interface RLoginVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.LoginVo;

      /** msg */
      msg?: string;
    }

    export interface RMapStringListRemoteDictDataVO {
      /** code */
      code?: number;

      /** data */
      data?: ObjectMap<any, Array<apis.RemoteDictDataVO>>;

      /** msg */
      msg?: string;
    }

    export interface RObject {
      /** code */
      code?: number;

      /** data */
      data?: object;

      /** msg */
      msg?: string;
    }

    export interface ROverviewVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.OverviewVo;

      /** msg */
      msg?: string;
    }

    export interface RProfileVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.ProfileVo;

      /** msg */
      msg?: string;
    }

    export interface RSyCCompanyDetailVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.SyCCompanyDetailVo;

      /** msg */
      msg?: string;
    }

    export interface RSyCCompanyPackageDeviationVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.SyCCompanyPackageDeviationVo;

      /** msg */
      msg?: string;
    }

    export interface RSyCCompanyPickDeviationVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.SyCCompanyPickDeviationVo;

      /** msg */
      msg?: string;
    }

    export interface RSyCMenuVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.SyCMenuVo;

      /** msg */
      msg?: string;
    }

    export interface RSysUserVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.SysUserVo;

      /** msg */
      msg?: string;
    }

    export interface RVoid {
      /** code */
      code?: number;

      /** data */
      data?: object;

      /** msg */
      msg?: string;
    }

    export interface RegisterBody {
      /** 验证码 */
      code?: string;

      /** 授权类型 */
      grantType: string;

      /** mobile */
      mobile: string;

      /** 用户密码 */
      password: string;

      /** smsCode */
      smsCode: string;

      /** 用户名 */
      username: string;

      /** 唯一标识 */
      uuid?: string;
    }

    export interface RemoteDictDataVO {
      /** 样式属性（其他样式扩展） */
      cssClass?: string;

      /** 字典编码 */
      dictCode?: number;

      /** 字典标签 */
      dictLabel?: string;

      /** 字典排序 */
      dictSort?: number;

      /** 字典类型 */
      dictType?: string;

      /** 字典键值 */
      dictValue?: string;

      /** 是否默认（Y是 N否） */
      isDefault?: string;

      /** 表格字典样式 */
      listClass?: string;

      /** 备注 */
      remark?: string;

      /** 状态（1正常 0停用） */
      status?: string;
    }

    export interface RemoteSysOrganizationVO {
      /** areaId */
      areaId?: number;

      /** areaName */
      areaName?: string;

      /** cityId */
      cityId?: number;

      /** cityName */
      cityName?: string;

      /** contactPersonName */
      contactPersonName?: string;

      /** contactPersonTel */
      contactPersonTel?: string;

      /** countryCode */
      countryCode?: string;

      /** countryName */
      countryName?: string;

      /** organizationCode */
      organizationCode?: string;

      /** organizationId */
      organizationId?: number;

      /** organizationName */
      organizationName?: string;

      /** organizationTypeId */
      organizationTypeId?: number;

      /** receiveAddress */
      receiveAddress?: string;

      /** stateId */
      stateId?: number;

      /** stateName */
      stateName?: string;

      /** status */
      status?: string;

      /** token */
      token?: string;
    }

    export interface RemoteSysUserVO {
      /** 头像地址 */
      avatar?: string;

      /** 邮编 */
      email?: string;

      /** 性别：1-男 2-女 */
      gender?: string;

      /** 电话 */
      mobile?: string;

      /** 昵称 */
      nickname?: string;

      /** qq */
      qq?: string;

      /** 用户状态：1-正常 0-禁用 */
      status?: string;

      /** userId */
      userId?: number;

      /** 登录用户名 */
      username?: string;
    }

    export interface RouterVo {
      /** 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 */
      alwaysShow?: boolean;

      /** 组件地址 */
      component?: string;

      /** 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现 */
      hidden?: boolean;

      /** meta */
      meta?: apis.MetaVo;

      /** 路由名字 */
      name?: string;

      /** 路由地址 */
      path?: string;

      /** 路由参数：如 {"id": 1, "name": "ry"} */
      query?: string;

      /** 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击 */
      redirect?: string;
    }

    export interface SseEmitter {
      /** timeout */
      timeout?: number;
    }

    export interface SyAccountInfoVo {
      /** 是否缺少余额 */
      amountShortage?: boolean;

      /** 即将过期的账单数量 */
      billCount?: number;

      /** businessPersonnel */
      businessPersonnel?: number;

      /** businessUser */
      businessUser?: apis.RemoteSysUserVO;

      /** 公司上传凭证 */
      certificatePath?: string;

      /** 公司账户余额(CNY) */
      companyAmount?: number;

      /** 公司账户余额(CNY) */
      companyAsset?: number;

      /** 客户公司编码 */
      companyCode?: string;

      /** 公司信用额度(CNY) */
      companyCreditLimit?: number;

      /** companyDetailId */
      companyDetailId?: number;

      /** 客户公司id */
      companyId?: number;

      /** 客户公司名称 */
      companyName?: string;

      /** 公司可使用额度(CNY) */
      companyUsableCredit?: number;

      /** 公司已用额度(CNY) */
      companyUsedCredit?: number;

      /** financePersonnel */
      financePersonnel?: number;

      /** financeUser */
      financeUser?: apis.RemoteSysUserVO;

      /** 主账号头像 */
      headPortraitPath?: string;

      /** 身份证国徽面 */
      idCardEmblemPath?: string;

      /** 身份证人像面 */
      idCardHeadPath?: string;

      /** 手机 */
      mobile?: string;

      /** 审核备注 */
      ratifyMemo?: string;

      /** 公司审核状态(0：待完善资料 1:待审核 2:审核失败 3:审核成功) */
      ratifyStatus?: number;

      /** receivePersonnel */
      receivePersonnel?: number;

      /** receiveUser */
      receiveUser?: apis.RemoteSysUserVO;

      /** servicePersonnel */
      servicePersonnel?: number;

      /** serviceUser */
      serviceUser?: apis.RemoteSysUserVO;

      /** 注册类型 0/null：公司 1：个人 */
      signupType?: number;

      /** 主账号编码 */
      userCode?: string;

      /** 主账号用户名 */
      userName?: string;
    }

    export interface SyCCompanyDetailBo {
      /** 开发者Token */
      apiDevToken?: string;

      /** APIToken */
      apiToken?: string;

      /** APIToken过期时间 */
      apiTokenExpiryTime?: string;

      /** 公司业务联系人邮箱 */
      businessContactEmail?: string;

      /** 公司业务联系人手机 */
      businessContactMobile?: string;

      /** 公司业务联系人名称 */
      businessContactName?: string;

      /** 公司业务联系人QQ */
      businessContactQq?: string;

      /** 公司业务联系人性别（0：男；1：女） */
      businessContactSex?: number;

      /** 揽收公司id */
      collectCompanyId?: number;

      /** 公司揽收联系人邮箱 */
      collectContactEmail?: string;

      /** 公司揽收联系人手机 */
      collectContactMobile?: string;

      /** 公司揽收联系人名称 */
      collectContactName?: string;

      /** 公司揽收联系人QQ */
      collectContactQq?: string;

      /** 公司揽收联系人性别（0：男；1：女） */
      collectContactSex?: number;

      /** 每日最多揽收次数 */
      collectTimes?: number;

      /** 揽收类型（0：不可用，1：免费快递揽收，2：免费自有车队揽收， 3：收费揽收） */
      collectType?: number;

      /** 公司详细地址 */
      companyAddress?: string;

      /** 公司所在区县 */
      companyArea?: number;

      /** 公司所在城市 */
      companyCity?: number;

      /** 公司资料流水号 */
      companyDetailId?: number;

      /** 公司流水号 */
      companyId?: number;

      /** 公司所在地 */
      companyLocationId?: string;

      /** 公司所在省州 */
      companyState?: number;

      /** 创建人 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 公司财务联系人邮箱 */
      financeContactEmail?: string;

      /** 公司财务联系人手机 */
      financeContactMobile?: string;

      /** 公司财务联系人名称 */
      financeContactName?: string;

      /** 公司财务联系人QQ */
      financeContactQq?: string;

      /** 公司财务联系人性别（0：男；1：女） */
      financeContactSex?: number;

      /** 冻结操作人 */
      freezeBy?: number;

      /** 冻结内容 */
      freezeContent?: string;

      /** 冻结时间 */
      freezeTime?: string;

      /** 冻结类型（0/null：人工冻结，1：自动冻结） */
      freezeType?: number;

      /** 是否同行业：0-否，1-是 */
      isSameIndustry?: number;

      /** 是否为供应商：0-否，1-是 */
      isSupplier?: number;

      /** 公司操作联系人邮箱 */
      operatorContactEmail?: string;

      /** 公司操作联系人手机 */
      operatorContactMobile?: string;

      /** 公司操作联系人名称 */
      operatorContactName?: string;

      /** 公司操作联系人QQ */
      operatorContactQq?: string;

      /** 公司操作联系人性别（0：男；1：女） */
      operatorContactSex?: number;

      /** 下单返回追踪号规则（null/0：包裹流水号，1：尾程单号） */
      orderRule?: number;

      /** 母公司 */
      parentCompany?: string;

      /** 公司揽收详细地址 */
      pickupAddress?: string;

      /** 公司揽收区县 */
      pickupArea?: number;

      /** 公司揽收城市 */
      pickupCity?: number;

      /** 公司揽收所在地 */
      pickupLocationId?: string;

      /** 公司揽收省州 */
      pickupState?: number;

      /** 阅读协议状态（0/null：未读，1：已读） */
      readStatus?: number;

      /** 阅读协议时间 */
      readTime?: string;

      /** 注册地址 */
      registeredAddress?: string;

      /** 注册区县 */
      registeredArea?: number;

      /** 注册城市 */
      registeredCity?: number;

      /** 注册所在地 */
      registeredLocationId?: string;

      /** 注册所在州省 */
      registeredStater?: number;

      /** IP白名单 */
      serverIpAddr?: string;

      /** 更新人 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;
    }

    export interface SyCCompanyDetailVo {
      /** 开发者Token */
      apiDevToken?: string;

      /** APIToken */
      apiToken?: string;

      /** APIToken过期时间 */
      apiTokenExpiryTime?: string;

      /** 公司业务联系人邮箱 */
      businessContactEmail?: string;

      /** 公司业务联系人手机 */
      businessContactMobile?: string;

      /** 公司业务联系人名称 */
      businessContactName?: string;

      /** 公司业务联系人QQ */
      businessContactQq?: string;

      /** 公司业务联系人性别（0：男；1：女） */
      businessContactSex?: number;

      /** 揽收公司id */
      collectCompanyId?: number;

      /** 公司揽收联系人邮箱 */
      collectContactEmail?: string;

      /** 公司揽收联系人手机 */
      collectContactMobile?: string;

      /** 公司揽收联系人名称 */
      collectContactName?: string;

      /** 公司揽收联系人QQ */
      collectContactQq?: string;

      /** 公司揽收联系人性别（0：男；1：女） */
      collectContactSex?: number;

      /** 每日最多揽收次数 */
      collectTimes?: number;

      /** 揽收类型（0：不可用，1：免费快递揽收，2：免费自有车队揽收， 3：收费揽收） */
      collectType?: number;

      /** 公司详细地址 */
      companyAddress?: string;

      /** 公司所在区县 */
      companyArea?: number;

      /** 公司所在城市 */
      companyCity?: number;

      /** 公司资料流水号 */
      companyDetailId?: number;

      /** 公司流水号 */
      companyId?: number;

      /** 公司所在地 */
      companyLocationId?: string;

      /** 公司所在省州 */
      companyState?: number;

      /** 创建人 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 公司财务联系人邮箱 */
      financeContactEmail?: string;

      /** 公司财务联系人手机 */
      financeContactMobile?: string;

      /** 公司财务联系人名称 */
      financeContactName?: string;

      /** 公司财务联系人QQ */
      financeContactQq?: string;

      /** 公司财务联系人性别（0：男；1：女） */
      financeContactSex?: number;

      /** 冻结操作人 */
      freezeBy?: number;

      /** 冻结内容 */
      freezeContent?: string;

      /** 冻结时间 */
      freezeTime?: string;

      /** 冻结类型（0/null：人工冻结，1：自动冻结） */
      freezeType?: number;

      /** 是否同行业：0-否，1-是 */
      isSameIndustry?: number;

      /** 是否为供应商：0-否，1-是 */
      isSupplier?: number;

      /** 公司操作联系人邮箱 */
      operatorContactEmail?: string;

      /** 公司操作联系人手机 */
      operatorContactMobile?: string;

      /** 公司操作联系人名称 */
      operatorContactName?: string;

      /** 公司操作联系人QQ */
      operatorContactQq?: string;

      /** 公司操作联系人性别（0：男；1：女） */
      operatorContactSex?: number;

      /** 下单返回追踪号规则（null/0：包裹流水号，1：尾程单号） */
      orderRule?: number;

      /** 母公司 */
      parentCompany?: string;

      /** 公司揽收详细地址 */
      pickupAddress?: string;

      /** 公司揽收区县 */
      pickupArea?: number;

      /** 公司揽收城市 */
      pickupCity?: number;

      /** 公司揽收所在地 */
      pickupLocationId?: string;

      /** 公司揽收省州 */
      pickupState?: number;

      /** 阅读协议状态（0/null：未读，1：已读） */
      readStatus?: number;

      /** 阅读协议时间 */
      readTime?: string;

      /** 注册地址 */
      registeredAddress?: string;

      /** 注册区县 */
      registeredArea?: number;

      /** 注册城市 */
      registeredCity?: number;

      /** 注册所在地 */
      registeredLocationId?: string;

      /** 注册所在州省 */
      registeredStater?: number;

      /** IP白名单 */
      serverIpAddr?: string;

      /** 更新人 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;
    }

    export interface SyCCompanyPackageDeviationBo {
      /** 公司流水号 */
      companyId?: number;

      /** 包裹大于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
      packageGreaterInterceptMode?: number;

      /** 包裹大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      packageGreaterInterceptValue?: number;

      /** 包裹小于于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
      packageLesserInterceptMode?: number;

      /** 包裹小于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      packageLesserInterceptValue?: number;
    }

    export interface SyCCompanyPackageDeviationVo {
      /** 公司流水号 */
      companyId?: number;

      /** 包裹大于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
      packageGreaterInterceptMode?: number;

      /** 包裹大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      packageGreaterInterceptValue?: number;

      /** 包裹小于于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
      packageLesserInterceptMode?: number;

      /** 包裹小于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      packageLesserInterceptValue?: number;
    }

    export interface SyCCompanyPickDeviationBo {
      /** 公司流水号 */
      companyId?: number;

      /** 称重大于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截） */
      pickupGreaterInterceptMode?: number;

      /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      pickupGreaterInterceptValue?: number;

      /** 称重小于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
      pickupLesserInterceptMode?: number;

      /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      pickupLesserInterceptValue?: number;
    }

    export interface SyCCompanyPickDeviationVo {
      /** 公司流水号 */
      companyId?: number;

      /** 称重大于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截） */
      pickupGreaterInterceptMode?: number;

      /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      pickupGreaterInterceptValue?: number;

      /** 称重小于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
      pickupLesserInterceptMode?: number;

      /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      pickupLesserInterceptValue?: number;
    }

    export interface SyCMenuVo {
      /** 组件路径 */
      component?: string;

      /** 创建时间 */
      createTime?: string;

      /** 菜单图标 */
      icon?: string;

      /** 是否缓存（0缓存 1不缓存） */
      isCache?: string;

      /** 是否为外链（0是 1否） */
      isFrame?: string;

      /** 菜单ID */
      menuId?: number;

      /** 菜单名称 */
      menuName?: string;

      /** 菜单类型（M目录 C菜单 F按钮） */
      menuType?: string;

      /** 显示顺序 */
      orderNum?: number;

      /** 父菜单ID */
      parentId?: number;

      /** 路由地址 */
      path?: string;

      /** 权限标识 */
      perms?: string;

      /** 路由参数 */
      queryParam?: string;

      /** 备注 */
      remark?: string;

      /** 菜单状态（0正常 1停用） */
      status?: string;

      /** 显示状态（0显示 1隐藏） */
      visible?: string;
    }

    export interface SyCUserComplaintBo {
      /** 公司名称 */
      companyName?: string;

      /** 投诉和建议的内容 */
      complaintContent: string;

      /** 投诉和建议的截图 base64 */
      complaintImage?: string;

      /** 状态 0未读，1已读 */
      complaintStatus?: number;

      /** 邮箱地址 */
      linkEmail?: string;

      /** 联系电话 */
      linkMobile?: string;

      /** 联系名称 */
      linkName?: string;
    }

    export interface SyCUserComplaintVo {
      /** 公司ID */
      companyId?: number;

      /** 公司名称 */
      companyName?: string;

      /** 投诉和建议的内容 */
      complaintContent?: string;

      /** 自增长ID */
      complaintId?: number;

      /** 投诉和建议的截图 base64 */
      complaintImage?: string;

      /** 状态 0未读，1已读 */
      complaintStatus?: number;

      /** 创建人 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 操作IP地址 */
      ipAddress?: string;

      /** 操作IP位置 */
      ipPosition?: string;

      /** 邮箱地址 */
      linkEmail?: string;

      /** 联系电话 */
      linkMobile?: string;

      /** 联系名称 */
      linkName?: string;
    }

    export interface SyExchangeRateVo {
      /** 币种代码 */
      currencyCode?: string;

      /** 币种名称 */
      currencyName?: string;

      /** 币种符号 */
      currencySymbol?: string;

      /** 官方汇率 */
      officialExchangeRate?: number;

      /** 主币种（1：是；0：否） */
      primaryCurrencyFlag?: number;

      /** 官方汇率更新时间 */
      updatedTime?: string;
    }

    export interface SySysNotice {
      /** 公告内容 */
      content?: string;

      /** 创建人 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 公告语言  1 中文  2 英文 */
      languageType?: number;

      /** 公告流水号 */
      noticeId?: number;

      /** 展示图片路径 */
      noticePreviewUrl?: string;

      /** 公告类型  1 站内公告  2 公司新闻  3 行业新闻 */
      noticeType?: number;

      /** 阅读次数 */
      readCount?: number;

      /** 是否置顶(0:不置顶；1:置顶) */
      stickFlag?: number;

      /** 公告标题 */
      title?: string;

      /** 更新人 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;
    }

    export interface SysLogininforBo {
      /** 公司编码 */
      companyId?: number;

      /** 访问结束时间 */
      endTime?: string;

      /** 登录状态(0:失败 1:成功) */
      loginStatus?: number;

      /** 访问开始时间 */
      startTime?: string;

      /** 公司用户流水号 */
      userId?: number;

      /** 登录流水号 */
      userLoginRecordId?: number;

      /** 登陆用户名 */
      userName?: string;
    }

    export interface SysLogininforVo {
      /** 公司编码 */
      companyId?: number;

      /** 创建人 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 登录IP地址 */
      loginAddress?: string;

      /** 登陆地理位置 */
      loginPosition?: string;

      /** 登录状态(0:失败 1:成功) */
      loginStatus?: number;

      /** 登录时间 */
      loginTime?: string;

      /** 更新人 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;

      /** 公司用户流水号 */
      userId?: number;

      /** 登录流水号 */
      userLoginRecordId?: number;

      /** 登陆用户名 */
      userName?: string;
    }

    export interface SysMenuBo {
      /** 组件路径 */
      component?: string;

      /** 创建者 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 菜单图标 */
      icon?: string;

      /** 是否缓存（0缓存 1不缓存） */
      isCache?: number;

      /** 是否为外链（0是 1否） */
      isFrame?: number;

      /** 菜单ID */
      menuId?: number;

      /** 菜单名称 */
      menuName: string;

      /** 菜单类型（M目录 C菜单 F按钮） */
      menuType: string;

      /** 显示顺序 */
      orderNum: number;

      /** 请求参数 */
      params?: ObjectMap<any, object>;

      /** 父菜单ID */
      parentId?: number;

      /** 路由地址 */
      path?: string;

      /** 权限标识 */
      perms?: string;

      /** 路由参数 */
      queryParam?: string;

      /** 备注 */
      remark?: string;

      /** 菜单状态（0正常 1停用） */
      status?: number;

      /** 更新者 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;

      /** 显示状态（0显示 1隐藏） */
      visible?: number;
    }

    export interface SysOperLogBo {
      /** 业务类型（0其它 1新增 2修改 3删除） */
      businessType?: number;

      /** 业务类型数组 */
      businessTypes?: Array<number>;

      /** 消耗时间 */
      costTime?: number;

      /** 部门名称 */
      deptName?: string;

      /** 错误消息 */
      errorMsg?: string;

      /** 返回参数 */
      jsonResult?: string;

      /** 方法名称 */
      method?: string;

      /** 日志主键 */
      operId?: number;

      /** 主机地址 */
      operIp?: string;

      /** 操作地点 */
      operLocation?: string;

      /** 操作人员 */
      operName?: string;

      /** 请求参数 */
      operParam?: string;

      /** 操作时间 */
      operTime?: string;

      /** 请求URL */
      operUrl?: string;

      /** 操作类别（0其它 1后台用户 2手机端用户） */
      operatorType?: number;

      /** 请求参数 */
      params?: ObjectMap<any, object>;

      /** 请求方式 */
      requestMethod?: string;

      /** 操作状态（0正常 1异常） */
      status?: number;

      /** 模块标题 */
      title?: string;
    }

    export interface SysOperLogVo {
      /** 业务类型（0其它 1新增 2修改 3删除） */
      businessType?: number;

      /** 业务类型数组 */
      businessTypes?: Array<number>;

      /** 消耗时间 */
      costTime?: number;

      /** 部门名称 */
      deptName?: string;

      /** 错误消息 */
      errorMsg?: string;

      /** 返回参数 */
      jsonResult?: string;

      /** 方法名称 */
      method?: string;

      /** 日志主键 */
      operId?: number;

      /** 主机地址 */
      operIp?: string;

      /** 操作地点 */
      operLocation?: string;

      /** 操作人员 */
      operName?: string;

      /** 请求参数 */
      operParam?: string;

      /** 操作时间 */
      operTime?: string;

      /** 请求URL */
      operUrl?: string;

      /** 操作类别（0其它 1后台用户 2手机端用户） */
      operatorType?: number;

      /** 请求方式 */
      requestMethod?: string;

      /** 操作状态（0正常 1异常） */
      status?: number;

      /** 模块标题 */
      title?: string;
    }

    export interface SysUserBo {
      /** 用户公司id */
      companyId?: number;

      /** 创建者 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 用户邮箱 */
      email?: string;

      /** 手机号码 */
      mobile?: string;

      /** 请求参数 */
      params?: ObjectMap<any, object>;

      /** 密码 */
      password?: string;

      /** 帐号状态（0正常 1停用） */
      status?: string;

      /** 更新者 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;

      /** 用户ID */
      userId?: number;

      /** 用户账号 */
      userName: string;
    }

    export interface SysUserEditPasswordBo {
      /** 验证码 */
      code?: string;

      /** 手机号码 */
      mobile?: string;

      /** 用户密码 */
      password: string;

      /** smsCode */
      smsCode: string;

      /** userId */
      userId: number;

      /** 唯一标识 */
      uuid?: string;
    }

    export interface SysUserPasswordBo {
      /** 新密码 */
      newPassword: string;

      /** 旧密码 */
      oldPassword: string;
    }

    export interface SysUserPasswordForgotBo {
      /** 图形验证码 */
      code: string;

      /** 手机号 */
      mobile?: string;

      /** 用户名 */
      userName?: string;

      /** 唯一标识 */
      uuid?: string;
    }

    export interface SysUserProfileBo {
      /** 创建者 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 用户邮箱 */
      email?: string;

      /** 头像地址 */
      headPortraitPath?: string;

      /** 手机号码 */
      mobile?: string;

      /** 请求参数 */
      params?: ObjectMap<any, object>;

      /** 更新者 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;
    }

    export interface SysUserVo {
      /** 公司流水号 */
      companyId?: number;

      /** 创建时间 */
      createTime?: string;

      /** 用户邮箱 */
      email?: string;

      /** 头像地址 */
      headPortraitPath?: string;

      /** 最后登录时间 */
      lastLoginTime?: string;

      /** 最后登录IP */
      loginIp?: string;

      /** 手机号码 */
      mobile?: string;

      /** 账号状态(0:未启用 1:已启用 2:已停用) */
      status?: number;

      /** 用户代码 */
      userCode?: string;

      /** 用户ID */
      userId?: number;

      /** 用户账号 */
      userName?: string;

      /** 用户类型（主账户main,子账号sub） */
      userType?: string;
    }

    export interface TableDataInfoSyCUserComplaintVo {
      /** 消息状态码 */
      code?: number;

      /** 消息内容 */
      msg?: string;

      /** 列表数据 */
      rows?: Array<apis.SyCUserComplaintVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface TableDataInfoSyExchangeRateVo {
      /** 消息状态码 */
      code?: number;

      /** 消息内容 */
      msg?: string;

      /** 列表数据 */
      rows?: Array<apis.SyExchangeRateVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface TableDataInfoSysLogininforVo {
      /** 消息状态码 */
      code?: number;

      /** 消息内容 */
      msg?: string;

      /** 列表数据 */
      rows?: Array<apis.SysLogininforVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface TableDataInfoSysOperLogVo {
      /** 消息状态码 */
      code?: number;

      /** 消息内容 */
      msg?: string;

      /** 列表数据 */
      rows?: Array<apis.SysOperLogVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface TreeInteger {
      /** config */
      config?: apis.TreeNodeConfig;

      /** empty */
      empty?: boolean;

      /** id */
      id?: number;

      /** name */
      name?: object;

      /** parentId */
      parentId?: number;

      /** weight */
      weight?: object;
    }

    export interface TreeNodeConfig {
      /** childrenKey */
      childrenKey?: string;

      /** deep */
      deep?: number;

      /** idKey */
      idKey?: string;

      /** nameKey */
      nameKey?: string;

      /** parentIdKey */
      parentIdKey?: string;

      /** weightKey */
      weightKey?: string;
    }
  }
}

export declare namespace API {
  export namespace apis {
    /**
     * auth
     */
    export namespace auth {
      /**
        * 登录方法
登录方法
        * /auth/login
        */
      export namespace login {
        export class Params {}

        export type Response = defs.apis.RLoginVo;
        export const init: Response;
        export function request(params: Params, bodyParams: string): Promise<defs.apis.RLoginVo>;
      }

      /**
        * 退出登录
退出登录
        * /auth/logout
        */
      export namespace logout {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }

      /**
        * 用户注册
用户注册
        * /auth/register
        */
      export namespace register {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.RegisterBody,
        ): Promise<defs.apis.RVoid>;
      }
    }

    /**
     * captcha
     */
    export namespace captcha {
      /**
        * 生成验证码
生成验证码
        * /auth/code
        */
      export namespace getCode {
        export class Params {}

        export type Response = defs.apis.RCaptchaVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RCaptchaVo>;
      }

      /**
        * 邮箱验证码
邮箱验证码
        * /resource/email/code
        */
      export namespace emailCode {
        export class Params {
          /** 邮箱 */
          email: string;
        }

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }

      /**
        * 短信验证码
短信验证码
        * /resource/sms/code
        */
      export namespace smsCode {
        export class Params {
          /** 用户手机号 */
          mobile: string;
        }

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }
    }

    /**
     * common
     */
    export namespace common {
      /**
        * 本地路径或远程路径下载
本地路径或远程路径下载
        * /common/file/download
        */
      export namespace downloadExport {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params, bodyParams: defs.apis.DownloadBO): Promise<any>;
      }

      /**
        * 上传文件到阿里云
上传文件到阿里云
        * /common/file/upload
        */
      export namespace uploadFile {
        export class Params {}

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(params: Params, bodyParams: object): Promise<defs.apis.RObject>;
      }

      /**
        * 获取字典
获取字典
        * /common/getAllDictData
        */
      export namespace getRemoteDictDataMap {
        export class Params {
          /** status */
          status: string;
          /** clientId */
          clientId: string;
        }

        export type Response = defs.apis.RMapStringListRemoteDictDataVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RMapStringListRemoteDictDataVO>;
      }

      /**
        * 获取分支机构列表
获取分支机构列表
        * /common/getOrganizationList
        */
      export namespace getOrganizationList {
        export class Params {
          /** status */
          status: string;
        }

        export type Response = defs.apis.RListRemoteSysOrganizationVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListRemoteSysOrganizationVO>;
      }

      /**
        * 获取运维人员用户列表
获取运维人员用户列表
        * /common/getSysUserList
        */
      export namespace getSysUserList {
        export class Params {
          /** status */
          status: string;
          /** roleId */
          roleId: number;
        }

        export type Response = defs.apis.RListRemoteSysUserVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListRemoteSysUserVO>;
      }

      /**
        * 获取地理位置通用接口（需登录状态）
获取地理位置通用接口（需登录状态）
        * /common/location/optionselect
        */
      export namespace getRegionSelect {
        export class Params {
          /** type */
          type: number;
          /** countryCode */
          countryCode?: string;
          /** id */
          id?: number;
        }

        export type Response = defs.apis.RListMapStringObject;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListMapStringObject>;
      }
    }

    /**
     * complaint
     */
    export namespace complaint {
      /**
        * 新增投诉和建议
新增投诉和建议
        * /complaint/add
        */
      export namespace getExchangeRateList {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SyCUserComplaintBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 获取投诉和建议分页列表
获取投诉和建议分页列表
        * /complaint/list
        */
      export namespace getExchangeRateList_3 {
        export class Params {
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoSyCUserComplaintVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoSyCUserComplaintVo>;
      }
    }

    /**
     * developer
     */
    export namespace developer {
      /**
        * 获取开发者账号信息
获取开发者账号信息
        * /dev/detail
        */
      export namespace getDev {
        export class Params {}

        export type Response = defs.apis.RSyCCompanyDetailVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RSyCCompanyDetailVo>;
      }

      /**
        * 修改开发者账号
修改开发者账号
        * /dev/update
        */
      export namespace editDev {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SyCCompanyDetailBo,
        ): Promise<defs.apis.RVoid>;
      }
    }

    /**
     * exchangeRate
     */
    export namespace exchangeRate {
      /**
        * 获取汇率全部币种
获取汇率全部币种
        * /exchange/rate/list
        */
      export namespace getExchangeRateList_2 {
        export class Params {
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoSyExchangeRateVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoSyExchangeRateVo>;
      }

      /**
        * 获取汇率常用币种
获取汇率常用币种
        * /exchange/rate/often/list
        */
      export namespace getExchangeRateList_1 {
        export class Params {}

        export type Response = Array<defs.apis.SyExchangeRateVo>;
        export const init: Response;
        export function request(params: Params): Promise<Array<defs.apis.SyExchangeRateVo>>;
      }
    }

    /**
     * index
     */
    export namespace index {
      /**
        * 获取路由信息
获取路由信息
        * /getRouters
        */
      export namespace getRouters {
        export class Params {}

        export type Response = defs.apis.RListRouterVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListRouterVo>;
      }

      /**
        * 访问首页
访问首页
        * /overview
        */
      export namespace overview {
        export class Params {}

        export type Response = defs.apis.ROverviewVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.ROverviewVo>;
      }
    }

    /**
     * logininfor
     */
    export namespace logininfor {
      /**
        * 清理系统访问记录
清理系统访问记录
        * /monitor/logininfor/clean
        */
      export namespace clean_1 {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }

      /**
        * 批量删除登录日志
批量删除登录日志
        * /monitor/logininfor/delete
        */
      export namespace remove_3 {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.CommonIdListBOInteger,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 导出系统访问记录列表
导出系统访问记录列表
        * /monitor/logininfor/export
        */
      export namespace export_1 {
        export class Params {
          /** logininfor */
          logininfor: defs.apis.SysLogininforBo;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * 获取系统访问记录列表
获取系统访问记录列表
        * /monitor/logininfor/list
        */
      export namespace list_3 {
        export class Params {
          /** logininfor */
          logininfor: defs.apis.SysLogininforBo;
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoSysLogininforVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoSysLogininforVo>;
      }
    }

    /**
     * menu
     */
    export namespace menu {
      /**
        * 修改菜单
修改菜单
        * /system/menu
        */
      export namespace edit_1 {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysMenuBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 新增菜单
新增菜单
        * /system/menu
        */
      export namespace add_1 {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysMenuBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 根据菜单编号获取详细信息
根据菜单编号获取详细信息
        * /system/menu/detail
        */
      export namespace getInfo {
        export class Params {
          /** 菜单ID */
          menuId: number;
        }

        export type Response = defs.apis.RSyCMenuVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RSyCMenuVo>;
      }

      /**
        * 获取菜单列表
获取菜单列表
        * /system/menu/list
        */
      export namespace list_1 {
        export class Params {
          /** menu */
          menu: defs.apis.SysMenuBo;
        }

        export type Response = defs.apis.RListSyCMenuVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListSyCMenuVo>;
      }

      /**
        * 获取菜单下拉树列表
获取菜单下拉树列表
        * /system/menu/treeselect
        */
      export namespace treeselect {
        export class Params {
          /** menu */
          menu: defs.apis.SysMenuBo;
        }

        export type Response = defs.apis.RListTreeInteger;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListTreeInteger>;
      }

      /**
        * 删除菜单
删除菜单
        * /system/menu/{menuId}
        */
      export namespace remove_1 {
        export class Params {
          /** 菜单ID */
          menuId: number;
        }

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }
    }

    /**
     * operlog
     */
    export namespace operlog {
      /**
        * 清理操作日志记录
清理操作日志记录
        * /monitor/operlog/clean
        */
      export namespace clean {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }

      /**
        * 批量删除操作日志记录
批量删除操作日志记录
        * /monitor/operlog/delete
        */
      export namespace remove_2 {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.CommonIdListBOLong,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 导出操作日志记录列表
导出操作日志记录列表
        * /monitor/operlog/export
        */
      export namespace exporting {
        export class Params {
          /** operLog */
          operLog: defs.apis.SysOperLogBo;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
        * 获取操作日志记录列表
获取操作日志记录列表
        * /monitor/operlog/list
        */
      export namespace list_2 {
        export class Params {
          /** operLog */
          operLog: defs.apis.SysOperLogBo;
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoSysOperLogVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoSysOperLogVo>;
      }
    }

    /**
     * packageDeviation
     */
    export namespace packageDeviation {
      /**
        * 获取单件误差信息
获取单件误差信息
        * /package/detail
        */
      export namespace getPackageDeviation {
        export class Params {}

        export type Response = defs.apis.RSyCCompanyPackageDeviationVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RSyCCompanyPackageDeviationVo>;
      }

      /**
        * 更改单件误差信息
更改单件误差信息
        * /package/update
        */
      export namespace editPackageDeviation {
        export class Params {
          /** bo */
          bo: defs.apis.SyCCompanyPackageDeviationBo;
        }

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }
    }

    /**
     * pickDeviation
     */
    export namespace pickDeviation {
      /**
        * 获取揽收误差信息
获取揽收误差信息
        * /pick/detail
        */
      export namespace getPickDeviation {
        export class Params {}

        export type Response = defs.apis.RSyCCompanyPickDeviationVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RSyCCompanyPickDeviationVo>;
      }

      /**
        * 更改揽收误差信息
更改揽收误差信息
        * /pick/update
        */
      export namespace editPickDeviation {
        export class Params {
          /** bo */
          bo: defs.apis.SyCCompanyPickDeviationBo;
        }

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }
    }

    /**
     * profile
     */
    export namespace profile {
      /**
        * 个人信息
个人信息
        * /system/user/profile
        */
      export namespace profile {
        export class Params {}

        export type Response = defs.apis.RProfileVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RProfileVo>;
      }

      /**
        * 修改用户信息
修改用户信息
        * /system/user/profile
        */
      export namespace updateProfile {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysUserProfileBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 忘记密码，第一步
忘记密码，第一步
        * /system/user/profile/forgotPwd
        */
      export namespace forgotPwd {
        export class Params {}

        export type Response = defs.apis.RSysUserVo;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysUserPasswordForgotBo,
        ): Promise<defs.apis.RSysUserVo>;
      }

      /**
        * 忘记密码，第三步(加密)
忘记密码，第三步(加密)
        * /system/user/profile/resetPwd
        */
      export namespace resetPwd {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysUserEditPasswordBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 重置密码(加密)
重置密码(加密)
        * /system/user/profile/updatePwd
        */
      export namespace updatePwd {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysUserPasswordBo,
        ): Promise<defs.apis.RVoid>;
      }
    }

    /**
     * sse
     */
    export namespace sse {
      /**
        * 建立 SSE 连接
建立 SSE 连接
        * /resource/sse
        */
      export namespace connect {
        export class Params {}

        export type Response = defs.apis.SseEmitter;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.SseEmitter>;
      }

      /**
        * 关闭 SSE 连接
关闭 SSE 连接
        * /resource/sse/close
        */
      export namespace close {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }

      /**
        * 向特定用户发送消息
向特定用户发送消息
        * /resource/sse/send
        */
      export namespace send {
        export class Params {
          /** 目标用户的 ID */
          userId: number;
          /** 要发送的消息内容 */
          msg: string;
        }

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }

      /**
        * 向所有用户发送消息
向所有用户发送消息
        * /resource/sse/sendAll
        */
      export namespace send_1 {
        export class Params {
          /** 要发送的消息内容 */
          msg: string;
        }

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }
    }

    /**
     * user
     */
    export namespace user {
      /**
        * 修改子账户
修改子账户
        * /system/user
        */
      export namespace edit {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysUserBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 新增子账户
新增子账户
        * /system/user
        */
      export namespace add {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysUserBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 删除子账户
删除子账户
        * /system/user/delete
        */
      export namespace remove {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.CommonIdListBOInteger,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 获取子账户列表
获取子账户列表
        * /system/user/list
        */
      export namespace list {
        export class Params {}

        export type Response = Array<defs.apis.SysUserVo>;
        export const init: Response;
        export function request(params: Params): Promise<Array<defs.apis.SysUserVo>>;
      }
    }
  }
}
