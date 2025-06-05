<script setup>
import {ref, computed} from 'vue'
import {datos} from '../../datos.js'

const contador = ref(0)
const total = datos.length
const nombres = datos

const siguiente = () => {
  if(contador.value < total){
    contador.value++
  }else if(contador.value <= total){
    contador.value = 0
  }
}

const rey = computed(() => {
  const datos = nombres[contador.value].nombre.toLowerCase()
  return datos
})
</script>

<template>
  <h2>Cena {{contador +1}} con: {{rey}}</h2>
  <button @click="siguiente">Siguiente ({{contador +1}}/{{total}})</button>
</template>
