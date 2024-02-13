<template>
  <div>
    <ShopCard v-for="items in shopitems" :key="items.name" :Items="items"/>
    </div>
</template>

<script setup>
import {currency} from "../stores/store"
import { shopitems } from "@/stores/shop";
import ShopCard from "@/components/ShopCard.vue";

function add(){
  currency.count=currency.count+5
}
</script>

<style scoped>

</style>