<script lang="ts" setup>
import type { ActionItem } from '#/constants/common';

import { computed, type PropType, toRaw } from 'vue';

import { useAccess } from '@vben/access';
import { IconifyIcon, RiMoreFill } from '@vben/icons';
import { isBoolean, isFunction } from '@vben/utils';

import { Button, Divider, Dropdown, Menu, MenuDivider, MenuItem } from 'ant-design-vue';

defineOptions({ name: 'TableAction' });

const props = defineProps({
  actions: {
    type: Array as PropType<ActionItem[]>,
    default: null,
  },
  dropDownActions: {
    type: Array as PropType<ActionItem[]>,
    default: null,
  },
  divider: {
    type: Boolean,
    default: true,
  },
  stopButtonPropagation: {
    type: Boolean,
    default: true,
  },
});

const { hasAccessByCodes } = useAccess();
function isIfShow(action: ActionItem): boolean {
  const ifShow = action.ifShow;

  let isIfShow = true;

  if (isBoolean(ifShow)) {
    isIfShow = ifShow;
  }
  if (isFunction(ifShow)) {
    isIfShow = ifShow(action);
  }
  return isIfShow;
}

const getActions = computed(() => {
  return ((toRaw(props.actions) as any) || [])
    .filter((action: any) => {
      return hasAccessByCodes(action?.auth) && isIfShow(action);
    })
    .map((action: any) => {
      return {
        type: 'link',
        size: 'small',
        ...action,
      };
    });
});

const getDropdownList = computed((): any[] => {
  const list = ((toRaw(props.dropDownActions) as any) || []).filter((action: any) => {
    return hasAccessByCodes(action?.auth) && isIfShow(action);
  });
  return list.map((action: any, index: number) => {
    const { label } = action;
    return {
      ...action,
      text: label,
      divider: index < list.length - 1 ? props.divider : false,
    };
  });
});

function onCellClick(e: MouseEvent) {
  if (!props.stopButtonPropagation) return;
  const path = e.composedPath() as HTMLElement[];
  const isInButton = path.find((ele) => {
    return ele.tagName?.toUpperCase() === 'BUTTON';
  });
  isInButton && e.stopPropagation();
}

function handleClickMenu(item: any) {
  item.onClick?.();
}
</script>
<template>
  <div class="flex items-center justify-center" @click="onCellClick">
    <template v-for="(action, index) in getActions" :key="`${index}-${action.label}`">
      <IconifyIcon v-if="action.icon" :class="{ 'mr-1': !!action.label }" :icon="action.icon" />
      <Button v-if="action.label" :class="action.buttonClass" class="!text-[13px]" v-bind="action">
        {{ action.label }}
      </Button>
      <Divider
        v-if="divider && index < getActions.length - 1"
        class="mx-[2px] table"
        type="vertical"
      />
    </template>
    <Dropdown v-if="dropDownActions && getDropdownList.length > 0" :trigger="['hover', 'click']">
      <Button size="small" type="link">
        <RiMoreFill class="" />
      </Button>
      <template #overlay>
        <Menu>
          <template v-for="(item, index) in getDropdownList" :key="`${item.label}`">
            <MenuItem :disabled="item.disabled" @click="handleClickMenu(item)">
              <IconifyIcon v-if="item.icon" :class="{ 'mr-1': !!item.label }" :icon="item.icon" />
              <span class="ml-1">{{ item.label }}</span>
            </MenuItem>
            <MenuDivider
              v-if="divider && index < getDropdownList.length - 1"
              :key="`d-${item.label}`"
            />
          </template>
        </Menu>
      </template>
    </Dropdown>
  </div>
</template>
