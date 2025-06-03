<script setup>

</script>

<template>
    <nav class="bg-blue-600 text-white flex flex-row justify-between h-[60px] items-center">
        <h1>Crud con Vue 3</h1>
        <div class="flex flex-row gap-2 mr-[100px]">
            <router-link to="/" class="border-2 rounded p-2 hover:bg-blue-500">Home</router-link>
            <router-link to="/tareas" class="border-2 rounded p-2 hover:bg-blue-500">Tareas</router-link>
        </div>
    </nav>
</template>