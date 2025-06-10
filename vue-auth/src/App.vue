<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import Home from './views/HomeView.vue'
</script>

<template>
  <div class="wrapper">
    <NavBar/>
    <Home/>
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
