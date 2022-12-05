<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
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
});

const trigger = ref();

const popper = ref();

let colorClass = '';

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

console.log(trigger);
</script>

<template>
  <div class="relative inline-block" ref="trigger">
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
      "
      ref="popper"
    >
      <slot name="info"></slot>
    </div>
  </div>
  <!--
  <div class="inline-block">
    <div class="inline-block" ref="trigger">
      <slot></slot>
    </div>
    <div class="absolute" ref="popper">
      <slot name="info"></slot>
    </div>
  </div>
  -->
</template>

<style scoped></style>
