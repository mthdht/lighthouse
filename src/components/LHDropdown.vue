<template>
  <div :class="[]" class="relative">
    <div class="dropdown-button bg-slate-500 px-4 py-2">
      <slot name="label">{{ props.label ?? 'Add a label' }}</slot>
    </div>

    <div class="dropdown-items mt-2 bg-slate-400 absolute whitespace-nowrap">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import LHDropdownItem from './LHDropdownItem.vue';

const props = defineProps({
  color: {
    type: String,
    default: 'slate',
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  label: {
    type: String,
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

<style scoped>
.dropdown-items {
  min-width: 160px;
}
</style>
