<script setup>
import {reactive} from 'vue';
import axios from 'axios';

const user = reactive({
    email: '',
    password: ''
})



</script>

<template>
    <form @submit.prevent="handleLogin" class="container mx-auto flex flex-col justify-center  border rounded-xl p-4 shadow-lg w-[400px] mt-10">
        <h3 class="text-center text-2xl font-bold">Login</h3>
        <div class="flex flex-col p-2">
            <label for="email">Email</label>
            <input class="border rounded-xl p-2 m-2" name="email" type="email" placeholder="email" v-model="user.email">
        </div>
        <div class="flex flex-col p-2">
            <label for="password">Password</label>
            <input class="border rounded-xl p-2 m-2" name="password" type="password" placeholder="*********" v-model="user.email">
        </div>
        <div class="flex justify-center">
            <button class="bg-blue-500 cursor-pointer text-white hover:text-black hover:bg-blue-100 hover:shadow-lg transition-all duration-300 ease-in-out hover:font-bold rounded-xl p-2 m-2 w-[120px]" type="submit">
                Login
            </button>
        </div>
    </form>
</template>