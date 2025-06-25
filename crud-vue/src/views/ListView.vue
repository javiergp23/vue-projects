<script setup>
import { ref, onMounted, computed} from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'
import { useGetUsers } from '../stores/getUsers.js'

const { getUsers} = useGetUsers();
const usersList = ref([])
const loading = ref(true)

onMounted(async () => {
    usersList.value = await getUsers();
    if(usersList.value.length > 0){
        loading.value = false;
    }
})

</script>

<template>
    <div class="wrapper">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody v-if="!loading">
                <tr v-for="user in usersList" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>
                        <RouterLink :to="{path: '/edit/'+user.id}">Editar</RouterLink>
                        <button @click="deleteUser(user.id)" >Eliminar</button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr><td colspan="4">Cargando usuarios...</td></tr>
            </tbody>
        </table>
    </div>
</template>