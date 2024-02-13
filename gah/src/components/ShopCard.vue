<template>
    <div @click="addpower(Items)">
        <h2>{{ Items.name }}</h2>
        <h3>{{ Items.cost }}</h3>
    </div>
</template>

<script setup>
import { persecond } from "@/stores/store";
import {currency} from "../stores/store"
const props = defineProps({
    Items:Object,
})


function addpower(Items){
    if(currency.count>=Items.cost){
        currency.count=currency.count-Items.cost
        persecond.count=persecond.count+Items.power
        Items.cost=Math.round(Items.cost*Items.multiplier)
    }
}
</script>

<style scoped>
img{
    widows: 300px;
    height: 350px;
    object-fit: cover;
}
</style>