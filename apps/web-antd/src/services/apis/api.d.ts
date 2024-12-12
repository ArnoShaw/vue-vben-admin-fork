// @ts-nocheck auto generated apis

export declare namespace defs {
  export namespace apis {
    export interface AssetBo {
      /** 交易开始时间 */
      beginTime?: string;

      /** 公司流水号 */
      companyId?: number;

      /** 交易结束时间 */
      endTime?: string;

      /** 交易类型(0:充值；1：消费) */
      tradeType?: number;
    }

    export interface AssetVo {
      /** 交易流水号 */
      companyAssetChangeCode?: string;

      /** 资产流水id */
      companyAssetChangeId?: number;

      /** 交易时间 */
      createTime?: string;

      /** 币种名称 */
      currencyName?: string;

      /** 币种符号 */
      currencySymbol?: string;

      /** 单据编号 */
      receiptsCode?: string;

      /** 单据名称 */
      receiptsName?: string;

      /** 交易后账户余额 */
      tradeBalanceAfter?: number;

      /** 交易前账户余额 */
      tradeBalanceBefore?: number;

      /** 交易金额 */
      tradeConfirmAmount?: number;

      /** 交易类型 */
      tradeType?: string;
    }

    export interface BatchImportResultVO {
      /** additionalMsg */
      additionalMsg?: string;

      /** errorFileUrl */
      errorFileUrl?: string;

      /** errorMsg */
      errorMsg?: string;
    }

    export interface CalCuLatePriceBO {
      /** 国家 */
      country: string;

      /** 高 */
      height?: string;

      /** 长 */
      length?: string;

      /** 收件邮编 */
      port?: string;

      /** 入仓重量 */
      weight?: string;

      /** 宽 */
      width?: string;
    }

    export interface CalCuLatePriceDataVO {
      /** 加收费用 */
      additional?: string;

      /** 合计 */
      amt?: number;

      /** chargeZoneId */
      chargeZoneId?: number;

      /** 国家 */
      country?: string;

      /** 币种 */
      currencyCode?: string;

      /** degreeid */
      degreeid?: number;

      /** 计算公式 */
      formula?: string;

      /** highWeight */
      highWeight?: string;

      /** iffuel */
      iffuel?: number;

      /** lowWeight */
      lowWeight?: string;

      /** 备注 */
      note?: string;

      /** packType */
      packType?: string;

      /** premium */
      premium?: number;

      /** priceid */
      priceid?: string;

      /** 报价名称 */
      pricename?: string;

      /** pricestyle */
      pricestyle?: number;

      /** productTypeId */
      productTypeId?: number;

      /** 折扣 */
      rebate?: string;

      /** 邮寄方式 */
      shippingMethodCnName?: string;

      /** shippingMethodId */
      shippingMethodId?: number;

      /** 结算重量 */
      weight?: number;
    }

    export interface CalCuLatePriceVO {
      /** 国家中文名称 */
      countryCnName?: string;

      /** 国家代码 */
      countryCode?: string;

      /** 查询结果 */
      rows?: Array<apis.CalCuLatePriceDataVO>;
    }

    export interface CaptchaVo {
      /** 是否开启验证码 */
      captchaEnabled?: boolean;

      /** 验证码图片 */
      img?: string;

      /** uuid */
      uuid?: string;
    }

    export interface ChannelPriceVO {
      /** 邮路id */
      channelId?: number;

      /** 邮路名称(中文) */
      channelName?: string;

      /** 计费分区ID */
      chargeZoneId?: number;

      /** 币别编码 */
      currencyCode?: string;

      /** 运费 */
      estimateFreight?: number;

      /** 是否有追踪号 */
      hasTrackingNumberFlag?: string;

      /** 时效 */
      overTime?: string;

      /** 材积重 */
      predictionVolumnWeight?: number;

      /** 新邮寄方式ID */
      shippingMethodId?: number;

      /** 邮路ZoneID */
      shippingZoneId?: number;

      /** 是否支持投保 */
      supportInsure?: string;
    }

    export interface CommonIdBOInteger {
      /** id */
      id: number;
    }

    export interface CommonIdListBOInteger {
      /** ids */
      ids?: Array<number>;
    }

    export interface CommonIdListBOLong {
      /** ids */
      ids?: Array<number>;
    }

    export interface CompanyContractVO {
      /** 合同id */
      contractId?: number;

      /** 合同状态（0：未发起，1：待签署，2：签署中，3：已签署） */
      contractStatus?: number;

      /** 是否是历史存档用户 */
      limitFlg?: boolean;

      /** 签署期限 */
      signDeadline?: string;

      /** 签署链接 */
      signUrl?: string;

      /** 注册类型 0/null：公司 1：个人 */
      signupType?: number;

      /** 合同类型（0：纸质合同，1：电子合同） */
      templateType?: number;
    }

    export interface CompanyVo {
      /** 公司编码 */
      companyCode?: string;

      /** 公司流水号 */
      companyId?: number;

      /** 公司名称 */
      companyName?: string;

      /** 注册类型 0/null：公司 1：个人 */
      signupType?: number;
    }

    export interface CompleteCompanyBO {
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

      /** 社会信用代码/身份证号码 */
      businessLicenseNumber?: string;

      /** 公司上传的证件路径 */
      certificatePath?: string;

      /** 办公详细地址 */
      companyAddress?: string;

      /** 办公城市id */
      companyCity?: number;

      /** 公司编码 */
      companyCode?: string;

      /** companyDetailId */
      companyDetailId?: number;

      /** 公司名称 */
      companyName?: string;

      /** 办公省份id */
      companyState?: number;

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

      /** 身份证国徽面 */
      idCardEmblemPath?: string;

      /** 身份证人像面 */
      idCardHeadPath?: string;

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

      /** 揽收详细地址 */
      pickupAddress?: string;

      /** 揽收城市id */
      pickupCity?: number;

      /** 揽收省份id */
      pickupState?: number;

      /** 公司审核状态(0：待完善资料 1:待审核 2:审核失败 3:审核成功) */
      ratifyStatus?: number;

      /** 商户类型 */
      signupType: number;
    }

    export interface ContractRemindVo {
      /** 是否为电子合同 */
      electronicContracts?: boolean;

      /** 合同到期时间 */
      signDeadlineTime?: string;
    }

    export interface DataInfoAssetVo {
      /** 列表数据 */
      rows?: Array<apis.AssetVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface DataInfoRechargeVo {
      /** 列表数据 */
      rows?: Array<apis.RechargeVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface DataInfoSyCCompanyThirdplatformAccountVo {
      /** 列表数据 */
      rows?: Array<apis.SyCCompanyThirdplatformAccountVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface DataInfoSyCPackageProduct {
      /** 列表数据 */
      rows?: Array<apis.SyCPackageProduct>;

      /** 总记录数 */
      total?: number;
    }

    export interface DataInfoSyCPackageProductVo {
      /** 列表数据 */
      rows?: Array<apis.SyCPackageProductVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface DataInfoSyCUserComplaintVo {
      /** 列表数据 */
      rows?: Array<apis.SyCUserComplaintVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface DataInfoSyCUserOperLogVo {
      /** 列表数据 */
      rows?: Array<apis.SyCUserOperLogVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface DataInfoSyExchangeRateVo {
      /** 列表数据 */
      rows?: Array<apis.SyExchangeRateVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface DataInfoSysLogininforVo {
      /** 列表数据 */
      rows?: Array<apis.SysLogininforVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface DataInfoTrackingNoVo {
      /** 列表数据 */
      rows?: Array<apis.TrackingNoVo>;

      /** 总记录数 */
      total?: number;
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
      /** accountInfo */
      accountInfo?: apis.SyAccountInfoVo;

      /** 合同签署状态 */
      contractRemind?: boolean;

      /** 是否为电子合同 */
      electronicContracts?: boolean;

      /** 账户外币 */
      foreignAccountList?: Array<apis.ForeignCurrencyVo>;

      /** 通知公告列表 */
      noticeList?: Array<apis.SySysNotice>;

      /** 海外退件数 */
      overseasReturn?: number;

      /** 安检退件数 */
      securityCheck?: number;

      /** 检查是否弹窗提醒客户未提供营业执照或身份证正反面证件，如果是，先弹出完善信息页面 */
      showProvideTip?: boolean;

      /** 合同到期时间 */
      signDeadlineTime?: string;

      /** 分拣未处理退件总数 */
      sortingReturn?: number;

      /** 后端版本号 */
      version?: string;

      /** 等待发货数量 */
      waitDeliveryCount?: number;

      /** 等待预报数量 */
      waitPredictionCount?: number;

      /** 等待揽收数量 */
      waitReceivedCount?: number;

      /** 等待入仓数量 */
      waitStorageCount?: number;

      /** 昨日发货数量 */
      yesterdayDeliveredCount?: number;

      /** 昨日揽收数量 */
      yesterdayReceivedCount?: number;
    }

    export interface PackageInfoBO {
      /** 备用字段1 */
      backup1?: string;

      /** 邮路编码 */
      channelCode?: string;

      /** 邮路ID */
      channelId?: string;

      /** 邮路分区ID */
      chargeZoneId?: string;

      /** 公司ID */
      companyId: string;

      /** 币种 */
      currencyCode?: string;

      /** 客户订单号 */
      customerOrderNo?: string;

      /** 客户参考号 */
      customerReferenceNo?: string;

      /** 商品申报总价值币种 */
      declaredCurrencyCode?: string;

      /** 商品申报总价值 */
      declaredValueTotal?: number;

      /** dutyType */
      dutyType?: string;

      /** 导入Excel专用Index */
      excelIndex?: number;

      /** forcast */
      forcast?: string;

      /** 是否支持投保 */
      insuranceFlag?: string;

      /** 投保金额 */
      insureAmount?: number;

      /** IOSS识别号，欧盟 */
      iossVatId?: string;

      /** 是否退税 */
      isDrawBack?: number;

      /** 用来记录包裹编辑的操作者 */
      operationUserId?: string;

      /** 分支机构 */
      organizationId?: number;

      /** 内单号 */
      otherNumber?: string;

      /** 海外退件 1 有 0 没有 默认0 */
      overseasRefund?: boolean;

      /** 产品属性列表 */
      packageAttributes?: string;

      /** COD金额 */
      packageCodAmount?: number;

      /** COD币种 */
      packageCodCurrencyCode?: string;

      /** 顺友物流单号 */
      packageCode?: string;

      /** 包裹高 */
      packageHeight?: number;

      /** 包裹ID */
      packageId?: number;

      /** 包裹实际保费 */
      packageInsure?: number;

      /** 包裹长 */
      packageLength?: number;

      /** 包裹销售金额 */
      packageSalesAmount?: number;

      /** 包裹宽 */
      packageWidth?: number;

      /** ports */
      ports?: string;

      /** 预报失败原因 */
      predictionFailReason?: string;

      /** 包裹估算运费 */
      predictionFreight?: number;

      /** 体积重 */
      predictionVolumnWeight?: number;

      /** 包裹重量 */
      predictionWeight?: number;

      /** 产品列表 */
      productList?: Array<apis.PackageProduct>;

      /** 收件人地址1 */
      recipientAddress1?: string;

      /** 收件人地址2 */
      recipientAddress2?: string;

      /** 收件人地址3 */
      recipientAddress3?: string;

      /** 收件人城市 */
      recipientCity?: string;

      /** 收件人国家代码 */
      recipientCountryCode?: string;

      /** 收件人国家名称 用于Wish下单面单打印获取目的国名称 */
      recipientCountryEnName?: string;

      /** 收件人邮箱 */
      recipientEmail?: string;

      /** 收件人全地址 */
      recipientFullAddress?: string;

      /** 身份证号码 */
      recipientIdentityNumber?: string;

      /** 收件人手机 */
      recipientMobile?: string;

      /** 收件人名称 */
      recipientName?: string;

      /** 收件人电话 */
      recipientPhone?: string;

      /** 收件人邮编 */
      recipientPostCode?: string;

      /** 收件人省州 */
      recipientState?: string;

      /** 收件人税号 */
      recipientTaxNumber?: string;

      /** 请求IP地址 */
      requestIpAddr?: string;

      /** requetIpAddr */
      requetIpAddr?: string;

      /** 映射名称 */
      ruleName?: string;

      /** 寄件人地址 */
      senderAddress?: string;

      /** 寄件人城市 */
      senderCity?: string;

      /** 寄件人国家 */
      senderCountryCode?: string;

      /** 寄件人街道 */
      senderDistrict?: string;

      /** 寄件人邮箱 */
      senderEmail?: string;

      /** EORI号(欧盟经济主体注册识别号) */
      senderEori?: string;

      /** 寄件人全地址 */
      senderFullAddress?: string;

      /** 寄件人姓名 */
      senderName?: string;

      /** 寄件人电话 */
      senderPhone?: string;

      /** 寄件人邮编 */
      senderPostCode?: string;

      /** 寄件人省州 */
      senderState?: string;

      /** 寄件人税号 */
      senderTaxNumber?: string;

      /** 发货时间 */
      shippedTime?: string;

      /** 新的邮寄方式代码 */
      shippingMethodCode?: string;

      /** 新的邮寄方式ID */
      shippingMethodId?: number;

      /** 邮路分区ID */
      shippingZoneId?: string;

      /** 分拣时间 */
      sortingTime?: string;

      /** 处理来源 0:客户系统 1：API 2：EXCEL 3：菜鸟物流 4：马帮ERP */
      source?: string;

      /** 包裹状态 */
      status?: string;

      /** 是否有库存 */
      stockFlag?: string;

      /** 退税金额 */
      taxRefundAmount?: number;

      /** 是否退税 */
      taxRefundFlag?: number;

      /** 追踪号 */
      trackingNumber?: string;

      /** 用户ID */
      userId: string;
    }

    export interface PackageProduct {
      /** 方便API调用(海关编码) */
      apiCustomCode?: string;

      /** 方便API调用(英文品名) */
      apiDeclareEnName?: string;

      /** 方便API调用(申报价值) */
      apiDeclarePrice?: number;

      /** 申报币种 */
      currencyCode?: string;

      /** 申报产品海关编码 */
      customCode?: string;

      /** 申报产品中文名称 */
      declareCnName?: string;

      /** 申报产品英文名称 */
      declareEnName?: string;

      /** 申报产品单价 */
      declarePrice?: number;

      /** 申报产品海关编码 */
      hsCode?: string;

      /** 用于换单时更新申报价值 */
      packageProductId?: number;

      /** 产品图片链接 */
      productImageUrl?: string;

      /** 申报产品材质 */
      productMaterial?: string;

      /** 申报产品用途 */
      productPurpose?: string;

      /** 产品SKU */
      productSku?: string;

      /** 申报产品数量 */
      quantity?: number;

      /** reviseCustomCode */
      reviseCustomCode?: string;

      /** 修订报关单价（USD） */
      reviseDeclarePrice?: number;

      /** 修订报关产品英文名称 */
      reviseEnName?: string;

      /** totalPrice */
      totalPrice?: number;
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

    export interface ProductListBO {
      /** 公司id */
      companyId?: number;

      /** 产品名称 */
      productName?: string;
    }

    export interface ProfileVo {
      /** company */
      company?: apis.CompanyVo;

      /** 权限 */
      permissions?: Array<string>;

      /** user */
      user?: apis.SysUserVo;
    }

    export interface RCalCuLatePriceVO {
      /** code */
      code?: number;

      /** data */
      data?: apis.CalCuLatePriceVO;

      /** msg */
      msg?: string;
    }

    export interface RCaptchaVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.CaptchaVo;

      /** msg */
      msg?: string;
    }

    export interface RCompanyContractVO {
      /** code */
      code?: number;

      /** data */
      data?: apis.CompanyContractVO;

      /** msg */
      msg?: string;
    }

    export interface RContractRemindVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.ContractRemindVo;

      /** msg */
      msg?: string;
    }

    export interface RListChannelPriceVO {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.ChannelPriceVO>;

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

    export interface RListSyExchangeRateVo {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.SyExchangeRateVo>;

      /** msg */
      msg?: string;
    }

    export interface RListSysUserVo {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.SysUserVo>;

      /** msg */
      msg?: string;
    }

    export interface RListTimelinesBoardVo {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.TimelinesBoardVo>;

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

    export interface RListTreeVO {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.TreeVO>;

      /** msg */
      msg?: string;
    }

    export interface RLocalDateTime {
      /** code */
      code?: number;

      /** data */
      data?: string;

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

    export interface RRechargeDetailVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.RechargeDetailVo;

      /** msg */
      msg?: string;
    }

    export interface RSavePackageVO {
      /** code */
      code?: number;

      /** data */
      data?: apis.SavePackageVO;

      /** msg */
      msg?: string;
    }

    export interface RString {
      /** code */
      code?: number;

      /** data */
      data?: string;

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

    export interface RSyCCompanyVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.SyCCompanyVo;

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

    export interface RUploadInitVO {
      /** code */
      code?: number;

      /** data */
      data?: apis.UploadInitVO;

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

    export interface RechargeBo {
      /** 创建开始时间 */
      beginTime?: string;

      /** 公司流水号 */
      companyId?: number;

      /** 创建结束时间 */
      endTime?: string;

      /** 支付状态(0:待支付;1:支付中;2:支付失败;3:支付成功) */
      paymentStatus?: number;

      /** 搜索内容 */
      searchValue?: string;

      /** 付款方式(1:支付宝;2:微信;8:网银支付;4:银行转账) */
      tradeMode?: number;

      /** 交易状态(0:等待顺友确认;1:已确认;) */
      tradeStatus?: number;
    }

    export interface RechargeDetailVo {
      /** 交易金额 */
      officialExchangeRate?: number;

      /** 收款方账号 */
      payeeBankCardNumber?: string;

      /** 收款方开户行 */
      payeeBankName?: string;

      /** 收款方户名 */
      payeeName?: string;

      /** 付款方账号 */
      payerBankCardNumber?: string;

      /** 付款方开户行 */
      payerBankName?: string;

      /** 付款方户名 */
      payerName?: string;

      /** 付款状态 */
      paymentStatus?: number;

      /** 交易币种 */
      receiptPath?: string;

      /** 充值订单id */
      rechargeOrderId?: number;

      /** 付款交易号 */
      relevantVoucher?: string;

      /** 交易金额 */
      tradeAmount?: number;

      /** 交易币种 */
      tradeAmountCurrency?: string;

      /** 付款方式 */
      tradeMode?: number;

      /** 交易状态 */
      tradeStatus?: string;
    }

    export interface RechargeVo {
      /** 创建人id */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 收款账号 */
      payeeBankCardNumber?: string;

      /** 收款账户 */
      payeeBankName?: string;

      /** 付款账号 */
      payerBankCardNumber?: string;

      /** 付款账户 */
      payerBankName?: string;

      /** 付款状态 */
      paymentStatus?: number;

      /** 付款状态说明 */
      paymentStatusStr?: string;

      /** 付款金额 */
      rechargeAmount?: string;

      /** 付款交易流水号 */
      rechargeCode?: string;

      /** 充值订单id */
      rechargeOrderId?: number;

      /** 充值备注 */
      rechargeRemark?: string;

      /** 付款方式 */
      tradeMode?: number;

      /** 付款方式说明 */
      tradeModeStr?: string;

      /** 交易状态 */
      tradeStatus?: string;

      /** 创建人 */
      userName?: string;
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

    export interface SavePackageVO {
      /** 是否合同逾期 */
      flg?: boolean;

      /** 冻结详情 */
      freezeDetail?: string;

      /** 是否冻结 */
      isFreeze?: boolean;

      /** 是否审核未通过 */
      ratifyStatus?: boolean;
    }

    export interface SmsCodeBo {
      /** captchaVerifyParam */
      captchaVerifyParam: string;

      /** mobile */
      mobile: string;
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

      /** 客服专员ID */
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

      /** 财务专员ID */
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

      /** 揽收专员ID */
      receivePersonnel?: number;

      /** receiveUser */
      receiveUser?: apis.RemoteSysUserVO;

      /** 业务专员ID */
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

    export interface SyCCompanyThirdplatformAccountBo {
      /** 描述 */
      description?: string;

      /** 流水号 */
      platformAccountId: number;

      /** 所属平台 1 wishpost, 2 vovapost , 3 DHGate1 */
      platformType: number;

      /** 平台账号 */
      userName: string;
    }

    export interface SyCCompanyThirdplatformAccountVo {
      /** 公司流水号 */
      companyId?: number;

      /** 创建时间 */
      createTime?: string;

      /** 描述 */
      description?: string;

      /** 流水号 */
      platformAccountId?: number;

      /** 所属平台 1 wishpost, 2 vovapost , 3 DHGate1 */
      platformType?: number;

      /** 更新时间 */
      updateTime?: string;

      /** 平台账号 */
      userName?: string;
    }

    export interface SyCCompanyVo {
      /** 账户名称 */
      accountName?: string;

      /** 银行卡号 */
      bankNumber?: string;

      /** 公司结账日 */
      billAccountDay?: number;

      /** 开单公司 */
      billCompanyId?: number;

      /** 公司结账周期 */
      billCycleId?: number;

      /** 计费节点 */
      billNode?: number;

      /** 社会信用代码/身份证号码 */
      businessLicenseNumber?: string;

      /** 业务专员 */
      businessPersonnel?: number;

      /** 公司上传的证件路径 */
      certificatePath?: string;

      /** 1:均摊重量 2:入仓重量 3:预报重量 */
      chargeWeightType?: number;

      /** 公司账户余额(CNY) */
      companyAmount?: number;

      /** 账户资产 */
      companyAsset?: number;

      /** 公司编码 */
      companyCode?: string;

      /** 公司信用额度(CNY) */
      companyCreditLimit?: number;

      /** 公司流水号 */
      companyId?: number;

      /** 公司名称 */
      companyName?: string;

      /** 分支机构 */
      companyOrganizationId?: number;

      /** 公司已用额度(CNY) */
      companyUsedCredit?: number;

      /** 创建人 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** detail */
      detail?: apis.SyCCompanyDetailVo;

      /** (入账节点：1结单,2离开处理中心,3到达始发港,4离开始发港,5到达目的国,6目的国清关,7到达OE) */
      entryNode?: number;

      /** 财务专员 */
      financePersonnel?: number;

      /** financialPersonnel */
      financialPersonnel?: number;

      /** 自动对账 1、是；2、否 */
      flgAutoAccount?: number;

      /** 0或null:未冻结;1:冻结 */
      freezeStatus?: number;

      /** 结单拦截超重%(已分重量大于应分重量) */
      greaterInterceptPercent?: number;

      /** 结单拦截超重KG(已分重量大于应分重量) */
      greaterInterceptWeigh?: number;

      /** 身份证国徽面 */
      idCardEmblemPath?: string;

      /** 身份证人像面 */
      idCardHeadPath?: string;

      /** 公司下次账单日期 */
      lastBillCycleTime?: string;

      /** 公司上次结单时间 */
      lastChargeTime?: string;

      /** 最后揽收日期 */
      lastReceiveTime?: string;

      /** 最后揽收重量(kg) */
      lastReceiveWeight?: number;

      /** 最后充值日期 */
      lastRechargeTime?: string;

      /** 催款邮件最后发送日期 */
      lastUrgePayEmailTime?: string;

      /** 催款短信最后发送时间 */
      lastUrgePaySmsTime?: string;

      /** 结单拦截不足%(已分重量小于应分重量) */
      lesserInterceptPercent?: number;

      /** 结单拦截不足KG(已分重量小于应分重量) */
      lesserInterceptWeigh?: number;

      /** 余额提醒设置 */
      moneyRemindLimit?: number;

      /** 开户行名称 */
      openingBank?: string;

      /** 包裹大于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
      packageGreaterInterceptMode?: number;

      /** 包裹大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      packageGreaterInterceptValue?: number;

      /** 包裹小于于预报拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
      packageLesserInterceptMode?: number;

      /** 包裹小于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      packageLesserInterceptValue?: number;

      /** payoneer授权码 */
      payoneerCode?: string;

      /** payoneer帐号 */
      payoneerId?: string;

      /** payoneer刷新时间 */
      payoneerRefreshTime?: string;

      /** payoneer刷新令牌 */
      payoneerRefreshToken?: string;

      /** payoneer访问令牌 */
      payoneerToken?: string;

      /** 称重大于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截） */
      pickupGreaterInterceptMode?: number;

      /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      pickupGreaterInterceptValue?: number;

      /** 称重小于揽收拦截方式（0：按重量差设置；1：按百分比设置;2:不拦截）） */
      pickupLesserInterceptMode?: number;

      /** 揽收大于预报拦截值（方式为0时单位为kg；方式为1时加入百分比） */
      pickupLesserInterceptValue?: number;

      /** 审核备注 */
      ratifyMemo?: string;

      /** 公司审核状态(0：待完善资料 1:待审核 2:审核失败 3:审核成功) */
      ratifyStatus?: number;

      /** 揽收专员 */
      receivePersonnel?: number;

      /** 推荐人 */
      recommendedBy?: string;

      /** 客服专员 */
      servicePersonnel?: number;

      /** 注册类型 0/null：公司 1：个人 */
      signupType?: number;

      /** 结单申请人 */
      statementApplyBy?: number;

      /** 结单申请时间 */
      statementApplyTime?: string;

      /** 结单失败原因 */
      statementFailReason?: string;

      /** 结单状态 0/null:等待结单 1：结单失败 2：结单中 */
      statementStatus?: number;

      /** 计费方式 0/null均摊计费  1入仓计费 */
      statementType?: number;

      /** 归属公司ID */
      superCompanyId?: number;

      /** 证件有效期 */
      termOfValidity?: string;

      /** 超时拦截(0/null默认拦截   1不拦截) */
      timeoutIntercept?: number;

      /** 更新人 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;
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

    export interface SyCPackageProduct {
      /** 公司流水号 */
      companyId?: number;

      /** 创建人 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 申报币种 */
      currencyCode?: string;

      /** 海关编码 */
      customCode?: string;

      /** 报关产品中文名称 */
      declareCnName?: string;

      /** 报关产品英文名称 */
      declareEnName?: string;

      /** 报关单价 */
      declarePrice?: number;

      /** 包裹商品流水号 */
      productId?: number;

      /** 产品材质 */
      productMaterial?: string;

      /** 产品用途 */
      productPurpose?: string;

      /** 产品SKU */
      productSku?: string;

      /** 更新人 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;
    }

    export interface SyCPackageProductBo {
      /** 申报币种 */
      currencyCode?: string;

      /** 海关编码 */
      customCode?: string;

      /** 报关产品中文名称 */
      declareCnName: string;

      /** 报关产品英文名称 */
      declareEnName: string;

      /** 报关单价 */
      declarePrice: number;

      /** 包裹商品流水号 */
      productId: number;

      /** 产品材质 */
      productMaterial?: string;

      /** 产品用途 */
      productPurpose?: string;

      /** 产品SKU */
      productSku?: string;
    }

    export interface SyCPackageProductVo {
      /** 公司流水号 */
      companyId?: number;

      /** createBy */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 申报币种 */
      currencyCode?: string;

      /** 海关编码 */
      customCode?: string;

      /** 报关产品中文名称 */
      declareCnName?: string;

      /** 报关产品英文名称 */
      declareEnName?: string;

      /** 报关单价 */
      declarePrice?: number;

      /** 包裹商品流水号 */
      productId?: number;

      /** 产品材质 */
      productMaterial?: string;

      /** 产品用途 */
      productPurpose?: string;

      /** 产品SKU */
      productSku?: string;
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

    export interface SyCUserOperLogBo {
      /** 业务类型（0其它 1新增 2修改 3删除） */
      businessType?: number;

      /** 业务类型数组 */
      businessTypes?: Array<number>;

      /** 客户公司id */
      companyId?: number;

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

    export interface SyCUserOperLogVo {
      /** 业务类型（0其它 1新增 2修改 3删除） */
      businessType?: number;

      /** 业务类型数组 */
      businessTypes?: Array<number>;

      /** 客户公司id */
      companyId?: number;

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

      /** 显示状态（0显示 1隐藏） */
      visible?: number;
    }

    export interface SysUserBindMobileBo {
      /** 图形验证码 */
      code: string;

      /** 手机号码 */
      mobile: string;

      /** 手机验证码 */
      smsCode: string;

      /** 唯一标识 */
      uuid?: string;
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

      /** 用户头像 */
      headPortraitPath?: string;

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

    export interface SysUserMenuBindBo {
      /** menuIdList */
      menuIdList: Array<number>;

      /** userId */
      userId: number;
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

    export interface SysUserUnbindMobileBo {
      /** 图形验证码 */
      code: string;

      /** 手机验证码 */
      smsCode: string;

      /** 唯一标识 */
      uuid?: string;
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

      /** 注册类型 0/null：公司 1：个人 */
      signupType?: number;

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

    export interface TableDataInfoAssetVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoAssetVo;

      /** 消息内容 */
      msg?: string;
    }

    export interface TableDataInfoRechargeVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoRechargeVo;

      /** 消息内容 */
      msg?: string;
    }

    export interface TableDataInfoSyCCompanyThirdplatformAccountVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoSyCCompanyThirdplatformAccountVo;

      /** 消息内容 */
      msg?: string;
    }

    export interface TableDataInfoSyCPackageProduct {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoSyCPackageProduct;

      /** 消息内容 */
      msg?: string;
    }

    export interface TableDataInfoSyCPackageProductVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoSyCPackageProductVo;

      /** 消息内容 */
      msg?: string;
    }

    export interface TableDataInfoSyCUserComplaintVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoSyCUserComplaintVo;

      /** 消息内容 */
      msg?: string;
    }

    export interface TableDataInfoSyCUserOperLogVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoSyCUserOperLogVo;

      /** 消息内容 */
      msg?: string;
    }

    export interface TableDataInfoSyExchangeRateVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoSyExchangeRateVo;

      /** 消息内容 */
      msg?: string;
    }

    export interface TableDataInfoSysLogininforVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoSysLogininforVo;

      /** 消息内容 */
      msg?: string;
    }

    export interface TableDataInfoTrackingNoVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoTrackingNoVo;

      /** 消息内容 */
      msg?: string;
    }

    export interface TimelinesBoardBo {
      /** analyticsDate */
      analyticsDate?: number;

      /** analyticsNode */
      analyticsNode?: number;

      /** keyword */
      keyword?: string;
    }

    export interface TimelinesBoardVo {
      /** 异常数量 */
      abnormalNumber?: number;

      /** 0/null：入仓统计 1：发货统计 */
      analyticsType?: number;

      /** 邮路ID */
      channelId?: number;

      /** 邮路中文名称 */
      channelcnname?: string;

      /** 国家中文名称 */
      countryCnName?: string;

      /** 国家代码 */
      countryCode?: string;

      /** 签收数量 */
      deliveredNumber?: number;

      /** 10天签收数量 */
      deliveredNumber1?: number;

      /** 45天签收数量 */
      deliveredNumber10?: number;

      /** 60天签收数量 */
      deliveredNumber11?: number;

      /** 90天签收数量 */
      deliveredNumber12?: number;

      /** 120天签收数量 */
      deliveredNumber13?: number;

      /** 180天签收数量（暂不启用） */
      deliveredNumber14?: number;

      /** 11天签收数量 */
      deliveredNumber2?: number;

      /** 12天签收数量 */
      deliveredNumber3?: number;

      /** 13天签收数量 */
      deliveredNumber4?: number;

      /** 14天签收数量 */
      deliveredNumber5?: number;

      /** 15天签收数量 */
      deliveredNumber6?: number;

      /** 20天签收数量 */
      deliveredNumber7?: number;

      /** 25天签收数量 */
      deliveredNumber8?: number;

      /** 30天签收数量 */
      deliveredNumber9?: number;

      /** 包裹数量 */
      packageNumber?: number;

      /** 10天入仓数量 */
      packageNumber1?: number;

      /** 45天入仓数量 */
      packageNumber10?: number;

      /** 60天入仓数量 */
      packageNumber11?: number;

      /** 90天入仓数量 */
      packageNumber12?: number;

      /** 120天入仓数量 */
      packageNumber13?: number;

      /** 180天入仓数量（暂不启用） */
      packageNumber14?: number;

      /** 11天入仓数量 */
      packageNumber2?: number;

      /** 12天入仓数量 */
      packageNumber3?: number;

      /** 13天入仓数量 */
      packageNumber4?: number;

      /** 14天入仓数量 */
      packageNumber5?: number;

      /** 15天入仓数量 */
      packageNumber6?: number;

      /** 20天入仓数量 */
      packageNumber7?: number;

      /** 25天入仓数量 */
      packageNumber8?: number;

      /** 30天入仓数量 */
      packageNumber9?: number;

      /** 总妥投率 */
      rate?: number;

      /** 10天妥投率 */
      rate1?: number;

      /** 45天妥投率 */
      rate10?: number;

      /** 60天妥投率 */
      rate11?: number;

      /** 90天妥投率 */
      rate12?: number;

      /** 120天妥投率 */
      rate13?: number;

      /** 180天妥投率（暂不启用） */
      rate14?: number;

      /** 11天妥投率 */
      rate2?: number;

      /** 12天妥投率 */
      rate3?: number;

      /** 13天妥投率 */
      rate4?: number;

      /** 14天妥投率 */
      rate5?: number;

      /** 15天妥投率 */
      rate6?: number;

      /** 20天妥投率 */
      rate7?: number;

      /** 25天妥投率 */
      rate8?: number;

      /** 30天妥投率 */
      rate9?: number;
    }

    export interface TrackingNoDownloadBOInteger {
      /** id */
      id: number;

      /** type */
      type: number;
    }

    export interface TrackingNoVo {
      /** 下载数量 */
      downloadCount?: number;

      /** 最后下载时间 */
      lastDownloadTime?: string;

      /** 追踪号总数 */
      trackingNoCount?: number;

      /** 追踪号池id */
      trackingNumberPoolId?: number;

      /** 追踪号池名称 */
      trackingNumberPoolName?: string;

      /** 未下载数量 */
      unDownloadCount?: number;

      /** 未使用数 */
      unUseNum?: number;

      /** 已使用数 */
      usedNum?: number;
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

    export interface TreeVO {
      /** checked */
      checked?: boolean;

      /** halfChecked */
      halfChecked?: boolean;

      /** id */
      id?: number;

      /** label */
      label?: string;

      /** parentId */
      parentId?: number;
    }

    export interface UploadInitVO {
      /** true 合同过期 预报不能成功 */
      flg?: boolean;

      /** importResultVO */
      importResultVO?: apis.BatchImportResultVO;

      /** isSpecify */
      isSpecify?: boolean;

      /** 客户未审核 ，预报不能成功 */
      ratifyStatus?: boolean;
    }
  }
}

export declare namespace API {
  export namespace apis {
    /**
     * asset
     */
    export namespace asset {
      /**
        * 导出用户资产流水信息
导出用户资产流水信息
        * /finance/asset/export
        */
      export namespace exportAsset {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params, bodyParams: defs.apis.AssetBo): Promise<any>;
      }

      /**
        * 获取用户资产流水列表
获取用户资产流水列表
        * /finance/asset/list
        */
      export namespace assetList {
        export class Params {
          /** bo */
          bo: defs.apis.AssetBo;
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoAssetVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoAssetVo>;
      }
    }

    /**
     * auth
     */
    export namespace auth {
      /**
        * 校验手机号是否已被使用
校验手机号是否已被使用
        * /auth/check/mobile
        */
      export namespace checkMobile {
        export class Params {
          /** mobile */
          mobile: string;
        }

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }

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
        * 用户注册(接口加密)
用户注册(接口加密)
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
        * 短信验证码(需要阿里云验证码才能获取)
短信验证码(需要阿里云验证码才能获取)
        * /resource/sms/code
        */
      export namespace smsCode {
        export class Params {}

        export type Response = defs.apis.RString;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SmsCodeBo,
        ): Promise<defs.apis.RString>;
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
        * 根据名称获取运维人员用户列表
根据名称获取运维人员用户列表
        * /common/getSysUserListByName
        */
      export namespace getSysUserList_1 {
        export class Params {
          /** nickname */
          nickname: string;
        }

        export type Response = defs.apis.RListRemoteSysUserVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListRemoteSysUserVO>;
      }

      /**
        * 获取运维人员用户列表
获取运维人员用户列表
        * /common/getSysUserListByRoleId
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

      /**
        * 获取汇率常用币种列表
获取汇率常用币种列表
        * /common/rate/often/optionselect
        */
      export namespace getExchangeRateList {
        export class Params {}

        export type Response = defs.apis.RListSyExchangeRateVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListSyExchangeRateVo>;
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
      export namespace addComplaintList {
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
      export namespace getComplaintList {
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
     * contract
     */
    export namespace contract {
      /**
        * 下载合同
下载合同
        * /contract/download
        */
      export namespace downloadContract {
        export class Params {}

        export type Response = defs.apis.RString;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RString>;
      }

      /**
        * 获取合同签署url
获取合同签署url
        * /contract/getSignUrl
        */
      export namespace getSignUrl {
        export class Params {
          /** contractId */
          contractId: number;
        }

        export type Response = defs.apis.RString;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RString>;
      }

      /**
        * 合同首页
合同首页
        * /contract/home
        */
      export namespace contractIndex {
        export class Params {}

        export type Response = defs.apis.RCompanyContractVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RCompanyContractVO>;
      }

      /**
        * 合同提醒
合同提醒
        * /contract/remind
        */
      export namespace contractRemind {
        export class Params {}

        export type Response = defs.apis.RContractRemindVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RContractRemindVo>;
      }

      /**
        * 获取合同是否已逾期,返回200说明已逾期
获取合同是否已逾期,返回200说明已逾期
        * /contract/warn
        */
      export namespace contractWarn {
        export class Params {}

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RObject>;
      }
    }

    /**
     * declare
     */
    export namespace declare {
      /**
        * 新增申报信息
新增申报信息
        * /package/declare/add
        */
      export namespace addDeclare {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SyCPackageProductBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 删除申报信息
删除申报信息
        * /package/declare/delete
        */
      export namespace remove {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.CommonIdBOInteger,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 获取申报信息列表
获取申报信息列表
        * /package/declare/list
        */
      export namespace declareList {
        export class Params {
          /** keyword */
          keyword: string;
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoSyCPackageProductVo;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.apis.TableDataInfoSyCPackageProductVo>;
      }

      /**
        * 修改申报信息
修改申报信息
        * /package/declare/update
        */
      export namespace edit {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SyCPackageProductBo,
        ): Promise<defs.apis.RVoid>;
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
      export namespace getRateExchangeRateList {
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
      export namespace getOftenExchangeRateList {
        export class Params {}

        export type Response = defs.apis.RListSyExchangeRateVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListSyExchangeRateVo>;
      }
    }

    /**
     * freightCal
     */
    export namespace freightCal {
      /**
        * 运费试算
运费试算
        * /client/package/operation/calculateprice/query
        */
      export namespace calculatePriceList {
        export class Params {
          /** 分页参数 */
          pageQuery: defs.apis.PageQuery;
          /** 运费试算参数 */
          bo: defs.apis.CalCuLatePriceBO;
        }

        export type Response = defs.apis.RCalCuLatePriceVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RCalCuLatePriceVO>;
      }
    }

    /**
     * home
     */
    export namespace home {
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

      /**
        * 获取客户公司详细信息
获取客户公司详细信息
        * /overview/detail
        */
      export namespace completeCompanyDetail {
        export class Params {}

        export type Response = defs.apis.RSyCCompanyVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RSyCCompanyVo>;
      }

      /**
        * 更新客户公司资料
更新客户公司资料
        * /overview/submitCompanyInfo
        */
      export namespace submitCompanyInfo {
        export class Params {
          /** bo */
          bo: defs.apis.CompleteCompanyBO;
        }

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }
    }

    /**
     * importPackage
     */
    export namespace importPackage {
      /**
        * 批量上传文件
批量上传文件
        * /client/package/operation/importpackage/uploadInit
        */
      export namespace uploadInit {
        export class Params {}

        export type Response = defs.apis.RUploadInitVO;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: object,
        ): Promise<defs.apis.RUploadInitVO>;
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
      export namespace cleanLogininfor {
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
      export namespace removeLogininfor {
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
      export namespace exportLogininfor {
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
      export namespace logininforList {
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
      export namespace editMenu {
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
      export namespace addMenu {
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
      export namespace getMenuInfo {
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
      export namespace menuList {
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
      export namespace removeMenu {
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
     * newPackage
     */
    export namespace newPackage {
      /**
        * 客户管理-新建包裹-保存包裹
客户管理-新建包裹-保存包裹
        * /client/package/save
        */
      export namespace savePackage {
        export class Params {}

        export type Response = defs.apis.RSavePackageVO;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.PackageInfoBO,
        ): Promise<defs.apis.RSavePackageVO>;
      }

      /**
        * 获取邮寄方式
获取邮寄方式
        * /client/package/shippingmethod/list
        */
      export namespace getShippingMethodList {
        export class Params {}

        export type Response = defs.apis.RListChannelPriceVO;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.PackageInfoBO,
        ): Promise<defs.apis.RListChannelPriceVO>;
      }

      /**
        * 从申报信息选取
从申报信息选取
        * /client/system/account/package/product/list
        */
      export namespace productList {
        export class Params {
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
          /** bo */
          bo: defs.apis.ProductListBO;
        }

        export type Response = defs.apis.TableDataInfoSyCPackageProduct;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoSyCPackageProduct>;
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
      export namespace cleanOperlog {
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
      export namespace removeOperlog {
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
      export namespace exportOperlog {
        export class Params {
          /** operLog */
          operLog: defs.apis.SyCUserOperLogBo;
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
      export namespace operlogList {
        export class Params {
          /** operLog */
          operLog: defs.apis.SyCUserOperLogBo;
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoSyCUserOperLogVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoSyCUserOperLogVo>;
      }
    }

    /**
     * packageDeviation
     */
    export namespace packageDeviation {
      /**
        * 获取单件误差信息
获取单件误差信息
        * /package/deviation/detail
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
        * /package/deviation/update
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
        * /pick/deviation/detail
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
        * /pick/deviation/update
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
        * 绑定手机号
绑定手机号
        * /system/user/profile/bind/mobile
        */
      export namespace bindMobile {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysUserBindMobileBo,
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
        * 忘记密码，第三步(接口加密)
忘记密码，第三步(接口加密)
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
        * 解绑手机号
解绑手机号
        * /system/user/profile/unbind/mobile
        */
      export namespace unbindMobile {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysUserUnbindMobileBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 重置密码(接口加密)
重置密码(接口加密)
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
     * recharge
     */
    export namespace recharge {
      /**
        * 删除充值信息
删除充值信息
        * /finance/recharge/delete
        */
      export namespace deleteRecharge {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.CommonIdBOInteger,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 查看充值信息详情
查看充值信息详情
        * /finance/recharge/detail
        */
      export namespace rechargeDetail {
        export class Params {
          /** rechargeOrderId */
          rechargeOrderId: number;
        }

        export type Response = defs.apis.RRechargeDetailVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RRechargeDetailVo>;
      }

      /**
        * 导出用户充值订单信息
导出用户充值订单信息
        * /finance/recharge/export
        */
      export namespace exportRecharge {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params, bodyParams: defs.apis.RechargeBo): Promise<any>;
      }

      /**
        * 获取用户充值订单列表
获取用户充值订单列表
        * /finance/recharge/list
        */
      export namespace rechargeList {
        export class Params {
          /** bo */
          bo: defs.apis.RechargeBo;
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoRechargeVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoRechargeVo>;
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
     * thirdPlatformAccount
     */
    export namespace thirdPlatformAccount {
      /**
        * 新增平台账号
新增平台账号
        * /thirdPlatform/account/add
        */
      export namespace addThirdPlatform {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SyCCompanyThirdplatformAccountBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 修改平台账号
修改平台账号
        * /thirdPlatform/account/edit
        */
      export namespace editThirdPlatform {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SyCCompanyThirdplatformAccountBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 导入平台账号
导入平台账号
        * /thirdPlatform/account/import
        */
      export namespace importThirdPlatformExcel {
        export class Params {}

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(params: Params, bodyParams: object): Promise<defs.apis.RObject>;
      }

      /**
        * 平台账号列表
平台账号列表
        * /thirdPlatform/account/list
        */
      export namespace thirdPlatformList {
        export class Params {
          /** keyword */
          keyword: string;
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoSyCCompanyThirdplatformAccountVo;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.apis.TableDataInfoSyCCompanyThirdplatformAccountVo>;
      }

      /**
        * 删除平台账号
删除平台账号
        * /thirdPlatform/account/remove
        */
      export namespace removeThirdPlatform {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.CommonIdBOInteger,
        ): Promise<defs.apis.RVoid>;
      }
    }

    /**
     * timeliness
     */
    export namespace timeliness {
      /**
        * 导出时效看板列表
导出时效看板列表
        * /timeliness/export
        */
      export namespace exportTimeliness {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.TimelinesBoardBo,
        ): Promise<any>;
      }

      /**
        * 时效看板获取更新时间
时效看板获取更新时间
        * /timeliness/getLastModifyTime
        */
      export namespace getLastModifyTime {
        export class Params {}

        export type Response = defs.apis.RLocalDateTime;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RLocalDateTime>;
      }

      /**
        * 获取时效看板列表
获取时效看板列表
        * /timeliness/list
        */
      export namespace timelinessList {
        export class Params {
          /** bo */
          bo: defs.apis.TimelinesBoardBo;
        }

        export type Response = defs.apis.RListTimelinesBoardVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListTimelinesBoardVo>;
      }
    }

    /**
     * tracking
     */
    export namespace tracking {
      /**
        * 导出追踪号列表
导出追踪号列表
        * /tracking/number/export
        */
      export namespace exportTracking {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.TrackingNoDownloadBOInteger,
        ): Promise<any>;
      }

      /**
        * 获取追踪号列表
获取追踪号列表
        * /tracking/number/list
        */
      export namespace trackingList {
        export class Params {
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoTrackingNoVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoTrackingNoVo>;
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
      export namespace editSubUser {
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
      export namespace addSubUser {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysUserBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 授权子账户菜单权限
授权子账户菜单权限
        * /system/user/bind/menu
        */
      export namespace bindMenu {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysUserMenuBindBo,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 删除子账户
删除子账户
        * /system/user/delete
        */
      export namespace removeSubUser {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.CommonIdBOInteger,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 获取子账户列表
获取子账户列表
        * /system/user/list
        */
      export namespace userList {
        export class Params {}

        export type Response = defs.apis.RListSysUserVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListSysUserVo>;
      }

      /**
        * 获取子账户菜单权限
获取子账户菜单权限
        * /system/user/menu/list
        */
      export namespace getMenu {
        export class Params {
          /** subUserId */
          subUserId: number;
        }

        export type Response = defs.apis.RListTreeVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListTreeVO>;
      }

      /**
        * 重置子账户密码
重置子账户密码
        * /system/user/reset
        */
      export namespace resetSubUser {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.CommonIdBOInteger,
        ): Promise<defs.apis.RVoid>;
      }
    }
  }
}
