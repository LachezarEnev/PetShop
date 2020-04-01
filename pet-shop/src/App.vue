<template>
  <div id="app">
    <app-header /> 
    <main>
  <div class="image">     
     <router-view></router-view>
  </div>
  </main>
  <app-footer />  
</div>
</template>

<script>
import AppFooter from './components/shared/Footer.vue'
import AppHeader from './components/shared/Header.vue'

export default {
  name: 'App',
  components: {   
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

.myButton-olive {
    -moz-box-shadow: inset 0px 0px 14px -3px #f2fadc;
    -webkit-box-shadow: inset 0px 0px 14px -3px #f2fadc;
    box-shadow: inset 0px 0px 14px -3px #f2fadc;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #dbe6c4), color-stop(1, #9ba892));
    background: -moz-linear-gradient(top, #dbe6c4 5%, #9ba892 100%);
    background: -webkit-linear-gradient(top, #dbe6c4 5%, #9ba892 100%);
    background: -o-linear-gradient(top, #dbe6c4 5%, #9ba892 100%);
    background: linear-gradient(to bottom, #dbe6c4 5%, #9ba892 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#dbe6c4', endColorstr='#9ba892',GradientType=0);
    background-color: #dbe6c4;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #b2b8ad;
    display: inline-block;
    cursor: pointer;
    color: #757d6f;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 2px 12px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ced9bf;
}

.myButton-orange {
    -moz-box-shadow: inset 0px 1px 0px 0px #fce2c1;
    -webkit-box-shadow: inset 0px 1px 0px 0px #fce2c1;
    box-shadow: inset 0px 1px 0px 0px #fce2c1;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffc477), color-stop(1, #fb9e25));
    background: -moz-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
    background: -webkit-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
    background: -o-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
    background: linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffc477', endColorstr='#fb9e25',GradientType=0);
    background-color: #ffc477;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #eeb44f;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 2px 12px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #cc9f52;
}

.myButton-red {
    -moz-box-shadow: inset 0px 1px 0px 0px #f7c5c0;
    -webkit-box-shadow: inset 0px 1px 0px 0px #f7c5c0;
    box-shadow: inset 0px 1px 0px 0px #f7c5c0;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #fc8d83), color-stop(1, #e4685d));
    background: -moz-linear-gradient(top, #fc8d83 5%, #e4685d 100%);
    background: -webkit-linear-gradient(top, #fc8d83 5%, #e4685d 100%);
    background: -o-linear-gradient(top, #fc8d83 5%, #e4685d 100%);
    background: linear-gradient(to bottom, #fc8d83 5%, #e4685d 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fc8d83', endColorstr='#e4685d',GradientType=0);
    background-color: #fc8d83;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #d83526;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 2px 12px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #b23e35;
}
.myButton-white {
    -moz-box-shadow: inset 0px 1px 0px 0px #f7c5c0;
    -webkit-box-shadow: inset 0px 1px 0px 0px #f7c5c0;
    box-shadow: inset 0px 1px 0px 0px #f7c5c0;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #fc8d83), color-stop(1, #e4685d));
    background: -moz-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background: -webkit-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background: -o-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background: linear-gradient(to bottom, #ffffff 5%, #ffffff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fc8d83', endColorstr='#e4685d',GradientType=0);
    background-color: #ffffff;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #d83526;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 2px 12px;
    text-decoration: none;   
}

.myButton-peru {
    -moz-box-shadow: inset 0px 1px 0px 0px #fce2c1;
    -webkit-box-shadow: inset 0px 1px 0px 0px #fce2c1;
    box-shadow: inset 0px 1px 0px 0px #fce2c1;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffc477), color-stop(1, #fb9e25));
    background: -moz-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background: -webkit-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background: -o-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background: linear-gradient(to bottom, #ffffff 5%, #ffffff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffc477', endColorstr='#fb9e25',GradientType=0);
    background-color: #ffc477;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid peru;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 2px 12px;
    text-decoration: none;    
}

.myButton-olive2 {
    -moz-box-shadow: inset 0px 0px 14px -3px #f2fadc;
    -webkit-box-shadow: inset 0px 0px 14px -3px #f2fadc;
    box-shadow: inset 0px 0px 14px -3px #f2fadc;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #dbe6c4), color-stop(1, #9ba892));
    background: -moz-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background: -webkit-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background: -o-linear-gradient(top, #ffffff 5%, #ffffff 100%);
    background: linear-gradient(to bottom, #ffffff 5%, #ffffff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#dbe6c4', endColorstr='#9ba892',GradientType=0);
    background-color: #dbe6c4;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #b2b8ad;
    display: inline-block;
    cursor: pointer;
    color: #757d6f;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 2px 12px;
    text-decoration: none;    
}
</style>
