<template>
  <LHButton @click="isOpen = true">
    <slot name="label">{{ props.label ?? 'Add a label' }}</slot>
  </LHButton>

  <teleport to="body">
    <div
      class="
        modal
        absolute
        inset-0
        flex
        justify-center
        items-start
        pt-64
        bg-slate-500/50
      "
      v-show="isOpen"
      @click.stop="isOpen = false"
    >
      <div class="modal-content w-2/3 opacity-100 bg-white p-4 relative">
        <LHClose
          v-if="props.dismissable"
          @click="open = false"
          :color="props.color"
        ></LHClose>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed } from 'vue';
import LHButton from './LHButton.vue';
import LHClose from './LHClose.vue';

const props = defineProps({
  label: {
    type: String,
  },
  dismissable: {
    type: Boolean,
    default: true,
  },
});

const isOpen = ref(false);
</script>

<style scoped></style>
