<script setup>
import { ref } from 'vue';
import axios from 'axios';

    const nuevoLibro = ref({
        titulo: '',
        autor: '',
        ISBN: '',
        genero: '',
        precio: '',
        disponibilidad: ''
    })

    const crearLibro = async () => {
        try {
            const response = await axios.post('http://localhost:3000/libros', nuevoLibro.value);

            setTimeout(() => {
                alert('Libro creado exitosamente');
            }, 200)
            
            nuevoLibro.titulo= '',
            nuevoLibro.autor= '',
            nuevoLibro.ISBN= '',
            nuevoLibro.genero= '',
            nuevoLibro.precio= '',
            nuevoLibro.disponibilidad= ''
            
            console.log(response.data)
        } catch (error) {
            console.error(error, {message: 'Error al crear el libro'});
        }
    }
    
</script>

<template>
    <form @submit.prevent="crearLibro">
        <h1>Agrega un nuevo libro</h1>
        <div class="input-container">
            <label for="titulo">Titulo</label>
            <input name="titulo" type="text" v-model="nuevoLibro.titulo" required placeholder="titulo">
        </div>
        <div class="input-container">
            <label for="autor">autor</label>
            <input name="autor" type="text" v-model="nuevoLibro.autor" required placeholder="autor">
        </div>
        <div class="input-container">
            <label for="ISBN">ISBN</label>
            <input name="ISBN" type="text" v-model="nuevoLibro.ISBN" required placeholder="ISBN">
        </div>
        <div class="input-container">
            <label for="genero">genero</label>
            <input name="genero" type="text" v-model="nuevoLibro.genero" required placeholder="genero">
        </div>
        <div class="input-container">
            <label for="disponibilidad">disponibilidad</label>
            <input name="disponibilidad" type="text" v-model="nuevoLibro.disponibilidad" required placeholder="disponibilidad">
        </div>
        <button type="submit" class="buttonForm">Crear nuevo libro</button>
    </form>
</template> 

<style scoped>
    form{
        width: 300px;
        border: 2px solid black;
        padding: 20px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        box-shadow: black 2px 0px 15px;
        border: none;

    }
    h1{
        font-size: 25px;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
    input{
        border-radius: 16px;
        padding: 10px;
        font-size: 16px;
        border: 2px solid rgb(129, 128, 128);
    }
    input:hover{
        border: 2px solid rgb(40, 115, 228);
        transition: all 500ms ease-in-out;
    }
    label{
        font-size: 20px;
        margin-bottom: 10px;
    }
    .buttonForm{
        border: none;
        border-radius: 15px;
        padding: 10px;
        background-color: rgb(40, 115, 228);
        color: white;
        font-weight: bold;
        font-size: 18px;
        margin-top: 10px;
    }
    .buttonForm:hover{
        background-color: rgb(147, 189, 236);
        color: black;
        transition: all 500ms ease-in-out;
    }
</style>