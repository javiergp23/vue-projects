<script setup>

const props = defineProps({
    nombre2: String,
    edad2: Number
})
    
    const emit = defineEmits(['incrementar'])

    const enviar = () => {
        emit('incrementar', 'Javier Gonzalez', 33)
    }    
</script>

<template>
    <div>
        <h1>Componente Hijo</h1>
        <p>Mi nombre es {{nombre2}} y mi edad es de: {{edad2}}</P>
        <button @click="enviar">Incrementar datos</button>
    </div>
</template>

<style scoped>
    
</style>