<script>
    export default {
        props: ['onTagsChange'],
        data() {
            return{
                currentValue: '',
                tags: [],
            }
        },
        methods: {
            handleKeyDown(event){
                if(event.key == 'Backspace' && this.currentValue !== ''){
                    this.tags.pop()
                    this.onTagsChange(this.tags)
                    this.currentValue = ''
                }
                },
            handleSubmit(event){
                if (this.currentValue !== '') {
                    const exist = this.tags.some(item => item === this.currentValue )
                    if(!exist){
                        this.tags.push(this.currentValue)
                        this.currentValue = ''
                    }
                }
            },
            deleteTag(tag){
                this.tags = this.tags.filter((item) => item !== tag)
                 this.onTagsChange(this.tags)
            }
        }
    }

</script>

<template>
    <div class="inputTag">
    <div class="tags">
        <div class="tag" v-for="(tag, index) in tags" :key="index">
            {{tag}}
            <button @click="deleteTag(tag)">
                X
            </button>
        </div>
    </div>
    <form class="form" @submit.prevent="handleSubmit">
        <input class="input" type="text" v-model="currentValue" @keydown="handleKeyDown" placeholder="Add a tag"/>
    </form>
  </div>
</template>

<style scoped>

    .inputTag{
        display: inline-flex;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    .tags{
        display: flex;
        padding: 5px;
    }

    .tags .tag{
        display: flex;
        padding: 5px;
        border: solid 1px #ccc;
        gap: 5px;
        align-content: center;
        margin: 2px;
        border-radius: 3px;
    }
 
    .inputTag .form{
        display: inline-flex;
    }
    .inputTag .input{
        border: none;
        outline: none;
        padding: 0 5px;;
    }
    .trag button{
        background-color: transparent;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
    .trag button:hover{
        background-color: #ccc;
    }

</style>