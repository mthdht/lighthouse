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
  <div class="m-4">
    <h1 class="mb-6">test components</h1>

    <LHAlert color="green" mode="light"> merci </LHAlert>

    <p class="my-6">
      dfg dfgfdgfgf gdfg
      <LHTooltip placement="bottom">
        un tooltip
        <template #info>le pop up</template>
      </LHTooltip>
    </p>

    <LHButton mode="outlined" color="blue" rounded="normal" hover
      >un boutton</LHButton
    >
    <br />
    <LHDropdown class="my-6" color="red" label="fonctionne" rounded click>
      <LHDropdownItem color="red">Un item</LHDropdownItem>
      <LHDropdownItem color="red">Un item 2</LHDropdownItem>
      <LHDropdownItem color="red">Un item 3 fjhjkgh jghjg </LHDropdownItem>
    </LHDropdown>
    <br />
    <LHAvatar size="" />
  </div>
</template>

<style scoped></style>
