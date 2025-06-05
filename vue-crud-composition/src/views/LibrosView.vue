<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

    const libros = ref([]);

    onMounted(() => {
        listarLibros();
    })

    const listarLibros = async () => {
        try {
            const response = await axios.get('http://localhost:3000/libros');
            libros.value = response.data;
            console.log(libros.value)
        } catch (error) {
            console.error(error, {message: 'Error al listar libros desde el endpount'});
        }
    }

    const eliminarLibro = async (id, titulo) => {
        const confirmDelete = window.confirm("Estas seguro de eliminar el libro " + titulo + " ?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/libros/${id}`);
                listarLibros();
            } catch (error) {
                console.error(error, {message: 'Error al eliminar el libro'});
            }
        }
    }


</script>

<template>
    <main>
        <div>
        <table class="table-container">
            <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>ISBN</th>
                        <th>Género</th>
                        <th>Precios</th>
                        <th>Disponibilidad</th>
                        <th>Acciones</th>
                    </tr>
            </thead>
            <tbody>
                <tr v-for="libro in libros" :key="libro.id">
                    <td>{{libro.id}}</td>
                    <td>{{libro.titulo}}</td>
                    <td>{{libro.ISBN}}</td>
                    <td>{{libro.genero}}</td>
                    <td>{{libro.precio}}</td>
                    <td>{{libro.disponibilidad}}</td>
                    <td>
                        <RouterLink :to="{path: 'editarLibro/'+libro.id}" class="buttonLink">
                            Editar
                        </RouterLink>
                        <button @click="eliminarLibro(libro.id,libro.titulo)">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </main>
</template>

<style scoped>
    div{
        border: 1px solid black;
        padding: 30px;
        border-radius: 15px;
        box-shadow: black 2px 0px 15px;
    }
    table{
        padding: 10px;
        border-collapse: collapse;
    }

    table, th, td{
        border-bottom: 1px solid black;
    }
    td{
        padding: 18px;
        text-align: center;
    }

    th{
        text-align: center;
    }
    
    
    button{
        color: white;
        margin: 5px;
        border: none;
        border-radius: 15px;
        padding: 10px;
        background-color: rgb(40, 115, 228);
    }
    button:hover{
        background-color: rgb(147, 189, 236);
        color: black;
    }
    .buttonLink{
        text-decoration: none;
        color: white;
        margin: 5px;
        border: none;
        border-radius: 15px;
        padding: 8px;
        background-color: rgb(34, 211, 34);
    }

    .buttonLink:hover{
        background-color: rgb(147, 189, 236);
        color: black;
    }
  
</style>