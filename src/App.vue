<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import LHButton from './components/LHButton.vue';
import LHAlert from './components/LHAlert.vue';
import LHHeading from './components/LHHeading.vue';
</script>

<template>
  <h1>test components</h1>

  <LHButton>test ok</LHButton>
  <br />
  <LHButton color="red" mode="light">test ok</LHButton>
  <br />
  <LHButton color="red" mode="outlined">test ok</LHButton>
  <br />
  <LHButton color="orange" mode="outlined">test ok</LHButton>
  <br />
  <LHButton color="yellow" mode="outlined">test ok</LHButton>
  <br />
  <LHButton color="green" mode="outlined">test ok</LHButton>
  <br />
  <LHButton color="blue" mode="plain" rounded="normal">test ok</LHButton>

  <div class="m-4">
    <LHAlert mode="outlined" color="blue">test alert ok </LHAlert>
    <LHAlert mode="plain" color="blue">test alert ok </LHAlert>
    <LHAlert>test alert ok </LHAlert>
    <LHHeading level="1" color="red" background> test ok </LHHeading>
  </div>
</template>

<style scoped></style>
