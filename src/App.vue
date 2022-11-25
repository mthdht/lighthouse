<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import LHButton from './components/LHButton.vue';
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
  <LHButton color="blue" mode="plain">test ok</LHButton>
</template>

<style scoped></style>
