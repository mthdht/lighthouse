<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

const props = defineProps({
  color: {
    type: String,
    default: 'slate',
  },
  mode: {
    type: String,
    default: 'plain',
  },
});

let colorClass = 'slate';

switch (props.color) {
  case 'slate':
    if (props.mode == 'plain') {
      colorClass = 'bg-slate-300 text-slate-800';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-slate-100 text-slate-800';
    }
    if (props.mode == 'outlined') {
      colorClass = 'text-slate-600 border-2 border-slate-500';
    }
    break;
  case 'red':
    if (props.mode == 'plain') {
      colorClass = 'bg-red-500 text-white';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-red-200 text-red-900';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-2 border-red-500 text-red-600';
    }
    break;

  case 'orange':
    if (props.mode == 'plain') {
      colorClass = 'bg-orange-500 text-white';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-orange-200 text-orange-900';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-2 border-orange-500 text-orange-600';
    }
    break;

  case 'yellow':
    if (props.mode == 'plain') {
      colorClass = 'bg-yellow-500 text-white';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-yellow-200 text-yellow-900';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-2 border-yellow-500 text-yellow-600';
    }
    break;

  case 'green':
    if (props.mode == 'plain') {
      colorClass = 'bg-green-500 text-white';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-green-200 text-green-900';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-2 border-green-500 text-green-600';
    }
    break;

  case 'blue':
    if (props.mode == 'plain') {
      colorClass = 'bg-blue-500 text-white';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-blue-200 text-blue-900';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-2 border-blue-500 text-blue-600';
    }
    break;
  default:
    colorClass = 'bg-slate-200 text-slate-800';
}
</script>

<template>
  <button :class="colorClass" class="px-2 py-1">
    <slot></slot>
  </button>
</template>

<style scoped></style>
