<script setup>
import { getGrandTotal, store } from '../stores/index';
</script>

<template>
    <div class="no-items" v-if="store.people.length == 0">No Items</div>
    <div class="people-view" v-if="store.people.length > 0">
        <div>
            <div>
                {{getGrandTotal()}}
            </div>
        </div>
        <div>
            <div>
                {{store.params.remaining}}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>