<script setup>
import { reactive } from 'vue';

const user = reactive({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
})

const handleSubmit = async () => {
    console.log(user)
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="container mx-auto flex flex-col justify-center  border rounded-md p-4 shadow-lg w-[400px] mt-10">
        <h3 class="text-center text-2xl font-bold">Sign Up</h3>
        <div class="flex flex-col p-2">
            <label for="name">Name</label>
            <input class="border rounded-xl p-2 m-2" name="name" type="text" placeholder="name" v-model="user.name" required>
        </div>
        <div class="flex flex-col p-2">
            <label for="lastname">lastname</label>
            <input class="border rounded-xl p-2 m-2" name="lastname" type="text" placeholder="lastname" v-model="user.lastname" required>
        </div>
        <div class="flex flex-col p-2">
            <label for="email">Email</label>
            <input class="border rounded-xl p-2 m-2" name="email" type="email" placeholder="email" v-model="user.email" required>
        </div>
        <div class="flex flex-col p-2">
            <label for="password">Password</label>
            <input class="border rounded-xl p-2 m-2" name="password" type="password" placeholder="Password" v-model="user.password" required>
        </div>
        <div class="flex flex-col p-2">
            <label for="confirmPassword">Confirm Password</label>
            <input class="border rounded-xl p-2 m-2" name="Password" type="password" placeholder="Confirm Password" v-model="user.confirmPassword" required>
        </div>
        <div class="flex justify-center">
            <button class="bg-blue-500 cursor-pointer text-white hover:text-black hover:bg-blue-100 hover:shadow-lg transition-all duration-300 ease-in-out hover:font-bold rounded-xl p-2 m-2 w-[120px]" type="submit">
                Login
            </button>
        </div>
    </form>
</template>user.name