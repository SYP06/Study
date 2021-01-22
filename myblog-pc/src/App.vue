<template>
  <div id="app">
    <header>
      <div class="title">MyBlog</div>
      <div class="login-box">
        <a href="/login">登录</a> / <a href="/regist">注册</a>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container{
  width: 1200px;
  margin: 0 auto;
}
header{
  height: 50px;
  background-color: #cccccc;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
