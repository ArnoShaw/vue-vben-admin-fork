<script setup lang="ts">
import { ref } from 'vue';

import { Page } from '@vben/common-ui';

import { Alert, Button, InputNumber, RadioGroup } from 'ant-design-vue';

import BasicTitle from '#/components/basic-title.vue';

defineOptions({
  name: 'SettingFinanceCollectionError',
});

const typeRadios = ref([
  {
    label: '按重量差设置',
    value: 1,
  },
  {
    label: '按百分比设置',
    value: 2,
  },
  {
    label: '不拦截',
    value: 3,
  },
]);

const type_1 = ref(3);
const type_2 = ref(3);
</script>

<template>
  <Page>
    <div class="card-box p-4">
      <BasicTitle
        icon="ant-design:exclamation-circle-outlined"
        icon-class="text-primary"
        title="揽收误差"
      />
      <Alert :show-icon="false" banner class="mt-2 p-2">
        <template #description>
          <p>
            因天气、磨损等原因，您的货品在到达本公司仓库称重时，所得重量可能与在您公司揽收时的重量有少许误差，您可以在本界面设置容许的误差范围。
          </p>
          请注意：误差容许范围设置过小时，您的货品可能会被拦截，从而产生延误发货的可能，当货品被拦截时，您可能会在午夜收到短信通知。
        </template>
      </Alert>
      <Alert :show-icon="false" banner class="mt-2 p-2" type="info">
        <template #description>
          <p>S: 在本公司入仓时的重量</p>
          <p>L: 在您公司揽收时的重量</p>
        </template>
      </Alert>
      <BasicTitle class="before mb-2 mt-4 text-base" title="当 S > L 时（入仓重量大于揽收重量）" />
      <div class="min-h-[80px] p-2">
        <RadioGroup v-model:value="type_1" :options="typeRadios" />
        <div class="flex items-center pt-2">
          <template v-if="type_1 === 1">
            S - L 超过<InputNumber :precision="2" addon-after="kg" /> 时，请帮我拦截并立刻联系我。
          </template>
          <template v-if="type_1 === 2">
            (S - L) / S 超过<InputNumber :precision="2" addon-after="%" />
            时，请帮我拦截并立刻联系我。
          </template>
        </div>
      </div>
      <BasicTitle class="before mb-2 mt-4 text-base" title="当 S < L 时（入仓重量小于揽收重量）" />
      <div class="min-h-[80px] p-2">
        <RadioGroup v-model:value="type_2" :options="typeRadios" />
        <div class="flex items-center pt-2">
          <template v-if="type_2 === 1">
            L - S 超过<InputNumber :precision="2" addon-after="kg" /> 时，请帮我拦截并立刻联系我。
          </template>
          <template v-if="type_2 === 2">
            (L - S) / S 超过<InputNumber :precision="2" addon-after="%" />
            时，请帮我拦截并立刻联系我。
          </template>
        </div>
      </div>
      <div class="mt-4 text-center">
        <Button type="primary">保存</Button>
      </div>
    </div>
  </Page>
</template>
