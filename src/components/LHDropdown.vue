<template>
  <div class="relative">
    <LHButton
      hover
      class="dropdown-button px-4 py-2"
      :color="props.color"
      :class="labelClass"
      :rounded="props.rounded && props.margin ? 'rounded' : ''"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      <slot name="label">{{ props.label ?? 'Add a label' }}</slot>
    </LHButton>

    <div
      class="dropdown-items absolute whitespace-nowrap"
      :class="[colorClass, itemClass, showTooltip ? 'visible' : 'invisible']"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { ref, computed } from 'vue';
import LHDropdownItem from './LHDropdownItem.vue';
import LHButton from './LHButton.vue';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  label: {
    type: String,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  margin: {
    type: Boolean,
  },
});

const labelClass = computed(() => {
  return props.rounded && !props.margin ? 'rounded-t' : '';
});

const itemClass = computed(() => {
  return props.rounded && !props.margin
    ? 'rounded-b'
    : props.rounded && props.margin
    ? 'rounded mt-2'
    : '';
});

let colorClass = '';
const showTooltip = ref(false);

switch (props.color) {
  case 'slate':
    colorClass = 'bg-slate-300';
    break;
  case 'red':
    colorClass = 'bg-red-300';
    break;

  case 'orange':
    colorClass = 'bg-orange-300';
    break;

  case 'yellow':
    colorClass = 'bg-yellow-300';
    break;

  case 'green':
    colorClass = 'bg-green-300';
    break;

  case 'blue':
    colorClass = 'bg-blue-300';
    break;
  default:
    colorClass = 'bg-slate-50';
    break;
}
</script>

<style scoped>
.dropdown-items {
  transition-property: all;
  transition-duration: 500ms;
}
</style>
