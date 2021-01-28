<template>
  <div class="container">
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blogId">
        <h3 class="blog-title">
          <!-- <a href="/blog/detail">{{item.title}}</a> -->
          <router-link :to="{ path: '/blog/detail/' + item.blog_id }">
          {{item.title}}
          </router-link>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ item.post_time }}</span>
      </div>
    </div>
    <div class="send-blog">
      <!-- <p><a href="/blog/send">发表文章</a></p> -->
      <button @click="send">发表文章</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http("/blog/list").then((res) => {
        let { state } = res.data;
        if (state == "auth-fail") {
          alert("请求未授权");
        } else if (state == "success") {
          console.log(res);
          this.blogList = res.data.blogs;
        }
      })
    },
    send(){
      this.$router.push('/blog/send')
    }
  },
};
</script>
<style scoped>
.blog-list {
  width: 815px;
  margin: 20px auto;
}
.blog {
  background: #cccccc;
  padding: 20px;
  margin: 20px 0;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
.send-blog {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  top: 60px;
  right:20px;
}
.send-blog button{
  background-color: blueviolet;
  border-radius: 5px;
  color: #ffffff;
}


</style>