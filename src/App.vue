<template>
  <div id="app" class="bg-gray-50 dark:bg-gray-900 dark:text-white">
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@media (min-width: 1280px) {
  .container {
  max-width: 1024px!important;
  }
}
.title-gradient {
  background-image: linear-gradient(
    108deg,
    #926cea 8%,
    #5edeff 40%,
    #56ffda 77%,
    #4bffc7 91%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>
