<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import LHButton from './components/LHButton.vue';
import LHAlert from './components/LHAlert.vue';
import LHHeading from './components/LHHeading.vue';
import LHParagraph from './components/LHParagraph.vue';
import LHDivider from './components/LHDivider.vue';
import LHTooltip from './components/LHTooltip.vue';
</script>

<template>
  <h1>test components</h1>
  <h1>test components</h1>
  <h1>test components</h1>
  <h1>test components</h1>
  <h1>test components</h1>
  <h1>test components</h1>
  <h1>test components</h1>
  <h1>test components</h1>
  <h1>test components</h1>

  <div class="m-4">
    <LHParagraph>
      test paragraph with
      <LHTooltip>
        a tooltip
        <template #info> Le text a montrer </template>
      </LHTooltip>

      autre texte
    </LHParagraph>
  </div>
</template>

<style scoped></style>
