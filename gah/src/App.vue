<script setup>
import {currency, persecond} from "./stores/store"
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>{{ currency.count }} Bitcoins </h1>
    <h2>{{ persecond.count }} Bitcoins Per Second</h2>

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
