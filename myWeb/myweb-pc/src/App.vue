<template>
  <div id="app">
    <Navigator></Navigator>
    <router-view/>
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue'
export default {
  components:{
    Navigator
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100%;
  // background: url('./assets/bg.jpg') no-repeat;
  // background-size: 100% 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
