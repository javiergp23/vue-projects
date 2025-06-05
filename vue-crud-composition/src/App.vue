<script setup>
import {  RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="nav-wrapper">
    <NavBar/>
    <RouterView/>
  </div>
</template>

<style scoped>
  .nav-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
