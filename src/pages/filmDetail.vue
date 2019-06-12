<template>
    <div class="page-film-detail">
        <go-back></go-back>
        <video :src="this.detailItem.data.content.data.playUrl" width="100%" ref="video" controls>抱歉，你的设备无法播放视频鸭</video>
        <film-intro></film-intro> 
        {{detailItem.data.content.data.description}}
    </div>
</template>

<script>
import goBack from '../components/goBack'
import { log } from 'util';
import FilmIntro from '../components/film/FilmIntro'

export default {
    data(){
        return{
            detailItem: {
                data: {
                    content: {
                        data: {
                            description: {}
                        }
                    }
                }
            },
            index: ''
        }
    },
    components: {
        goBack,
        FilmIntro
    },
    methods: {
        getData:function(){
            this.axios.get('/api/videoCategoryDetails?id=14').then((data)=>{
                this.detailItem = data.data.result[this.index];
            })
        }
    },
    activated(){
        this.index = this.$route.query.eq
        this.getData();
    }
}
</script>

<style>
    .page-film-detail{
        min-height: 100%;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
</style>
