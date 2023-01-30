<template>
  <p :class="[sizeClass, colorClass, marginClass, paddingClass]">
    <slot></slot>
  </p>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { computed } from 'vue';
const props = defineProps({
  color: {
    type: String,
    default: 'slate',
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  size: {
    type: String,
    default: 'normal',
    validator(value) {
      return [
        'xs',
        'sm',
        'normal',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ].includes(value);
    },
  },
  background: {
    type: Boolean,
    default: false,
  },
  noMargin: {
    type: Boolean,
    default: false,
  },
  noPadding: {
    type: Boolean,
    default: false,
  },
});

const colorClass = computed(() => {
  switch (props.color) {
    case 'slate':
      return props.background ? 'bg-slate-400 text-white' : 'text-slate-800';
      break;
    case 'red':
      return props.background ? 'bg-red-500 text-white' : 'text-red-800';
      break;

    case 'orange':
      return props.background ? 'bg-orange-500 text-white' : 'text-orange-800';
      break;

    case 'yellow':
      return props.background ? 'bg-yellow-500 text-white' : 'text-yellow-800';
      break;

    case 'green':
      return props.background ? 'bg-green-500 text-white' : 'text-green-800';
      break;

    case 'blue':
      return props.background ? 'bg-blue-500 text-white' : 'text-blue-800';
      break;
    default:
      return props.background ? 'bg-slate-400 text-white' : 'text-slate-800';
      break;
  }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'text-xs';
      break;
    case 'sm':
      return 'text-sm';
      break;
    case 'normal':
      return 'text-normal';
      break;
    case 'lg':
      return 'text-lg';
      break;
    case 'xl':
      return 'text-xl';
      break;
    case '2xl':
      return 'text-2xl';
      break;
    case '3xl':
      return 'text-3xl';
      break;
    case '4xl':
      return 'text-4xl';
      break;
    case '5xl':
      return 'text-5xl';
      break;
    case '6xl':
      return 'text-6xl';
      break;
    case '7xl':
      return '7xl';
      break;
    case '8xl':
      return '8xl';
      break;
    case '9xl':
      return '9xl';
      break;
    default:
      return 'text-normal';
      break;
  }
});

const marginClass = computed(() => {
  return props.noMargin ? '' : 'my-4';
});

const paddingClass = computed(() => {
  return props.noPadding ? '' : 'py-2 px-4';
});
</script>

<style scoped></style>
