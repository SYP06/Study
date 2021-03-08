import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token:localStorage.getItem('token')
    token:"",
    loginUser:"",
  },
  mutations: {
    storeLoginUser(state,user){
       state.loginUser = user
    }
  },
  actions: {
    setToken:(state,token)=>{
      state.token = token;
      localStorage.setItem('mytoken',token)
    },
    logout: (state) =>{
      state.token = null;
      localStorage.removeItem('mytoken');
    }
  },
  modules: {
  }
})
