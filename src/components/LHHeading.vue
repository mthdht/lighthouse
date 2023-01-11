<template>
  <div :class="[sizeClass, colorClass, marginClass, paddingClass]">
    <component :is="tag">
      <slot></slot>
    </component>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

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
  level: {
    type: String,
    default: '2',
    validator(value) {
      return ['1', '2', '3', '4', '5', '6'].includes(value);
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

let colorClass = '';
let sizeClass = '';
let marginClass = props.noMargin ? '' : 'my-4';
let paddingClass = props.noPadding ? '' : 'py-2 px-4';
let tag = 'h' + props.level;

switch (props.color) {
  case 'slate':
    colorClass = props.background
      ? 'bg-slate-400 text-white'
      : 'text-slate-800';
    break;
  case 'red':
    colorClass = props.background ? 'bg-red-500 text-white' : 'text-red-800';
    break;

  case 'orange':
    colorClass = props.background
      ? 'bg-orange-500 text-white'
      : 'text-orange-800';
    break;

  case 'yellow':
    colorClass = props.background
      ? 'bg-yellow-500 text-white'
      : 'text-yellow-800';
    break;

  case 'green':
    colorClass = props.background
      ? 'bg-green-500 text-white'
      : 'text-green-800';
    break;

  case 'blue':
    colorClass = props.background ? 'bg-blue-500 text-white' : 'text-blue-800';
    break;
  default:
    colorclass = props.background
      ? 'bg-slate-400 text-white'
      : 'text-slate-800';
    break;
}

switch (props.size) {
  case 'xs':
    sizeClass = 'text-xs';
    break;
  case 'sm':
    sizeClass = 'text-sm';
    break;
  case 'normal':
    sizeClass = 'test-normal';
    break;
  case 'lg':
    sizeClass = 'text-lg';
    break;
  case 'xl':
    sizeClass = 'text-xl';
    break;
  case '2xl':
    sizeClass = 'text-2xl';
    break;
  case '3xl':
    sizeClass = 'text-3xl';
    break;
  case '4xl':
    sizeClass = 'text-4xl';
    break;
  case '5xl':
    sizeClass = 'text-5xl';
    break;
  case '6xl':
    sizeClass = 'text-6xl';
    break;
  case '7xl':
    sizeclass = '7xl';
    break;
  case '8xl':
    sizeClass = '8xl';
    break;
  case '9xl':
    sizeClass = '9xl';
    break;
  default:
    sizeClass = 'text-normal';
    break;
}
</script>

<style scoped></style>
