<script setup>
import {reactive} from 'vue'
import InputView from './InputView.vue';

let boards = reactive([
    {
        id: crypto.randomUUID(),
        name: 'tablero 1',
        items: [
            {
                id: crypto.randomUUID(),
                title: 'Feature de archivos',
            },
            {
                id: crypto.randomUUID(),
                title: 'Resolver Bug'
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        name: 'tablero 2',
        items: [
            {
                id: crypto.randomUUID(),
                title: 'update files',
            },
            {
                id: crypto.randomUUID(),
                title: 'Code Review'
            }
        ]
    }
])

const handleNewItem = (text, board) =>{
    board.items.push({
        id: crypto.randomUUID(),
        title: text.value
    })
}

</script>

<template>
    <nav>
        <ul>
            <li><a href="">Create board</a></li>
        </ul>
    </nav>
    <div class="boards-container">
        <div class="boards">
            <div class="board" v-for="board in boards" :key="board.id">
                <div>{{board.name}}</div>
                <InputView @on-new-item="(text) => handleNewItem(text, board)"/>
                <div class="items">
                    <div class="item" v-for="item in board.items" :key="item.id">
                        {{item.title}}
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .boards{
        display: flex;
        gap: 10px;
    }

    .board{
        background-color: #efefef;
        padding: 5px;
    }

    .item{
        background-color: white;
        padding: 10px;
        box-sizing: border-box;
    }
</style>
