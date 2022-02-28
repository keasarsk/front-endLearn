<template>
    <div> 
        <h1>当前求和为:{{sum}}</h1>
        <h1>当前求和放大十倍为 {{fangdashibei}}</h1>
        <h1>我在{{school}}学习{{xueke}}</h1>

        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import {mapState,mapGetters } from 'vuex'
export default {
    name : "Count",
    data(){
        return {
            n:1,//用户选择的数字
        }
    },
    computed:{
        // 靠程序员自己写计算属性:
        // sum(){
        //     return this.$store.state.sum
        // },
        // fangdashibei(){
        //     return this.$store.getters.fangda
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // xueke(){
        //     return this.$store.state.subject
        }

        // 靠mapState mapGetters生成计算属性(对象写法):
        // ...mapState({sum:'sum',school:'school',xueke:'subject'})
        ...mapGetters({fangdashibei:'fangda'})

        // 靠mapState mapGetters生成计算属性(数组写法):
        // 此时生成的计算属性名和state中的名字一致
        ...mapState(['sum','school','subject'])
        // ...mapGetters(['fangda'])


    },
    methods:{
        increment(){
            // 此处 组件有$store  调用commit函数传递 ('函数名',参数)  给了'../store./index.js'的mutations 
            this.$store.commit('JIA',this.n) 
        },
        decrement(){
            this.$store.commit('JIAN',this.n)
        },
        incrementOdd(){
            // 此处 组件有$store  调用dispatch函数传递 ('函数名',参数)  给了'../store./index.js'的action
            this.$store.dispatch('jianOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jianWait',this.n)
        },
    },
    mounted() {
        console.log('Count',this.$store)
    },

}
</script>


