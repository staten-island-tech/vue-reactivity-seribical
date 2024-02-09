<template>
    <div>
        <h2>{{ Destination.name }}</h2>
        <img :src="Destination.img" alt="">
        <h3>{{ clicked }}</h3>
        <button @click="increment">Click Me</button>
    </div>
</template>

<script setup>
import {ref} from "vue"
const props = defineProps({
    Destination:Object,
})

//clicker
const clicked = ref(0)
function increment(){
    clicked.value=clicked.value+1
}
</script>

<style scoped>
img{
    widows: 300px;
    height: 350px;
    object-fit: cover;
}
</style>