<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import LHButton from './components/LHButton.vue';
import LHAlert from './components/LHAlert.vue';
import LHHeading from './components/LHHeading.vue';
import LHParagraph from './components/LHParagraph.vue';
import LHDivider from './components/LHDivider.vue';
import LHTooltip from './components/LHTooltip.vue';
import LHAvatar from './components/LHAvatar.vue';
</script>

<template>
  <h1>test components</h1>
  <h1>test components</h1>
  <h1>test components</h1>
  <h1>test components</h1>
  <h1>test components</h1>
  <h1>test components</h1>

  <div class="m-4">
    <LHParagraph>
      test paragraph
      <LHTooltip>
        a tooltip
        <template #info> Le text a montrer encore plus long </template>
      </LHTooltip>

      autre texte
    </LHParagraph>

    <LHParagraph>
      <LHAvatar size="6xl"></LHAvatar>
      test paragraph with fkhjghhj hgh gh hg h hgh
      <LHTooltip placement="left" color="blue">
        a tooltip a montrer encore plus long
        <template #info> Le text </template>
      </LHTooltip>

      autre texte
    </LHParagraph>
  </div>
</template>

<style scoped></style>
