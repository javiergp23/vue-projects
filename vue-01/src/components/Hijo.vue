<template>
    <h1>Hijo: </h1>
    <h2>Te llamas {{nombre}} y tienes {{edad}} años</h2>
</template>

<script setup>
    const props = defineProps({
        nombre: String,
        edad: Number
    })
</script>