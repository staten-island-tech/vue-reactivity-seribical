<template>
  <div>
    <button @click="store.count++">
    From B: {{ store.count }}
  </button>
  </div>
</template>

<script setup>
  import {store} from "../stores/store"
</script>

<style lang="scss" scoped>

</style>