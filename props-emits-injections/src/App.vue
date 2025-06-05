<script setup>
import Hijo from '@/components/Hijo.vue'
import Hijo2  from '@/components/hijo2.vue'
import { ref, provide } from 'vue'

const nombre = ref('Javier')
const edad = ref(20)

const cambiarValor = (valor1, valor2) => {
    nombre.value = valor1;
    edad.value = valor2;
}
const nombre2 = ref('Javier')
const edad2 = ref(20)

const cambiarValor2 = (valor1, valor2) => {
    nombre2.value = valor1;
    edad2.value = valor2;
}


const canal = ref('Canal de vue')

provide('miCanal', canal)

</script>

<template>
  <div class="wrapper">
    <h1>Componente padre:</h1>
    <Hijo :nombre="nombre" :edad="edad" @modificar="cambiarValor"/>
    <Hijo2 :nombre2="nombre2" :edad2="edad2" @incrementar="cambiarValor2"/>
  </div>

</template>

<style scoped>
  .wrapper{
    border: 1px solid black;
    border-radius: 15px;
    padding: 20px;
  }
</style>
