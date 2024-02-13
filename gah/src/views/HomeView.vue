<template>
  <div>
    <button @click="add">
      From B: {{ currency.count }}
  </button>
  </div>
</template>

<script setup>
import {currency} from "../stores/store"

function add(){
  currency.count=currency.count+1
}
</script>

<style scoped>

</style>