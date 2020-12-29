import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    num:666,
  },
  getters:{
    result(state){
      return state.count * state.num
    }
  },
  //处理同步的方法
  mutations: { 
    add(state){
      state.count++
    },
    addFun(state,num){
      state.count += num
    },
    reduce(state){
      state.count--
    }
  },
  //处理异步的方法
  actions: {
    /* reduceFun(){
      setTimeout(() => {
        this.commit('reduce')
      }, 1000);
    } */
// action中要获取，要先在mutations中写方法，然后再用commit引入
    reduceFun({ commit }){
      setTimeout(() => {
        commit('reduce')
      }, 1000);
    }
  },
  modules: {
  }
})
