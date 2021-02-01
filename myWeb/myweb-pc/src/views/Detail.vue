<template>
  <div>
    <section class="lineVector">
      <div class="detail-box">
        <div class="blog-title">
          <h3 class="detail-item">{{ blog.title }}</h3>
          <span class="detail-item">{{ formateDate(blog.post_time) }}</span>
        </div>
        <div class="blog-content detail-item">{{ blog.content }}</div>
      </div>
      <div class="comment-box">
        <h6 class="comments-title">评论</h6>
        <div class="comment" v-for="item in comment" :key="item.comm_id">
          <div class="comment-content">{{item.comm_content}}</div>
          <div class="comment-info">
            <span class="userinfo">{{item.username}}</span>
            <span class="post-time">{{item.comm_post_time}}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog:"",
      comment:"",
    }
  },
  created(){
    this.getBlogDetail()
  },
  methods:{
    getBlogDetail(){
      let blogId = this.$route.params.id
      this.$http('/blog/detail/'+blogId).then(res=>{
        console.log(res);
        if(res.data.state == 'success'){
        this.blog = res.data.blogInfo;
        this.comment = res.data.blogInfo.comments;
        }else{
          this.$router.push('/error')
        }
      })
    },
    formateDate(datetime) {
      function addDateZero(num) {
        return (num < 10 ? "0" + num : num);
      }
      let d = new Date(datetime);
      let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate()) + ' ' + addDateZero(d.getHours()) + ':' + addDateZero(d.getMinutes()) + ':' + addDateZero(d.getSeconds());
      return formatdatetime;

    },
  }
}
</script>
<style scoped>
.lineVector {
  background: url("../assets/images/contact/contact-bg.png");
  -webkit-animation: slide 20s linear infinite;
  -moz-animation: slide 20s linear infinite;
  animation: slide 20s linear infinite;
  height: 100%;
}
@keyframes slide {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -400px 0;
  }
}
section {
  color: #f1f1f1;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100%) !important;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #003f9c !important;
  padding: 0 40px 0 120px;
}
.section_title {
  margin: 30px auto;
}
.detail-box {
  background-color: rgba(127, 164, 231,0.9);
  margin: 50px auto;
  /* padding: 20px; */
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 10px;
}
.detail-item{
  margin: 10px 0;
}
.comment-box{
  color: black;
  background-color: rgba(250, 246, 248, 0.8);
  margin: 20px auto;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
}
.comment{
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  background-color:  rgba(127, 164, 231,0.5);
}

</style>