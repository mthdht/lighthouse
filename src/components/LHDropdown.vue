<template>
  <div :class="[colorClass]"></div>
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
});

let colorClass = '';

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
    colorclass = 'bg-slate-500';
    break;
}
</script>

<style scoped></style>
