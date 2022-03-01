<template>
    <div> 
        <h1>当前求和为:{{$store.state.sum}}</h1>
        <h1>当前求和放大十倍为 {{$store.getters.fangda}}</h1>
        <h1>我在{{$store.state.school}}学习{{$store.state.subject}}</h1>

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
export default {
    name : "Count",
    data(){
        return {
            n:1,//用户选择的数字
        }
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


