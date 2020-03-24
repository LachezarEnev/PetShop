<template>
  <div id="app">
  <div class="image">
    <app-home />    
  </div>
</div>
</template>

<script>
import AppHome from './components/Home.vue'

export default {
  name: 'App',
  components: {
    AppHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
  margin-top: 60px;
}

.image{
    height:auto; min-height: 40em; background-size:cover; width:auto;
    background-image:url('./assets/background.jpg');
    background-position:50% 50%;
  }
</style>
