<script setup>
import { inject } from 'vue'
const canal = inject('miCanal')
</script>


<template>
    <div class="wrapper">
        <h1>Este es el hijo 3 o el nieto</h1>
        <h2>El canal es: {{canal}}</h2>
    </div>

</template>

<style scoped>
    .wrapper{
        border: 1px solod black;
        border-radius: 15px;
    }
</style>