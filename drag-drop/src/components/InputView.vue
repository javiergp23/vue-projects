<script setup>
import { ref, defineEmits } from 'vue';

const text = ref("")
const emits = defineEmits(['onNewItem'])

const handleSubmit = () => {
    if(text !== ""){
        emits("onNewItem", text)
        text.value = "";
    }
}
</script>

<template>
    <form action="" @submit.prevent="handleSubmit">
        <input class="border-2 mb-2 text-center" type="text" v-model="text" placeholder="Write new item">
    </form>
</template>

<style>
    form{
        border: 1 px solid black;
        
    } 
    input{
        background-color: white;
        margin: 0, 0, 15px, 0;
    }
</style>