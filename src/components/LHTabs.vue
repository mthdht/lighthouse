<template>
  <div class="tabs">
    <ul class="flex px-4 border-b-2" :class="labelClass">
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selected = title"
        class="px-4 py-2 font-semibold rounded-t"
        :class="[selected == title ? activeClass : colorClass]"
      >
        {{ title }}
      </li>
    </ul>

    <div class="tab-items p-4" :class="contentColor">
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
      contentColor.value = 'bg-slate-200';
      return 'text-slate-700 hover:bg-slate-200';
      break;
    case 'red':
      activeClass.value = 'bg-red-500 text-white';
      labelClass.value = 'border-red-500';
      contentColor.value = 'bg-red-200';
      return 'text-red-700 hover:bg-red-200';
      break;

    case 'orange':
      activeClass.value = 'bg-orange-500 text-white';
      labelClass.value = 'border-orange-500';
      contentColor.value = 'bg-orange-200';
      return 'text-orange-700 hover:bg-orange-200';
      break;

    case 'yellow':
      activeClass.value = 'bg-yellow-500 text-white';
      labelClass.value = 'border-yellow-500';
      contentColor.value = 'bg-yellow-200';
      return 'text-yellow-700 hover:bg-yellow-200';
      break;

    case 'green':
      activeClass.value = 'bg-green-500 text-white';
      labelClass.value = 'border-green-500';
      contentColor.value = 'bg-green-200';
      return 'text-green-700 hover:bg-green-200';
      break;

    case 'blue':
      activeClass.value = 'bg-blue-500 text-white';
      labelClass.value = 'border-blue-500';
      contentColor.value = 'bg-blue-200';
      return 'text-blue-700 hover:bg-blue-200';
      break;
    default:
      return 'bg-slate-700 text-white';
      break;
  }
});
</script>

<style scoped></style>
