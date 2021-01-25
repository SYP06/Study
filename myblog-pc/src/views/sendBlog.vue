<template>
  <div class="container">
    <div class="sendBlog">
      <h2>发表文章</h2>
      <div class="sendBlog-title">
        <span>标题：</span>
        <input type="text" v-model="title"/>
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
      title:'',
      content:'',
    }
  },
  methods: {
    sendBlog() {
      console.log('haha');
      this.$http
        .post("/blog/send", {
          title: this.title,
          content: this.content,
          headers: {
          Authorization: localStorage.getItem("mytoken"),
        },
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
}
</script>
<style scoped>
.sendBlog {
  width: 650px;
  margin: 50px auto;
  border: 1px solid #cccccc;
}
.sendBlog div{
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
.send{
 margin: 10px;
}
</style>