<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGetUsers } from '../stores/getUsers.js'

const { addUser, getUsers } = useGetUsers();

const user = ref({});
const router = useRouter();

const createUser = async () => {
    try {
        addUser(user.value)
        alert('Usuario creado exitosamente!')
        getUsers();
        router.push('/')
    } catch (error) {
        console.error(error, {message: 'Error al crear el usuario'})
    }
}

</script>

<template>
    <div class="wrapper">
        <form @submit.prevent="createUser">
            <div>
                <label for="name">name</label>
                <input name="name" type="text" v-model="user.name">
            </div>
            <div>
                <label for="email">email</label>
                <input name="email" type="email" v-model="user.email">
            </div>
            <button type="submit">Crear usuario</button>
        </form>
    </div>    
</template>