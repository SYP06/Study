<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goAhead">前进</button>
    <p>count: {{$store.state.count}}</p>

  </div>
</template>
<script>
export default {
  methods: {
    goAhead(){
      this.$router.forward()
    }
  },
  beforeRouteEnter (to, from, next) {
    //不能用this
      console.log('to',to);
      console.log('from',from);
      console.log('next',next);
      next()
  },
  beforeRouteLeave (to, from, next) {
     console.log('to',to);
      console.log('from',from);
      console.log('next',next);
      next()
  }
}
</script>
