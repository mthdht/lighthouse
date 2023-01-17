<template>
  <div :class="[sizeClass, colorClass]"></div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  size: {
    type: String,
    default: 'normal',
    validator(value) {
      return ['xs', 'sm', 'medium', 'lg', 'xl'].includes(value);
    },
  },
});

const colorClass = computed(() => {
  switch (props.color) {
    case 'slate':
      return 'bg-slate-500';
      break;
    case 'red':
      return 'bg-red-500';
      break;

    case 'orange':
      return 'bg-orange-500';
      break;

    case 'yellow':
      return 'bg-yellow-500';
      break;

    case 'green':
      return 'bg-green-500';
      break;

    case 'blue':
      return 'bg-blue-500';
      break;
    default:
      return 'bg-slate-800';
      break;
  }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'h-px';
      break;
    case 'sm':
      return 'h-0.5';
      break;
    case 'md':
      return 'h-1';
      break;
    case 'lg':
      return 'h-2';
      break;
    case 'xl':
      return 'h-5';
      break;
    case '2xl':
      return 'h-6';
      break;
    case '3xl':
      return 'h-8';
      break;
    default:
      return 'h-px';
      break;
  }
});
</script>

<style scoped></style>
