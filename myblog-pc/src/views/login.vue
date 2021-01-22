<template>
<div class="container">
        <div class="login-form">
      <h3>用户登录</h3>
      
        <p>
          用户名: <input type="text" name="username" v-model="username">
        </p>
        <p>
          密码：<input type="password" name="password" v-model="password" >
        </p>
        <p>
          <button @click="doLogin" id="btn-login">登录</button>
        </p>
      
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    doLogin(){
      this.$http.post("/user/login",{
        username:this.username,
        password:this.password
      }).then(res=>{
        let {state,token} = res.data;
        if(state =='success'){
          // 登录成功
          // 存储token
          this.$store.dispatch('setToken',token)
          this.$router.push('/')
        }else{
          alert('用户名或密码不正确')
        }
      })
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


