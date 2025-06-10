<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="wrapper bg-gray-100">
        <nav class="flex flex-row justify-between items-center p-4">
            <RouterLink to="/" class="text-black-800 hover:text-blue-300 hover:bg-gray-800 transition-all ease-in-out duration-300 rounded-xl p-2">Home</RouterLink>
            <ul class="gap-4 flex flex-row items-center">
                <RouterLink class="border-none bg-blue-300 rounded-xl p-2 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out" to="/login">Login</RouterLink>
                <RouterLink class="border-none bg-blue-300 rounded-xl p-2 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out" to="/signup">Sign up</RouterLink>
            </ul>
        </nav>
    </div>
</template>