<script setup lang="ts">
import { ref } from 'vue';

import { Page } from '@vben/common-ui';

import { Alert, Button, InputNumber, RadioGroup } from 'ant-design-vue';

import BasicTitle from '#/components/basic-title.vue';

defineOptions({
  name: 'SettingFinancePackageError',
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
        title="单件误差"
      />
      <Alert :show-icon="false" banner class="mt-2 p-2">
        <template #description>
          如果您确定您预报的重量足够准确，您可以设置预报重量与我司单件称重重量的之间的容许误差，我们将为您拦截误差超过您的设定的包裹，以方便您及时发现工作中可能存在的疏漏。
        </template>
      </Alert>
      <Alert :show-icon="false" banner class="mt-2 p-2" type="info">
        <template #description>
          <p>W: 包裹到我司后实际称重的重量</p>
          <p>D: 包裹提交预报时的预报重量</p>
        </template>
      </Alert>
      <BasicTitle class="before mb-2 mt-4 text-base" title="当 W > D 时（实际称重大于预报重量）" />
      <div class="min-h-[80px] p-2">
        <RadioGroup v-model:value="type_1" :options="typeRadios" />
        <div class="flex items-center pt-2">
          <template v-if="type_1 === 1">
            W - D 超过<InputNumber :precision="2" addon-after="kg" /> 时，请帮我拦截并立刻联系我。
          </template>
          <template v-if="type_1 === 2">
            (W - D) / W 超过<InputNumber :precision="2" addon-after="%" />
            时，请帮我拦截并立刻联系我。
          </template>
        </div>
      </div>
      <BasicTitle class="before mb-2 mt-4 text-base" title="当 W < D 时（实际称重小于预报重量）" />
      <div class="min-h-[80px] p-2">
        <RadioGroup v-model:value="type_2" :options="typeRadios" />
        <div class="flex items-center pt-2">
          <template v-if="type_2 === 1">
            D - W 超过<InputNumber :precision="2" addon-after="kg" /> 时，请帮我拦截并立刻联系我。
          </template>
          <template v-if="type_2 === 2">
            (D - W) / W 超过<InputNumber :precision="2" addon-after="%" />
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
