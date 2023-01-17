<template>
  <div class="dropdown-item px-4 py-2" :class="colorClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
  },
});

const colorClass = computed(() => {
  switch (props.color) {
    case 'slate':
      return 'bg-slate-300 hover:bg-slate-400';
      break;
    case 'red':
      return 'bg-red-300 hover:bg-red-400';
      break;

    case 'orange':
      return 'bg-orange-300 hover:bg-orange-400';
      break;

    case 'yellow':
      return 'bg-yellow-300 hover:bg-yellow-400';
      break;

    case 'green':
      return 'bg-green-300 hover:bg-green-400';
      break;

    case 'blue':
      return 'bg-blue-300 hover:bg-blue-400';
      break;
    default:
      return 'bg-slate-50 hover:bg-slate-100';
      break;
  }
});
</script>
