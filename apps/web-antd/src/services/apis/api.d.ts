// @ts-nocheck auto generated apis

export declare namespace defs {
  export namespace apis {
    export interface ApplyInterceptBO {
      /** 包裹id */
      packageId: number;

      /** 端口 */
      ports?: string;

      /** 用户ID */
      userId?: string;
    }

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

    export interface BankTransferFormBeanBO {
      /** 银行转账主键ID */
      companyBankTransferId?: number;

      /** 录入人 */
      entryBy?: number;

      /** 录入时间 */
      entryTime?: string;

      /** 收款方银行卡流水号 */
      payeeBankCardId?: number;

      /** 收款方账号 */
      payeeBankCardNumber?: string;

      /** 收款方开户行 */
      payeeBankName?: string;

      /** 付款方账号 */
      payeeName?: string;

      /** 付款方账号 */
      payerBankCardNumber?: string;

      /** 付款方账号 */
      payerBankName?: string;

      /** 转账名称 */
      payerName?: string;

      /** 上传凭证地址 */
      receiptPath?: string;

      /** 回单序列号 */
      receiptSerialNumber?: string;

      /** 备注 */
      remark?: string;

      /** 交易金额 */
      tradeAmount?: number;

      /** 交易币种 */
      tradeCurrency?: string;
    }

    export interface BatchImportResultVo {
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

    export interface CalCuLatePriceDataVo {
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

    export interface CalCuLatePriceVo {
      /** 国家中文名称 */
      countryCnName?: string;

      /** 国家代码 */
      countryCode?: string;

      /** 查询结果 */
      rows?: Array<apis.CalCuLatePriceDataVo>;
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

    export interface CheckMailbagCodeBO {
      /** 邮件袋编号 */
      mailCodeId?: string;

      /** 邮袋编号 */
      value?: string;
    }

    export interface CheckMailbagCodeVo {
      /** 错误标识 */
      flag?: number;

      /** 邮袋号 */
      mailCodeId?: string;

      /** 错误信息 */
      value?: string;
    }

    export interface ComDetailVo {
      /** 地址名称 */
      areaName?: string;

      /** 城市中文名称 */
      cityCnName?: string;

      /** 揽收公司id */
      collectCompanyId?: number;

      /** 公司揽收联系人手机 */
      collectContactMobile?: string;

      /** 公司揽收联系人名称 */
      collectContactName?: string;

      /** 每日最多揽收次数 */
      collectTimes?: number;

      /** 揽收类型（0：不可用，1：免费快递揽收，2：免费自有车队揽收， 3：收费揽收） */
      collectType?: number;

      /** 公司揽收详细地址 */
      pickupAddress?: string;

      /** 公司揽收区县 */
      pickupArea?: number;

      /** 公司揽收城市 */
      pickupCity?: number;

      /** 公司揽收省州 */
      pickupState?: number;

      /** 阅读协议状态（0/null：未读，1：已读） */
      readStatus?: number;

      /** 阅读协议时间 */
      readTime?: string;

      /** 揽收服务商名称 */
      serviceName?: string;

      /** 违禁物品 */
      specialGoods?: string;

      /** 省份中文名称 */
      stateCnName?: string;
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

    export interface CompanyContractVo {
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

      /** 审核备注 */
      ratifyMemo?: string;

      /** 公司审核状态(0：待完善资料 1:待审核 2:审核失败 3:审核成功) */
      ratifyStatus?: number;

      /** 检查是否弹窗提醒客户未提供营业执照或身份证正反面证件，如果是，先弹出完善信息页面 */
      showProvideTip?: boolean;

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
      businessLicenseNumber: string;

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
      companyName: string;

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

    export interface DataInfoSyBsPackageVO {
      /** 列表数据 */
      rows?: Array<apis.SyBsPackageVO>;

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

    export interface DataInfoSyPrintBsPackageVo {
      /** 列表数据 */
      rows?: Array<apis.SyPrintBsPackageVo>;

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

    export interface DataInfoUnBilledChargeSortVo {
      /** 列表数据 */
      rows?: Array<apis.UnBilledChargeSortVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface DataInfoUnBilledChargeVo {
      /** 列表数据 */
      rows?: Array<apis.UnBilledChargeVo>;

      /** 总记录数 */
      total?: number;
    }

    export interface DopreDictionBO {
      /** 公司id */
      companyId: string;

      /** 包裹id */
      packageId: string;

      /** 用户id */
      userId: string;
    }

    export interface DownloadBO {
      /** filePath */
      filePath?: string;
    }

    export interface ExportExcelBO {
      /** true or false */
      checkedFlag?: string;

      /** 公司id */
      companyId?: number;

      /** 这里其实是预报时间，只是页面上用了createDate这个名字 */
      createDate?: string;

      /** 开始时间 */
      createTimeFrom?: string;

      /** 结束时间 */
      createTimeTo?: string;

      /** 排序方式 */
      order?: string;

      /** 包裹id数组 */
      packageIds?: Array<number>;

      /** 预报状态 */
      predictStatus?: number;

      /** 搜索文本 */
      searchText?: string;

      /** 邮递方式id */
      shippingMethodId?: number;

      /** 排序字段 */
      sort?: string;

      /** 库存状态 */
      stockStatus?: string;
    }

    export interface FileVO {
      /** fileName */
      fileName?: string;

      /** url */
      url?: string;
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

    export interface MailbagFormBO {
      /** receiveMailbagList */
      receiveMailbagList?: Array<apis.ReceiveMailbagFormBean>;
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

    export interface PackageIdListBO {
      /** 公司id */
      companyId?: string;

      /** 开始时间 */
      createTimeFrom?: string;

      /** 结束时间 */
      createTimeTo?: string;

      /** 包裹id列表 */
      packageIds?: Array<number>;

      /** 邮递方式 */
      paramShippingMethodId?: string;

      /** 预报状态 */
      predictStatus?: string;

      /** 预报日期 */
      predictedDays?: string;

      /** 搜索推荐 */
      searchText?: string;

      /** 是否选中所有 Y 是 */
      selectAll?: string;

      /** 库存状态 */
      stockStatus?: string;

      /** version */
      version?: string;
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

    export interface PackageListViewBO {
      /** 公司id */
      companyId: number;

      /** 开始时间 */
      createTimeFrom?: string;

      /** 结束时间 */
      createTimeTo?: string;

      /** 邮递方式 */
      paramShippingMethodId?: string;

      /** 预报状态 */
      predictStatus?: string;

      /** 预报天数 */
      predictedDays?: string;

      /** 搜索文本 */
      searchText?: string;

      /** 库存状态 */
      stockStatus?: string;
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

    export interface PredictionBO {
      /** 公司id */
      companyId?: number;

      /** 开始时间 */
      createTimeFrom?: string;

      /** 结束时间 */
      createTimeTo?: string;

      /** 搜索条件 */
      searchText?: string;
    }

    export interface PredictionBatchModifyBO {
      /** 修改邮寄方式ID */
      modifyShippingMethodId?: string;

      /** packageIdListBO */
      packageIdListBO?: apis.PackageIdListBO;

      /** 用户id */
      userId?: string;
    }

    export interface PredictionBatchRevokeBO {
      /** packageIdListBO */
      packageIdListBO?: apis.PackageIdListBO;

      /** 运维、客户端的区分标志 */
      ports?: string;

      /** 用户id */
      userId?: string;
    }

    export interface PredictionVO {
      /** 预报失败 */
      failurePredictCount?: number;

      /** 已预报 */
      predictedCount?: number;

      /** 预报中 */
      predictingCount?: number;

      /** 等待预报及预报失败 */
      waitAndFailurePredictCount?: number;

      /** 等待预报 */
      waitPredictCount?: number;
    }

    export interface PrintPDFBO {
      /** 包裹ID */
      packageId: number;

      /** 页面传递操作端口名称 */
      ports: string;

      /** 页面传递用户Id */
      userId: number;
    }

    export interface PrintPackageBO {
      /** 公司id */
      companyId?: string;

      /** 创建日期 */
      createdDays?: string;

      /** 打印状态 */
      printStatus?: string;

      /** 日期 */
      printedDays?: string;

      /** sku类型 */
      skuType?: string;

      /** 库存状态 */
      stockStatus?: string;

      /** version */
      version?: string;
    }

    export interface PrintPackageListViewBO {
      /** 公司id */
      companyId?: number;

      /** 创建时间 */
      createdDays?: string;

      /** 开始时间 */
      forecastTimeFrom?: string;

      /** 结束时间 */
      forecastTimeTo?: string;

      /** 打印状态 */
      printStatus?: string;

      /** 打印日期 */
      printedDays?: string;

      /** 搜索文本 */
      searchText?: string;

      /** 邮寄方式 */
      shippingMethodId?: number;

      /** 库存状态 */
      stockStatus?: string;
    }

    export interface PrintPdfBatchBO {
      /** 排序方式 */
      order?: string;

      /** 包裹id列表 */
      packageIdList?: Array<number>;

      /** 页面传递操作端口名称,yunwei 代表运维操作人员，client代表客户 */
      ports?: string;

      /** 排序字段 */
      sort?: string;

      /** 用户id */
      userId: number;
    }

    export interface ProductAttributesVo {
      /** 商品属性名称 */
      attributeName?: string;

      /** 商品属性ID */
      productAttributeId?: number;
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

    export interface RCalCuLatePriceVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.CalCuLatePriceVo;

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

    export interface RCheckMailbagCodeVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.CheckMailbagCodeVo;

      /** msg */
      msg?: string;
    }

    export interface RCompanyContractVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.CompanyContractVo;

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

    export interface RFileVO {
      /** code */
      code?: number;

      /** data */
      data?: apis.FileVO;

      /** msg */
      msg?: string;
    }

    export interface RInteger {
      /** code */
      code?: number;

      /** data */
      data?: number;

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

    export interface RListProductAttributesVo {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.ProductAttributesVo>;

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

    export interface RListShippingMethodForReservationVo {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.ShippingMethodForReservationVo>;

      /** msg */
      msg?: string;
    }

    export interface RListSyBsPackageProductVO {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.SyBsPackageProductVO>;

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

    export interface RListSySysBankAccountVO {
      /** code */
      code?: number;

      /** data */
      data?: Array<apis.SySysBankAccountVO>;

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

    export interface RPredictionVO {
      /** code */
      code?: number;

      /** data */
      data?: apis.PredictionVO;

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

    export interface RReceiveMailBagVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.ReceiveMailBagVo;

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

    export interface RReservationVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.ReservationVo;

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

    export interface RShippingMethodListVO {
      /** code */
      code?: number;

      /** data */
      data?: apis.ShippingMethodListVO;

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

    export interface RSyBsPackageDetailVO {
      /** code */
      code?: number;

      /** data */
      data?: apis.SyBsPackageDetailVO;

      /** msg */
      msg?: string;
    }

    export interface RSyBsReceiveMailbagVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.SyBsReceiveMailbagVo;

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

    export interface RSysUserForgetVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.SysUserForgetVo;

      /** msg */
      msg?: string;
    }

    export interface RUploadInitVo {
      /** code */
      code?: number;

      /** data */
      data?: apis.UploadInitVo;

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

    export interface RWechatPayVO {
      /** code */
      code?: number;

      /** data */
      data?: apis.WechatPayVO;

      /** msg */
      msg?: string;
    }

    export interface ReceiveMailBagListVo {
      /** 邮寄方式 */
      channelCnName?: string;

      /** 计费分区 */
      chargeZoneName?: string;

      /** 邮袋编号 */
      mailbagCode?: string;

      /** 邮袋重量(kg) */
      mailbagWeight?: number;

      /** 包裹数量 */
      packageNumber?: number;

      /** 收货邮袋流水号 */
      receiveMailbagId?: number;

      /** 预约时间 */
      reservationTime?: string;
    }

    export interface ReceiveMailBagVo {
      /** 收寄包裹列表 */
      receiveMailBagList?: Array<apis.ReceiveMailBagListVo>;

      /** 总数 */
      total?: number;
    }

    export interface ReceiveMailbagFormBO {
      /** chargeZoneId */
      chargeZoneId?: number;

      /** mailbagCode */
      mailbagCode?: string;

      /** receiveMailbagId */
      receiveMailbagId?: number;

      /** receiveMailbagTransferId */
      receiveMailbagTransferId?: number;

      /** reservationPackageNumber */
      reservationPackageNumber?: number;

      /** reservationTime */
      reservationTime?: string;

      /** reservationWeight */
      reservationWeight?: number;

      /** shippingMethodId */
      shippingMethodId?: number;
    }

    export interface ReceiveMailbagFormBean {
      /** chargeZoneId */
      chargeZoneId?: number;

      /** mailbagCode */
      mailbagCode?: string;

      /** receiveMailbagId */
      receiveMailbagId?: number;

      /** receiveMailbagTransferId */
      receiveMailbagTransferId?: number;

      /** reservationPackageNumber */
      reservationPackageNumber?: number;

      /** reservationTime */
      reservationTime?: string;

      /** reservationWeight */
      reservationWeight?: number;

      /** shippingMethodId */
      shippingMethodId?: number;
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

    export interface ReservationDeleteBO {
      /** receiveMailbagId */
      receiveMailbagId?: number;

      /** receiveMailbagTransferId */
      receiveMailbagTransferId?: number;
    }

    export interface ReservationOrderInfoVo {
      /** mailbagNumber */
      mailbagNumber?: number;

      /** mailbagWeight */
      mailbagWeight?: number;

      /** packageNumber */
      packageNumber?: number;

      /** receiveMailbagTransferCode */
      receiveMailbagTransferCode?: string;

      /** id */
      receiveMailbagTransferId?: number;
    }

    export interface ReservationVo {
      /** 会跳转两个页面 */
      addressList?: Array<apis.ComDetailVo>;

      /** 查询特俗物品字典数据 */
      clientSpecialGoods?: Array<apis.RemoteDictDataVO>;

      /** 查询客户当天的揽收次数 */
      collectTimes?: number;

      /** comDetail */
      comDetail?: apis.ComDetailVo;

      /** 公司id */
      companyId?: number;

      /** 1.代表合同过期 默认为空 */
      open?: number;

      /** 查询是否已读协议 */
      readStatus?: number;

      /** syPackageNumber */
      syPackageNumber?: number;

      /** 用户id */
      userId?: number;

      /** 用户名称 */
      userName?: string;

      /** vo */
      vo?: apis.ReservationOrderInfoVo;

      /** 是否存在wish包裹数据 1存在 0不存在 */
      wishFlag?: number;

      /** wishPackageNumber */
      wishPackageNumber?: number;
    }

    export interface RevokePredictBatchBO {
      /** 包裹ID列表 */
      packageIdList: Array<number>;

      /** 客户端 */
      ports?: string;

      /** 用户ID */
      userId: number;
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

    export interface ShippingMethodForReservationVo {
      /** 邮寄方式编码 */
      shippingMethodCode?: string;

      /** 邮寄方式ID */
      shippingMethodId?: number;

      /** 邮寄方式名称 */
      shippingMethodName?: string;
    }

    export interface ShippingMethodListBO {
      /** 公司id */
      companyId?: string;

      /** 开始时间 */
      createTimeFrom?: string;

      /** 结束时间 */
      createTimeTo?: string;

      /** 预报状态 */
      predictStatus?: string;

      /** 预报日期 */
      predictedDays?: string;

      /** 搜索条件 */
      searchText?: string;

      /** 库存状态 */
      stockStatus?: string;

      /** version */
      version?: string;
    }

    export interface ShippingMethodListVO {
      /** shippingMethodVOList */
      shippingMethodVOList?: Array<apis.ShippingMethodVO>;

      /** total */
      total?: number;
    }

    export interface ShippingMethodVO {
      /** 总数 */
      pnum?: number;

      /** 邮递方式名称 */
      shippingMethodCnName?: string;

      /** 邮递方式id */
      shippingMethodId?: number;
    }

    export interface SmsCodeBo {
      /** captchaVerifyParam */
      captchaVerifyParam: string;

      /** mobile */
      mobile?: string;

      /** userId */
      userId?: number;
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

    export interface SyBsPackageDetailVO {
      /** 到港时间 */
      arrivedPortTime?: string;

      /** 预留字段1 */
      backup1?: string;

      /** 预留字段2 */
      backup2?: string;

      /** 预留字段3 */
      backup3?: string;

      /** 预留字段4 */
      backup4?: string;

      /** 预留字段5 */
      backup5?: string;

      /** 装袋操作人 */
      baggingBy?: number;

      /** 装袋类型(0:实扫装袋;1:随机装袋;2:虚拟装袋) */
      baggingMethod?: string;

      /** 装袋时间 */
      baggingTime?: string;

      /** 改单授权人ID */
      changeChannelAuthorizerId?: number;

      /** 换单人 */
      changeLabelBy?: number;

      /** 授权者改单id */
      changeLabelCertigierId?: number;

      /** 改单邮路id */
      changeLabelChannelId?: number;

      /** 改单邮路分区id */
      changeLabelChannelareaId?: number;

      /** 改单计费分区 */
      changeLabelCharzoneId?: number;

      /** 换单机构 */
      changeLabelOrganizationId?: number;

      /** 改单模板id */
      changeLabelTemplateId?: number;

      /** 换单时间 */
      changeLabelTime?: string;

      /** 改单追踪号 */
      changeLabelTrackingNumber?: string;

      /** 邮路流水号 重命名 */
      channelId?: number;

      /** 计费分区流水号 */
      chargeZoneId?: number;

      /** 选中包裹属性 */
      checkedPackageAttributeList?: Array<number>;

      /** 清关成功 */
      clearanceFinishTime?: string;

      /** 清关中 */
      clearanceProcessTime?: string;

      /** 公司流水号 */
      companyId?: number;

      /** 创建人 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 币种代码 */
      currencyCode?: string;

      /** 客户订单号 */
      customerOrderNo?: string;

      /** 客户参考号 */
      customerReferenceNo?: string;

      /** 妥投时间 */
      deliveredTime?: string;

      /** 包裹销毁人 */
      destroyBy?: number;

      /** 包裹销毁时间 */
      destroyTime?: string;

      /** 首次尾程节点时间 */
      firstTrackTime?: string;

      /** 是否投保(0:不投保 1:投保) */
      insuranceFlag?: string;

      /** 投保保单号 */
      insuranceNumber?: string;

      /** IOSS识别号 */
      iossVatId?: string;

      /** 是否退税 */
      isDrawBack?: number;

      /** 上次执行抓取的任务的优先级，空或者0是最低的。优先级高于该值的抓取任务可以忽略last_query_time从而执行抓取。 */
      lastQueryFrom?: number;

      /** 最后查询时间 */
      lastQueryTime?: string;

      /** 离港发货操作人 */
      leavePortBy?: number;

      /** 离港发货时间 */
      leavePortTime?: string;

      /** 离开转运中心操作人 */
      leaveTransitcenterBy?: number;

      /** 离开转运中心时间 */
      leaveTransitcenterTime?: string;

      /** 交航失败操作人 */
      leaveportReturnBy?: number;

      /** 交航退件出库操作人 */
      leaveportReturnCustomerBy?: number;

      /** 交航退件出库时间 */
      leaveportReturnCustomerTime?: string;

      /** 交航退件收货人 */
      leaveportReturnReceiveBy?: number;

      /** 交航退件收货时间 */
      leaveportReturnReceiveTime?: string;

      /** 交航失败时间 */
      leaveportReturnTime?: string;

      /** 邮袋编号 */
      mailbagCode?: string;

      /** 改单前邮路ID */
      originChannelId?: number;

      /** 改单前邮路分区ID */
      originChannelareaId?: number;

      /** 改单前计费分区ID */
      originChargezoneId?: number;

      /** 始发国出口清关 */
      originCustomsTime?: string;

      /** 改单前追踪号 */
      originTrackingNumber?: string;

      /** 内单号 */
      otherNumber?: string;

      /** 包裹出库退回人 */
      outBy?: number;

      /** 包裹出库退回时间 */
      outTime?: string;

      /** 出境邮袋流水号 */
      outboundMailbagId?: number;

      /** 海外退件 */
      overseasRefund?: boolean;

      /** OCD金额 */
      packageCodAmount?: number;

      /** OCD币种 */
      packageCodCurrencyCode?: string;

      /** 包裹编码 */
      packageCode?: string;

      /** 包裹错误流水号 */
      packageErrorCode?: string;

      /** 包裹高度(cm) */
      packageHeight?: number;

      /** 包裹流水号 */
      packageId?: number;

      /** 包裹保险费 */
      packageInsurance?: number;

      /** 包裹投保金额 */
      packageInsureAmount?: number;

      /** 包裹长度(cm) */
      packageLength?: number;

      /** 包裹销售金额（USD） */
      packageSalesAmount?: number;

      /** 2:API、3:菜鸟、4:马帮、5:速卖、6:通途、7:Vova、8:Wish、9普源、10:敦煌、31:新菜鸟 */
      packageSource?: string;

      /** 包裹宽度(cm) */
      packageWidth?: number;

      /** 电子保单PDF路径 */
      pdfInsurancePath?: string;

      /** 预报人 */
      predictionBy?: number;

      /** 包裹预报错误信息 */
      predictionFailReason?: string;

      /** 包裹预估(预报)运费(CNY) */
      predictionFreight?: number;

      /** 预报时间 */
      predictionTime?: string;

      /** 包裹预报体积计重 */
      predictionVolumnWeight?: number;

      /** 包裹预报重量（KG） */
      predictionWeight?: number;

      /** 最后打印人 */
      printBy?: number;

      /** 最后打印时间 */
      printTime?: string;

      /** 到达目的国操作人 */
      reachCountryBy?: number;

      /** 到达目的国时间 */
      reachCountryTime?: string;

      /** 到达OE操作人 */
      reachOeBy?: number;

      /** 到达OE时间 */
      reachOeTime?: string;

      /** 到达转运中心操作人 */
      reachTransitcenterBy?: number;

      /** 到达转运中心时间 */
      reachTransitcenterTime?: string;

      /** 收件人地址1 */
      recipientAddress1?: string;

      /** 收件人地址2 */
      recipientAddress2?: string;

      /** 收件人地址3 */
      recipientAddress3?: string;

      /** 收件人城市 */
      recipientCity?: string;

      /** 收件国家代码 */
      recipientCountryCode?: string;

      /** 收件人邮箱 */
      recipientEmail?: string;

      /** 收件人完整地址 */
      recipientFullAddress?: string;

      /** 身份证号码 */
      recipientIdentityNumber?: string;

      /** 收件人手机 */
      recipientMobile?: string;

      /** 收件人 */
      recipientName?: string;

      /** 收件人联系电话 */
      recipientPhone?: string;

      /** 收件人邮编 */
      recipientPostCode?: string;

      /** 收件人省州 */
      recipientState?: string;

      /** 个人税号 */
      recipientTaxNumber?: string;

      /** 包裹退回处理中心退回人 */
      returnCenterBy?: number;

      /** 包裹退回处理中心时间 */
      returnCenterTime?: string;

      /** 预报请求撤销人 */
      revokePredictionBy?: number;

      /** 预报撤销失败原因 */
      revokePredictionFailReason?: string;

      /** 预报撤销状态(0:撤销失败；1：撤销成功) */
      revokePredictionStatus?: string;

      /** 预报撤销时间 */
      revokePredictionTime?: string;

      /** 销售日期 */
      saleTime?: string;

      /** 寄件人地址 */
      senderAddress?: string;

      /** 寄件人城市 */
      senderCity?: string;

      /** 寄件人国家代码 */
      senderCountryCode?: string;

      /** 寄件人行政区 */
      senderDistrict?: string;

      /** 寄件人邮箱 */
      senderEmail?: string;

      /** 发件人全地址 */
      senderFullAddress?: string;

      /** 发件人姓名 */
      senderName?: string;

      /** 发件人电话 */
      senderPhone?: string;

      /** 发件人邮编 */
      senderPostcode?: string;

      /** 寄件人省州 */
      senderState?: string;

      /** 寄件人税号 */
      senderTaxNumber?: string;

      /** 包裹发货人 */
      shippedBy?: number;

      /** 包裹发货时间 */
      shippedTime?: string;

      /** 邮路流水号 */
      shippingMethodId?: number;

      /** 邮路分区流水号 */
      shippingZoneId?: number;

      /** 标记包裹缺货时间 */
      signStockTime?: string;

      /** 入仓人 */
      sortingResultBy?: number;

      /** 入仓时间 */
      sortingResultTime?: string;

      /** 入仓重量 */
      sortingResultWeight?: number;

      /** 包裹状态(0:等待分配物流;1:分配物流失败;2:分配物流成功(等待预报);3:预报失败;4:已预报[等待入仓];5:已入仓[完成分拣);6:分拣转仓中;7:已装袋;8:出境邮袋转仓中9:已发货;10:预报中;11:已离港;12:已离开转运中心;13:已到达目的国;14:已到达OE;15:已到达转运中心;16:已退回处理中心;17:待退回寄件人;18:已退回寄件人;19:寄件人已确认海外退件收货;20:派送处理中;21:包裹无法派送;22:派送成功;23:包裹已销毁;24:交航失败;25:交航退件出库;26:寄件人已确认交航退件收货;27:客户拦截;28:运维拦截;35:线下退件) */
      status?: string;

      /** 包裹是否缺货(0：不缺货；1:缺货) */
      stockFlag?: string;

      /** 退税手续费 */
      taxRefundAmount?: number;

      /** 是否退税 */
      taxRefundFlag?: number;

      /** 跟踪号 */
      trackingNumber?: string;

      /** 交接末端配送 */
      transportHandoverTime?: string;

      /** 更新人 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;
    }

    export interface SyBsPackageProductVO {
      /** backup1 */
      backup1?: string;

      /** backup2 */
      backup2?: string;

      /** backup3 */
      backup3?: string;

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

      /** 报关单价（USD） */
      declarePrice?: number;

      /** 包裹流水号 */
      packageId?: number;

      /** 包裹商品流水号 */
      packageProductId?: number;

      /** 产品材质 */
      productMaterial?: string;

      /** 产品用途 */
      productPurpose?: string;

      /** 产品SKU */
      productSku?: string;

      /** 报关产品数量 */
      quantity?: number;

      /** 修订报关产品中文名称 */
      reviseCnName?: string;

      /** 修订海关编码 */
      reviseCustomCode?: string;

      /** 修订报关单价（USD） */
      reviseDeclarePrice?: number;

      /** 修订报关产品英文名称 */
      reviseEnName?: string;

      /** 总价 */
      totalPrice?: number;

      /** 更新人 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;
    }

    export interface SyBsPackageVO {
      /** 到港时间 */
      arrivedPortTime?: string;

      /** 预留字段1 */
      backup1?: string;

      /** 预留字段2 */
      backup2?: string;

      /** 预留字段3 */
      backup3?: string;

      /** 预留字段4 */
      backup4?: string;

      /** 预留字段5 */
      backup5?: string;

      /** 装袋操作人 */
      baggingBy?: number;

      /** 装袋类型(0:实扫装袋;1:随机装袋;2:虚拟装袋) */
      baggingMethod?: string;

      /** 装袋时间 */
      baggingTime?: string;

      /** 改单授权人ID */
      changeChannelAuthorizerId?: number;

      /** 换单人 */
      changeLabelBy?: number;

      /** 授权者改单id */
      changeLabelCertigierId?: number;

      /** 改单邮路id */
      changeLabelChannelId?: number;

      /** 改单邮路分区id */
      changeLabelChannelareaId?: number;

      /** 改单计费分区 */
      changeLabelCharzoneId?: number;

      /** 换单机构 */
      changeLabelOrganizationId?: number;

      /** 改单模板id */
      changeLabelTemplateId?: number;

      /** 换单时间 */
      changeLabelTime?: string;

      /** 改单追踪号 */
      changeLabelTrackingNumber?: string;

      /** 邮路流水号 重命名 */
      channelId?: number;

      /** 计费分区流水号 */
      chargeZoneId?: number;

      /** 清关成功 */
      clearanceFinishTime?: string;

      /** 清关中 */
      clearanceProcessTime?: string;

      /** 公司流水号 */
      companyId?: number;

      /** 创建人 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 币种代码 */
      currencyCode?: string;

      /** 客户订单号 */
      customerOrderNo?: string;

      /** 客户参考号 */
      customerReferenceNo?: string;

      /** 妥投时间 */
      deliveredTime?: string;

      /** 包裹销毁人 */
      destroyBy?: number;

      /** 包裹销毁时间 */
      destroyTime?: string;

      /** 首次尾程节点时间 */
      firstTrackTime?: string;

      /** 是否冻结 */
      freezeStatus?: number;

      /** 是否投保(0:不投保 1:投保) */
      insuranceFlag?: string;

      /** 投保保单号 */
      insuranceNumber?: string;

      /** IOSS识别号 */
      iossVatId?: string;

      /** 是否退税 */
      isDrawback?: number;

      /** 上次执行抓取的任务的优先级，空或者0是最低的。优先级高于该值的抓取任务可以忽略last_query_time从而执行抓取。 */
      lastQueryFrom?: number;

      /** 最后查询时间 */
      lastQueryTime?: string;

      /** 离港发货操作人 */
      leavePortBy?: number;

      /** 离港发货时间 */
      leavePortTime?: string;

      /** 离开转运中心操作人 */
      leaveTransitcenterBy?: number;

      /** 离开转运中心时间 */
      leaveTransitcenterTime?: string;

      /** 交航失败操作人 */
      leaveportReturnBy?: number;

      /** 交航退件出库操作人 */
      leaveportReturnCustomerBy?: number;

      /** 交航退件出库时间 */
      leaveportReturnCustomerTime?: string;

      /** 交航退件收货人 */
      leaveportReturnReceiveBy?: number;

      /** 交航退件收货时间 */
      leaveportReturnReceiveTime?: string;

      /** 交航失败时间 */
      leaveportReturnTime?: string;

      /** 邮袋编号 */
      mailbagCode?: string;

      /** 改单前邮路ID */
      originChannelId?: number;

      /** 改单前邮路分区ID */
      originChannelareaId?: number;

      /** 改单前计费分区ID */
      originChargezoneId?: number;

      /** 始发国出口清关 */
      originCustomsTime?: string;

      /** 改单前追踪号 */
      originTrackingNumber?: string;

      /** 内单号 */
      otherNumber?: string;

      /** 包裹出库退回人 */
      outBy?: number;

      /** 包裹出库退回时间 */
      outTime?: string;

      /** 出境邮袋流水号 */
      outboundMailbagId?: number;

      /** 海外退件 */
      overseasRefund?: boolean;

      /** OCD金额 */
      packageCodAmount?: number;

      /** OCD币种 */
      packageCodCurrencyCode?: string;

      /** 包裹编码 */
      packageCode?: string;

      /** 包裹错误流水号 */
      packageErrorCode?: string;

      /** 包裹高度(cm) */
      packageHeight?: number;

      /** 包裹流水号 */
      packageId?: number;

      /** 包裹保险费 */
      packageInsurance?: number;

      /** 包裹投保金额 */
      packageInsureAmount?: number;

      /** 包裹长度(cm) */
      packageLength?: number;

      /** 包裹销售金额（USD） */
      packageSalesAmount?: number;

      /** 2:API、3:菜鸟、4:马帮、5:速卖、6:通途、7:Vova、8:Wish、9普源、10:敦煌、31:新菜鸟 */
      packageSource?: string;

      /** 包裹宽度(cm) */
      packageWidth?: number;

      /** 电子保单PDF路径 */
      pdfInsurancePath?: string;

      /** 预报人 */
      predictionBy?: number;

      /** 包裹预报错误信息 */
      predictionFailReason?: string;

      /** 包裹预估(预报)运费(CNY) */
      predictionFreight?: number;

      /** 预报时间 */
      predictionTime?: string;

      /** 包裹预报体积计重 */
      predictionVolumnWeight?: number;

      /** 包裹预报重量（KG） */
      predictionWeight?: number;

      /** 最后打印人 */
      printBy?: number;

      /** 最后打印时间 */
      printTime?: string;

      /** 到达目的国操作人 */
      reachCountryBy?: number;

      /** 到达目的国时间 */
      reachCountryTime?: string;

      /** 到达OE操作人 */
      reachOeBy?: number;

      /** 到达OE时间 */
      reachOeTime?: string;

      /** 到达转运中心操作人 */
      reachTransitcenterBy?: number;

      /** 到达转运中心时间 */
      reachTransitcenterTime?: string;

      /** 收件人地址1 */
      recipientAddress1?: string;

      /** 收件人地址2 */
      recipientAddress2?: string;

      /** 收件人地址3 */
      recipientAddress3?: string;

      /** 收件人城市 */
      recipientCity?: string;

      /** 收件国家代码 */
      recipientCountryCode?: string;

      /** 收件人邮箱 */
      recipientEmail?: string;

      /** 收件人完整地址 */
      recipientFullAddress?: string;

      /** 身份证号码 */
      recipientIdentityNumber?: string;

      /** 收件人手机 */
      recipientMobile?: string;

      /** 收件人 */
      recipientName?: string;

      /** 收件人联系电话 */
      recipientPhone?: string;

      /** 收件人邮编 */
      recipientPostCode?: string;

      /** 收件人省州 */
      recipientState?: string;

      /** 个人税号 */
      recipientTaxNumber?: string;

      /** 包裹退回处理中心退回人 */
      returnCenterBy?: number;

      /** 包裹退回处理中心时间 */
      returnCenterTime?: string;

      /** 预报请求撤销人 */
      revokePredictionBy?: number;

      /** 预报撤销失败原因 */
      revokePredictionFailReason?: string;

      /** 预报撤销状态(0:撤销失败；1：撤销成功) */
      revokePredictionStatus?: string;

      /** 预报撤销时间 */
      revokePredictionTime?: string;

      /** 销售日期 */
      saleTime?: string;

      /** 寄件人地址 */
      senderAddress?: string;

      /** 寄件人城市 */
      senderCity?: string;

      /** 寄件人国家代码 */
      senderCountryCode?: string;

      /** 寄件人行政区 */
      senderDistrict?: string;

      /** 寄件人邮箱 */
      senderEmail?: string;

      /** 发件人全地址 */
      senderFullAddress?: string;

      /** 发件人姓名 */
      senderName?: string;

      /** 发件人电话 */
      senderPhone?: string;

      /** 发件人邮编 */
      senderPostcode?: string;

      /** 寄件人省州 */
      senderState?: string;

      /** 寄件人税号 */
      senderTaxNumber?: string;

      /** 包裹发货人 */
      shippedBy?: number;

      /** 包裹发货时间 */
      shippedTime?: string;

      /** 邮路流水号 */
      shippingMethodId?: number;

      /** 邮路分区流水号 */
      shippingZoneId?: number;

      /** 标记包裹缺货时间 */
      signStockTime?: string;

      /** 入仓人 */
      sortingResultBy?: number;

      /** 入仓时间 */
      sortingResultTime?: string;

      /** 入仓重量 */
      sortingResultWeight?: number;

      /** 包裹状态(0:等待分配物流;1:分配物流失败;2:分配物流成功(等待预报);3:预报失败;4:已预报[等待入仓];5:已入仓[完成分拣);6:分拣转仓中;7:已装袋;8:出境邮袋转仓中9:已发货;10:预报中;11:已离港;12:已离开转运中心;13:已到达目的国;14:已到达OE;15:已到达转运中心;16:已退回处理中心;17:待退回寄件人;18:已退回寄件人;19:寄件人已确认海外退件收货;20:派送处理中;21:包裹无法派送;22:派送成功;23:包裹已销毁;24:交航失败;25:交航退件出库;26:寄件人已确认交航退件收货;27:客户拦截;28:运维拦截;35:线下退件) */
      status?: string;

      /** 包裹是否缺货(0：不缺货；1:缺货) */
      stockFlag?: string;

      /** 退税手续费 */
      taxRefundAmount?: number;

      /** 是否退税 */
      taxRefundFlag?: number;

      /** 跟踪号 */
      trackingNumber?: string;

      /** 交接末端配送 */
      transportHandoverTime?: string;

      /** 更新人 */
      upLocalDateTimeBy?: number;

      /** 更新时间 */
      upLocalDateTimeTime?: string;
    }

    export interface SyBsReceiveMailbagVo {
      /** 计费分区流水号(0代表混合) */
      chargeZoneId?: number;

      /** 财务客户每日费用流水号 */
      companyDailyChargeId?: number;

      /** 公司流水号 */
      companyId?: number;

      /** 创建人 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 拦截时间 */
      interceptTime?: string;

      /** 拦截类型(0:欠费拦截;1:误差拦截) */
      interceptType?: number;

      /** 邮袋编号 */
      mailbagCode?: string;

      /** 所属机构流水号 */
      organizationId?: number;

      /** 出境邮袋流水号 */
      outboundMailbagId?: number;

      /** 揽收人 */
      pickupBy?: number;

      /** 揽收时间 */
      pickupTime?: string;

      /** 揽收重量 */
      pickupWeight?: number;

      /** 收货条码流水号 */
      receiveBarcodeId?: number;

      /** 收货邮袋流水号 */
      receiveMailbagId?: number;

      /** 收货邮袋交接单流水号 */
      receiveMailbagTransferId?: number;

      /** 实际称重 */
      receiveWeight?: number;

      /** 收货人 */
      receivedBy?: number;

      /** 收货时间 */
      receivedTime?: string;

      /** 收货方式(0:账期收货 1:现结收货) */
      receivedType?: number;

      /** 收货备注 */
      remark?: string;

      /** 预约数量 */
      reservationPackageNumber?: number;

      /** 揽收预约时间 */
      reservationTime?: string;

      /** 预约重量 */
      reservationWeight?: number;

      /** 邮寄方式流水号(0代表混合) */
      shippingMethodId?: number;

      /** 邮袋状态(-1:待揽收;0:待收货 1:完成收货;2拦截;3:退回;4:原袋换标;5:转运中) */
      status?: number;

      /** 更新人 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;
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

    export interface SyPrintBsPackageVo {
      /** 创建时间 */
      createTime?: string;

      /** 客户订单号 */
      customerOrderNo?: string;

      /** 客户参考号 */
      customerReferenceNo?: string;

      /** 包裹编码 */
      packageCode?: string;

      /** 包裹流水号 */
      packageId?: number;

      /** 包裹预估(预报)运费(CNY) */
      predictionFreight?: number;

      /** 包裹预报重量（KG） */
      predictionWeight?: number;

      /** 最后打印时间 */
      printTime?: string;

      /** productskus */
      productskus?: string;

      /** 收件国家代码 */
      recipientCountryCode?: string;

      /** 邮寄方式名称 */
      shippingmethodname?: string;

      /** 包裹状态(0:等待分配物流;1:分配物流失败;2:分配物流成功(等待预报);3:预报失败;4:已预报[等待入仓];5:已入仓[完成分拣);6:分拣转仓中;7:已装袋;8:出境邮袋转仓中9:已发货;10:预报中;11:已离港;12:已离开转运中心;13:已到达目的国;14:已到达OE;15:已到达转运中心;16:已退回处理中心;17:待退回寄件人;18:已退回寄件人;19:寄件人已确认海外退件收货;20:派送处理中;21:包裹无法派送;22:派送成功;23:包裹已销毁;24:交航失败;25:交航退件出库;26:寄件人已确认交航退件收货;27:客户拦截;28:运维拦截;35:线下退件) */
      status?: string;

      /** 追踪号 */
      trackingNumber?: string;

      /** 更新时间 */
      updateTime?: string;
    }

    export interface SySysBankAccountVO {
      /** 是否自动对账(0:否 1:是) */
      accountType?: number;

      /** 人民币余额 */
      balanceCny?: number;

      /** 人民币余额 */
      balanceCnyStr?: string;

      /** 港币余额 */
      balanceHkd?: number;

      /** 港币余额 */
      balanceHkdStr?: string;

      /** 美元余额 */
      balanceUsd?: number;

      /** 美元余额 */
      balanceUsdStr?: string;

      /** 开户账号 */
      bankAccount?: string;

      /** 银行账号流水号 */
      bankAccountId?: number;

      /** 开户行 */
      bankName?: string;

      /** 银行简称 */
      bankShortName?: string;

      /** 人民币导入模板(默认1（不支持导入） 否则是官方数据格式下拉框选的值) */
      cnyImportType?: number;

      /** 创建人 */
      createBy?: number;

      /** 创建时间 */
      createTime?: string;

      /** 港币导入模板(默认1（不支持导入） 否则是官方数据格式下拉框选的值) */
      hkdImportType?: number;

      /** 备注 */
      remarks?: string;

      /** 排序 */
      sort?: number;

      /** 状态(0:停用;1:启用) */
      status?: number;

      /** 交易状态（0/null:未交易 1:正在交易） */
      tradeStatus?: number;

      /** 更新人 */
      updateBy?: number;

      /** 更新时间 */
      updateTime?: string;

      /** 美元导入模板(默认1（不支持导入） 否则是官方数据格式下拉框选的值) */
      usdImportType?: number;

      /** 户名 */
      userName?: string;
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
      /** 手机号码 */
      mobile: string;

      /** 手机验证码 */
      smsCode: string;
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
      /** 手机号码 */
      mobile?: string;

      /** 用户密码 */
      password: string;

      /** 短信验证码 */
      smsCode: string;
    }

    export interface SysUserForgetVo {
      /** 脱敏手机号码 */
      sensitiveMobile?: string;

      /** 帐号状态（0正常 1停用） */
      status?: number;

      /** 用户ID */
      userId?: number;

      /** 用户账号 */
      userName?: string;
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

      /** 关键字（用户名或手机号） */
      keyword: string;

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
      /** 手机验证码 */
      smsCode: string;
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

    export interface TableDataInfoSyBsPackageVO {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoSyBsPackageVO;

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

    export interface TableDataInfoSyPrintBsPackageVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoSyPrintBsPackageVo;

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

    export interface TableDataInfoUnBilledChargeSortVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoUnBilledChargeSortVo;

      /** 消息内容 */
      msg?: string;
    }

    export interface TableDataInfoUnBilledChargeVo {
      /** 消息状态码 */
      code?: number;

      /** data */
      data?: apis.DataInfoUnBilledChargeVo;

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

    export interface UnBilledChargeBo {
      /** 费用类型(0: 物流费用, 1: 其他费用, 2: 异常费用) */
      chargeType?: number;

      /** 公司流水号 */
      companyId?: number;
    }

    export interface UnBilledChargeSortBo {
      /** 费用id */
      companyChargeId?: number;

      /** 费用id集合, 批量导出分拣明细,只用传这个参数 */
      companyChargeIdList?: Array<number>;

      /** 分拣方式(0: 人工, 1: 逐单入仓) */
      sortingFrom?: number;

      /** 有效性(0: 有效, 1: 异常) */
      sortingType?: number;
    }

    export interface UnBilledChargeSortVo {
      /** 邮寄方式名称/邮路名称 */
      channelCnName?: string;

      /** 邮路代码 */
      channelCode?: string;

      /** 计费重 */
      chargeWeight?: number;

      /** 目的国中文名 */
      countryCnName?: string;

      /** 目的国英文名 */
      countryEnName?: string;

      /** 币种 */
      currencyCode?: string;

      /** 币种符号 */
      currencySymbol?: string;

      /** 客户订单号 */
      customerOrderNo?: string;

      /** 客户参考号 */
      customerReferenceNo?: string;

      /** 保险费 */
      insuranceAmount?: number;

      /** 保险单号 */
      insuranceNumber?: string;

      /** 包裹流水号 */
      packageCode?: string;

      /** 包裹数 */
      packageNum?: number;

      /** 目的国 */
      recipientCountryCode?: string;

      /** 运费 */
      reviseFreight?: number;

      /** 保费 */
      revisePremium?: number;

      /** 分拣重量 */
      reviseWeight?: number;

      /** 邮寄方式代码 */
      shippingMethodCode?: string;

      /** 分拣编码 */
      sortingResultCode?: string;

      /** 分拣时间 */
      sortingTime?: string;

      /** 体积重 */
      srealVolumnWeight?: number;

      /** 退税手续费 */
      taxRefundAmount?: number;

      /** 总费用 */
      totalCharge?: number;

      /** 追踪号 */
      trackingNumber?: string;

      /** 体积 */
      volume?: string;
    }

    export interface UnBilledChargeVo {
      /** 费用 */
      charge?: number;

      /** 费用编号 */
      chargeCode?: string;

      /** 费用内容 */
      chargeDetail?: string;

      /** 费用时间 */
      chargeTime?: string;

      /** 费用类型 */
      chargeType?: number;

      /** 费用id */
      companyChargeId?: number;

      /** 费用生成时间 */
      createTime?: string;

      /** 币种 */
      currencyCode?: string;

      /** 币种名称 */
      currencySecondName?: string;

      /** 币种符号 */
      currencySymbol?: string;
    }

    export interface UploadInitVo {
      /** true 合同过期 预报不能成功 */
      flg?: boolean;

      /** importResultVO */
      importResultVO?: apis.BatchImportResultVo;

      /** isSpecify */
      isSpecify?: boolean;

      /** 客户未审核 ，预报不能成功 */
      ratifyStatus?: boolean;
    }

    export interface WechatPayBo {
      /** orderId */
      orderId?: string;

      /** paymentValue */
      paymentValue?: string;

      /** scaleValue */
      scaleValue?: string;
    }

    export interface WechatPayVO {
      /** codeUrl */
      codeUrl?: string;

      /** orderId */
      orderId?: string;

      /** orderNo */
      orderNo?: string;

      /** realPayment */
      realPayment?: number;
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
     * bookingPickUp
     */
    export namespace bookingPickUp {
      /**
        * 新增预约揽收
新增预约揽收
        * /client/package/operation/reservation/add
        */
      export namespace shipping {
        export class Params {}

        export type Response = defs.apis.RListShippingMethodForReservationVo;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.apis.RListShippingMethodForReservationVo>;
      }

      /**
        * 检验邮袋编码 通过flag进行错误提示
检验邮袋编码 通过flag进行错误提示
        * /client/package/operation/reservation/add/checkMailbagCode
        */
      export namespace checkMailbagCode {
        export class Params {
          /** bo */
          bo: defs.apis.CheckMailbagCodeBO;
        }

        export type Response = defs.apis.RCheckMailbagCodeVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RCheckMailbagCodeVo>;
      }

      /**
        * 加载计费分区---未选择为-1
加载计费分区---未选择为-1
        * /client/package/operation/reservation/chargeZone/chargeZoneList1
        */
      export namespace getChargeZoneList1 {
        export class Params {
          /** channelId */
          channelId: number;
        }

        export type Response = defs.apis.RListShippingMethodForReservationVo;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.apis.RListShippingMethodForReservationVo>;
      }

      /**
        * 新增邮袋---保存
新增邮袋---保存
        * /client/package/operation/reservation/mailbag/add/save
        */
      export namespace addMailbagList {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.MailbagFormBO,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 删除指定邮袋
删除指定邮袋
        * /client/package/operation/reservation/mailbag/delete
        */
      export namespace mailbagDelete {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.ReservationDeleteBO,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 编辑
编辑
        * /client/package/operation/reservation/mailbag/edit
        */
      export namespace editMailbag {
        export class Params {
          /** receiveMailbagId */
          receiveMailbagId: number;
        }

        export type Response = defs.apis.RSyBsReceiveMailbagVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RSyBsReceiveMailbagVo>;
      }

      /**
        * 保存编辑信息
保存编辑信息
        * /client/package/operation/reservation/mailbag/edit/save
        */
      export namespace editSaveMailbag {
        export class Params {
          /** bo */
          bo: defs.apis.ReceiveMailbagFormBO;
        }

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }

      /**
        * 判断邮袋是否可操作
判断邮袋是否可操作
        * /client/package/operation/reservation/mailbag/operation
        */
      export namespace mailbagIsReceive {
        export class Params {
          /** receiveMailbagId */
          receiveMailbagId: number;
        }

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RVoid>;
      }

      /**
        * 查询指定预约单的邮袋列表
查询指定预约单的邮袋列表
        * /client/package/operation/reservation/mailbagList
        */
      export namespace getPackageList {
        export class Params {
          /** receiveMailbagTransferId */
          receiveMailbagTransferId: number;
        }

        export type Response = defs.apis.RReceiveMailBagVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RReceiveMailBagVo>;
      }

      /**
        * 打印交接单
打印交接单
        * /client/package/operation/reservation/print
        */
      export namespace mailbagPrint {
        export class Params {}

        export type Response = defs.apis.RFileVO;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.CommonIdBOInteger,
        ): Promise<defs.apis.RFileVO>;
      }

      /**
        * 揽收界面 跳转根据 CollectType跳转
揽收界面 跳转根据 CollectType跳转
        * /client/package/reservation
        */
      export namespace reservationHome {
        export class Params {}

        export type Response = defs.apis.RReservationVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RReservationVo>;
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

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SmsCodeBo,
        ): Promise<defs.apis.RVoid>;
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

      /**
        * 上传图像文件（可添加水印）
上传图像文件（可添加水印）
        * /common/watermark/upload
        */
      export namespace uploadWatermark {
        export class Params {}

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(params: Params, bodyParams: object): Promise<defs.apis.RObject>;
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

        export type Response = defs.apis.RCompanyContractVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RCompanyContractVo>;
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

        export type Response = defs.apis.RCalCuLatePriceVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RCalCuLatePriceVo>;
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
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.CompleteCompanyBO,
        ): Promise<defs.apis.RVoid>;
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

        export type Response = defs.apis.RUploadInitVo;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: object,
        ): Promise<defs.apis.RUploadInitVo>;
      }
    }

    /**
     * labelPrinting
     */
    export namespace labelPrinting {
      /**
        * 包裹列表
包裹列表
        * /client/package/operation/print/package/printPackageList
        */
      export namespace packageList {
        export class Params {
          /** bo */
          bo: defs.apis.PrintPackageListViewBO;
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoSyPrintBsPackageVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoSyPrintBsPackageVo>;
      }

      /**
        * 批量打印和下载PDF
批量打印和下载PDF
        * /client/package/operation/print/printPdfBatch
        */
      export namespace printPDFAllPage {
        export class Params {}

        export type Response = defs.apis.RFileVO;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.PrintPdfBatchBO,
        ): Promise<defs.apis.RFileVO>;
      }

      /**
        * 批量撤销预报
批量撤销预报
        * /client/package/operation/print/revokePredictBatch
        */
      export namespace revokePredictBatch {
        export class Params {}

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.RevokePredictBatchBO,
        ): Promise<defs.apis.RObject>;
      }

      /**
        * 获得邮寄方式列表
获得邮寄方式列表
        * /client/package/operation/print/shippingMethod/shippingMethodList
        */
      export namespace getShippingMethodList_1 {
        export class Params {
          /** bo */
          bo: defs.apis.PrintPackageBO;
        }

        export type Response = defs.apis.RShippingMethodListVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RShippingMethodListVO>;
      }

      /**
        * 查询等待打印的包裹数
查询等待打印的包裹数
        * /client/package/operation/print/waitPrintNumber
        */
      export namespace waitPrintNumber {
        export class Params {
          /** companyId */
          companyId: number;
        }

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RObject>;
      }

      /**
        * 撤销预报
撤销预报
        * /client/package/operation/revokePrediction
        */
      export namespace revokePredictionMethod {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.PrintPDFBO,
        ): Promise<defs.apis.RVoid>;
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
        * 获取商品详情
获取商品详情
        * /client/package/base/detail
        */
      export namespace showPackageInfoBase {
        export class Params {
          /** packageId */
          packageId: number;
        }

        export type Response = defs.apis.RSyBsPackageDetailVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RSyBsPackageDetailVO>;
      }

      /**
        * 客户管理-代客操作-新建包裹-获取包裹商品列表
客户管理-代客操作-新建包裹-获取包裹商品列表
        * /client/package/product/list
        */
      export namespace getProductList {
        export class Params {
          /** packageId */
          packageId: string;
        }

        export type Response = defs.apis.RListSyBsPackageProductVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListSyBsPackageProductVO>;
      }

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
        * 查询商品属性
查询商品属性
        * /client/package/selectProductAttributeList
        */
      export namespace selectProductAttributeList {
        export class Params {}

        export type Response = defs.apis.RListProductAttributesVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListProductAttributesVo>;
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
        * 客户管理-新建包裹-修改包裹
客户管理-新建包裹-修改包裹
        * /client/package/update
        */
      export namespace updatePackage {
        export class Params {}

        export type Response = defs.apis.RSavePackageVO;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.PackageInfoBO,
        ): Promise<defs.apis.RSavePackageVO>;
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
     * parcelForecast
     */
    export namespace parcelForecast {
      /**
        * 获取邮寄方式
获取邮寄方式
        * /client/package/operation/getShippingMethodList
        */
      export namespace getShippingMethodList_2 {
        export class Params {
          /** bo */
          bo: defs.apis.ShippingMethodListBO;
        }

        export type Response = defs.apis.RShippingMethodListVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RShippingMethodListVO>;
      }

      /**
        * 申请拦截
申请拦截
        * /client/package/operation/prediction/apply
        */
      export namespace applyInterceptPackage {
        export class Params {}

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.ApplyInterceptBO,
        ): Promise<defs.apis.RObject>;
      }

      /**
        * 批量删除
批量删除
        * /client/package/operation/prediction/batch/delete
        */
      export namespace batchDeletePackage {
        export class Params {}

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.PredictionBatchRevokeBO,
        ): Promise<defs.apis.RObject>;
      }

      /**
        * 获取邮寄方式
获取邮寄方式
        * /client/package/operation/prediction/batch/modify
        */
      export namespace modifyBatch {
        export class Params {}

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RObject>;
      }

      /**
        * 批量修改预报包裹
批量修改预报包裹
        * /client/package/operation/prediction/batch/modify/save
        */
      export namespace save {
        export class Params {}

        export type Response = defs.apis.RVoid;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.PredictionBatchModifyBO,
        ): Promise<defs.apis.RVoid>;
      }

      /**
        * 批量预报
批量预报
        * /client/package/operation/prediction/batch/predict
        */
      export namespace batchPredictMethod {
        export class Params {}

        export type Response = defs.apis.RUploadInitVo;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.PredictionBatchModifyBO,
        ): Promise<defs.apis.RUploadInitVo>;
      }

      /**
        * 批量撤销预报
批量撤销预报
        * /client/package/operation/prediction/batch/revoke
        */
      export namespace batchRevokePrediction {
        export class Params {}

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.PredictionBatchRevokeBO,
        ): Promise<defs.apis.RObject>;
      }

      /**
        * 取消拦截
取消拦截
        * /client/package/operation/prediction/cancelIntercept
        */
      export namespace cancelIntercept {
        export class Params {}

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.ApplyInterceptBO,
        ): Promise<defs.apis.RObject>;
      }

      /**
        * 包裹预报
包裹预报
        * /client/package/operation/prediction/doprediction
        */
      export namespace pacakgePrediction {
        export class Params {}

        export type Response = defs.apis.RSavePackageVO;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.DopreDictionBO,
        ): Promise<defs.apis.RSavePackageVO>;
      }

      /**
        * 导出包裹
导出包裹
        * /client/package/operation/prediction/exportExcel
        */
      export namespace exportExcel {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params, bodyParams: defs.apis.ExportExcelBO): Promise<any>;
      }

      /**
        * 包裹列表查询
包裹列表查询
        * /client/package/operation/prediction/packagelist
        */
      export namespace getPackageListView {
        export class Params {
          /** bo */
          bo: defs.apis.PackageListViewBO;
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoSyBsPackageVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoSyBsPackageVO>;
      }

      /**
        * 预报状态中的各状态数量
预报状态中的各状态数量
        * /client/package/operation/prediction/refreshNum
        */
      export namespace refreshNum {
        export class Params {
          /** bo */
          bo: defs.apis.PredictionBO;
        }

        export type Response = defs.apis.RPredictionVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RPredictionVO>;
      }

      /**
        * 操作前校验用户是否冻结
操作前校验用户是否冻结
        * /client/package/operation/selectFreezeStatusById
        */
      export namespace selectFreezeStatusById {
        export class Params {
          /** companyId */
          companyId: number;
        }

        export type Response = defs.apis.RInteger;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RInteger>;
      }
    }

    /**
     * pay
     */
    export namespace pay {
      /**
        * 新增银行转账声明
新增银行转账声明
        * /client/bill/finance/bankTransfer/save
        */
      export namespace saveBankTransfer {
        export class Params {}

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.BankTransferFormBeanBO,
        ): Promise<defs.apis.RObject>;
      }

      /**
        * 获取银行账号列表
获取银行账号列表
        * /client/pay/view/underline
        */
      export namespace underlineView {
        export class Params {}

        export type Response = defs.apis.RListSySysBankAccountVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RListSySysBankAccountVO>;
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

        export type Response = defs.apis.RSysUserForgetVo;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.SysUserPasswordForgotBo,
        ): Promise<defs.apis.RSysUserForgetVo>;
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
        * 获取导入平台账号模板
获取导入平台账号模板
        * /thirdPlatform/account/export/template
        */
      export namespace exportThirdPlatformTemplate {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
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
     * unBilledCharge
     */
    export namespace unBilledCharge {
      /**
        * 批量导出分拣明细
批量导出分拣明细
        * /bill/unfinishedBill/batchExportSort
        */
      export namespace batchExportUnBilledChargeSort {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.UnBilledChargeSortBo,
        ): Promise<any>;
      }

      /**
        * 获取费用明细
获取费用明细
        * /bill/unfinishedBill/detail
        */
      export namespace UnBilledChargeDetail {
        export class Params {
          /** companyChargeId */
          companyChargeId: number;
          /** chargeType */
          chargeType: number;
        }

        export type Response = defs.apis.RObject;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RObject>;
      }

      /**
        * 单个导出分拣明细
单个导出分拣明细
        * /bill/unfinishedBill/exportSort
        */
      export namespace exportUnBilledChargeSort {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.UnBilledChargeSortBo,
        ): Promise<any>;
      }

      /**
        * 获取未出账费用列表
获取未出账费用列表
        * /bill/unfinishedBill/list
        */
      export namespace unBilledChargeList {
        export class Params {
          /** bo */
          bo: defs.apis.UnBilledChargeBo;
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoUnBilledChargeVo;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.TableDataInfoUnBilledChargeVo>;
      }

      /**
        * 获取分拣明细列表
获取分拣明细列表
        * /bill/unfinishedBill/sortList
        */
      export namespace unBilledChargeSortList {
        export class Params {
          /** bo */
          bo: defs.apis.UnBilledChargeSortBo;
          /** pageQuery */
          pageQuery: defs.apis.PageQuery;
        }

        export type Response = defs.apis.TableDataInfoUnBilledChargeSortVo;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.apis.TableDataInfoUnBilledChargeSortVo>;
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
          subUserId?: number;
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

    /**
     * wechatPay
     */
    export namespace wechatPay {
      /**
        * 获取支付跳转地址
获取支付跳转地址
        * /client/pay/wechat
        */
      export namespace preparePay {
        export class Params {}

        export type Response = defs.apis.RWechatPayVO;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.apis.WechatPayBo,
        ): Promise<defs.apis.RWechatPayVO>;
      }

      /**
        * 检查订单状态
检查订单状态
        * /client/pay/wechat/checkOrderStatus
        */
      export namespace checkOrderStatus {
        export class Params {
          /** orderId */
          orderId: string;
        }

        export type Response = defs.apis.RString;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RString>;
      }

      /**
        * 完成支付后获取支付结果
完成支付后获取支付结果
        * /client/pay/wechat/complete
        */
      export namespace completePay {
        export class Params {
          /** orderNo */
          orderNo: string;
          /** orderId */
          orderId: string;
        }

        export type Response = defs.apis.RString;
        export const init: Response;
        export function request(params: Params): Promise<defs.apis.RString>;
      }
    }
  }
}
