<template>
  <div class="tab" v-show="props.title == selected">
    <slot></slot>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed, onUpdated, inject } from 'vue';

const selected = inject('selected');

const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style scoped></style>
