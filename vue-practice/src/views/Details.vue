<template>
  <div>
    <h1>课程详情页</h1>
    <p>课程id：{{ $route.params.id }}</p>
    <p>课程价格：{{ $route.params.price }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params:this.$route.params
    }
  },

}
</script>

<style>

</style>