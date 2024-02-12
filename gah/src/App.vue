<script setup>
import {store} from "./stores/store"
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>{{ store.count }}</h1>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/shoop">Shop</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
