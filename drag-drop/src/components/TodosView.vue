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

const handleNewBoard = () => {
    const name = prompt('Name of the board')
    if(!!name){
        boards.push({
            id: crypto.randomUUID(),
            name: name,
            items: [],
        })
    }
}


const startDrag = (e, board, item) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({boardId: board.id, itemId: item.id}))
}

const onDrop = (e, dest) => {
    const {boardId, itemId} = JSON.parse(e.dataTransfer.getData('text/plain'))

    console.log(boardId, itemId)

    const originBoard = boards.find((item) => item.id == boardId)
    const originItem = originBoard.items.find((item) => item.id == itemId)

    console.log(originBoard.name, originItem.title)
}

</script>

<template>
    <nav>
        <ul>
            <li class="p-2 text-bold text-center"><a href="" @click.prevent="handleNewBoard">Create board</a></li>
        </ul>
    </nav>
    <div class="boards-container">
        <div class="boards">
            <div class="board" @drop="onDrop($event, board)" @dragover.prevent @dragenter.prevent v-for="board in boards" :key="board.id">
                <div class="text-center">{{board.name}}</div>
                <InputView @on-new-item="(text) => handleNewItem(text, board)"/>
                <div class="items">
                    <div class="item" draggable="true" @dragstart="startDrag($event, board, item)" v-for="item in board.items" :key="item.id">
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
