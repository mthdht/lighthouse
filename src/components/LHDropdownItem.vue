<template>
  <div class="dropdown-item px-4 py-2">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const colorClass = computed(() => {
  return 'orange';
});
</script>
