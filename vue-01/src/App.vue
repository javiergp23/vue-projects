<script setup>
import Hijo from './components/Hijo.vue'
import { ref } from 'vue';

  const nombre = ref('Javier')
  const edad = ref(18)
</script>

<template>
  <h1>Padre: </h1>
  <Hijo :nombre="nombre" :edad="edad"/>
 
</template>

<style>
 

</style>