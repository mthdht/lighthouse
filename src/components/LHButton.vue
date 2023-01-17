<template>
  <button :class="[colorClass, roundedClass]" class="px-4 py-2 font-semibold">
    <slot></slot>
  </button>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

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

let colorClass = 'slate';
let roundedClass = 'rounded';

switch (props.color) {
  case 'slate':
    if (props.mode == 'plain') {
      colorClass = 'bg-slate-500 text-white';
      props.hover ? (colorClass += ' hover:bg-slate-600') : '';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-slate-100 text-slate-800';
      props.hover ? (colorClass += ' hover:bg-slate-200') : '';
    }
    if (props.mode == 'outlined') {
      colorClass = 'text-slate-600 border-2 border-slate-500';
      props.hover ? (colorClass += ' hover:bg-slate-500 hover:text-white') : '';
    }
    break;
  case 'red':
    if (props.mode == 'plain') {
      colorClass = 'bg-red-500 text-white';
      props.hover ? (colorClass += ' hover:bg-red-600') : '';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-red-200 text-red-900';
      props.hover ? (colorClass += ' hover:bg-red-300') : '';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-2 border-red-500 text-red-600';
      props.hover ? (colorClass += ' hover:bg-red-500 hover:text-white') : '';
    }
    break;

  case 'orange':
    if (props.mode == 'plain') {
      colorClass = 'bg-orange-500 text-white';
      props.hover ? (colorClass += ' hover:bg-orange-600') : '';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-orange-200 text-orange-900';
      props.hover ? (colorClass += ' hover:bg-orange-300') : '';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-2 border-orange-500 text-orange-600';
      props.hover
        ? (colorClass += ' hover:bg-orange-500 hover:text-white')
        : '';
    }
    break;

  case 'yellow':
    if (props.mode == 'plain') {
      colorClass = 'bg-yellow-500 text-white';
      props.hover ? (colorClass += ' hover:bg-yellow-600') : '';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-yellow-200 text-yellow-900';
      props.hover ? (colorClass += ' hover:bg-yellow-300') : '';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-2 border-yellow-500 text-yellow-600';
      props.hover
        ? (colorClass += ' hover:bg-yellow-500 hover:text-white')
        : '';
    }
    break;

  case 'green':
    if (props.mode == 'plain') {
      colorClass = 'bg-green-500 text-white';
      props.hover ? (colorClass += ' hover:bg-green-600') : '';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-green-200 text-green-900';
      props.hover ? (colorClass += ' hover:bg-green-300') : '';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-2 border-green-500 text-green-600';
      props.hover ? (colorClass += ' hover:bg-green-500 hover:text-white') : '';
    }
    break;

  case 'blue':
    if (props.mode == 'plain') {
      colorClass = 'bg-blue-500 text-white';
      props.hover ? (colorClass += ' hover:bg-blue-600') : '';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-blue-200 text-blue-900';
      props.hover ? (colorClass += ' hover:bg-blue-300') : '';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-2 border-blue-500 text-blue-600';
      props.hover ? (colorClass += ' hover:bg-blue-500 hover:text-white') : '';
    }
    break;
  default:
    colorClass = 'bg-slate-100 text-slate-800';
    props.hover ? (colorClass += ' hover:bg-slate-200') : '';
    break;
}

switch (props.rounded) {
  case 'none':
    roundedClass = 'rounded-none';
    break;
  case 'normal':
    roundedClass = 'rounded';
    break;
  case 'medium':
    roundedClass = 'rounded-md';
    break;
  case 'large':
    roundedClass = 'rounded-lg';
    break;
  default:
    roundedClass = '';
    break;
}
</script>

<style scoped></style>
