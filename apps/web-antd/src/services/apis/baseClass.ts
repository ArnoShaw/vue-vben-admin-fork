class ApplyInterceptBO {
  /** 包裹id */
  packageId = undefined;

  /** 端口 */
  ports = '';

  /** 用户ID */
  userId = '';
}

class AssetBo {
  /** 交易开始时间 */
  beginTime = '';

  /** 公司流水号 */
  companyId = undefined;

  /** 交易结束时间 */
  endTime = '';

  /** 交易类型(0:充值；1：消费) */
  tradeType = undefined;
}

class AssetVo {
  /** 交易流水号 */
  companyAssetChangeCode = '';

  /** 资产流水id */
  companyAssetChangeId = undefined;

  /** 交易时间 */
  createTime = '';

  /** 币种名称 */
  currencyName = '';

  /** 币种符号 */
  currencySymbol = '';

  /** 单据编号 */
  receiptsCode = '';

  /** 单据名称 */
  receiptsName = '';

  /** 交易后账户余额 */
  tradeBalanceAfter = undefined;

  /** 交易前账户余额 */
  tradeBalanceBefore = undefined;

  /** 交易金额 */
  tradeConfirmAmount = undefined;

  /** 交易类型 */
  tradeType = '';
}

class BankTransferFormBeanBO {
  /** 银行转账主键ID */
  companyBankTransferId = undefined;

  /** 录入人 */
  entryBy = undefined;

  /** 录入时间 */
  entryTime = '';

  /** 收款方银行卡流水号 */
  payeeBankCardId = undefined;

  /** 收款方账号 */
  payeeBankCardNumber = '';

  /** 收款方开户行 */
  payeeBankName = '';

  /** 付款方账号 */
  payeeName = '';

  /** 付款方账号 */
  payerBankCardNumber = '';

  /** 付款方账号 */
  payerBankName = '';

  /** 转账名称 */
  payerName = '';

  /** 上传凭证地址 */
  receiptPath = '';

  /** 回单序列号 */
  receiptSerialNumber = '';

  /** 备注 */
  remark = '';

  /** 交易金额 */
  tradeAmount = undefined;

  /** 交易币种 */
  tradeCurrency = '';
}

class BatchImportResultVO {
  /** additionalMsg */
  additionalMsg = '';

  /** errorFileUrl */
  errorFileUrl = '';

  /** errorMsg */
  errorMsg = '';
}

class CalCuLatePriceBO {
  /** 国家 */
  country = '';

  /** 高 */
  height = '';

  /** 长 */
  length = '';

  /** 收件邮编 */
  port = '';

  /** 入仓重量 */
  weight = '';

  /** 宽 */
  width = '';
}

class CalCuLatePriceDataVO {
  /** 加收费用 */
  additional = '';

  /** 合计 */
  amt = undefined;

  /** chargeZoneId */
  chargeZoneId = undefined;

  /** 国家 */
  country = '';

  /** 币种 */
  currencyCode = '';

  /** degreeid */
  degreeid = undefined;

  /** 计算公式 */
  formula = '';

  /** highWeight */
  highWeight = '';

  /** iffuel */
  iffuel = undefined;

  /** lowWeight */
  lowWeight = '';

  /** 备注 */
  note = '';

  /** packType */
  packType = '';

  /** premium */
  premium = undefined;

  /** priceid */
  priceid = '';

  /** 报价名称 */
  pricename = '';

  /** pricestyle */
  pricestyle = undefined;

  /** productTypeId */
  productTypeId = undefined;

  /** 折扣 */
  rebate = '';

  /** 邮寄方式 */
  shippingMethodCnName = '';

  /** shippingMethodId */
  shippingMethodId = undefined;

  /** 结算重量 */
  weight = undefined;
}

class CalCuLatePriceVO {
  /** 国家中文名称 */
  countryCnName = '';

  /** 国家代码 */
  countryCode = '';

  /** 查询结果 */
  rows = [];
}

class CaptchaVo {
  /** 是否开启验证码 */
  captchaEnabled = false;

  /** 验证码图片 */
  img = '';

  /** uuid */
  uuid = '';
}

class ChannelPriceVO {
  /** 邮路id */
  channelId = undefined;

  /** 邮路名称(中文) */
  channelName = '';

  /** 计费分区ID */
  chargeZoneId = undefined;

  /** 币别编码 */
  currencyCode = '';

  /** 运费 */
  estimateFreight = undefined;

  /** 是否有追踪号 */
  hasTrackingNumberFlag = '';

  /** 时效 */
  overTime = '';

  /** 材积重 */
  predictionVolumnWeight = undefined;

  /** 新邮寄方式ID */
  shippingMethodId = undefined;

  /** 邮路ZoneID */
  shippingZoneId = undefined;

  /** 是否支持投保 */
  supportInsure = '';
}

class CommonIdBOInteger {
  /** id */
  id = undefined;
}

class CommonIdListBOInteger {
  /** ids */
  ids = [];
}

class CommonIdListBOLong {
  /** ids */
  ids = [];
}

class CompanyContractVO {
  /** 合同id */
  contractId = undefined;

  /** 合同状态（0：未发起，1：待签署，2：签署中，3：已签署） */
  contractStatus = undefined;

  /** 是否是历史存档用户 */
  limitFlg = false;

  /** 签署期限 */
  signDeadline = '';

  /** 签署链接 */
  signUrl = '';

  /** 注册类型 0/null：公司 1：个人 */
  signupType = undefined;

  /** 合同类型（0：纸质合同，1：电子合同） */
  templateType = undefined;
}

class CompanyVo {
  /** 公司编码 */
  companyCode = '';

  /** 公司流水号 */
  companyId = undefined;

  /** 公司名称 */
  companyName = '';

  /** 审核备注 */
  ratifyMemo = '';

  /** 公司审核状态(0：待完善资料 1:待审核 2:审核失败 3:审核成功) */
  ratifyStatus = undefined;

  /** 检查是否弹窗提醒客户未提供营业执照或身份证正反面证件，如果是，先弹出完善信息页面 */
  showProvideTip = false;

  /** 注册类型 0/null：公司 1：个人 */
  signupType = undefined;
}

class CompleteCompanyBO {
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

  /** 社会信用代码/身份证号码 */
  businessLicenseNumber = '';

  /** 公司上传的证件路径 */
  certificatePath = '';

  /** 办公详细地址 */
  companyAddress = '';

  /** 办公城市id */
  companyCity = undefined;

  /** 公司编码 */
  companyCode = '';

  /** companyDetailId */
  companyDetailId = undefined;

  /** 公司名称 */
  companyName = '';

  /** 办公省份id */
  companyState = undefined;

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

  /** 身份证国徽面 */
  idCardEmblemPath = '';

  /** 身份证人像面 */
  idCardHeadPath = '';

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

  /** 揽收详细地址 */
  pickupAddress = '';

  /** 揽收城市id */
  pickupCity = undefined;

  /** 揽收省份id */
  pickupState = undefined;

  /** 公司审核状态(0：待完善资料 1:待审核 2:审核失败 3:审核成功) */
  ratifyStatus = undefined;

  /** 商户类型 */
  signupType = undefined;
}

class ContractRemindVo {
  /** 是否为电子合同 */
  electronicContracts = false;

  /** 合同到期时间 */
  signDeadlineTime = '';
}

class DataInfoAssetVo {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoRechargeVo {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoSyBsPackageVO {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoSyCCompanyThirdplatformAccountVo {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoSyCPackageProduct {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoSyCPackageProductVo {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoSyCUserComplaintVo {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoSyCUserOperLogVo {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoSyExchangeRateVo {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoSyPrintBsPackageVO {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoSysLogininforVo {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoTrackingNoVo {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoUnBilledChargeSortVo {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DataInfoUnBilledChargeVo {
  /** 列表数据 */
  rows = [];

  /** 总记录数 */
  total = undefined;
}

class DopreDictionBO {
  /** 公司id */
  companyId = '';

  /** 包裹id */
  packageId = '';

  /** 用户id */
  userId = '';
}

class DownloadBO {
  /** filePath */
  filePath = '';
}

class ExportExcelBO {
  /** true or false */
  checkedFlag = '';

  /** 公司id */
  companyId = undefined;

  /** 这里其实是预报时间，只是页面上用了createDate这个名字 */
  createDate = '';

  /** 开始时间 */
  createTimeFrom = '';

  /** 结束时间 */
  createTimeTo = '';

  /** 排序方式 */
  order = '';

  /** 包裹id数组 */
  packageIds = [];

  /** 预报状态 */
  predictStatus = undefined;

  /** 搜索文本 */
  searchText = '';

  /** 邮递方式id */
  shippingMethodId = undefined;

  /** 排序字段 */
  sort = '';

  /** 库存状态 */
  stockStatus = '';
}

class FileVO {
  /** fileName */
  fileName = '';

  /** url */
  url = '';
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
  /** accountInfo */
  accountInfo = new SyAccountInfoVo();

  /** 合同签署状态 */
  contractRemind = false;

  /** 是否为电子合同 */
  electronicContracts = false;

  /** 账户外币 */
  foreignAccountList = [];

  /** 通知公告列表 */
  noticeList = [];

  /** 海外退件数 */
  overseasReturn = undefined;

  /** 安检退件数 */
  securityCheck = undefined;

  /** 合同到期时间 */
  signDeadlineTime = '';

  /** 分拣未处理退件总数 */
  sortingReturn = undefined;

  /** 后端版本号 */
  version = '';

  /** 等待发货数量 */
  waitDeliveryCount = undefined;

  /** 等待预报数量 */
  waitPredictionCount = undefined;

  /** 等待揽收数量 */
  waitReceivedCount = undefined;

  /** 等待入仓数量 */
  waitStorageCount = undefined;

  /** 昨日发货数量 */
  yesterdayDeliveredCount = undefined;

  /** 昨日揽收数量 */
  yesterdayReceivedCount = undefined;
}

class PackageIdListBO {
  /** 公司id */
  companyId = '';

  /** 开始时间 */
  createTimeFrom = '';

  /** 结束时间 */
  createTimeTo = '';

  /** 包裹id列表 */
  packageIds = [];

  /** 邮递方式 */
  paramShippingMethodId = '';

  /** 预报状态 */
  predictStatus = '';

  /** 预报日期 */
  predictedDays = '';

  /** 搜索推荐 */
  searchText = '';

  /** 是否选中所有 Y 是 */
  selectAll = '';

  /** 库存状态 */
  stockStatus = '';

  /** version */
  version = '';
}

class PackageInfoBO {
  /** 备用字段1 */
  backup1 = '';

  /** 邮路编码 */
  channelCode = '';

  /** 邮路ID */
  channelId = '';

  /** 邮路分区ID */
  chargeZoneId = '';

  /** 公司ID */
  companyId = '';

  /** 币种 */
  currencyCode = '';

  /** 客户订单号 */
  customerOrderNo = '';

  /** 客户参考号 */
  customerReferenceNo = '';

  /** 商品申报总价值币种 */
  declaredCurrencyCode = '';

  /** 商品申报总价值 */
  declaredValueTotal = undefined;

  /** dutyType */
  dutyType = '';

  /** 导入Excel专用Index */
  excelIndex = undefined;

  /** forcast */
  forcast = '';

  /** 是否支持投保 */
  insuranceFlag = '';

  /** 投保金额 */
  insureAmount = undefined;

  /** IOSS识别号，欧盟 */
  iossVatId = '';

  /** 是否退税 */
  isDrawBack = undefined;

  /** 用来记录包裹编辑的操作者 */
  operationUserId = '';

  /** 分支机构 */
  organizationId = undefined;

  /** 内单号 */
  otherNumber = '';

  /** 海外退件 1 有 0 没有 默认0 */
  overseasRefund = false;

  /** 产品属性列表 */
  packageAttributes = '';

  /** COD金额 */
  packageCodAmount = undefined;

  /** COD币种 */
  packageCodCurrencyCode = '';

  /** 顺友物流单号 */
  packageCode = '';

  /** 包裹高 */
  packageHeight = undefined;

  /** 包裹ID */
  packageId = undefined;

  /** 包裹实际保费 */
  packageInsure = undefined;

  /** 包裹长 */
  packageLength = undefined;

  /** 包裹销售金额 */
  packageSalesAmount = undefined;

  /** 包裹宽 */
  packageWidth = undefined;

  /** ports */
  ports = '';

  /** 预报失败原因 */
  predictionFailReason = '';

  /** 包裹估算运费 */
  predictionFreight = undefined;

  /** 体积重 */
  predictionVolumnWeight = undefined;

  /** 包裹重量 */
  predictionWeight = undefined;

  /** 产品列表 */
  productList = [];

  /** 收件人地址1 */
  recipientAddress1 = '';

  /** 收件人地址2 */
  recipientAddress2 = '';

  /** 收件人地址3 */
  recipientAddress3 = '';

  /** 收件人城市 */
  recipientCity = '';

  /** 收件人国家代码 */
  recipientCountryCode = '';

  /** 收件人国家名称 用于Wish下单面单打印获取目的国名称 */
  recipientCountryEnName = '';

  /** 收件人邮箱 */
  recipientEmail = '';

  /** 收件人全地址 */
  recipientFullAddress = '';

  /** 身份证号码 */
  recipientIdentityNumber = '';

  /** 收件人手机 */
  recipientMobile = '';

  /** 收件人名称 */
  recipientName = '';

  /** 收件人电话 */
  recipientPhone = '';

  /** 收件人邮编 */
  recipientPostCode = '';

  /** 收件人省州 */
  recipientState = '';

  /** 收件人税号 */
  recipientTaxNumber = '';

  /** 请求IP地址 */
  requestIpAddr = '';

  /** requetIpAddr */
  requetIpAddr = '';

  /** 映射名称 */
  ruleName = '';

  /** 寄件人地址 */
  senderAddress = '';

  /** 寄件人城市 */
  senderCity = '';

  /** 寄件人国家 */
  senderCountryCode = '';

  /** 寄件人街道 */
  senderDistrict = '';

  /** 寄件人邮箱 */
  senderEmail = '';

  /** EORI号(欧盟经济主体注册识别号) */
  senderEori = '';

  /** 寄件人全地址 */
  senderFullAddress = '';

  /** 寄件人姓名 */
  senderName = '';

  /** 寄件人电话 */
  senderPhone = '';

  /** 寄件人邮编 */
  senderPostCode = '';

  /** 寄件人省州 */
  senderState = '';

  /** 寄件人税号 */
  senderTaxNumber = '';

  /** 发货时间 */
  shippedTime = '';

  /** 新的邮寄方式代码 */
  shippingMethodCode = '';

  /** 新的邮寄方式ID */
  shippingMethodId = undefined;

  /** 邮路分区ID */
  shippingZoneId = '';

  /** 分拣时间 */
  sortingTime = '';

  /** 处理来源 0:客户系统 1：API 2：EXCEL 3：菜鸟物流 4：马帮ERP */
  source = '';

  /** 包裹状态 */
  status = '';

  /** 是否有库存 */
  stockFlag = '';

  /** 退税金额 */
  taxRefundAmount = undefined;

  /** 是否退税 */
  taxRefundFlag = undefined;

  /** 追踪号 */
  trackingNumber = '';

  /** 用户ID */
  userId = '';
}

class PackageListViewBO {
  /** 公司id */
  companyId = undefined;

  /** 开始时间 */
  createTimeFrom = '';

  /** 结束时间 */
  createTimeTo = '';

  /** 邮递方式 */
  paramShippingMethodId = '';

  /** 预报状态 */
  predictStatus = '';

  /** 预报天数 */
  predictedDays = '';

  /** 搜索文本 */
  searchText = '';

  /** 库存状态 */
  stockStatus = '';
}

class PackageProduct {
  /** 方便API调用(海关编码) */
  apiCustomCode = '';

  /** 方便API调用(英文品名) */
  apiDeclareEnName = '';

  /** 方便API调用(申报价值) */
  apiDeclarePrice = undefined;

  /** 申报币种 */
  currencyCode = '';

  /** 申报产品海关编码 */
  customCode = '';

  /** 申报产品中文名称 */
  declareCnName = '';

  /** 申报产品英文名称 */
  declareEnName = '';

  /** 申报产品单价 */
  declarePrice = undefined;

  /** 申报产品海关编码 */
  hsCode = '';

  /** 用于换单时更新申报价值 */
  packageProductId = undefined;

  /** 产品图片链接 */
  productImageUrl = '';

  /** 申报产品材质 */
  productMaterial = '';

  /** 申报产品用途 */
  productPurpose = '';

  /** 产品SKU */
  productSku = '';

  /** 申报产品数量 */
  quantity = undefined;

  /** reviseCustomCode */
  reviseCustomCode = '';

  /** 修订报关单价（USD） */
  reviseDeclarePrice = undefined;

  /** 修订报关产品英文名称 */
  reviseEnName = '';

  /** totalPrice */
  totalPrice = undefined;
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

class PredictionBO {
  /** 公司id */
  companyId = undefined;

  /** 开始时间 */
  createTimeFrom = '';

  /** 结束时间 */
  createTimeTo = '';

  /** 搜索条件 */
  searchText = '';
}

class PredictionBatchModifyBO {
  /** 修改邮寄方式ID */
  modifyShippingMethodId = '';

  /** packageIdListBO */
  packageIdListBO = new PackageIdListBO();

  /** 用户id */
  userId = '';
}

class PredictionBatchRevokeBO {
  /** packageIdListBO */
  packageIdListBO = new PackageIdListBO();

  /** 运维、客户端的区分标志 */
  ports = '';

  /** 用户id */
  userId = '';
}

class PredictionVO {
  /** 预报失败 */
  failurePredictCount = undefined;

  /** 已预报 */
  predictedCount = undefined;

  /** 预报中 */
  predictingCount = undefined;

  /** 等待预报及预报失败 */
  waitAndFailurePredictCount = undefined;

  /** 等待预报 */
  waitPredictCount = undefined;
}

class PrintPDFBO {
  /** 包裹ID */
  packageId = undefined;

  /** 页面传递操作端口名称 */
  ports = '';

  /** 页面传递用户Id */
  userId = undefined;
}

class PrintPackageBO {
  /** 公司id */
  companyId = '';

  /** 创建日期 */
  createdDays = '';

  /** 打印状态 */
  printStatus = '';

  /** 日期 */
  printedDays = '';

  /** sku类型 */
  skuType = '';

  /** 库存状态 */
  stockStatus = '';

  /** version */
  version = '';
}

class PrintPackageListViewBO {
  /** 公司id */
  companyId = undefined;

  /** 创建时间 */
  createdDays = '';

  /** 开始时间 */
  forecastTimeFrom = '';

  /** 结束时间 */
  forecastTimeTo = '';

  /** 打印状态 */
  printStatus = '';

  /** 打印日期 */
  printedDays = '';

  /** 搜索文本 */
  searchText = '';

  /** 邮寄方式 */
  shippingMethodId = undefined;

  /** 库存状态 */
  stockStatus = '';
}

class PrintPdfBatchBO {
  /** 排序方式 */
  order = '';

  /** 包裹id列表 */
  packageIdList = [];

  /** 页面传递操作端口名称,yunwei 代表运维操作人员，client代表客户 */
  ports = '';

  /** 排序字段 */
  sort = '';

  /** 用户id */
  userId = undefined;
}

class ProductAttributesVO {
  /** 商品属性名称 */
  attributeName = '';

  /** 商品属性ID */
  productAttributeId = undefined;
}

class ProductListBO {
  /** 公司id */
  companyId = undefined;

  /** 产品名称 */
  productName = '';
}

class ProfileVo {
  /** company */
  company = new CompanyVo();

  /** 权限 */
  permissions = [];

  /** user */
  user = new SysUserVo();
}

class RCalCuLatePriceVO {
  /** code */
  code = undefined;

  /** data */
  data = new CalCuLatePriceVO();

  /** msg */
  msg = '';
}

class RCaptchaVo {
  /** code */
  code = undefined;

  /** data */
  data = new CaptchaVo();

  /** msg */
  msg = '';
}

class RCompanyContractVO {
  /** code */
  code = undefined;

  /** data */
  data = new CompanyContractVO();

  /** msg */
  msg = '';
}

class RContractRemindVo {
  /** code */
  code = undefined;

  /** data */
  data = new ContractRemindVo();

  /** msg */
  msg = '';
}

class RFileVO {
  /** code */
  code = undefined;

  /** data */
  data = new FileVO();

  /** msg */
  msg = '';
}

class RInteger {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** msg */
  msg = '';
}

class RListChannelPriceVO {
  /** code */
  code = undefined;

  /** data */
  data = [];

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

class RListProductAttributesVO {
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

class RListSyBsPackageProductVO {
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

class RListSyExchangeRateVo {
  /** code */
  code = undefined;

  /** data */
  data = [];

  /** msg */
  msg = '';
}

class RListSySysBankAccountVO {
  /** code */
  code = undefined;

  /** data */
  data = [];

  /** msg */
  msg = '';
}

class RListSysUserVo {
  /** code */
  code = undefined;

  /** data */
  data = [];

  /** msg */
  msg = '';
}

class RListTimelinesBoardVo {
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

class RListTreeVO {
  /** code */
  code = undefined;

  /** data */
  data = [];

  /** msg */
  msg = '';
}

class RLocalDateTime {
  /** code */
  code = undefined;

  /** data */
  data = '';

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

class RPredictionVO {
  /** code */
  code = undefined;

  /** data */
  data = new PredictionVO();

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

class RRechargeDetailVo {
  /** code */
  code = undefined;

  /** data */
  data = new RechargeDetailVo();

  /** msg */
  msg = '';
}

class RSavePackageVO {
  /** code */
  code = undefined;

  /** data */
  data = new SavePackageVO();

  /** msg */
  msg = '';
}

class RShippingMethodListVO {
  /** code */
  code = undefined;

  /** data */
  data = new ShippingMethodListVO();

  /** msg */
  msg = '';
}

class RString {
  /** code */
  code = undefined;

  /** data */
  data = '';

  /** msg */
  msg = '';
}

class RSyBsPackageDetailVO {
  /** code */
  code = undefined;

  /** data */
  data = new SyBsPackageDetailVO();

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

class RSyCCompanyVo {
  /** code */
  code = undefined;

  /** data */
  data = new SyCCompanyVo();

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

class RUploadInitVO {
  /** code */
  code = undefined;

  /** data */
  data = new UploadInitVO();

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

class RechargeBo {
  /** 创建开始时间 */
  beginTime = '';

  /** 公司流水号 */
  companyId = undefined;

  /** 创建结束时间 */
  endTime = '';

  /** 支付状态(0:待支付;1:支付中;2:支付失败;3:支付成功) */
  paymentStatus = undefined;

  /** 搜索内容 */
  searchValue = '';

  /** 付款方式(1:支付宝;2:微信;8:网银支付;4:银行转账) */
  tradeMode = undefined;

  /** 交易状态(0:等待顺友确认;1:已确认;) */
  tradeStatus = undefined;
}

class RechargeDetailVo {
  /** 交易金额 */
  officialExchangeRate = undefined;

  /** 收款方账号 */
  payeeBankCardNumber = '';

  /** 收款方开户行 */
  payeeBankName = '';

  /** 收款方户名 */
  payeeName = '';

  /** 付款方账号 */
  payerBankCardNumber = '';

  /** 付款方开户行 */
  payerBankName = '';

  /** 付款方户名 */
  payerName = '';

  /** 付款状态 */
  paymentStatus = undefined;

  /** 交易币种 */
  receiptPath = '';

  /** 充值订单id */
  rechargeOrderId = undefined;

  /** 付款交易号 */
  relevantVoucher = '';

  /** 交易金额 */
  tradeAmount = undefined;

  /** 交易币种 */
  tradeAmountCurrency = '';

  /** 付款方式 */
  tradeMode = undefined;

  /** 交易状态 */
  tradeStatus = '';
}

class RechargeVo {
  /** 创建人id */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 收款账号 */
  payeeBankCardNumber = '';

  /** 收款账户 */
  payeeBankName = '';

  /** 付款账号 */
  payerBankCardNumber = '';

  /** 付款账户 */
  payerBankName = '';

  /** 付款状态 */
  paymentStatus = undefined;

  /** 付款状态说明 */
  paymentStatusStr = '';

  /** 付款金额 */
  rechargeAmount = '';

  /** 付款交易流水号 */
  rechargeCode = '';

  /** 充值订单id */
  rechargeOrderId = undefined;

  /** 充值备注 */
  rechargeRemark = '';

  /** 付款方式 */
  tradeMode = undefined;

  /** 付款方式说明 */
  tradeModeStr = '';

  /** 交易状态 */
  tradeStatus = '';

  /** 创建人 */
  userName = '';
}

class RegisterBody {
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

class RevokePredictBatchBO {
  /** 包裹ID列表 */
  packageIdList = [];

  /** 客户端 */
  ports = '';

  /** 用户ID */
  userId = undefined;
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

class SavePackageVO {
  /** 是否合同逾期 */
  flg = false;

  /** 冻结详情 */
  freezeDetail = '';

  /** 是否冻结 */
  isFreeze = false;

  /** 是否审核未通过 */
  ratifyStatus = false;
}

class ShippingMethodListBO {
  /** 公司id */
  companyId = '';

  /** 开始时间 */
  createTimeFrom = '';

  /** 结束时间 */
  createTimeTo = '';

  /** 预报状态 */
  predictStatus = '';

  /** 预报日期 */
  predictedDays = '';

  /** 搜索条件 */
  searchText = '';

  /** 库存状态 */
  stockStatus = '';

  /** version */
  version = '';
}

class ShippingMethodListVO {
  /** shippingMethodVOList */
  shippingMethodVOList = [];

  /** total */
  total = undefined;
}

class ShippingMethodVO {
  /** 总数 */
  pnum = undefined;

  /** 邮递方式名称 */
  shippingMethodCnName = '';

  /** 邮递方式id */
  shippingMethodId = undefined;
}

class SmsCodeBo {
  /** captchaVerifyParam */
  captchaVerifyParam = '';

  /** error */
  error = false;

  /** mobile */
  mobile = '';
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

  /** 客服专员ID */
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

  /** 财务专员ID */
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

  /** 揽收专员ID */
  receivePersonnel = undefined;

  /** receiveUser */
  receiveUser = new RemoteSysUserVO();

  /** 业务专员ID */
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

class SyBsPackageDetailVO {
  /** 到港时间 */
  arrivedPortTime = '';

  /** 预留字段1 */
  backup1 = '';

  /** 预留字段2 */
  backup2 = '';

  /** 预留字段3 */
  backup3 = '';

  /** 预留字段4 */
  backup4 = '';

  /** 预留字段5 */
  backup5 = '';

  /** 装袋操作人 */
  baggingBy = undefined;

  /** 装袋类型(0:实扫装袋;1:随机装袋;2:虚拟装袋) */
  baggingMethod = '';

  /** 装袋时间 */
  baggingTime = '';

  /** 改单授权人ID */
  changeChannelAuthorizerId = undefined;

  /** 换单人 */
  changeLabelBy = undefined;

  /** 授权者改单id */
  changeLabelCertigierId = undefined;

  /** 改单邮路id */
  changeLabelChannelId = undefined;

  /** 改单邮路分区id */
  changeLabelChannelareaId = undefined;

  /** 改单计费分区 */
  changeLabelCharzoneId = undefined;

  /** 换单机构 */
  changeLabelOrganizationId = undefined;

  /** 改单模板id */
  changeLabelTemplateId = undefined;

  /** 换单时间 */
  changeLabelTime = '';

  /** 改单追踪号 */
  changeLabelTrackingNumber = '';

  /** 邮路流水号 重命名 */
  channelId = undefined;

  /** 计费分区流水号 */
  chargeZoneId = undefined;

  /** 选中包裹属性 */
  checkedPackageAttributeList = [];

  /** 清关成功 */
  clearanceFinishTime = '';

  /** 清关中 */
  clearanceProcessTime = '';

  /** 公司流水号 */
  companyId = undefined;

  /** 创建人 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 币种代码 */
  currencyCode = '';

  /** 客户订单号 */
  customerOrderNo = '';

  /** 客户参考号 */
  customerReferenceNo = '';

  /** 妥投时间 */
  deliveredTime = '';

  /** 包裹销毁人 */
  destroyBy = undefined;

  /** 包裹销毁时间 */
  destroyTime = '';

  /** 首次尾程节点时间 */
  firstTrackTime = '';

  /** 是否投保(0:不投保 1:投保) */
  insuranceFlag = '';

  /** 投保保单号 */
  insuranceNumber = '';

  /** IOSS识别号 */
  iossVatId = '';

  /** 是否退税 */
  isDrawBack = undefined;

  /** 上次执行抓取的任务的优先级，空或者0是最低的。优先级高于该值的抓取任务可以忽略last_query_time从而执行抓取。 */
  lastQueryFrom = undefined;

  /** 最后查询时间 */
  lastQueryTime = '';

  /** 离港发货操作人 */
  leavePortBy = undefined;

  /** 离港发货时间 */
  leavePortTime = '';

  /** 离开转运中心操作人 */
  leaveTransitcenterBy = undefined;

  /** 离开转运中心时间 */
  leaveTransitcenterTime = '';

  /** 交航失败操作人 */
  leaveportReturnBy = undefined;

  /** 交航退件出库操作人 */
  leaveportReturnCustomerBy = undefined;

  /** 交航退件出库时间 */
  leaveportReturnCustomerTime = '';

  /** 交航退件收货人 */
  leaveportReturnReceiveBy = undefined;

  /** 交航退件收货时间 */
  leaveportReturnReceiveTime = '';

  /** 交航失败时间 */
  leaveportReturnTime = '';

  /** 邮袋编号 */
  mailbagCode = '';

  /** 改单前邮路ID */
  originChannelId = undefined;

  /** 改单前邮路分区ID */
  originChannelareaId = undefined;

  /** 改单前计费分区ID */
  originChargezoneId = undefined;

  /** 始发国出口清关 */
  originCustomsTime = '';

  /** 改单前追踪号 */
  originTrackingNumber = '';

  /** 内单号 */
  otherNumber = '';

  /** 包裹出库退回人 */
  outBy = undefined;

  /** 包裹出库退回时间 */
  outTime = '';

  /** 出境邮袋流水号 */
  outboundMailbagId = undefined;

  /** 海外退件 */
  overseasRefund = false;

  /** OCD金额 */
  packageCodAmount = undefined;

  /** OCD币种 */
  packageCodCurrencyCode = '';

  /** 包裹编码 */
  packageCode = '';

  /** 包裹错误流水号 */
  packageErrorCode = '';

  /** 包裹高度(cm) */
  packageHeight = undefined;

  /** 包裹流水号 */
  packageId = undefined;

  /** 包裹保险费 */
  packageInsurance = undefined;

  /** 包裹投保金额 */
  packageInsureAmount = undefined;

  /** 包裹长度(cm) */
  packageLength = undefined;

  /** 包裹销售金额（USD） */
  packageSalesAmount = undefined;

  /** 2:API、3:菜鸟、4:马帮、5:速卖、6:通途、7:Vova、8:Wish、9普源、10:敦煌、31:新菜鸟 */
  packageSource = '';

  /** 包裹宽度(cm) */
  packageWidth = undefined;

  /** 电子保单PDF路径 */
  pdfInsurancePath = '';

  /** 预报人 */
  predictionBy = undefined;

  /** 包裹预报错误信息 */
  predictionFailReason = '';

  /** 包裹预估(预报)运费(CNY) */
  predictionFreight = undefined;

  /** 预报时间 */
  predictionTime = '';

  /** 包裹预报体积计重 */
  predictionVolumnWeight = undefined;

  /** 包裹预报重量（KG） */
  predictionWeight = undefined;

  /** 最后打印人 */
  printBy = undefined;

  /** 最后打印时间 */
  printTime = '';

  /** 到达目的国操作人 */
  reachCountryBy = undefined;

  /** 到达目的国时间 */
  reachCountryTime = '';

  /** 到达OE操作人 */
  reachOeBy = undefined;

  /** 到达OE时间 */
  reachOeTime = '';

  /** 到达转运中心操作人 */
  reachTransitcenterBy = undefined;

  /** 到达转运中心时间 */
  reachTransitcenterTime = '';

  /** 收件人地址1 */
  recipientAddress1 = '';

  /** 收件人地址2 */
  recipientAddress2 = '';

  /** 收件人地址3 */
  recipientAddress3 = '';

  /** 收件人城市 */
  recipientCity = '';

  /** 收件国家代码 */
  recipientCountryCode = '';

  /** 收件人邮箱 */
  recipientEmail = '';

  /** 收件人完整地址 */
  recipientFullAddress = '';

  /** 身份证号码 */
  recipientIdentityNumber = '';

  /** 收件人手机 */
  recipientMobile = '';

  /** 收件人 */
  recipientName = '';

  /** 收件人联系电话 */
  recipientPhone = '';

  /** 收件人邮编 */
  recipientPostCode = '';

  /** 收件人省州 */
  recipientState = '';

  /** 个人税号 */
  recipientTaxNumber = '';

  /** 包裹退回处理中心退回人 */
  returnCenterBy = undefined;

  /** 包裹退回处理中心时间 */
  returnCenterTime = '';

  /** 预报请求撤销人 */
  revokePredictionBy = undefined;

  /** 预报撤销失败原因 */
  revokePredictionFailReason = '';

  /** 预报撤销状态(0:撤销失败；1：撤销成功) */
  revokePredictionStatus = '';

  /** 预报撤销时间 */
  revokePredictionTime = '';

  /** 销售日期 */
  saleTime = '';

  /** 寄件人地址 */
  senderAddress = '';

  /** 寄件人城市 */
  senderCity = '';

  /** 寄件人国家代码 */
  senderCountryCode = '';

  /** 寄件人行政区 */
  senderDistrict = '';

  /** 寄件人邮箱 */
  senderEmail = '';

  /** 发件人全地址 */
  senderFullAddress = '';

  /** 发件人姓名 */
  senderName = '';

  /** 发件人电话 */
  senderPhone = '';

  /** 发件人邮编 */
  senderPostcode = '';

  /** 寄件人省州 */
  senderState = '';

  /** 寄件人税号 */
  senderTaxNumber = '';

  /** 包裹发货人 */
  shippedBy = undefined;

  /** 包裹发货时间 */
  shippedTime = '';

  /** 邮路流水号 */
  shippingMethodId = undefined;

  /** 邮路分区流水号 */
  shippingZoneId = undefined;

  /** 标记包裹缺货时间 */
  signStockTime = '';

  /** 入仓人 */
  sortingResultBy = undefined;

  /** 入仓时间 */
  sortingResultTime = '';

  /** 入仓重量 */
  sortingResultWeight = undefined;

  /** 包裹状态(0:等待分配物流;1:分配物流失败;2:分配物流成功(等待预报);3:预报失败;4:已预报[等待入仓];5:已入仓[完成分拣);6:分拣转仓中;7:已装袋;8:出境邮袋转仓中9:已发货;10:预报中;11:已离港;12:已离开转运中心;13:已到达目的国;14:已到达OE;15:已到达转运中心;16:已退回处理中心;17:待退回寄件人;18:已退回寄件人;19:寄件人已确认海外退件收货;20:派送处理中;21:包裹无法派送;22:派送成功;23:包裹已销毁;24:交航失败;25:交航退件出库;26:寄件人已确认交航退件收货;27:客户拦截;28:运维拦截;35:线下退件) */
  status = '';

  /** 包裹是否缺货(0：不缺货；1:缺货) */
  stockFlag = '';

  /** 退税手续费 */
  taxRefundAmount = undefined;

  /** 是否退税 */
  taxRefundFlag = undefined;

  /** 跟踪号 */
  trackingNumber = '';

  /** 交接末端配送 */
  transportHandoverTime = '';

  /** 更新人 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';
}

class SyBsPackageProductVO {
  /** backup1 */
  backup1 = '';

  /** backup2 */
  backup2 = '';

  /** backup3 */
  backup3 = '';

  /** 创建人 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 申报币种 */
  currencyCode = '';

  /** 海关编码 */
  customCode = '';

  /** 报关产品中文名称 */
  declareCnName = '';

  /** 报关产品英文名称 */
  declareEnName = '';

  /** 报关单价（USD） */
  declarePrice = undefined;

  /** 包裹流水号 */
  packageId = undefined;

  /** 包裹商品流水号 */
  packageProductId = undefined;

  /** 产品材质 */
  productMaterial = '';

  /** 产品用途 */
  productPurpose = '';

  /** 产品SKU */
  productSku = '';

  /** 报关产品数量 */
  quantity = undefined;

  /** 修订报关产品中文名称 */
  reviseCnName = '';

  /** 修订海关编码 */
  reviseCustomCode = '';

  /** 修订报关单价（USD） */
  reviseDeclarePrice = undefined;

  /** 修订报关产品英文名称 */
  reviseEnName = '';

  /** 总价 */
  totalPrice = undefined;

  /** 更新人 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';
}

class SyBsPackageVO {
  /** 到港时间 */
  arrivedPortTime = '';

  /** 预留字段1 */
  backup1 = '';

  /** 预留字段2 */
  backup2 = '';

  /** 预留字段3 */
  backup3 = '';

  /** 预留字段4 */
  backup4 = '';

  /** 预留字段5 */
  backup5 = '';

  /** 装袋操作人 */
  baggingBy = undefined;

  /** 装袋类型(0:实扫装袋;1:随机装袋;2:虚拟装袋) */
  baggingMethod = '';

  /** 装袋时间 */
  baggingTime = '';

  /** 改单授权人ID */
  changeChannelAuthorizerId = undefined;

  /** 换单人 */
  changeLabelBy = undefined;

  /** 授权者改单id */
  changeLabelCertigierId = undefined;

  /** 改单邮路id */
  changeLabelChannelId = undefined;

  /** 改单邮路分区id */
  changeLabelChannelareaId = undefined;

  /** 改单计费分区 */
  changeLabelCharzoneId = undefined;

  /** 换单机构 */
  changeLabelOrganizationId = undefined;

  /** 改单模板id */
  changeLabelTemplateId = undefined;

  /** 换单时间 */
  changeLabelTime = '';

  /** 改单追踪号 */
  changeLabelTrackingNumber = '';

  /** 邮路流水号 重命名 */
  channelId = undefined;

  /** 计费分区流水号 */
  chargeZoneId = undefined;

  /** 清关成功 */
  clearanceFinishTime = '';

  /** 清关中 */
  clearanceProcessTime = '';

  /** 公司流水号 */
  companyId = undefined;

  /** 创建人 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 币种代码 */
  currencyCode = '';

  /** 客户订单号 */
  customerOrderNo = '';

  /** 客户参考号 */
  customerReferenceNo = '';

  /** 妥投时间 */
  deliveredTime = '';

  /** 包裹销毁人 */
  destroyBy = undefined;

  /** 包裹销毁时间 */
  destroyTime = '';

  /** 首次尾程节点时间 */
  firstTrackTime = '';

  /** 是否冻结 */
  freezeStatus = undefined;

  /** 是否投保(0:不投保 1:投保) */
  insuranceFlag = '';

  /** 投保保单号 */
  insuranceNumber = '';

  /** IOSS识别号 */
  iossVatId = '';

  /** 是否退税 */
  isDrawback = undefined;

  /** 上次执行抓取的任务的优先级，空或者0是最低的。优先级高于该值的抓取任务可以忽略last_query_time从而执行抓取。 */
  lastQueryFrom = undefined;

  /** 最后查询时间 */
  lastQueryTime = '';

  /** 离港发货操作人 */
  leavePortBy = undefined;

  /** 离港发货时间 */
  leavePortTime = '';

  /** 离开转运中心操作人 */
  leaveTransitcenterBy = undefined;

  /** 离开转运中心时间 */
  leaveTransitcenterTime = '';

  /** 交航失败操作人 */
  leaveportReturnBy = undefined;

  /** 交航退件出库操作人 */
  leaveportReturnCustomerBy = undefined;

  /** 交航退件出库时间 */
  leaveportReturnCustomerTime = '';

  /** 交航退件收货人 */
  leaveportReturnReceiveBy = undefined;

  /** 交航退件收货时间 */
  leaveportReturnReceiveTime = '';

  /** 交航失败时间 */
  leaveportReturnTime = '';

  /** 邮袋编号 */
  mailbagCode = '';

  /** 改单前邮路ID */
  originChannelId = undefined;

  /** 改单前邮路分区ID */
  originChannelareaId = undefined;

  /** 改单前计费分区ID */
  originChargezoneId = undefined;

  /** 始发国出口清关 */
  originCustomsTime = '';

  /** 改单前追踪号 */
  originTrackingNumber = '';

  /** 内单号 */
  otherNumber = '';

  /** 包裹出库退回人 */
  outBy = undefined;

  /** 包裹出库退回时间 */
  outTime = '';

  /** 出境邮袋流水号 */
  outboundMailbagId = undefined;

  /** 海外退件 */
  overseasRefund = false;

  /** OCD金额 */
  packageCodAmount = undefined;

  /** OCD币种 */
  packageCodCurrencyCode = '';

  /** 包裹编码 */
  packageCode = '';

  /** 包裹错误流水号 */
  packageErrorCode = '';

  /** 包裹高度(cm) */
  packageHeight = undefined;

  /** 包裹流水号 */
  packageId = undefined;

  /** 包裹保险费 */
  packageInsurance = undefined;

  /** 包裹投保金额 */
  packageInsureAmount = undefined;

  /** 包裹长度(cm) */
  packageLength = undefined;

  /** 包裹销售金额（USD） */
  packageSalesAmount = undefined;

  /** 2:API、3:菜鸟、4:马帮、5:速卖、6:通途、7:Vova、8:Wish、9普源、10:敦煌、31:新菜鸟 */
  packageSource = '';

  /** 包裹宽度(cm) */
  packageWidth = undefined;

  /** 电子保单PDF路径 */
  pdfInsurancePath = '';

  /** 预报人 */
  predictionBy = undefined;

  /** 包裹预报错误信息 */
  predictionFailReason = '';

  /** 包裹预估(预报)运费(CNY) */
  predictionFreight = undefined;

  /** 预报时间 */
  predictionTime = '';

  /** 包裹预报体积计重 */
  predictionVolumnWeight = undefined;

  /** 包裹预报重量（KG） */
  predictionWeight = undefined;

  /** 最后打印人 */
  printBy = undefined;

  /** 最后打印时间 */
  printTime = '';

  /** 到达目的国操作人 */
  reachCountryBy = undefined;

  /** 到达目的国时间 */
  reachCountryTime = '';

  /** 到达OE操作人 */
  reachOeBy = undefined;

  /** 到达OE时间 */
  reachOeTime = '';

  /** 到达转运中心操作人 */
  reachTransitcenterBy = undefined;

  /** 到达转运中心时间 */
  reachTransitcenterTime = '';

  /** 收件人地址1 */
  recipientAddress1 = '';

  /** 收件人地址2 */
  recipientAddress2 = '';

  /** 收件人地址3 */
  recipientAddress3 = '';

  /** 收件人城市 */
  recipientCity = '';

  /** 收件国家代码 */
  recipientCountryCode = '';

  /** 收件人邮箱 */
  recipientEmail = '';

  /** 收件人完整地址 */
  recipientFullAddress = '';

  /** 身份证号码 */
  recipientIdentityNumber = '';

  /** 收件人手机 */
  recipientMobile = '';

  /** 收件人 */
  recipientName = '';

  /** 收件人联系电话 */
  recipientPhone = '';

  /** 收件人邮编 */
  recipientPostCode = '';

  /** 收件人省州 */
  recipientState = '';

  /** 个人税号 */
  recipientTaxNumber = '';

  /** 包裹退回处理中心退回人 */
  returnCenterBy = undefined;

  /** 包裹退回处理中心时间 */
  returnCenterTime = '';

  /** 预报请求撤销人 */
  revokePredictionBy = undefined;

  /** 预报撤销失败原因 */
  revokePredictionFailReason = '';

  /** 预报撤销状态(0:撤销失败；1：撤销成功) */
  revokePredictionStatus = '';

  /** 预报撤销时间 */
  revokePredictionTime = '';

  /** 销售日期 */
  saleTime = '';

  /** 寄件人地址 */
  senderAddress = '';

  /** 寄件人城市 */
  senderCity = '';

  /** 寄件人国家代码 */
  senderCountryCode = '';

  /** 寄件人行政区 */
  senderDistrict = '';

  /** 寄件人邮箱 */
  senderEmail = '';

  /** 发件人全地址 */
  senderFullAddress = '';

  /** 发件人姓名 */
  senderName = '';

  /** 发件人电话 */
  senderPhone = '';

  /** 发件人邮编 */
  senderPostcode = '';

  /** 寄件人省州 */
  senderState = '';

  /** 寄件人税号 */
  senderTaxNumber = '';

  /** 包裹发货人 */
  shippedBy = undefined;

  /** 包裹发货时间 */
  shippedTime = '';

  /** 邮路流水号 */
  shippingMethodId = undefined;

  /** 邮路分区流水号 */
  shippingZoneId = undefined;

  /** 标记包裹缺货时间 */
  signStockTime = '';

  /** 入仓人 */
  sortingResultBy = undefined;

  /** 入仓时间 */
  sortingResultTime = '';

  /** 入仓重量 */
  sortingResultWeight = undefined;

  /** 包裹状态(0:等待分配物流;1:分配物流失败;2:分配物流成功(等待预报);3:预报失败;4:已预报[等待入仓];5:已入仓[完成分拣);6:分拣转仓中;7:已装袋;8:出境邮袋转仓中9:已发货;10:预报中;11:已离港;12:已离开转运中心;13:已到达目的国;14:已到达OE;15:已到达转运中心;16:已退回处理中心;17:待退回寄件人;18:已退回寄件人;19:寄件人已确认海外退件收货;20:派送处理中;21:包裹无法派送;22:派送成功;23:包裹已销毁;24:交航失败;25:交航退件出库;26:寄件人已确认交航退件收货;27:客户拦截;28:运维拦截;35:线下退件) */
  status = '';

  /** 包裹是否缺货(0：不缺货；1:缺货) */
  stockFlag = '';

  /** 退税手续费 */
  taxRefundAmount = undefined;

  /** 是否退税 */
  taxRefundFlag = undefined;

  /** 跟踪号 */
  trackingNumber = '';

  /** 交接末端配送 */
  transportHandoverTime = '';

  /** 更新人 */
  upLocalDateTimeBy = undefined;

  /** 更新时间 */
  upLocalDateTimeTime = '';
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

class SyCCompanyThirdplatformAccountBo {
  /** 描述 */
  description = '';

  /** 流水号 */
  platformAccountId = undefined;

  /** 所属平台 1 wishpost, 2 vovapost , 3 DHGate1 */
  platformType = undefined;

  /** 平台账号 */
  userName = '';
}

class SyCCompanyThirdplatformAccountVo {
  /** 公司流水号 */
  companyId = undefined;

  /** 创建时间 */
  createTime = '';

  /** 描述 */
  description = '';

  /** 流水号 */
  platformAccountId = undefined;

  /** 所属平台 1 wishpost, 2 vovapost , 3 DHGate1 */
  platformType = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 平台账号 */
  userName = '';
}

class SyCCompanyVo {
  /** 账户名称 */
  accountName = '';

  /** 银行卡号 */
  bankNumber = '';

  /** 公司结账日 */
  billAccountDay = undefined;

  /** 开单公司 */
  billCompanyId = undefined;

  /** 公司结账周期 */
  billCycleId = undefined;

  /** 计费节点 */
  billNode = undefined;

  /** 社会信用代码/身份证号码 */
  businessLicenseNumber = '';

  /** 业务专员 */
  businessPersonnel = undefined;

  /** 公司上传的证件路径 */
  certificatePath = '';

  /** 1:均摊重量 2:入仓重量 3:预报重量 */
  chargeWeightType = undefined;

  /** 公司账户余额(CNY) */
  companyAmount = undefined;

  /** 账户资产 */
  companyAsset = undefined;

  /** 公司编码 */
  companyCode = '';

  /** 公司信用额度(CNY) */
  companyCreditLimit = undefined;

  /** 公司流水号 */
  companyId = undefined;

  /** 公司名称 */
  companyName = '';

  /** 分支机构 */
  companyOrganizationId = undefined;

  /** 公司已用额度(CNY) */
  companyUsedCredit = undefined;

  /** 创建人 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** detail */
  detail = new SyCCompanyDetailVo();

  /** (入账节点：1结单,2离开处理中心,3到达始发港,4离开始发港,5到达目的国,6目的国清关,7到达OE) */
  entryNode = undefined;

  /** 财务专员 */
  financePersonnel = undefined;

  /** financialPersonnel */
  financialPersonnel = undefined;

  /** 自动对账 1、是；2、否 */
  flgAutoAccount = undefined;

  /** 0或null:未冻结;1:冻结 */
  freezeStatus = undefined;

  /** 结单拦截超重%(已分重量大于应分重量) */
  greaterInterceptPercent = undefined;

  /** 结单拦截超重KG(已分重量大于应分重量) */
  greaterInterceptWeigh = undefined;

  /** 身份证国徽面 */
  idCardEmblemPath = '';

  /** 身份证人像面 */
  idCardHeadPath = '';

  /** 公司下次账单日期 */
  lastBillCycleTime = '';

  /** 公司上次结单时间 */
  lastChargeTime = '';

  /** 最后揽收日期 */
  lastReceiveTime = '';

  /** 最后揽收重量(kg) */
  lastReceiveWeight = undefined;

  /** 最后充值日期 */
  lastRechargeTime = '';

  /** 催款邮件最后发送日期 */
  lastUrgePayEmailTime = '';

  /** 催款短信最后发送时间 */
  lastUrgePaySmsTime = '';

  /** 结单拦截不足%(已分重量小于应分重量) */
  lesserInterceptPercent = undefined;

  /** 结单拦截不足KG(已分重量小于应分重量) */
  lesserInterceptWeigh = undefined;

  /** 余额提醒设置 */
  moneyRemindLimit = undefined;

  /** 开户行名称 */
  openingBank = '';

  /** 包裹大于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
  packageGreaterInterceptMode = undefined;

  /** 包裹大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  packageGreaterInterceptValue = undefined;

  /** 包裹小于于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
  packageLesserInterceptMode = undefined;

  /** 包裹小于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  packageLesserInterceptValue = undefined;

  /** payoneer授权码 */
  payoneerCode = '';

  /** payoneer帐号 */
  payoneerId = '';

  /** payoneer刷新时间 */
  payoneerRefreshTime = '';

  /** payoneer刷新令牌 */
  payoneerRefreshToken = '';

  /** payoneer访问令牌 */
  payoneerToken = '';

  /** 称重大于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截） */
  pickupGreaterInterceptMode = undefined;

  /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  pickupGreaterInterceptValue = undefined;

  /** 称重小于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
  pickupLesserInterceptMode = undefined;

  /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
  pickupLesserInterceptValue = undefined;

  /** 审核备注 */
  ratifyMemo = '';

  /** 公司审核状态(0：待完善资料 1:待审核 2:审核失败 3:审核成功) */
  ratifyStatus = undefined;

  /** 揽收专员 */
  receivePersonnel = undefined;

  /** 推荐人 */
  recommendedBy = '';

  /** 客服专员 */
  servicePersonnel = undefined;

  /** 注册类型 0/null：公司 1：个人 */
  signupType = undefined;

  /** 结单申请人 */
  statementApplyBy = undefined;

  /** 结单申请时间 */
  statementApplyTime = '';

  /** 结单失败原因 */
  statementFailReason = '';

  /** 结单状态 0/null:等待结单 1：结单失败 2：结单中 */
  statementStatus = undefined;

  /** 计费方式 0/null均摊计费  1入仓计费 */
  statementType = undefined;

  /** 归属公司ID */
  superCompanyId = undefined;

  /** 证件有效期 */
  termOfValidity = '';

  /** 超时拦截(0/null默认拦截   1不拦截) */
  timeoutIntercept = undefined;

  /** 更新人 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';
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

class SyCPackageProduct {
  /** 公司流水号 */
  companyId = undefined;

  /** 创建人 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 申报币种 */
  currencyCode = '';

  /** 海关编码 */
  customCode = '';

  /** 报关产品中文名称 */
  declareCnName = '';

  /** 报关产品英文名称 */
  declareEnName = '';

  /** 报关单价 */
  declarePrice = undefined;

  /** 包裹商品流水号 */
  productId = undefined;

  /** 产品材质 */
  productMaterial = '';

  /** 产品用途 */
  productPurpose = '';

  /** 产品SKU */
  productSku = '';

  /** 更新人 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';
}

class SyCPackageProductBo {
  /** 申报币种 */
  currencyCode = '';

  /** 海关编码 */
  customCode = '';

  /** 报关产品中文名称 */
  declareCnName = '';

  /** 报关产品英文名称 */
  declareEnName = '';

  /** 报关单价 */
  declarePrice = undefined;

  /** 包裹商品流水号 */
  productId = undefined;

  /** 产品材质 */
  productMaterial = '';

  /** 产品用途 */
  productPurpose = '';

  /** 产品SKU */
  productSku = '';
}

class SyCPackageProductVo {
  /** 公司流水号 */
  companyId = undefined;

  /** createBy */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 申报币种 */
  currencyCode = '';

  /** 海关编码 */
  customCode = '';

  /** 报关产品中文名称 */
  declareCnName = '';

  /** 报关产品英文名称 */
  declareEnName = '';

  /** 报关单价 */
  declarePrice = undefined;

  /** 包裹商品流水号 */
  productId = undefined;

  /** 产品材质 */
  productMaterial = '';

  /** 产品用途 */
  productPurpose = '';

  /** 产品SKU */
  productSku = '';
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

class SyCUserOperLogBo {
  /** 业务类型（0其它 1新增 2修改 3删除） */
  businessType = undefined;

  /** 业务类型数组 */
  businessTypes = [];

  /** 客户公司id */
  companyId = undefined;

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

class SyCUserOperLogVo {
  /** 业务类型（0其它 1新增 2修改 3删除） */
  businessType = undefined;

  /** 业务类型数组 */
  businessTypes = [];

  /** 客户公司id */
  companyId = undefined;

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

class SyPrintBsPackageVO {
  /** 创建时间 */
  createTime = '';

  /** 客户订单号 */
  customerOrderNo = '';

  /** 客户参考号 */
  customerReferenceNo = '';

  /** 包裹编码 */
  packageCode = '';

  /** 包裹流水号 */
  packageId = undefined;

  /** 包裹预估(预报)运费(CNY) */
  predictionFreight = undefined;

  /** 包裹预报重量（KG） */
  predictionWeight = undefined;

  /** 最后打印时间 */
  printTime = '';

  /** productskus */
  productskus = '';

  /** 收件国家代码 */
  recipientCountryCode = '';

  /** 邮寄方式名称 */
  shippingmethodname = '';

  /** 包裹状态(0:等待分配物流;1:分配物流失败;2:分配物流成功(等待预报);3:预报失败;4:已预报[等待入仓];5:已入仓[完成分拣);6:分拣转仓中;7:已装袋;8:出境邮袋转仓中9:已发货;10:预报中;11:已离港;12:已离开转运中心;13:已到达目的国;14:已到达OE;15:已到达转运中心;16:已退回处理中心;17:待退回寄件人;18:已退回寄件人;19:寄件人已确认海外退件收货;20:派送处理中;21:包裹无法派送;22:派送成功;23:包裹已销毁;24:交航失败;25:交航退件出库;26:寄件人已确认交航退件收货;27:客户拦截;28:运维拦截;35:线下退件) */
  status = '';

  /** 追踪号 */
  trackingNumber = '';

  /** 更新时间 */
  updateTime = '';
}

class SySysBankAccountVO {
  /** 是否自动对账(0:否 1:是) */
  accountType = undefined;

  /** 人民币余额 */
  balanceCny = undefined;

  /** 人民币余额 */
  balanceCnyStr = '';

  /** 港币余额 */
  balanceHkd = undefined;

  /** 港币余额 */
  balanceHkdStr = '';

  /** 美元余额 */
  balanceUsd = undefined;

  /** 美元余额 */
  balanceUsdStr = '';

  /** 开户账号 */
  bankAccount = '';

  /** 银行账号流水号 */
  bankAccountId = undefined;

  /** 开户行 */
  bankName = '';

  /** 银行简称 */
  bankShortName = '';

  /** 人民币导入模板(默认1（不支持导入） 否则是官方数据格式下拉框选的值) */
  cnyImportType = undefined;

  /** 创建人 */
  createBy = undefined;

  /** 创建时间 */
  createTime = '';

  /** 港币导入模板(默认1（不支持导入） 否则是官方数据格式下拉框选的值) */
  hkdImportType = undefined;

  /** 备注 */
  remarks = '';

  /** 排序 */
  sort = undefined;

  /** 状态(0:停用;1:启用) */
  status = undefined;

  /** 交易状态（0/null:未交易 1:正在交易） */
  tradeStatus = undefined;

  /** 更新人 */
  updateBy = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 美元导入模板(默认1（不支持导入） 否则是官方数据格式下拉框选的值) */
  usdImportType = undefined;

  /** 户名 */
  userName = '';
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

  /** 显示状态（0显示 1隐藏） */
  visible = undefined;
}

class SysUserBindMobileBo {
  /** 手机号码 */
  mobile = '';

  /** 手机验证码 */
  smsCode = '';
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

  /** 用户头像 */
  headPortraitPath = '';

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
  /** 手机号码 */
  mobile = '';

  /** 用户密码 */
  password = '';

  /** 短信验证码 */
  smsCode = '';
}

class SysUserMenuBindBo {
  /** menuIdList */
  menuIdList = [];

  /** userId */
  userId = undefined;
}

class SysUserPasswordBo {
  /** 新密码 */
  newPassword = '';

  /** 旧密码 */
  oldPassword = '';
}

class SysUserPasswordForgotBo {
  /** 关键字（用户名或手机号） */
  keyword = '';
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

class SysUserUnbindMobileBo {
  /** 手机验证码 */
  smsCode = '';
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

  /** 注册类型 0/null：公司 1：个人 */
  signupType = undefined;

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

class TableDataInfoAssetVo {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoAssetVo();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoRechargeVo {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoRechargeVo();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoSyBsPackageVO {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoSyBsPackageVO();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoSyCCompanyThirdplatformAccountVo {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoSyCCompanyThirdplatformAccountVo();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoSyCPackageProduct {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoSyCPackageProduct();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoSyCPackageProductVo {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoSyCPackageProductVo();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoSyCUserComplaintVo {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoSyCUserComplaintVo();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoSyCUserOperLogVo {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoSyCUserOperLogVo();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoSyExchangeRateVo {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoSyExchangeRateVo();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoSyPrintBsPackageVO {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoSyPrintBsPackageVO();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoSysLogininforVo {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoSysLogininforVo();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoTrackingNoVo {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoTrackingNoVo();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoUnBilledChargeSortVo {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoUnBilledChargeSortVo();

  /** 消息内容 */
  msg = '';
}

class TableDataInfoUnBilledChargeVo {
  /** 消息状态码 */
  code = undefined;

  /** data */
  data = new DataInfoUnBilledChargeVo();

  /** 消息内容 */
  msg = '';
}

class TimelinesBoardBo {
  /** analyticsDate */
  analyticsDate = undefined;

  /** analyticsNode */
  analyticsNode = undefined;

  /** keyword */
  keyword = '';
}

class TimelinesBoardVo {
  /** 异常数量 */
  abnormalNumber = undefined;

  /** 0/null：入仓统计 1：发货统计 */
  analyticsType = undefined;

  /** 邮路ID */
  channelId = undefined;

  /** 邮路中文名称 */
  channelcnname = '';

  /** 国家中文名称 */
  countryCnName = '';

  /** 国家代码 */
  countryCode = '';

  /** 签收数量 */
  deliveredNumber = undefined;

  /** 10天签收数量 */
  deliveredNumber1 = undefined;

  /** 45天签收数量 */
  deliveredNumber10 = undefined;

  /** 60天签收数量 */
  deliveredNumber11 = undefined;

  /** 90天签收数量 */
  deliveredNumber12 = undefined;

  /** 120天签收数量 */
  deliveredNumber13 = undefined;

  /** 180天签收数量（暂不启用） */
  deliveredNumber14 = undefined;

  /** 11天签收数量 */
  deliveredNumber2 = undefined;

  /** 12天签收数量 */
  deliveredNumber3 = undefined;

  /** 13天签收数量 */
  deliveredNumber4 = undefined;

  /** 14天签收数量 */
  deliveredNumber5 = undefined;

  /** 15天签收数量 */
  deliveredNumber6 = undefined;

  /** 20天签收数量 */
  deliveredNumber7 = undefined;

  /** 25天签收数量 */
  deliveredNumber8 = undefined;

  /** 30天签收数量 */
  deliveredNumber9 = undefined;

  /** 包裹数量 */
  packageNumber = undefined;

  /** 10天入仓数量 */
  packageNumber1 = undefined;

  /** 45天入仓数量 */
  packageNumber10 = undefined;

  /** 60天入仓数量 */
  packageNumber11 = undefined;

  /** 90天入仓数量 */
  packageNumber12 = undefined;

  /** 120天入仓数量 */
  packageNumber13 = undefined;

  /** 180天入仓数量（暂不启用） */
  packageNumber14 = undefined;

  /** 11天入仓数量 */
  packageNumber2 = undefined;

  /** 12天入仓数量 */
  packageNumber3 = undefined;

  /** 13天入仓数量 */
  packageNumber4 = undefined;

  /** 14天入仓数量 */
  packageNumber5 = undefined;

  /** 15天入仓数量 */
  packageNumber6 = undefined;

  /** 20天入仓数量 */
  packageNumber7 = undefined;

  /** 25天入仓数量 */
  packageNumber8 = undefined;

  /** 30天入仓数量 */
  packageNumber9 = undefined;

  /** 总妥投率 */
  rate = undefined;

  /** 10天妥投率 */
  rate1 = undefined;

  /** 45天妥投率 */
  rate10 = undefined;

  /** 60天妥投率 */
  rate11 = undefined;

  /** 90天妥投率 */
  rate12 = undefined;

  /** 120天妥投率 */
  rate13 = undefined;

  /** 180天妥投率（暂不启用） */
  rate14 = undefined;

  /** 11天妥投率 */
  rate2 = undefined;

  /** 12天妥投率 */
  rate3 = undefined;

  /** 13天妥投率 */
  rate4 = undefined;

  /** 14天妥投率 */
  rate5 = undefined;

  /** 15天妥投率 */
  rate6 = undefined;

  /** 20天妥投率 */
  rate7 = undefined;

  /** 25天妥投率 */
  rate8 = undefined;

  /** 30天妥投率 */
  rate9 = undefined;
}

class TrackingNoDownloadBOInteger {
  /** id */
  id = undefined;

  /** type */
  type = undefined;
}

class TrackingNoVo {
  /** 下载数量 */
  downloadCount = undefined;

  /** 最后下载时间 */
  lastDownloadTime = '';

  /** 追踪号总数 */
  trackingNoCount = undefined;

  /** 追踪号池id */
  trackingNumberPoolId = undefined;

  /** 追踪号池名称 */
  trackingNumberPoolName = '';

  /** 未下载数量 */
  unDownloadCount = undefined;

  /** 未使用数 */
  unUseNum = undefined;

  /** 已使用数 */
  usedNum = undefined;
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

class TreeVO {
  /** checked */
  checked = false;

  /** halfChecked */
  halfChecked = false;

  /** id */
  id = undefined;

  /** label */
  label = '';

  /** parentId */
  parentId = undefined;
}

class UnBilledChargeBo {
  /** 费用类型(0: 物流费用, 1: 其他费用, 2: 异常费用) */
  chargeType = undefined;

  /** 公司流水号 */
  companyId = undefined;
}

class UnBilledChargeSortBo {
  /** 费用id */
  companyChargeId = undefined;

  /** 分拣方式(0: 人工, 1: 逐单入仓) */
  sortingFrom = undefined;

  /** 有效性(0: 有效, 1: 异常) */
  sortingType = undefined;
}

class UnBilledChargeSortVo {
  /** 邮寄方式名称/邮路名称 */
  channelCnName = '';

  /** 邮路代码 */
  channelCode = '';

  /** 计费重 */
  chargeWeight = undefined;

  /** 目的国中文名 */
  countryCnName = '';

  /** 目的国英文名 */
  countryEnName = '';

  /** 币种 */
  currencyCode = '';

  /** 币种符号 */
  currencySymbol = '';

  /** 客户订单号 */
  customerOrderNo = '';

  /** 客户参考号 */
  customerReferenceNo = '';

  /** 保险费 */
  insuranceAmount = undefined;

  /** 保险单号 */
  insuranceNumber = '';

  /** 包裹流水号 */
  packageCode = '';

  /** 包裹数 */
  packageNum = undefined;

  /** 目的国 */
  recipientCountryCode = '';

  /** 运费 */
  reviseFreight = undefined;

  /** 保费 */
  revisePremium = undefined;

  /** 分拣重量 */
  reviseWeight = undefined;

  /** 邮寄方式代码 */
  shippingMethodCode = '';

  /** 分拣编码 */
  sortingResultCode = '';

  /** 分拣时间 */
  sortingTime = '';

  /** 体积重 */
  srealVolumnWeight = undefined;

  /** 退税手续费 */
  taxRefundAmount = undefined;

  /** 总费用 */
  totalCharge = undefined;

  /** 追踪号 */
  trackingNumber = '';

  /** 体积 */
  volume = '';
}

class UnBilledChargeVo {
  /** 费用 */
  charge = undefined;

  /** 费用编号 */
  chargeCode = '';

  /** 费用内容 */
  chargeDetail = '';

  /** 费用时间 */
  chargeTime = '';

  /** 费用类型 */
  chargeType = undefined;

  /** 费用id */
  companyChargeId = undefined;

  /** 费用生成时间 */
  createTime = '';

  /** 币种 */
  currencyCode = '';

  /** 币种名称 */
  currencySecondName = '';

  /** 币种符号 */
  currencySymbol = '';
}

class UploadInitVO {
  /** true 合同过期 预报不能成功 */
  flg = false;

  /** importResultVO */
  importResultVO = new BatchImportResultVO();

  /** isSpecify */
  isSpecify = false;

  /** 客户未审核 ，预报不能成功 */
  ratifyStatus = false;
}

export const apis = {
  ApplyInterceptBO,
  AssetBo,
  AssetVo,
  BankTransferFormBeanBO,
  BatchImportResultVO,
  CalCuLatePriceBO,
  CalCuLatePriceDataVO,
  CalCuLatePriceVO,
  CaptchaVo,
  ChannelPriceVO,
  CommonIdBOInteger,
  CommonIdListBOInteger,
  CommonIdListBOLong,
  CompanyContractVO,
  CompanyVo,
  CompleteCompanyBO,
  ContractRemindVo,
  DataInfoAssetVo,
  DataInfoRechargeVo,
  DataInfoSyBsPackageVO,
  DataInfoSyCCompanyThirdplatformAccountVo,
  DataInfoSyCPackageProduct,
  DataInfoSyCPackageProductVo,
  DataInfoSyCUserComplaintVo,
  DataInfoSyCUserOperLogVo,
  DataInfoSyExchangeRateVo,
  DataInfoSyPrintBsPackageVO,
  DataInfoSysLogininforVo,
  DataInfoTrackingNoVo,
  DataInfoUnBilledChargeSortVo,
  DataInfoUnBilledChargeVo,
  DopreDictionBO,
  DownloadBO,
  ExportExcelBO,
  FileVO,
  ForeignCurrencyVo,
  LoginVo,
  MetaVo,
  OverviewVo,
  PackageIdListBO,
  PackageInfoBO,
  PackageListViewBO,
  PackageProduct,
  PageQuery,
  PredictionBO,
  PredictionBatchModifyBO,
  PredictionBatchRevokeBO,
  PredictionVO,
  PrintPDFBO,
  PrintPackageBO,
  PrintPackageListViewBO,
  PrintPdfBatchBO,
  ProductAttributesVO,
  ProductListBO,
  ProfileVo,
  RCalCuLatePriceVO,
  RCaptchaVo,
  RCompanyContractVO,
  RContractRemindVo,
  RFileVO,
  RInteger,
  RListChannelPriceVO,
  RListMapStringObject,
  RListProductAttributesVO,
  RListRemoteSysOrganizationVO,
  RListRemoteSysUserVO,
  RListRouterVo,
  RListSyBsPackageProductVO,
  RListSyCMenuVo,
  RListSyExchangeRateVo,
  RListSySysBankAccountVO,
  RListSysUserVo,
  RListTimelinesBoardVo,
  RListTreeInteger,
  RListTreeVO,
  RLocalDateTime,
  RLoginVo,
  RMapStringListRemoteDictDataVO,
  RObject,
  ROverviewVo,
  RPredictionVO,
  RProfileVo,
  RRechargeDetailVo,
  RSavePackageVO,
  RShippingMethodListVO,
  RString,
  RSyBsPackageDetailVO,
  RSyCCompanyDetailVo,
  RSyCCompanyPackageDeviationVo,
  RSyCCompanyPickDeviationVo,
  RSyCCompanyVo,
  RSyCMenuVo,
  RSysUserVo,
  RUploadInitVO,
  RVoid,
  RechargeBo,
  RechargeDetailVo,
  RechargeVo,
  RegisterBody,
  RemoteDictDataVO,
  RemoteSysOrganizationVO,
  RemoteSysUserVO,
  RevokePredictBatchBO,
  RouterVo,
  SavePackageVO,
  ShippingMethodListBO,
  ShippingMethodListVO,
  ShippingMethodVO,
  SmsCodeBo,
  SseEmitter,
  SyAccountInfoVo,
  SyBsPackageDetailVO,
  SyBsPackageProductVO,
  SyBsPackageVO,
  SyCCompanyDetailBo,
  SyCCompanyDetailVo,
  SyCCompanyPackageDeviationBo,
  SyCCompanyPackageDeviationVo,
  SyCCompanyPickDeviationBo,
  SyCCompanyPickDeviationVo,
  SyCCompanyThirdplatformAccountBo,
  SyCCompanyThirdplatformAccountVo,
  SyCCompanyVo,
  SyCMenuVo,
  SyCPackageProduct,
  SyCPackageProductBo,
  SyCPackageProductVo,
  SyCUserComplaintBo,
  SyCUserComplaintVo,
  SyCUserOperLogBo,
  SyCUserOperLogVo,
  SyExchangeRateVo,
  SyPrintBsPackageVO,
  SySysBankAccountVO,
  SySysNotice,
  SysLogininforBo,
  SysLogininforVo,
  SysMenuBo,
  SysUserBindMobileBo,
  SysUserBo,
  SysUserEditPasswordBo,
  SysUserMenuBindBo,
  SysUserPasswordBo,
  SysUserPasswordForgotBo,
  SysUserProfileBo,
  SysUserUnbindMobileBo,
  SysUserVo,
  TableDataInfoAssetVo,
  TableDataInfoRechargeVo,
  TableDataInfoSyBsPackageVO,
  TableDataInfoSyCCompanyThirdplatformAccountVo,
  TableDataInfoSyCPackageProduct,
  TableDataInfoSyCPackageProductVo,
  TableDataInfoSyCUserComplaintVo,
  TableDataInfoSyCUserOperLogVo,
  TableDataInfoSyExchangeRateVo,
  TableDataInfoSyPrintBsPackageVO,
  TableDataInfoSysLogininforVo,
  TableDataInfoTrackingNoVo,
  TableDataInfoUnBilledChargeSortVo,
  TableDataInfoUnBilledChargeVo,
  TimelinesBoardBo,
  TimelinesBoardVo,
  TrackingNoDownloadBOInteger,
  TrackingNoVo,
  TreeInteger,
  TreeNodeConfig,
  TreeVO,
  UnBilledChargeBo,
  UnBilledChargeSortBo,
  UnBilledChargeSortVo,
  UnBilledChargeVo,
  UploadInitVO,
};
