<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainNavbar from './components/nav/MainNavbar.vue'
import MainFooter from './components/nav/MainFooter.vue'
</script>

<template>
  <header>
    <main-navbar/>
  </header>

  <div class="main">
    <RouterView/>
  </div>

  <footer>
    <main-footer/>
  </footer>
</template>

<style scoped>
.main{
  min-height: 100vh;
}
</style>
