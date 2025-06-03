<script setup>
import { Ref } from 'vue';
const tareas = await fetch('')

</script>

<template>
    <table class="border-2 rounded-lg">
        <thead>
            <tr class="border-2">
                <th class="border-2 p-2">Song</th>
                <th class="border-2 p-2">Artist</th>
                <th class="border-2 p-2">Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border-2 p-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td class="border-2 p-2">Malcolm Lockyer</td>
                <td class="border-2 p-2">1961</td>
            </tr>
            
        </tbody>
    </table>
</template>