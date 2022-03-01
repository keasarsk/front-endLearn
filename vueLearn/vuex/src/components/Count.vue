<template>
    <div> 
        <h1>当前求和为:{{sum}}</h1>
        <h1>当前求和放大十倍为 {{fangda}}</h1>
        <h1>我在{{school}}学习{{subject}}</h1>
        <h1>下方组件的总人数是{{personList.length}}</h1>

        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <!-- <button @click="increment">+</button> -->
        <button @click="JIA(n)">+</button>
        <!-- <button @click="decrement">-</button> -->
        <button @click="JIAN(n)">-</button>

        <button @click="jiaOdd(n)">当前求和为奇数再加</button>
        <button @click="jiaWait(n)">等一等再加</button>
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

        // 第一个参数指定分组 第二个参数数组和以前一样
        ...mapState('countAbout',['sum','school','subject']),
        ...mapState('personAbout',['personList']),
        ...mapGetters('countAbout',['fangda'])

    },
    methods:{
        ...mapMutations('countAbout',['JIA','JIAN']),
        ...mapActions('countAbout',['jiaOdd','jiaWait'])
    },
    mounted() {
        console.log('Count',this.$store)
    },

}
</script>


