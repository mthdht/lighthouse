<template>
  <div :class="[sizeClass, colorClass]"></div>
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
  size: {
    type: String,
    default: 'normal',
    validator(value) {
      return ['xs', 'sm', 'medium', 'lg', 'xl'].includes(value);
    },
  },
});

let colorClass = '';
let sizeClass = '';

switch (props.color) {
  case 'slate':
    colorClass = 'bg-slate-500';
    break;
  case 'red':
    colorClass = 'bg-red-500';
    break;

  case 'orange':
    colorClass = 'bg-orange-500';
    break;

  case 'yellow':
    colorClass = 'bg-yellow-500';
    break;

  case 'green':
    colorClass = 'bg-green-500';
    break;

  case 'blue':
    colorClass = 'bg-blue-500';
    break;
  default:
    colorclass = 'bg-slate-800';
    break;
}

switch (props.size) {
  case 'xs':
    sizeClass = 'h-px';
    break;
  case 'sm':
    sizeClass = 'h-0.5';
    break;
  case 'md':
    sizeClass = 'h-1';
    break;
  case 'lg':
    sizeClass = 'h-2';
    break;
  case 'xl':
    sizeClass = 'h-5';
    break;
  case '2xl':
    sizeClass = 'h-6';
    break;
  case '3xl':
    sizeClass = 'h-8';
    break;
  default:
    sizeClass = 'h-px';
    break;
}
</script>

<style scoped></style>
