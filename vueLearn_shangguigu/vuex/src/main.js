import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入store 默认用store./index.js
import store from './store'

createApp(App).use(store).use(router).mount('#app')
