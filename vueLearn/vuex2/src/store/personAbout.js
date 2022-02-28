// 人员相关配置
import {nanoid} from 'nanoid'
import axios from 'axios'
export default {
    namespaced:true,
  
    state:{
      personList:[
        {id:'1',name:'张三'},
        {id:'2',name:'李四'}
      ]
    },
    actions:{
        // axios
    ADD_PERSON_Net(context){
        console.log('mutation中ADD_PERSON被调用了')
        axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
            response => {
                context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
            },
            error => {
                alert(error.message)
            }
        )
        }
  
    },
    mutations:{
      ADD_PERSON(state,value){
        console.log('mutation中ADD_PERSON被调用了')
        state.personList.unshift(value)
      },
      
    },
    getters:{
      
    }
  }