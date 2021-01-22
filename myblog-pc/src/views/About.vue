<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getData">请求数据</button>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    getData(){
      this.axios.get("http://localhost:3000").then(res=>{
        console.log(res.data);
      })
    }
  },
}
</script>
