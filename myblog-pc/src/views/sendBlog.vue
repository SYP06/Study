<template>
  <div class="container">
    <div class="sendBlog">
      <h2>发表文章</h2>
      <div class="sendBlog-title">
        <span>标题：</span>
        <input type="text" v-model="title" />
      </div>

      <div class="sendBlog-content">
        <span class="content-title">内容：</span>
        <textarea cols="80" v-model="content"></textarea>
      </div>
      <button class="send" @click="sendBlog">发表</button>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  
  methods: {
    sendBlog() {
      // loginUser为空
      let loginUser = this.$store.state.loginUser;
      console.log(loginUser);
      if (loginUser) {
        this.$http
          .post("/blog/send", {
            title: this.title,
            content: this.content,
            userId: loginUser.user_id,
            headers: {
              Authorization: localStorage.getItem("mytoken"),
            },
          })
          .then((res) => {
            console.log(res);
           let { state } = res.data;
            if (state == "success") {
              this.$router.push("/");
            } else {
              alert("发表文章失败!");
            }
          })
      } else {
        alert("还没有登录呢");
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style scoped>
.sendBlog {
  width: 650px;
  margin: 50px auto;
  border: 1px solid #cccccc;
}
.sendBlog div {
  text-align: left;
  margin-left: 20px;
}
.sendBlog-content {
  margin: 20px 0;
  height: 200px;
}
textarea {
  resize: none;
  height: 100%;
  vertical-align: top;
}
.send {
  margin: 10px;
}
</style>