<script setup>
import { inject } from 'vue'
import Nieto from '@/components/Nieto.vue'
const canal = inject('miCanal')

const modificar = () => {
    canal.value = 'Canal modificado desde el nieto'
}
</script>

<template>
    <div class="wrapper">
        <h1>Componente Hijo 2</h1>
        
        <div>
            <Nieto/>
        </div>
        <button @click="modificar">Modificar</button>
    </div>
    
</template>

<style scoped>
    .wrapper{
        border: 1px solid black;
        border-radius: 15px;    
        padding: 20px;
    }
</style>