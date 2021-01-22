<template>
  <div class="container">
      <div class="login-form">
        <h3>用户注册</h3>
        <form action="/regist" method="post">
          <p>
            用户名: <input type="text" name="username" id="username"><span id="info"></span>
          </p>
          <p>
            密码：<input type="password" name="password">
          </p>
          <p>
            昵称：<input type="text" name="nickname">
          </p>
          <p>
            <button type="submit" id="btn-regist">注册</button>
          </p>
        </form>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>
<style scoped>
.login-form{
  width: 650px;
  background-color: #cccccc;
  margin: 40px auto;
  text-align: center;
  padding: 20px 0;
  
}
.login-form p{
  padding: 20px 0;
}
.btn{
  width: 70px;
}
</style>
