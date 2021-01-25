<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{blog.title}}</h3>
        <span>{{blog.post_time}}</span>
      </div>
      <div class="blog-content">{{blog.content}}</div>
      <div class="comments">
        <h4 class="comments-title">评论</h4>

        <div class="comment" v-for="item in comment" :key="item.comm_id">
          <div class="comment-content">{{item.comm_content}}</div>
          <div class="comment-info">
            <span class="userinfo">{{item.username}}</span>
            <span class="post-time">{{item.comm_post_time}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog:'',
      comment:'',
    }
  },
  created(){
    this.getBlogDetail()
  },
  methods: {
    getBlogDetail(){
      let blogId = this.$route.params.blogId
      this.$http.get("/blog/detail/"+blogId,{
        // params:{
        //   // 给后端传id
        //   blogId:blogId
        // },
        headers: {
          Authorization: localStorage.getItem("mytoken"),
        },
      }).then((res) => {
        console.log(res);
        this.comment = res.data.blogInfo.comments;
        let { state,blogInfo } = res.data;
        if (state == "success") {
         this.blog = blogInfo
        }
      })
      .catch((err) => {
       
        console.log(err);
        
      })
    }
  },
}
</script>
<style  scoped>
.blog{
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
  text-align: left;
}
.blog-title{
  padding: 10px;
}
.blog-content{
  padding: 10px;
}
.comment{
  padding: 10px;
}
.comments-title{
  margin-left: 10px;
}
.comment-info{
  float: right;
}
</style>