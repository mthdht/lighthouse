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
});

let colorClass = '';
let sizeClass = '';

switch (props.color) {
  case 'slate':
    colorClass = 'text-slate-800';
    break;
  case 'red':
    colorClass = 'text-red-800';
    break;

  case 'orange':
    colorClass = 'text-orange-800';
    break;

  case 'yellow':
    colorClass = 'text-yellow-800';
    break;

  case 'green':
    colorClass = 'text-green-800';
    break;

  case 'blue':
    colorClass = 'text-blue-800';
    break;
  default:
    colorclass = 'text-slate-800';
    break;
}
</script>

<template>
  <div class="" v-if="props.level">
    <h1><slot></slot></h1>
  </div>
</template>

<style scoped></style>
