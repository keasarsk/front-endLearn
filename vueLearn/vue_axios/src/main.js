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


