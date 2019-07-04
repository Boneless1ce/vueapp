<template>
    <div class="film-classify">
        <go-back></go-back>
        <div class="classify-item" v-for="item in classifyItem" :key="item.id" @click="getKai(item.apiUrl)">
            {{item.name}}
            {{item.apiUrl}}
        </div>
    </div>
</template>

<script>
import goBack from '../components/goBack'

export default {
    data(){
        return {
            classifyItem: {}
        }
    },
    methods: {
        getData(){
            this.axios.get('/api/videoHomeTab').then((data)=>{
                this.classifyItem = data.data.result
            })
        },
        getKai(apiUrl){
            let ret = /http:\/\/baobab.kaiyanapp.com\/api\/v5\/index/;
            let newUrl = apiUrl.replace(ret,'');
            this.axios.get('/kai' + newUrl).then((data)=>{
                console.log(data)
            })
        }
    },
    components: {
        goBack
    },
    created(){
        this.getData();
    }
}
</script>

<style>
    .film-classify{
        width: 100%;
        overflow: hidden;
    }
</style>