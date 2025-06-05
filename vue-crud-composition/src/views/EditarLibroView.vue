<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter} from 'vue-router'

    const router = useRouter();

    const editarLibro = ref({
        titulo: '',
        autor: '',
        ISBN: '',
        genero: '',
        precio: '',
        disponibilidad: ''
    })
    
    const cargarLibro = async () => {
        const libroId = useRoute().params.id;
        try {
            const response = await axios.get(`http://localhost:3000/libros/${libroId}`);
            editarLibro.value = response.data;
            console.log(editarLibro.value)
        } catch (error) {
            console.error(error, {message: 'Error al cargar el libro'});
        }
    }

    const actualizarLibro = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/libros/${editarLibro.value.id}`, editarLibro.value);

            setTimeout(() => {
                alert('Libro actualizado exitosamente');
            }, 200)

            router.push('/');
            
            editarLibro.titulo= '',
            editarLibro.autor= '',
            editarLibro.ISBN= '',
            editarLibro.genero= '',
            editarLibro.precio= '',
            editarLibro.disponibilidad= ''
            
            console.log(response.data)
        } catch (error) {
            console.error(error, {message: 'Error al aeditar el libro'});
        }
    }


    
    onMounted(() => {
        cargarLibro();
    })
    
</script>

<template>
    <form @submit.prevent="actualizarLibro">
        <h1>Agrega un nuevo libro</h1>
        <div class="input-container">
            <label for="titulo">Titulo</label>
            <input name="titulo" type="text" v-model="editarLibro.titulo" required placeholder="titulo">
        </div>
        <div class="input-container">
            <label for="autor">autor</label>
            <input name="autor" type="text" v-model="editarLibro.autor" required placeholder="autor">
        </div>
        <div class="input-container">
            <label for="ISBN">ISBN</label>
            <input name="ISBN" type="text" v-model="editarLibro.ISBN" required placeholder="ISBN">
        </div>
        <div class="input-container">
            <label for="genero">genero</label>
            <input name="genero" type="text" v-model="editarLibro.genero" required placeholder="genero">
        </div>
        <div class="input-container">
            <label for="disponibilidad">disponibilidad</label>
            <input name="disponibilidad" type="text" v-model="editarLibro.disponibilidad" required placeholder="disponibilidad">
        </div>
        <button type="submit">Actualizar Libro</button>
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

    }
    h1{
        font-size: 25px;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
    label{
        font-size: 20px;
        margin-bottom: 10px;
    }
</style>