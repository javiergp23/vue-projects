<script setup>
import { getGrandTotal, store } from '../stores/index';
import Label from './Label.vue';
</script>

<template>
    <div class="no-items" v-if="store.people.length == 0">No Items</div>
    <div class="people-view" v-if="store.people.length > 0">
        <div class="header">

            <div>
                <div>
                    <Label title="Total + tip: " :value="getGrandTotal()"/>
                    
                </div>
            </div>
            <div>
                <div>
                    <Label title="Remaining: " :value="store.params.remaining"/>
                </div>
            </div>
            <div class="people-container">
                <div v-for="person in store.people" :key="person.id">
                    {{person.totalPerPerson}}
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>