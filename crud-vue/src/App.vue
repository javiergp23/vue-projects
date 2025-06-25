<script setup>
import NavBar from '../src/components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
