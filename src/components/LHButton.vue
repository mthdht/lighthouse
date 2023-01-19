<template>
  <button :class="[colorClass, roundedClass]" class="px-4 py-2 font-semibold">
    <slot></slot>
  </button>
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
  mode: {
    type: String,
    default: 'plain',
    validator(value) {
      // The value must match one of these strings
      return ['plain', 'light', 'outlined'].includes(value);
    },
  },
  rounded: {
    type: String,
    default: '',
    validator(value) {
      // The value must match one of these strings
      return ['', 'none', 'normal', 'medium', 'large'].includes(value);
    },
  },
  hover: {
    type: Boolean,
    default: false,
  },
});

const colorClass = computed(() => {
  let color = '';
  switch (props.color) {
    case 'slate':
      if (props.mode == 'plain') {
        color = 'bg-slate-500 text-white';
        props.hover ? (color += ' hover:bg-slate-600') : '';
        return color;
      }
      if (props.mode == 'light') {
        color = 'bg-slate-100 text-slate-800';
        props.hover ? (color += ' hover:bg-slate-200') : '';
        return color;
      }
      if (props.mode == 'outlined') {
        color = 'text-slate-600 border-2 border-slate-500';
        props.hover ? (color += ' hover:bg-slate-500 hover:text-white') : '';
        return color;
      }
      break;
    case 'red':
      if (props.mode == 'plain') {
        color = 'bg-red-500 text-white';
        props.hover ? (color += ' hover:bg-red-600') : '';
        return color;
      }
      if (props.mode == 'light') {
        color = 'bg-red-200 text-red-900';
        props.hover ? (color += ' hover:bg-red-300') : '';
        return color;
      }
      if (props.mode == 'outlined') {
        color = 'border-2 border-red-500 text-red-600';
        props.hover ? (color += ' hover:bg-red-500 hover:text-white') : '';
        return color;
      }
      break;

    case 'orange':
      if (props.mode == 'plain') {
        color = 'bg-orange-500 text-white';
        props.hover ? (color += ' hover:bg-orange-600') : '';
        return color;
      }
      if (props.mode == 'light') {
        color = 'bg-orange-200 text-orange-900';
        props.hover ? (color += ' hover:bg-orange-300') : '';
        return color;
      }
      if (props.mode == 'outlined') {
        color = 'border-2 border-orange-500 text-orange-600';
        props.hover ? (color += ' hover:bg-orange-500 hover:text-white') : '';
        return color;
      }
      break;

    case 'yellow':
      if (props.mode == 'plain') {
        color = 'bg-yellow-500 text-white';
        props.hover ? (color += ' hover:bg-yellow-600') : '';
        return color;
      }
      if (props.mode == 'light') {
        color = 'bg-yellow-200 text-yellow-900';
        props.hover ? (color += ' hover:bg-yellow-300') : '';
        return color;
      }
      if (props.mode == 'outlined') {
        color = 'border-2 border-yellow-500 text-yellow-600';
        props.hover ? (color += ' hover:bg-yellow-500 hover:text-white') : '';
        return color;
      }
      break;

    case 'green':
      if (props.mode == 'plain') {
        color = 'bg-green-500 text-white';
        props.hover ? (color += ' hover:bg-green-600') : '';
        return color;
      }
      if (props.mode == 'light') {
        color = 'bg-green-200 text-green-900';
        props.hover ? (color += ' hover:bg-green-300') : '';
        return color;
      }
      if (props.mode == 'outlined') {
        color = 'border-2 border-green-500 text-green-600';
        props.hover ? (color += ' hover:bg-green-500 hover:text-white') : '';
        return color;
      }
      break;

    case 'blue':
      if (props.mode == 'plain') {
        color = 'bg-blue-500 text-white';
        props.hover ? (color += ' hover:bg-blue-600') : '';
        return color;
      }
      if (props.mode == 'light') {
        color = 'bg-blue-200 text-blue-900';
        props.hover ? (color += ' hover:bg-blue-300') : '';
        return color;
      }
      if (props.mode == 'outlined') {
        color = 'border-2 border-blue-500 text-blue-600';
        props.hover ? (color += ' hover:bg-blue-500 hover:text-white') : '';
        return color;
      }
      break;
    default:
      color = 'bg-slate-100 text-slate-800';
      props.hover ? (color += ' hover:bg-slate-200') : '';
      return color;
      break;
  }
});

const RoundedClass = computed(() => {
  switch (props.rounded) {
    case 'none':
      return 'rounded-none';
      break;
    case 'normal':
      return 'rounded';
      break;
    case 'medium':
      return 'rounded-md';
      break;
    case 'large':
      return 'rounded-lg';
      break;
    default:
      return '';
      break;
  }
});
</script>

<style scoped>
button {
  transition: background-color 0.5s ease-out;
}
</style>
