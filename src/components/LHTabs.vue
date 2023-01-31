<template>
  <div class="tabs rounded overflow-hidden">
    <ul class="flex px-4 border-b-2" :class="labelClass">
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selected = title"
        class="px-4 py-2 font-semibold"
        :class="[selected == title ? activeClass : colorClass, roundedClass]"
      >
        {{ title }}
      </li>
    </ul>

    <div class="tab-items p-4 relative" :class="contentColor">
      <slot :color="props.color"></slot>
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { useSlots, computed, onMounted, ref, provide } from 'vue';

const tabTitles = ref([]);
const selected = ref();
const activeClass = ref();
const labelClass = ref();
const contentColor = ref();

const props = defineProps({
  color: {
    type: String,
    default: 'slate',
    validator(value) {
      // The value must match one of these strings
      return ['slate', 'red', 'orange', 'yellow', 'blue'].includes(value);
    },
  },
  background: {
    type: Boolean,
    default: false,
  },
  pills: {
    type: Boolean,
    default: false,
  },
});

provide('selected', selected);

onMounted(() => {
  useSlots()
    .default()
    .forEach((tab, index) => {
      tabTitles.value.push(tab.props.title);
    });
  selected.value = tabTitles.value[0];
});

const colorClass = computed(() => {
  switch (props.color) {
    case 'slate':
      activeClass.value = 'bg-slate-500 text-white';
      labelClass.value = 'border-slate-500';
      contentColor.value = props.background ? 'bg-slate-200' : '';
      return 'text-slate-700 hover:bg-slate-100';
      break;
    case 'red':
      activeClass.value = 'bg-red-500 text-white';
      labelClass.value = 'border-red-500';
      contentColor.value = props.background ? 'bg-red-200' : '';
      return 'text-red-700 hover:bg-red-100';
      break;

    case 'orange':
      activeClass.value = 'bg-orange-500 text-white';
      labelClass.value = 'border-orange-500';
      contentColor.value = props.background ? 'bg-orange-200' : '';
      return 'text-orange-700 hover:bg-orange-100';
      break;

    case 'yellow':
      activeClass.value = 'bg-yellow-500 text-white';
      labelClass.value = 'border-yellow-500';
      contentColor.value = props.background ? 'bg-yellow-200' : '';
      return 'text-yellow-700 hover:bg-yellow-100';
      break;

    case 'green':
      activeClass.value = 'bg-green-500 text-white';
      labelClass.value = 'border-green-500';
      contentColor.value = props.background ? 'bg-green-200' : '';
      return 'text-green-700 hover:bg-green-100';
      break;

    case 'blue':
      activeClass.value = 'bg-blue-500 text-white';
      labelClass.value = 'border-blue-500';
      contentColor.value = props.background ? 'bg-blue-200' : '';
      return 'text-blue-700 hover:bg-blue-100';
      break;
    default:
      return 'bg-slate-700 text-white';
      break;
  }
});

const roundedClass = computed(() => {
  return props.pills ? 'rounded-lg my-2 mx-1' : 'rounded-t';
});
</script>

<style scoped></style>
