<template>
  <div
    class="
      avatar-container
      inline-block
      rounded-full
      overflow-hidden
      bg-blue-500
    "
  >
    <img
      :src="props.src"
      :alt="props.alt"
      :class="[sizeClass, props.width, props.height]"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: 'https://www.w3schools.com/howto/img_avatar.png',
  },
  alt: {
    type: String,
    default: 'An avatar',
  },
  width: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'w-5 h-5';
      break;
    case 'sm':
      return 'w-6 h-6';
      break;
    case 'md':
      return 'w-8 h-8';
      break;
    case 'lg':
      return 'w-10 h-10';
      break;
    case 'xl':
      return 'w-12 h-12';
      break;
    case '2xl':
      return 'w-14 h-14';
      break;
    case '3xl':
      return 'w-16 h-16';
      break;
    case '4xl':
      return 'w-20 h-20';
      break;
    case '5xl':
      return 'w-24 h-24';
      break;
    case '6xl':
      return 'w-32 h-32';
      break;
    default:
      return 'w-10 h-10';
  }
});
</script>
