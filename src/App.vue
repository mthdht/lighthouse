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
import LHDropdown from './components/LHDropdown.vue';
import LHDropdownItem from './components/LHDropdownItem.vue';
</script>

<template>
  <h1>test components</h1>

  <LHAlert color="slate" mode="outlined"> merci </LHAlert>
  <LHAlert color="red" mode="outlined"> merci </LHAlert>
  <LHAlert color="orange" mode="outlined"> merci </LHAlert>
  <LHAlert color="yellow" mode="outlined"> merci </LHAlert>
  <LHAlert color="green" mode="outlined"> merci </LHAlert>
  <LHAlert color="blue" mode="outlined"> merci </LHAlert>
  <LHAlert color="" mode="outlined"> merci </LHAlert>

  <p>
    dfg dfgfdgfgf gdfg <LHTooltip>ok</LHTooltip>
    <LHButton hover>ookodfr</LHButton>
  </p>

  <div class="m-4 flex justify-around">
    <LHButton hover mode="outlined" color="blue">un boutton</LHButton>

    <LHDropdown class="" color="orange">
      <template #label>it works!</template>

      <LHDropdownItem>Un item</LHDropdownItem>
      <LHDropdownItem>Un item 2</LHDropdownItem>
      <LHDropdownItem>Un item 3 fjhjkgh jghjg </LHDropdownItem>
    </LHDropdown>
  </div>
</template>

<style scoped></style>
