// // 该文件用于创建vuex最核心的store



// 引入vue
import Vue from 'vue'
// 引入vuex插件
import Vuex from 'vuex'
//  使用插件vuex  使得所有的vc身上都有了 $store
Vue.use(Vuex)

// // 模块化之前:
// // 准备state配置项---用于存储数据
// const state = {
//   sum:1,
//   school:'大工',
//   subject:'软件工程',
//   personList:[
//     {id:'1',name:'张三'},
//     {id:'2',name:'李四'}
//   ]
// }
// // 准备actions配置项---响应组件的动作
// const actions = {
//   jianOdd(context,value){
//     console.log('action中jianOdd被调用了')
//     if (context.state.sum % 2){
//       context.commit('JIA',value)
//     }
//   },
//   jianWait(context,value){
//     console.log('action中jianWait被调用了')
//     setTimeout(() => {
//       context.commit('JIA',value)
//     }, 500);
//   }
// }
// // 准备mutations配置项---用于操作数据(state)
// const mutations = {
//   JIA(state,value){
//     console.log('mutation中JIA被调用了')
//     state.sum += value
//   },
//   JIAN(state,value){
//     console.log('mutation中JIAN被调用了')
//     state.sum -= value
//   },
//   ADD_PERSON(state,value){
//     console.log('mutation中ADD_PERSON被调用了')
//     state.personList.unshift(value)
//   }
// }
// // 准备mutations配置项---用于将state中的数据进行加工
// const getters = {
//   fangda(state){
//     return state.sum*10
//   }

// }


//模块化后:
import countOptions from './countOptions'
import personOptions from './personOptions'


// 创建并暴露store
export default new Vuex.Store({
  // // 模块化之前
  // actions,    
  // mutations,
  // state,
  // getters

  // 模块化之后
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})
