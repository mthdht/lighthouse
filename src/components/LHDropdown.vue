<template>
  <div class="relative inline-block">
    <LHButton
      hover
      class="dropdown-button ease-in-out transition-all duration-500"
      :color="props.color"
      :class="labelClass"
      @mouseenter="!props.click ? (showTooltip = true) : null"
      @mouseleave="!props.click ? (showTooltip = false) : null"
      @click="props.click ? (showTooltip = !showTooltip) : null"
    >
      <slot name="label">{{ props.label ?? 'Add a label' }}</slot>
    </LHButton>

    <div
      class="
        dropdown-items
        absolute
        whitespace-nowrap
        overflow-hidden
        ease-in-out
        transition-all
        duration-500
      "
      :class="[
        roundedClass,
        placementClass,
        transitionClass,
        showTooltip ? 'visible' : 'invisible',
      ]"
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
  click: {
    type: Boolean,
    default: false,
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
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
});

const showTooltip = ref(false);

const labelClass = computed(() => {
  if (props.rounded && !props.margin && showTooltip.value) {
    return 'rounded-t';
  } else if (props.rounded) {
    return 'rounded';
  }
});

const roundedClass = computed(() => {
  return props.rounded && !props.margin
    ? 'rounded-b'
    : props.rounded && props.margin
    ? 'rounded mt-2'
    : props.rounded
    ? 'rounded'
    : props.margin
    ? 'mt-2'
    : '';
});

const colorClass = computed(() => {
  switch (props.color) {
    case 'slate':
      return 'bg-slate-300';
      break;
    case 'red':
      return 'bg-red-300';
      break;

    case 'orange':
      return 'bg-orange-300';
      break;

    case 'yellow':
      return 'bg-yellow-300';
      break;

    case 'green':
      return 'bg-green-300';
      break;

    case 'blue':
      return 'bg-blue-300';
      break;
    default:
      return 'bg-slate-50';
      break;
  }
});

const placementClass = computed(() => {
  return props.right ? 'right-0' : '';
});

const transitionClass = computed(() => {
  return showTooltip.value ? 'opacity-100' : 'opacity-0';
});
</script>

<style scoped></style>
