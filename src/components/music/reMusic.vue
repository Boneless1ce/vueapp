<template>
    <div class="re-music">
        <div class="re-music-img">
            <div class="play-bg"></div>
            <img :src="item.album_1000_1000" alt="">
            <img src="../../assets/images/play.png" alt="" class="play-img">
        </div>
        <div class="re-music-title">
            <span>
                {{item.album_title}}
            </span>
            <span>
                {{item.artist_name}}
            </span>
        </div>
        <div class="re-music-time">
            <span>
                {{getTime}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            time : this.item.file_duration
        }
    },
    props:{
        item: {
            type: Object,
            default:{

            }
        }
    },
    computed:{
        getTime(){
            const time = parseFloat(this.time)
            if(time < 3600) {
               let min = Math.floor(time / 60)
               let sec = time%60
               if(min < 10) {
                   min = "0"+min
               }
               if(sec < 10) {
                   sec = "0"+sec
               }
               return min+":"+sec
            } 
        }
    }
}
</script>

<style>
    .re-music{
        margin: 10px 20px;
        background: whitesmoke;
        display: flex;
        flex-direction: row;
        position: relative;
    }
    .re-music-img{
        position: relative;
    }
    .re-music-img img{
        display: block;
        width: 60px;
        height: 60px;
    }
    .re-music-img .play-img{
        width: 30px;
        height: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .re-music-img .play-bg{
        width: 60px;
        height: 60px;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.2)
    }
    .re-music-title{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;
        padding: 5px 0 5px 10px
    }
    .re-music-title span{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: normal;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .re-music-time{
        position: absolute;
        right: 20px;
        bottom: 0; 
    }
</style>
