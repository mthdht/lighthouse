<template>
  <div
    class="relative inline-block"
    ref="trigger"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <slot></slot>
    <div
      class="absolute whitespace-nowrap px-2 py-1 text-white rounded z-10"
      :class="[colorClass, showTooltip ? 'visible' : 'invisible']"
      ref="popper"
    >
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, onMounted, computed } from 'vue';
import tooltip from '@/utils/popper.js';

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

const showTooltip = ref(false);

const colorClass = computed(() => {
  switch (props.color) {
    case 'slate':
      return 'bg-slate-500 text-white';
      break;
    case 'red':
      return 'bg-red-500 text-white';
      break;

    case 'orange':
      return 'bg-orange-500 text-white';
      break;

    case 'yellow':
      return 'bg-yellow-500 text-white';
      break;

    case 'green':
      return 'bg-green-500 text-white';
      break;

    case 'blue':
      return 'bg-blue-500 text-white';
      break;
    default:
      return 'bg-slate-700 text-white';
      break;
  }
});

onMounted(() => {
  tooltip(trigger.value, popper.value, {
    placement: props.placement,
  });
});
</script>

<style scoped></style>
