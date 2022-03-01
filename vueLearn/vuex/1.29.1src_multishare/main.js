// 1. 终端 ===> npm i vuex
// 2. store/index.js ===> Vue.use(Vuex)
// 3. store/index.js ===> store
// 4. main.js ===> 引入store

import Vue from 'vue'
import App from './App.vue'

// 引入store
import store from './store'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
