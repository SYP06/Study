<template>
  <div>
   <h1>vuex</h1>
   <p>count: {{$store.state.count}}</p>
   <p>count: {{count}}</p>
   <p>result: {{result}}</p>


   <!-- 可以直接将函数写在这里 -->
   <!-- <button @click="$store.commit('add')">+1</button> -->
   <button @click="add">+1</button>
   <!-- <button @click="addNum(5)">+5</button> -->
   <button @click="addFun(5)">+5</button>
   <button @click="reduceFun">-1</button>



  </div>
</template>

<script>
import { mapState, mapMutations, mapActions , mapGetters} from 'vuex'

export default {

  computed:{
    //对state进行映射
    ...mapState(['count']),
    ...mapGetters(['result']),

  },

  methods: {
    //对mapMutations的映射
    ...mapMutations(['add','addFun']),
    //对mapActions的映射
    ...mapActions(['reduceFun'])
    /* add(){
      this.$store.commit('add')
    },
    addNum(num){
      this.$store.commit('addFun',num)
    }
 */
  },

}
</script>

<style>

</style>