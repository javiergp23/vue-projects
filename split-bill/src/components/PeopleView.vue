<script setup>
import { store } from '../stores/index';
</script>

<template>
    <div class="no-items" v-if="store.people.length == 0">No items</div>
</template>

<style scoped>

</style>