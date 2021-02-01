import axios from 'axios'
import store from '../store';
import app from '../main'
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 60000,
});

// 拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    let token = localStorage.getItem('mytoken');
    config.headers['Authorization'] = "Bearer " + token;
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 相应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  let { status } = error.response;
  if (status == 401) {
    store.dispatch('logout');
    // location.href = "/login"; 会导致页面刷新
    app.$router.push("/login")
  }
  return Promise.reject(error);
});

export default instance;