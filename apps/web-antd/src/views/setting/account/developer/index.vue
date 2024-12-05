<script setup lang="ts">
import { ref } from 'vue';

import { Page } from '@vben/common-ui';

import { useClipboard } from '@vueuse/core';
import { Alert, Button, message, Modal, Textarea } from 'ant-design-vue';

import BasicTitle from '#/components/basic-title.vue';

defineOptions({
  name: 'SettingAccountDeveloper',
});

const userToken = ref('userToken');
const developerToken = ref('developerToken');

const { copy } = useClipboard({ legacy: true });

function handleReset() {
  Modal.confirm({
    title: '重置',
    content: '您确定要重置User Token吗？',
    onOk: () => {
      //
    },
  });
}

function handleCopy(text: string) {
  copy(text);
  message.success('复制成功');
}
</script>

<template>
  <Page>
    <div class="card-box p-4">
      <BasicTitle icon="ant-design:code-outlined" icon-class="text-primary" title="开发者" />
      <Alert :show-icon="false" banner class="mt-4">
        <template #message> ERP下单指引 </template>
        <template #description>
          <p>1. 如您使用第三方ERP下单，且需使用顺友物流发货，请在对应ERP进行相关授权设置。</p>
          <p>
            2. 具体设置规则请咨询ERP客服为准； 或参考文档：《
            <a class="vben-link">顺友物流 ERP 发货操作手册</a>
            》。
          </p>
        </template>
      </Alert>
      <BasicTitle
        class="before mb-2 mt-4 text-base"
        help-message="如果您需要授权第三方开发者（店小秘、马帮、通途、ECPP等）访问您的数据，您只需将User Token录入到对方系统中，您无需使用Developer Token。"
        title="User Token (ApiDevUserToken)"
      >
        <div>
          <Button class="mr-2" type="primary" @click="handleCopy(userToken)">复制到剪贴板</Button>
          <Button danger type="primary" @click="handleReset">重置</Button>
        </div>
      </BasicTitle>
      <Textarea v-model:value="userToken" :rows="3" class="mb-4" disabled />
      <BasicTitle
        class="before mb-2 mt-4 text-base"
        help-message="如果贵公司作为发货方的同时也是开发者，拥有自己的开发团队，请使用Developer Token来访问您的数据，请不要将Developer Token 给贵公司之外的开发人员。"
        title="Developer Token (ApiDevUserToken)"
      >
        <div>
          <Button class="mr-2" type="primary" @click="handleCopy(developerToken)">
            复制到剪贴板
          </Button>
          <Button danger type="primary" @click="handleReset">重置</Button>
        </div>
      </BasicTitle>
      <Textarea v-model:value="developerToken" :rows="3" class="mb-4" disabled />
      <BasicTitle
        class="before mb-2 mt-4 text-base"
        help-message="IP白名单为调用接口所在服务器的公网IP，若设置为空则表示不限制，容易被攻击。"
        title="IP白名单"
      >
        <div>
          <Button class="mr-2" type="primary">保存</Button>
        </div>
      </BasicTitle>
      <Textarea :rows="3" class="mb-4" placeholder="多个IP地址之间用;分隔" />
    </div>
  </Page>
</template>

<style scoped></style>
