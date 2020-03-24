<template>
  <div id="app">
  <div class="image">
    <app-header />  
    <app-home />   
    <app-footer />  
  </div>
</div>
</template>

<script>
import AppHome from './components/Home.vue'
import AppFooter from './components/shared/Footer.vue'
import AppHeader from './components/shared/Header.vue'

export default {
  name: 'App',
  components: {
    AppHome,
    AppFooter,
    AppHeader
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
  margin-top: 60px; */
}

.image{
    height:auto; min-height: 40em; background-size:cover; width:auto;
    background-image:url('./assets/background.jpg');
    background-position:50% 50%;
  }

.zoom {
  margin: 2%;
  overflow: hidden;
}

.zoom img {
    max-width: 100%;
    height: auto;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.zoom:hover img {
    -moz-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
}

.center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
    }

.image-container {
    width: auto;
    height: 180px;
} 
</style>
