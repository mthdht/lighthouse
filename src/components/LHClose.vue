<template>
  <div class="absolute right-4 rounded p-1 cursor-pointer">
    <div class="">
      <div
        :class="closeClass"
        class="bar1 w-5 h-1 my-1 rotate-45 rounded-md translate-y-1"
      ></div>
      <div
        :class="closeClass"
        class="bar2 w-5 h-1 my-1 -rotate-45 -translate-y-1 rounded-md"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['', 'slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
});

const hoverClass = ref();

const closeClass = computed(() => {
  switch (props.color) {
    case 'slate':
      return 'bg-slate-700';
      break;
    case 'red':
      return 'bg-red-700';
      break;

    case 'orange':
      return 'bg-orange-700';
      break;

    case 'yellow':
      return 'bg-yellow-700';
      break;

    case 'green':
      return 'bg-green-700';
      break;

    case 'blue':
      return 'bg-blue-700';
      break;
    default:
      return 'bg-slate-600';
      break;
  }
});
</script>
