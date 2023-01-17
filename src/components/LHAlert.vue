<template>
  <div
    v-show="open"
    :class="[colorClass, roundedClass]"
    class="p-4 font-semibold shadow-md relative"
  >
    <font-awesome-icon
      v-if="props.dismissable"
      @click="close"
      icon="fa-solid fa-xmark"
      class="absolute right-4 w-5 h-5 rounded p-1 cursor-pointer"
      :class="dismissClass"
    />
    <slot></slot>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed } from 'vue';

const open = ref(true);

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      // The value must match one of these strings
      return ['', 'slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  mode: {
    type: String,
    default: 'plain',
    validator(value) {
      // The value must match one of these strings
      return ['', 'plain', 'light', 'outlined'].includes(value);
    },
  },
  rounded: {
    type: String,
    default: 'normal',
    validator(value) {
      // The value must match one of these strings
      return ['none', 'normal', 'medium', 'large'].includes(value);
    },
  },
  dismissable: {
    type: Boolean,
    default: true,
  },
});

let colorClass = '';
let dismissClass = '';

function close() {
  open.value = false;
}

switch (props.color) {
  case 'slate':
    if (props.mode == 'plain') {
      colorClass = 'bg-slate-400 text-slate-800';
      dismissClass = 'hover:bg-slate-500';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-slate-200 text-slate-800';
      dismissClass = 'hover:bg-slate-300';
    }
    if (props.mode == 'outlined') {
      colorClass = 'text-slate-800 border-l-4 border-slate-500 bg-slate-50';
      dismissClass = 'hover:bg-slate-200';
    }
    break;
  case 'red':
    if (props.mode == 'plain') {
      colorClass = 'bg-red-500 text-white';
      dismissClass = 'hover:bg-red-600';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-red-200 text-red-900';
      dismissClass = 'hover:bg-red-300';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-l-4 border-red-500 text-red-700 bg-red-50';
      dismissClass = 'hover:bg-red-200';
    }
    break;

  case 'orange':
    if (props.mode == 'plain') {
      colorClass = 'bg-orange-500 text-white';
      dismissClass = 'hover:bg-orange-600';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-orange-200 text-orange-900';
      dismissClass = 'hover:bg-orange-300';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-l-4 border-orange-500 text-orange-700 bg-orange-50';
      dismissClass = 'hover:bg-orange-200';
    }
    break;

  case 'yellow':
    if (props.mode == 'plain') {
      colorClass = 'bg-yellow-500 text-white';
      dismissClass = 'hover:bg-yellow-600';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-yellow-200 text-yellow-900';
      dismissClass = 'hover:bg-yellow-300';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-l-4 border-yellow-500 text-yellow-700 bg-yellow-50';
      dismissClass = 'hover:bg-yellow-200';
    }
    break;

  case 'green':
    if (props.mode == 'plain') {
      colorClass = 'bg-green-500 text-white';
      dismissClass = 'hover:bg-green-600';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-green-200 text-green-900';
      dismissClass = 'hover:bg-green-300';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-l-4 border-green-500 text-green-600';
      dismissClass = 'hover:bg-green-200';
    }
    break;

  case 'blue':
    if (props.mode == 'plain') {
      colorClass = 'bg-blue-500 text-white';
      dismissClass = 'hover:bg-blue-600';
    }
    if (props.mode == 'light') {
      colorClass = 'bg-blue-200 text-blue-900';
      dismissClass = 'hover:bg-blue-300';
    }
    if (props.mode == 'outlined') {
      colorClass = 'border-l-4 border-blue-500 text-blue-700 bg-blue-50';
      dismissClass = 'hover:bg-blue-200';
    }
    break;
  default:
    colorClass = 'bg-slate-100 text-slate-800';
    dismissClass = 'hover:bg-slate-200';
    if (props.mode == 'outlined') {
      colorClass += ' border-l-4 border-slate-500';
    }
    break;
}

const roundedClass = computed(() => {
  switch (props.rounded) {
    case 'none':
      return 'rounded-none';
      break;
    case 'normal':
      return 'rounded';
      break;
    case 'medium':
      return 'rounded-md';
      break;
    case 'large':
      return 'rounded-lg';
      break;
    default:
      return 'rounded';
      break;
  }
});
</script>

<style scoped></style>
