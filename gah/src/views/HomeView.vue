<template>
  <div>
    <button @click="add" id="bitcoin">
      <h3>Click to mine a Bitcoin</h3>
  </button>
  </div>
</template>

<script setup>
import {currency} from "../stores/store"

function add(){
  currency.count+=1
}
</script>

<style scoped>
#bitcoin{
  width: 100%;
  height: 100px;

}
</style>