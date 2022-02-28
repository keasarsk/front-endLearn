// 该文件用于创建vuex最核心的store

// 引入vuex
import { createStore } from 'vuex'
// 准备actions---响应组件的动作
// 准备mutations---用于操作数据(state)
// 准备state---用于存储数据
 
// 创建store
export default createStore({
  state(){
    sum:0
  },
  
  actions: {
    // jia 函数
    jia(context,value){
      console.log('action中jia被调用了')
      // action提交给了mutations中的JIA函数
      context.commit('JIA',value)
    },
    jian(context,value){
      console.log('action中jian被调用了')
      context.commit('JIAN',value)
    }
  },
  mutations: {
    JIA(context,value){
      console.log('mutation中JIA被调用了')
      // mutations才可以直接操作state
      this.sum += sum
    },
    JIAN(context,value){
      console.log('mutation中JIA被调用了')
      // mutations才可以直接操作state
      this.sum -= sum
    }
  },
  modules: {
  }
})
