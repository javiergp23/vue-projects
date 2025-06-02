<script seupt>
import { ref } from 'vue';
import { store, calculate } from '../stores';

const total = ref(0)
const tip = ref(0)
const people = ref(0)

function handleSubmit(){
    store.params.total = total.value;
    store.params.tip = tip.value;
    store.params.people = people.value;
    calculate();
}

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-container">
            <div>
                <label for="total">
                    Total
                </label>
                <input type="number" required v-model="total">
            </div>
            <div>
                <label for="Tip">
                    Tip %
                </label>
                <input type="number" required v-model="tip">
            </div>
            <div>
                <label for="people">
                    People
                </label>
                <input type="number" required v-model="people">
            </div>
            <div><input type="submit" value="Calculate"></div>
        </div>
    </form>
</template>