<template>
  <div class="container">
    <div class="login-form">
      <h3>用户注册</h3>
      <p>
        用户名: <input type="text" name="username" v-model="username" /><span></span>
      </p>
      <p>
        密码：<input type="password" name="password" v-model="password" />
      </p>
      <p>
        昵称：<input type="text" name="nickname" v-model="nickname" />
      </p>
      <p>
        <button @click="doRegist" >注册</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
    };
  },
  methods: {
    doRegist() {
      console.log('haha');
      this.$http
        .post("/user/regist", {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.login-form {
  width: 650px;
  background-color: #cccccc;
  margin: 40px auto;
  text-align: center;
  padding: 20px 0;
}
.login-form p {
  padding: 20px 0;
}
.btn {
  width: 70px;
}
</style>
