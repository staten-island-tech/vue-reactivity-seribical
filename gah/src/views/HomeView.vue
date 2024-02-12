<template>
  <div>
    <button @click="add">
      From B: {{ store.count }}
  </button>
  </div>
</template>

<script setup>
import {store} from "../stores/store"

function add(){
  store.count=store.count+5
}
</script>

<style scoped>

</style>