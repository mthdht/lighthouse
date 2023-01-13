<template>
  <div :class="[]" class="relative">
    <LHButton hover class="dropdown-button px-4 py-2" :color="props.color">
      <slot name="label">{{ props.label ?? 'Add a label' }}</slot>
    </LHButton>

    <div
      class="dropdown-items mt-2 absolute whitespace-nowrap"
      :class="itemClass"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import LHDropdownItem from './LHDropdownItem.vue';
import LHButton from './LHButton.vue';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  label: {
    type: String,
  },
});

let labelClass = '';
let itemClass = '';

switch (props.color) {
  case 'slate':
    itemClass = 'bg-slate-300';
    break;
  case 'red':
    itemClass = 'bg-red-300';
    break;

  case 'orange':
    itemClass = 'bg-orange-300';
    break;

  case 'yellow':
    itemClass = 'bg-yellow-300';
    break;

  case 'green':
    itemClass = 'bg-green-300';
    break;

  case 'blue':
    itemClass = 'bg-blue-300';
    break;
  default:
    itemClass = 'bg-slate-50';
    break;
}
</script>

<style scoped>
.dropdown-items {
  min-width: 160px;
}
</style>
