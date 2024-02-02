<template>
  <div>
    <h1 v-if="answer">Correct</h1>
    <h1 v-else>Incorrect</h1>
    <h2 v-for="animal in animal" :key="animal">{{ animal }}</h2>
  </div>
</template>

<script setup>
  const answer = true
  const animal = ["ape","baboon","ape2"]
</script>

<style scoped>

</style>