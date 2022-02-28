import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入axios
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// axios(config) config应该是一个对象 所以{}
// 默认是get请求 
// 改变请求方式 用 method
// params是get请求参数拼接
// axios({
//   url: 'https://keasarsk.github.io/',
//   method: 'get',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// axios并发请求
axios.all([
  axios({
    url: 'https://keasarsk.github.io/'
  }),
  axios({
    url: 'https://keasarsk.github.io/'
  }),
// ]).then(results => {
//   console.log(results);
//   console.log(results[0]);//拿到第一个get的结果
// })

// 或者这样拿到分割开的结果
]).then(axios.spread((res1,res2) => {
  console.log(res1);
  console.log(res2);
}))
