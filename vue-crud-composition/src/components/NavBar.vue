<script setup>
import { RouterLink} from 'vue-router';
</script>

<template>
    <nav>
        <h1>NavBar Crud</h1>
        <ul>
            <RouterLink to="/" class="buttonLink">Inicio</RouterLink>
            <RouterLink to="/nuevoLibro" class="buttonLink">Nuevo Libro</RouterLink>
        </ul>
    </nav>
</template>

<style scoped>
    ul{
        display: flex;
        flex-direction: row;
        gap: 5px;
        
    }

    .buttonLink{
        border: 2px solid black;
        border-radius: 15px;
        padding: 10px;
        text-decoration: none;
    }
    .buttonLink:hover{
        background-color: black;
        color: white;
    }

</style>