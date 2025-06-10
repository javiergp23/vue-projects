<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="wrapper">
        <nav>
            <h1>Home</h1>
            <ul>
                <RouterLink to="/login">Login</RouterLink>
                <RouterLink to="/signup">Sign up</RouterLink>
            </ul>
        </nav>
    </div>
</template>