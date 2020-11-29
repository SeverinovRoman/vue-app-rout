// наши страницы лежат в папке вьюс. через тег роутер вью мы будем отображать наши страницы
<template>
  <div id="app">
    <h1>Vue App Rout</h1>
    <hr>
    <navigbar />
    <hr>
    <router-view />
  </div>
</template>

<script>
import navigbar from '@/components/navbar.vue'
export default {
  components: {
    navigbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
