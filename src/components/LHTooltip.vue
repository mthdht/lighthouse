<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, onMounted } from 'vue';
import position from '@/utils/popper.js';

const props = defineProps({
  color: {
    type: String,
    default: 'slate',
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  placement: {
    type: String,
    default: 'auto',
    validator(value) {
      return ['auto', 'top', 'left', 'right', 'bottom'].includes(value);
    },
  },
});

const trigger = ref();

const popper = ref();

let colorClass = '';

switch (props.color) {
  case 'slate':
    colorClass = 'bg-slate-400 text-white';
    break;
  case 'red':
    colorClass = 'bg-red-500 text-white';
    break;

  case 'orange':
    colorClass = 'bg-orange-500 text-white';
    break;

  case 'yellow':
    colorClass = 'bg-yellow-500 text-white';
    break;

  case 'green':
    colorClass = 'bg-green-500 text-white';
    break;

  case 'blue':
    colorClass = 'bg-blue-500 text-white';
    break;
  default:
    colorclass = 'bg-slate-400 text-white';
    break;
}

onMounted(() => {
  position(trigger, popper, {
    placement: 'right',
  });
});
</script>

<template>
  <div class="relative inline-block bg-red-500" ref="trigger">
    <slot></slot>
    <div
      class="
        absolute
        whitespace-nowrap
        px-2
        py-1
        bg-slate-500
        text-white
        rounded
        z-10
      "
      ref="popper"
    >
      <slot name="info"></slot>
    </div>
  </div>
</template>

<style scoped></style>
