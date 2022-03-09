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


// 全局配置
// 多地方重复使用的东西进行配置比如URL
axios.defaults.baseURL = 'https://keasarsk.github.io/'
axios.defaults.timeout = 5000


axios({
  // baseURL: 'https://keasarsk.github.io/',此就不用写了

  // 但具体url的后缀还需要写:
  // url: '/page1/1',

  method: 'get',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})

