<template>
    <div class="page-music">
        <search-bar @goEmSearch="goSearch"></search-bar>
        <keep-alive>
           <sort-music></sort-music> 
        </keep-alive>
        <recommend title="每日歌曲推荐"></recommend>
        <re-music v-for="item in musicItem" :key="item.album_id" :item="item"></re-music>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../components/tabbar'
import reMusic from '../components/music/reMusic'
import sortMusic from '../components/music/sortMusic'
import searchBar from '../components/searchBar'
import recommend from '../components/recommend'

export default {
    data(){
        return {
            musicItem:{}
        }
    },
    methods:{
        getData(){
            this.axios.get('/api/musicRankingsDetails?type=1').then((data)=>{
                this.musicItem = data.data.result
            })
        },
        goSearch(){
            this.$router.push('/search')
        }
    },
    components: {
        tabbar,
        reMusic,
        sortMusic,
        recommend,
        searchBar
    },
    created(){
        this.getData();
    }
}
</script>

<style>
    .page-music{
        margin-bottom: 60px;
    }
</style>
