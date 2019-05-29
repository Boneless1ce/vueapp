<template>
    <div class="sort-music">
        <div class="sort-item" v-for="item in sortList" :key="item.channelid">
            <div class="sort-img">
                <img :src="item.thumb" alt="">
            </div>
            <div class="sort-title">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sortList:''
        }
    },
    methods:{
        getData(){
            this.axios.get('/api/musicBroadcasting').then((data)=>{
                this.sortList = data.data.result[0].channellist
            })
        }
    },
    created(){
        this.getData();
    }
}
</script>

<style>
    .sort-music{
        padding: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .sort-item{
        margin-bottom: 10px;
    }
    .sort-title{
        text-align: center;
    }
    .sort-img img{
        width: 80px;
        height: 80px;
    }
</style>
