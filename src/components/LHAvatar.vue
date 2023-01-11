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

let sizeClass = '';

switch (props.size) {
  case 'xs':
    sizeClass = 'w-5 h-5';
    break;
  case 'sm':
    sizeClass = 'w-6 h-6';
    break;
  case 'md':
    sizeClass = 'w-8 h-8';
    break;
  case 'lg':
    sizeClass = 'w-10 h-10';
    break;
  case 'xl':
    sizeClass = 'w-12 h-12';
    break;
  case '2xl':
    sizeClass = 'w-14 h-14';
    break;
  case '3xl':
    sizeClass = 'w-16 h-16';
    break;
  case '4xl':
    sizeClass = 'w-20 h-20';
    break;
  case '5xl':
    sizeClass = 'w-24 h-24';
    break;
  case '6xl':
    sizeClass = 'w-32 h-32';
    break;
  default:
    sizeClass = 'w-10 h-10';
}
</script>
