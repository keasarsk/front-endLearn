<template>
    <div>
        <h1>person</h1>
        <h1>上方组件的和{{sum}}</h1>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <hr>
        <!-- 用一下axios -->
        <button @click="addServer">网络添加</button>

        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
    
</template>
<script>
    import {nanoid} from 'nanoid'
    import {mapState} from 'vuex'
    // import {mapMutations} from 'vuex'

    
    export default {
        name:'Person',
        computed:{

            ...mapState('countAbout',['sum']),
            ...mapState('personAbout',['personList']),

        },
        methods: {
            // ...mapMutations('personAbout',['ADD_PERSON']),
            add(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.commit('personAbout/ADD_PERSON',personObj)
                this.name = ''
            },
            
            // 用一下axios
            addServer(){
                this.$store.dispatch('personAbout/ADD_PERSON_Net')
            }

            
        },
    }
</script>


