<template>
    <div> 
        <h1>当前求和为:{{sum}}</h1>
        <h1>当前求和放大十倍为 {{fangdashibei}}</h1>
        <h1>我在{{school}}学习{{xueke}}</h1>
        <h1>下方组件的总人数是{{personList.length}}</h1>

        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <!-- <button @click="increment">+</button> -->
        <button @click="increment(n)">+</button>
        <!-- <button @click="decrement">-</button> -->
        <button @click="decrement(n)">-</button>

        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
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
        // }

        // 靠mapState mapGetters生成计算属性(对象写法):
        // ...mapState({sum:'sum',school:'school',xueke:'subject'})
        ...mapGetters({fangdashibei:'fangda'}),

        // 靠mapState mapGetters生成计算属性(数组写法):
        // 此时生成的计算属性名和state中的名字一致
        ...mapState(['sum','school','subject','personList'])
        // ...mapGetters(['fangda'])


    },
    methods:{
        // 自己手动写commit 和 dispatch
        // increment(){
        //     // 此处 组件有$store  调用commit函数传递 ('函数名',参数)  给了'../store./index.js'的mutations 
        //     this.$store.commit('JIA',this.n) 
        // },
        // decrement(){
        //     this.$store.commit('JIAN',this.n)
        // },
        // incrementOdd(){
        //     // 此处 组件有$store  调用dispatch函数传递 ('函数名',参数)  给了'../store./index.js'的action
        //     this.$store.dispatch('jianOdd',this.n)
        // },
        // incrementWait(){
        //     this.$store.dispatch('jianWait',this.n)
        // },

        // mapMutations 生成调用commit (对象写法)
        // 此时需要传的参数需要在使用increment 和 decrement处使用 即上13 15行
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),

        // mapMutations 生成调用commit (数组写法)
        // 此时需要传的参数以及函数名字改为 JIA(n) JIAN(n)
        // ...mapMutations(['JIA','JIAN'])

        // mapActions 生成调用dispatch (对象写法)
        ...mapActions({incrementOdd:'jianOdd',incrementWait:'jianWait'})
        // mapActions 生成调用dispatch (数组写法)

    },
    mounted() {
        console.log('Count',this.$store)
    },

}
</script>


