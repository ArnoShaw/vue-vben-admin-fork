class CaptchaVo {
  /** 是否开启验证码 */
  captchaEnabled = false;

  /** 验证码图片 */
  img = '';

  /** uuid */
  uuid = '';
}

class CommonIdListBOInteger {
  /** ids */
  ids = [];
}

class CommonIdListBOLong {
  /** ids */
  ids = [];
}

class DownloadBO {
  /** filePath */
  filePath = '';
}

class ForeignCurrencyVo {
  /** 账户资产 */
  accountAsset = undefined;

  /** 余额 */
  balanceAmount = undefined;

  /** 账户信用额度 */
  creditLimitAmount = undefined;

  /** 货币符号 */
  currencySymbol = '';

  /** 可用额度 */
  usableCreditAmount = undefined;
}

class LoginVo {
  /** 授权令牌 */
  access_token = '';

  /** 授权令牌 access_token 的有效期 */
  expire_in = undefined;

  /** 用户 openid */
  openid = '';

  /** 刷新令牌 refresh_token 的有效期 */
  refresh_expire_in = undefined;

  /** 刷新令牌 */
  refresh_token = '';

  /** 令牌权限 */
  scope = '';
}

class MetaVo {
  /** 设置该路由的图标，对应路径src/assets/icons/svg */
  icon = '';

  /** 内链地址（http(s)://开头） */
  link = '';

  /** 设置为true，则不会被 <keep-alive>缓存 */
  noCache = false;

  /** 设置该路由在侧边栏和面包屑中展示的名字 */
  title = '';
}

class OverviewVo {
  /** abnormal */
  abnormal = undefined;

  /** accountInfo */
  accountInfo = new SyAccountInfoVo();

  /** disposeStatus */
  disposeStatus = undefined;

  /** 账户外币 */
  foreignAccountList = [];

  /** 通知公告列表 */
  noticeList = [];

  /** 海外退件数 */
  overseasReturn = undefined;

  /** 安检退件数 */
  securityCheck = undefined;

  /** 检查是否弹窗提醒客户未提供营业执照或身份证正反面证件 */
  showProvideTip = false;

  /** 后端版本号 */
  version = '';
}

class PageQuery {
  /** 排序的方向desc或者asc */
  order = '';

  /** 排序列 */
  orderByColumn = '';

  /** 当前页数 */
  pageNum = undefined;

  /** 分页大小 */
  pageSize = undefined;
}

class ProfileVo {
  /** permissions */
  permissions = [];

  /** user */
  user = new SysUserVo();
}

class RCaptchaVo {
  /** code */
  code = undefined;

  /** data */
  data = new CaptchaVo();

  /** msg */
  msg = '';
}

class RListMapStringObject {
  /** code */
  code = undefined;

  /** data */
  data = [];

  /** msg */
  msg = '';
}

class RListRemoteSysOrganizationVO {
  /** code */
  code = undefined;

  /** data */
  data = [];

  /** msg */
  msg = '';
}

class RListRemoteSysUserVO {
  /** code */
  code = undefined;

  /** data */
  data = [];

  /** msg */
  msg = '';
}

class RListRouterVo {
  /** code */
  code = undefined;

  /** data */
  data = [];

  /** msg */
  msg = '';
}

class RListSyCMenuVo {
  /** code */
  code = undefined;

  /** data */
  data = [];

  /** msg */
  msg = '';
}

class RListTreeInteger {
  /** code */
  code = undefined;

  /** data */
  data = [];

  /** msg */
  msg = '';
}

class RLoginVo {
  /** code */
  code = undefined;

  /** data */
  data = new LoginVo();

  /** msg */
  msg = '';
}

class RMapStringListRemoteDictDataVO {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** msg */
  msg = '';
}

class RObject {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** msg */
  msg = '';
}

class ROverviewVo {
  /** code */
  code = undefined;

  /** data */
  data = new OverviewVo();

  /** msg */
  msg = '';
}

class RProfileVo {
  /** code */
  code = undefined;

  /** data */
  data = new ProfileVo();

  /** msg */
  msg = '';
}

class RSyCCompanyDetailVo {
  /** code */
  code = undefined;

  /** data */
  data = new SyCCompanyDetailVo();

  /** msg */
  msg = '';
}

class RSyCCompanyPackageDeviationVo {
  /** code */
  code = undefined;

  /** data */
  data = new SyCCompanyPackageDeviationVo();

  /** msg */
  msg = '';
}

class RSyCCompanyPickDeviationVo {
  /** code */
  code = undefined;

  /** data */
  data = new SyCCompanyPickDeviationVo();

  /** msg */
  msg = '';
}

class RSyCMenuVo {
  /** code */
  code = undefined;

  /** data */
  data = new SyCMenuVo();

  /** msg */
  msg = '';
}

class RSysUserVo {
  /** code */
  code = undefined;

  /** data */
  data = new SysUserVo();

  /** msg */
  msg = '';
}

class RVoid {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** msg */
  msg = '';
}

class RegisterBody {
  /** 验证码 */
  code = '';

  /** 授权类型 */
  grantType = '';

  /** mobile */
  mobile = '';

  /** 用户密码 */
  password = '';

  /** smsCode */
  smsCode = '';

  /** 用户名 */
  username = '';

  /** 唯一标识 */
  uuid = '';
}

class RemoteDictDataVO {
  /** 样式属性（其他样式扩展） */
  cssClass = '';

  /** 字典编码 */
  dictCode = undefined;

  /** 字典标签 */
  dictLabel = '';

  /** 字典排序 */
  dictSort = undefined;

  /** 字典类型 */
  dictType = '';

  /** 字典键值 */
  dictValue = '';

  /** 是否默认（Y是 N否） */
  isDefault = '';

  /** 表格字典样式 */
  listClass = '';

  /** 备注 */
  remark = '';

  /** 状态（1正常 0停用） */
  status = '';
}

class RemoteSysOrganizationVO {
  /** areaId */
  areaId = undefined;

  /** areaName */
  areaName = '';

  /** cityId */
  cityId = undefined;

  /** cityName */
  cityName = '';

  /** contactPersonName */
  contactPersonName = '';

  /** contactPersonTel */
  contactPersonTel = '';

  /** countryCode */
  countryCode = '';

  /** countryName */
  countryName = '';

  /** organizationCode */
  organizationCode = '';

  /** organizationId */
  organizationId = undefined;

  /** organizationName */
  organizationName = '';

  /** organizationTypeId */
  organizationTypeId = undefined;

  /** receiveAddress */
  receiveAddress = '';

  /** stateId */
  stateId = undefined;

  /** stateName */
  stateName = '';

  /** status */
  status = '';

  /** token */
  token = '';
}

class RemoteSysUserVO {
  /** 头像地址 */
  avatar = '';

  /** 邮编 */
  email = '';

  /** 性别：1-男 2-女 */
  gender = '';

  /** 电话 */
  mobile = '';

  /** 昵称 */
  nickname = '';

  /** qq */
  qq = '';

  /** 用户状态：1-正常 0-禁用 */
  status = '';

  /** userId */
  userId = undefined;

  /** 登录用户名 */
  username = '';
}

class RouterVo {
  /** 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 */
  alwaysShow = false;

  /** 组件地址 */
  component = '';

  /** 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现 */
  hidden = false;

  /** meta */
  meta = new MetaVo();

  /** 路由名字 */
  name = '';

  /** 路由地址 */
  path = '';

  /** 路由参数：如 {"id": 1, "name": "ry"} */
  query = '';

  /** 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击 */
  redirect = '';
}

class SseEmitter {
  /** timeout */
  timeout = undefined;
}

class SyAccountInfoVo {
  /** 是否缺少余额 */
  amountShortage = false;

  /** 即将过期的账单数量 */
  billCount = undefined;

  /** businessPersonnel */
  businessPersonnel = undefined;

  /** businessUser */
  businessUser = new RemoteSysUserVO();

  /** 公司上传凭证 */
  certificatePath = '';

  /** 公司账户余额(CNY) */
  companyAmount = undefined;

  /** 公司账户余额(CNY) */
  companyAsset = undefined;

  /** 客户公司编码 */
  companyCode = '';

  /** 公司信用额度(CNY) */
  companyCreditLimit = undefined;

  /** companyDetailId */
  companyDetailId = undefined;

  /** 客户公司id */
  companyId = undefined;

  /** 客户公司名称 */
  companyName = '';

  /** 公司可使用额度(CNY) */
  companyUsableCredit = undefined;

  /** 公司已用额度(CNY) */
  companyUsedCredit = undefined;

  /** financePersonnel */
  financePersonnel = undefined;

  /** financeUser */
  financeUser = new RemoteSysUserVO();

  /** 主账号头像 */
  headPortraitPath = '';

  /** 身份证国徽面 */
  idCardEmblemPath = '';

  /** 身份证人像面 */
  idCardHeadPath = '';

  /** 手机 */
  mobile = '';

  /** 审核备注 */
  ratifyMemo = '';

  /** 公司审核状态(0：待完善资料 1:待审核 2:审核失败 3:审核成功) */
  ratifyStatus = undefined;

  /** receivePersonnel */
  receivePersonnel = undefined;

  /** receiveUser */
  receiveUser = new RemoteSysUserVO();

  /** servicePersonnel */
  servicePersonnel = undefined;

  /** serviceUser */
  serviceUser = new RemoteSysUserVO();

  /** 注册类型 0/null：公司 1：个人 */
  signupType = undefined;

  /** 主账号编码 */
  userCode = '';

  /** 主账号用户名 */
  userName = '';
}

class SyCCompanyDetailBo {
  /** 开发者Token */
  apiDevToken = '';

  /** APIToken */
  apiToken = '';

  /** APIToken过期时间 */
  apiTokenExpiryTime = '';

  /** 公司业务联系人邮箱 */
  businessContactEmail = '';

  /** 公司业务联系人手机 */
  businessContactMobile = '';

  /** 公司业务联系人名称 */
  businessContactName = '';

  /** 公司业务联系人QQ */
  businessContactQq = '';

  /** 公司业务联系人性别（0：男；1：女） */
  businessContactSex = undefined;

  /** 揽收公司id */
  collectCompanyId = undefined;

  /** 公司揽收联系人邮箱 */
  collectContactEmail = '';

  /** 公司揽收联系人手机 */
  collectContactMobile = '';

  /** 公司揽收联系人名称 */
  collectContactName = '';

  /** 公司揽收联系人QQ */
  collectContactQq = '';

  /** 公司揽收联系人性别（0：男；1：女） */
  collectContactSex = undefined;

  /** 每日最多揽收次数 */
  collectTimes = undefined;

  /** 揽收类型（0：不可用，1：免费快递揽收，2：免费自有车队揽收， 3：收费揽收） */
  collectType = undefined;

  /** 公司详细地址 */
  companyAddress = '';

  /** 公司所在区县 */
  companyArea = undefined;

  /** 公司所在城市 */
  companyCity = undefined;

  /** 公司资料流水号 */
  companyDetailId = undefined;

  /** 公司流水号 */
  companyId = undefined;

  /** 公司所在地 */
  companyLocationId = '';

  /** 公司所在省州 */
  companyState = undefined;

  /** 创建人 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 公司财务联系人邮箱 */
  financeContactEmail = '';

  /** 公司财务联系人手机 */
  financeContactMobile = '';

  /** 公司财务联系人名称 */
  financeContactName = '';

  /** 公司财务联系人QQ */
  financeContactQq = '';

  /** 公司财务联系人性别（0：男；1：女） */
  financeContactSex = undefined;

  /** 冻结操作人 */
  freezeBy = undefined;

  /** 冻结内容 */
  freezeContent = '';

  /** 冻结时间 */
  freezeTime = '';

  /** 冻结类型（0/null：人工冻结，1：自动冻结） */
  freezeType = undefined;

  /** 是否同行业：0-否，1-是 */
  isSameIndustry = undefined;

  /** 是否为供应商：0-否，1-是 */
  isSupplier = undefined;

  /** 公司操作联系人邮箱 */
  operatorContactEmail = '';

  /** 公司操作联系人手机 */
  operatorContactMobile = '';

  /** 公司操作联系人名称 */
  operatorContactName = '';

  /** 公司操作联系人QQ */
  operatorContactQq = '';

  /** 公司操作联系人性别（0：男；1：女） */
  operatorContactSex = undefined;

  /** 下单返回追踪号规则（null/0：包裹流水号，1：尾程单号） */
  orderRule = undefined;

  /** 母公司 */
  parentCompany = '';

  /** 公司揽收详细地址 */
  pickupAddress = '';

  /** 公司揽收区县 */
  pickupArea = undefined;

  /** 公司揽收城市 */
  pickupCity = undefined;

  /** 公司揽收所在地 */
  pickupLocationId = '';

  /** 公司揽收省州 */
  pickupState = undefined;

  /** 阅读协议状态（0/null：未读，1：已读） */
  readStatus = undefined;

  /** 阅读协议时间 */
  readTime = '';

  /** 注册地址 */
  registeredAddress = '';

  /** 注册区县 */
  registeredArea = undefined;

  /** 注册城市 */
  registeredCity = undefined;

  /** 注册所在地 */
  registeredLocationId = '';

  /** 注册所在州省 */
  registeredStater = undefined;

  /** IP白名单 */
  serverIpAddr = '';

  /** 更新人 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';
}

class SyCCompanyDetailVo {
  /** 开发者Token */
  apiDevToken = '';

  /** APIToken */
  apiToken = '';

  /** APIToken过期时间 */
  apiTokenExpiryTime = '';

  /** 公司业务联系人邮箱 */
  businessContactEmail = '';

  /** 公司业务联系人手机 */
  businessContactMobile = '';

  /** 公司业务联系人名称 */
  businessContactName = '';

  /** 公司业务联系人QQ */
  businessContactQq = '';

  /** 公司业务联系人性别（0：男；1：女） */
  businessContactSex = undefined;

  /** 揽收公司id */
  collectCompanyId = undefined;

  /** 公司揽收联系人邮箱 */
  collectContactEmail = '';

  /** 公司揽收联系人手机 */
  collectContactMobile = '';

  /** 公司揽收联系人名称 */
  collectContactName = '';

  /** 公司揽收联系人QQ */
  collectContactQq = '';

  /** 公司揽收联系人性别（0：男；1：女） */
  collectContactSex = undefined;

  /** 每日最多揽收次数 */
  collectTimes = undefined;

  /** 揽收类型（0：不可用，1：免费快递揽收，2：免费自有车队揽收， 3：收费揽收） */
  collectType = undefined;

  /** 公司详细地址 */
  companyAddress = '';

  /** 公司所在区县 */
  companyArea = undefined;

  /** 公司所在城市 */
  companyCity = undefined;

  /** 公司资料流水号 */
  companyDetailId = undefined;

  /** 公司流水号 */
  companyId = undefined;

  /** 公司所在地 */
  companyLocationId = '';

  /** 公司所在省州 */
  companyState = undefined;

  /** 创建人 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 公司财务联系人邮箱 */
  financeContactEmail = '';

  /** 公司财务联系人手机 */
  financeContactMobile = '';

  /** 公司财务联系人名称 */
  financeContactName = '';

  /** 公司财务联系人QQ */
  financeContactQq = '';

  /** 公司财务联系人性别（0：男；1：女） */
  financeContactSex = undefined;

  /** 冻结操作人 */
  freezeBy = undefined;

  /** 冻结内容 */
  freezeContent = '';

  /** 冻结时间 */
  freezeTime = '';

  /** 冻结类型（0/null：人工冻结，1：自动冻结） */
  freezeType = undefined;

  /** 是否同行业：0-否，1-是 */
  isSameIndustry = undefined;

  /** 是否为供应商：0-否，1-是 */
  isSupplier = undefined;

  /** 公司操作联系人邮箱 */
  operatorContactEmail = '';

  /** 公司操作联系人手机 */
  operatorContactMobile = '';

  /** 公司操作联系人名称 */
  operatorContactName = '';

  /** 公司操作联系人QQ */
  operatorContactQq = '';

  /** 公司操作联系人性别（0：男；1：女） */
  operatorContactSex = undefined;

  /** 下单返回追踪号规则（null/0：包裹流水号，1：尾程单号） */
  orderRule = undefined;

  /** 母公司 */
  parentCompany = '';

  /** 公司揽收详细地址 */
  pickupAddress = '';

  /** 公司揽收区县 */
  pickupArea = undefined;

  /** 公司揽收城市 */
  pickupCity = undefined;

  /** 公司揽收所在地 */
  pickupLocationId = '';

  /** 公司揽收省州 */
  pickupState = undefined;

  /** 阅读协议状态（0/null：未读，1：已读） */
  readStatus = undefined;

  /** 阅读协议时间 */
  readTime = '';

  /** 注册地址 */
  registeredAddress = '';

  /** 注册区县 */
  registeredArea = undefined;

  /** 注册城市 */
  registeredCity = undefined;

  /** 注册所在地 */
  registeredLocationId = '';

  /** 注册所在州省 */
  registeredStater = undefined;

  /** IP白名单 */
  serverIpAddr = '';

  /** 更新人 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';
}

class SyCCompanyPackageDeviationBo {
  /** 公司流水号 */
  companyId = undefined;

  /** 包裹大于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
  packageGreaterInterceptMode = undefined;

  /** 包裹大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  packageGreaterInterceptValue = undefined;

  /** 包裹小于于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
  packageLesserInterceptMode = undefined;

  /** 包裹小于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  packageLesserInterceptValue = undefined;
}

class SyCCompanyPackageDeviationVo {
  /** 公司流水号 */
  companyId = undefined;

  /** 包裹大于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
  packageGreaterInterceptMode = undefined;

  /** 包裹大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  packageGreaterInterceptValue = undefined;

  /** 包裹小于于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
  packageLesserInterceptMode = undefined;

  /** 包裹小于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  packageLesserInterceptValue = undefined;
}

class SyCCompanyPickDeviationBo {
  /** 公司流水号 */
  companyId = undefined;

  /** 称重大于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截） */
  pickupGreaterInterceptMode = undefined;

  /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  pickupGreaterInterceptValue = undefined;

  /** 称重小于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
  pickupLesserInterceptMode = undefined;

  /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  pickupLesserInterceptValue = undefined;
}

class SyCCompanyPickDeviationVo {
  /** 公司流水号 */
  companyId = undefined;

  /** 称重大于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截） */
  pickupGreaterInterceptMode = undefined;

  /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  pickupGreaterInterceptValue = undefined;

  /** 称重小于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
  pickupLesserInterceptMode = undefined;

  /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  pickupLesserInterceptValue = undefined;
}

class SyCMenuVo {
  /** 组件路径 */
  component = '';

  /** 创建时间 */
  createTime = '';

  /** 菜单图标 */
  icon = '';

  /** 是否缓存（0缓存 1不缓存） */
  isCache = '';

  /** 是否为外链（0是 1否） */
  isFrame = '';

  /** 菜单ID */
  menuId = undefined;

  /** 菜单名称 */
  menuName = '';

  /** 菜单类型（M目录 C菜单 F按钮） */
  menuType = '';

  /** 显示顺序 */
  orderNum = undefined;

  /** 父菜单ID */
  parentId = undefined;

  /** 路由地址 */
  path = '';

  /** 权限标识 */
  perms = '';

  /** 路由参数 */
  queryParam = '';

  /** 备注 */
  remark = '';

  /** 菜单状态（0正常 1停用） */
  status = '';

  /** 显示状态（0显示 1隐藏） */
  visible = '';
}

class SyCUserComplaintBo {
  /** 公司名称 */
  companyName = '';

  /** 投诉和建议的内容 */
  complaintContent = '';

  /** 投诉和建议的截图 base64 */
  complaintImage = '';

  /** 状态 0未读，1已读 */
  complaintStatus = undefined;

  /** 邮箱地址 */
  linkEmail = '';

  /** 联系电话 */
  linkMobile = '';

  /** 联系名称 */
  linkName = '';
}

class SyCUserComplaintVo {
  /** 公司ID */
  companyId = undefined;

  /** 公司名称 */
  companyName = '';

  /** 投诉和建议的内容 */
  complaintContent = '';

  /** 自增长ID */
  complaintId = undefined;

  /** 投诉和建议的截图 base64 */
  complaintImage = '';

  /** 状态 0未读，1已读 */
  complaintStatus = undefined;

  /** 创建人 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 操作IP地址 */
  ipAddress = '';

  /** 操作IP位置 */
  ipPosition = '';

  /** 邮箱地址 */
  linkEmail = '';

  /** 联系电话 */
  linkMobile = '';

  /** 联系名称 */
  linkName = '';
}

class SyExchangeRateVo {
  /** 币种代码 */
  currencyCode = '';

  /** 币种名称 */
  currencyName = '';

  /** 币种符号 */
  currencySymbol = '';

  /** 官方汇率 */
  officialExchangeRate = undefined;

  /** 主币种（1：是；0：否） */
  primaryCurrencyFlag = undefined;

  /** 官方汇率更新时间 */
  updatedTime = '';
}

class SySysNotice {
  /** 公告内容 */
  content = '';

  /** 创建人 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 公告语言  1 中文  2 英文 */
  languageType = undefined;

  /** 公告流水号 */
  noticeId = undefined;

  /** 展示图片路径 */
  noticePreviewUrl = '';

  /** 公告类型  1 站内公告  2 公司新闻  3 行业新闻 */
  noticeType = undefined;

  /** 阅读次数 */
  readCount = undefined;

  /** 是否置顶(0:不置顶；1:置顶) */
  stickFlag = undefined;

  /** 公告标题 */
  title = '';

  /** 更新人 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';
}

class SysLogininforBo {
  /** 公司编码 */
  companyId = undefined;

  /** 访问结束时间 */
  endTime = '';

  /** 登录状态(0:失败 1:成功) */
  loginStatus = undefined;

  /** 访问开始时间 */
  startTime = '';

  /** 公司用户流水号 */
  userId = undefined;

  /** 登录流水号 */
  userLoginRecordId = undefined;

  /** 登陆用户名 */
  userName = '';
}

class SysLogininforVo {
  /** 公司编码 */
  companyId = undefined;

  /** 创建人 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 登录IP地址 */
  loginAddress = '';

  /** 登陆地理位置 */
  loginPosition = '';

  /** 登录状态(0:失败 1:成功) */
  loginStatus = undefined;

  /** 登录时间 */
  loginTime = '';

  /** 更新人 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 公司用户流水号 */
  userId = undefined;

  /** 登录流水号 */
  userLoginRecordId = undefined;

  /** 登陆用户名 */
  userName = '';
}

class SysMenuBo {
  /** 组件路径 */
  component = '';

  /** 创建者 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 菜单图标 */
  icon = '';

  /** 是否缓存（0缓存 1不缓存） */
  isCache = undefined;

  /** 是否为外链（0是 1否） */
  isFrame = undefined;

  /** 菜单ID */
  menuId = undefined;

  /** 菜单名称 */
  menuName = '';

  /** 菜单类型（M目录 C菜单 F按钮） */
  menuType = '';

  /** 显示顺序 */
  orderNum = undefined;

  /** 请求参数 */
  params = undefined;

  /** 父菜单ID */
  parentId = undefined;

  /** 路由地址 */
  path = '';

  /** 权限标识 */
  perms = '';

  /** 路由参数 */
  queryParam = '';

  /** 备注 */
  remark = '';

  /** 菜单状态（0正常 1停用） */
  status = undefined;

  /** 更新者 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 显示状态（0显示 1隐藏） */
  visible = undefined;
}

class SysOperLogBo {
  /** 业务类型（0其它 1新增 2修改 3删除） */
  businessType = undefined;

  /** 业务类型数组 */
  businessTypes = [];

  /** 消耗时间 */
  costTime = undefined;

  /** 部门名称 */
  deptName = '';

  /** 错误消息 */
  errorMsg = '';

  /** 返回参数 */
  jsonResult = '';

  /** 方法名称 */
  method = '';

  /** 日志主键 */
  operId = undefined;

  /** 主机地址 */
  operIp = '';

  /** 操作地点 */
  operLocation = '';

  /** 操作人员 */
  operName = '';

  /** 请求参数 */
  operParam = '';

  /** 操作时间 */
  operTime = '';

  /** 请求URL */
  operUrl = '';

  /** 操作类别（0其它 1后台用户 2手机端用户） */
  operatorType = undefined;

  /** 请求参数 */
  params = undefined;

  /** 请求方式 */
  requestMethod = '';

  /** 操作状态（0正常 1异常） */
  status = undefined;

  /** 模块标题 */
  title = '';
}

class SysOperLogVo {
  /** 业务类型（0其它 1新增 2修改 3删除） */
  businessType = undefined;

  /** 业务类型数组 */
  businessTypes = [];

  /** 消耗时间 */
  costTime = undefined;

  /** 部门名称 */
  deptName = '';

  /** 错误消息 */
  errorMsg = '';

  /** 返回参数 */
  jsonResult = '';

  /** 方法名称 */
  method = '';

  /** 日志主键 */
  operId = undefined;

  /** 主机地址 */
  operIp = '';

  /** 操作地点 */
  operLocation = '';

  /** 操作人员 */
  operName = '';

  /** 请求参数 */
  operParam = '';

  /** 操作时间 */
  operTime = '';

  /** 请求URL */
  operUrl = '';

  /** 操作类别（0其它 1后台用户 2手机端用户） */
  operatorType = undefined;

  /** 请求方式 */
  requestMethod = '';

  /** 操作状态（0正常 1异常） */
  status = undefined;

  /** 模块标题 */
  title = '';
}

class SysUserBo {
  /** 用户公司id */
  companyId = undefined;

  /** 创建者 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 用户邮箱 */
  email = '';

  /** 手机号码 */
  mobile = '';

  /** 请求参数 */
  params = undefined;

  /** 密码 */
  password = '';

  /** 帐号状态（0正常 1停用） */
  status = '';

  /** 更新者 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 用户ID */
  userId = undefined;

  /** 用户账号 */
  userName = '';
}

class SysUserEditPasswordBo {
  /** 验证码 */
  code = '';

  /** 手机号码 */
  mobile = '';

  /** 用户密码 */
  password = '';

  /** smsCode */
  smsCode = '';

  /** userId */
  userId = undefined;

  /** 唯一标识 */
  uuid = '';
}

class SysUserPasswordBo {
  /** 新密码 */
  newPassword = '';

  /** 旧密码 */
  oldPassword = '';
}

class SysUserPasswordForgotBo {
  /** 图形验证码 */
  code = '';

  /** 手机号 */
  mobile = '';

  /** 用户名 */
  userName = '';

  /** 唯一标识 */
  uuid = '';
}

class SysUserProfileBo {
  /** 创建者 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 用户邮箱 */
  email = '';

  /** 头像地址 */
  headPortraitPath = '';

  /** 手机号码 */
  mobile = '';

  /** 请求参数 */
  params = undefined;

  /** 更新者 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';
}

class SysUserVo {
  /** 公司流水号 */
  companyId = undefined;

  /** 创建时间 */
  createTime = '';

  /** 用户邮箱 */
  email = '';

  /** 头像地址 */
  headPortraitPath = '';

  /** 最后登录时间 */
  lastLoginTime = '';

  /** 最后登录IP */
  loginIp = '';

  /** 手机号码 */
  mobile = '';

  /** 账号状态(0:未启用 1:已启用 2:已停用) */
  status = undefined;

  /** 用户代码 */
  userCode = '';

  /** 用户ID */
  userId = undefined;

  /** 用户账号 */
  userName = '';

  /** 用户类型（主账户main,子账号sub） */
  userType = '';
}

class TableDataInfoSyCUserComplaintVo {
  /** 消息状态码 */
  code = undefined;

  /** 消息内容 */
  msg = '';

  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class TableDataInfoSyExchangeRateVo {
  /** 消息状态码 */
  code = undefined;

  /** 消息内容 */
  msg = '';

  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class TableDataInfoSysLogininforVo {
  /** 消息状态码 */
  code = undefined;

  /** 消息内容 */
  msg = '';

  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class TableDataInfoSysOperLogVo {
  /** 消息状态码 */
  code = undefined;

  /** 消息内容 */
  msg = '';

  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class TreeInteger {
  /** config */
  config = new TreeNodeConfig();

  /** empty */
  empty = false;

  /** id */
  id = undefined;

  /** name */
  name = undefined;

  /** parentId */
  parentId = undefined;

  /** weight */
  weight = undefined;
}

class TreeNodeConfig {
  /** childrenKey */
  childrenKey = '';

  /** deep */
  deep = undefined;

  /** idKey */
  idKey = '';

  /** nameKey */
  nameKey = '';

  /** parentIdKey */
  parentIdKey = '';

  /** weightKey */
  weightKey = '';
}

export const apis = {
  CaptchaVo,
  CommonIdListBOInteger,
  CommonIdListBOLong,
  DownloadBO,
  ForeignCurrencyVo,
  LoginVo,
  MetaVo,
  OverviewVo,
  PageQuery,
  ProfileVo,
  RCaptchaVo,
  RListMapStringObject,
  RListRemoteSysOrganizationVO,
  RListRemoteSysUserVO,
  RListRouterVo,
  RListSyCMenuVo,
  RListTreeInteger,
  RLoginVo,
  RMapStringListRemoteDictDataVO,
  RObject,
  ROverviewVo,
  RProfileVo,
  RSyCCompanyDetailVo,
  RSyCCompanyPackageDeviationVo,
  RSyCCompanyPickDeviationVo,
  RSyCMenuVo,
  RSysUserVo,
  RVoid,
  RegisterBody,
  RemoteDictDataVO,
  RemoteSysOrganizationVO,
  RemoteSysUserVO,
  RouterVo,
  SseEmitter,
  SyAccountInfoVo,
  SyCCompanyDetailBo,
  SyCCompanyDetailVo,
  SyCCompanyPackageDeviationBo,
  SyCCompanyPackageDeviationVo,
  SyCCompanyPickDeviationBo,
  SyCCompanyPickDeviationVo,
  SyCMenuVo,
  SyCUserComplaintBo,
  SyCUserComplaintVo,
  SyExchangeRateVo,
  SySysNotice,
  SysLogininforBo,
  SysLogininforVo,
  SysMenuBo,
  SysOperLogBo,
  SysOperLogVo,
  SysUserBo,
  SysUserEditPasswordBo,
  SysUserPasswordBo,
  SysUserPasswordForgotBo,
  SysUserProfileBo,
  SysUserVo,
  TableDataInfoSyCUserComplaintVo,
  TableDataInfoSyExchangeRateVo,
  TableDataInfoSysLogininforVo,
  TableDataInfoSysOperLogVo,
  TreeInteger,
  TreeNodeConfig,
};
