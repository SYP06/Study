<template>
  <div>
    <section class=" lineVector">
      <div class="section_title mb-4 text-center">
        <h2><span>Blog</span></h2>
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <input class="search-input" type="text" placeholder="请输入内容" v-model="search"  @keyup="inpSearch">
        <button class="search-btn" @click="clear">X</button>

      </div>

      <div class="blog-box" v-if="showList.length>0">
        <div class="blog" v-for="(item) in showList" :key="item.blog_id" @click = 'change(item)' v-bind:class="{active:item.isActive}" >
        <h5 class="blog-title">
         {{item.title}}
        </h5>
        <span class="blog-time">{{item.post_time }}</span>
        <p class="blog-skip">
          <router-link :to="{path:'/blog/detail/'+ item.blog_id}">查看详情></router-link>
        </p>
        </div> 
      </div>  

      <div class="blog-box" v-else>
        <div class="blog" v-for="(item) in blogs" :key="item.blog_id" @click = 'change(item)' v-bind:class="{active:item.isActive}" >
        <h5 class="blog-title">
         {{item.title}}
        </h5>
        <span class="blog-time">{{formateDate(item.post_time)}}</span>
        <p class="blog-skip">
          <router-link :to="{path:'/blog/detail/'+ item.blog_id}">查看详情></router-link>
        </p>
      
      </div>  


      </div> 
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogs:[],
      showList:[],
      search:'',
    }
  },
  
  created() {
    this.getBlogs();
  },
  methods: {
    getBlogs(){
      this.$http('/blog/list').then(res=>{
        this.blogs = res.data.blogs;
      })
    },
    inpSearch(){
       this.showList =this.blogs.filter((obj)=>{
        return obj.title.includes(this.search) 
      })
     console.log('show',this.showList);
    },
    
    clear(){
      this.search = "";
      this.inpSearch()
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
    background: url('../assets/images/contact/contact-bg.png');
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
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100%) !important;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 40px 0 120px ;

}
.section_title{
  margin: 30px auto;
}

.blog {
  margin: 20px auto;  
  padding: 20px;
  background: #f85959;
  border-radius: 10px;
  text-align: left;
  margin: 20px;
  /* box-shadow: 3px 3px 3px #dfdfdf, -3px -3px 3px #fafafa; */
  
}
.blog-title {
  padding: 10px;
  
}
.blog-skip a:hover{
  color: black;
}

.blog-box{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
}
.blog-box::after{
  content: '';
  flex: auto;
}

.search-input{
  margin: 30px auto;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 5px;
  width: 500px;
}
.search-btn{
  color: #ffffff;
  border:1px solid #ffffff;
  border-radius: 5px;
  padding: 5px;
}

</style>