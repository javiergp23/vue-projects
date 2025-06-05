<script setup>

const props = defineProps({
    nombre: String,
    edad: Number
})


const emit = defineEmits(['modificar'])

const enviar = () => {
    emit('modificar', 'Daniel', 28)
}

</script>

<template>
    <div class="wrapper">
        <h1>Componente Hijo</h1>
        <p>Mi nombre es {{nombre}} y mi edad es de: {{edad}}</P>
        <button @click="enviar">Cambiar valores</button>
    </div>

</template>

<style scoped>
.wrapper{
  border: 1px solid black;
  border-radius: 15px;
}
</style>
    