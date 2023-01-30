<template>
  <div class="tabs">
    <ul>
      <li v-for="title in tabTitles" :key="title" @click="selected = title">
        {{ title }}
      </li>
    </ul>

    <div class="tab-items">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { useSlots, computed, onMounted, ref, provide } from 'vue';

const tabTitles = ref([]);
const selected = ref();

provide('selected', selected);

onMounted(() => {
  useSlots()
    .default()
    .forEach((tab, index) => {
      tabTitles.value.push(tab.props.title);
    });
  selected.value = tabTitles.value[1];
});
</script>

<style scoped></style>
