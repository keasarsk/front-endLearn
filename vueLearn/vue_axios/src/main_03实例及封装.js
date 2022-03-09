import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入axios
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// // 不使用全局的axios和对应的配置
// // 创建多个axios实例
// const instance1 = axios.create({
//   baseURL: 'https://keasarsk.github.io',
//   timeout: 5000
// })
// const instance2 = axios.create({
//   baseURL: 'https://keasarsk.github.io',
//   timeout: 5000
// })

// // 使用实例 instance1进行网络请求
// instance1({
//   url: '/',

// }).then(res => {
//   console.log(res);
// })

// instance2({
//   url: '/',
// }).then(res => {
//   console.log(res);
// })

console.log('--------------------------');


// 使用封装 --------------见../network 文件夹
import {request} from './network/netRequest'
request({
    url: '/page1',
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })


console.log('--------------------------');


