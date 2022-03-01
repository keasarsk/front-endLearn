// 模块化之后
// 计算相关配置
export default {
    // 需要写上这个才能在vc中使用mapXXX
    namespaced:true,
  
    state:{
      sum:0,
      school:'大工',
      subject:'软件工程',
    },
    actions:{
      jiaOdd(context,value){
        console.log('action中jianOdd被调用了')
        if (context.state.sum % 2){
          context.commit('JIA',value)
        }
      },
      jiaWait(context,value){
        console.log('action中jianWait被调用了')
        setTimeout(() => {
          context.commit('JIA',value)
        }, 500);
      }
    },
    mutations:{
      JIA(state,value){
        console.log('mutation中JIA被调用了')
        state.sum += value
      },
      JIAN(state,value){
        console.log('mutation中JIAN被调用了')
        state.sum -= value
      },
    },
    getters:{
      fangda(state){
        return state.sum*10
      }
    }
  }