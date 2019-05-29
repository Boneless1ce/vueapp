<template>
    <div class="re-film">
        <div class="re-film-header">
            <div class="re-film-icon">
               <img :src="item.data.content.data.provider.icon" alt=""> 
            </div>
            <span class="re-film-name">
                {{item.data.content.data.provider.name}}
            </span>
            <span class="re-film-more">
                <img src="../../assets/images/ellipsis.png" alt="">
            </span>
        </div>
        <div class="re-film-content">
            <div class="re-film-title">
                <span v-for="(tag,index) in item.data.content.data.tags" :key="index" class="re-film-tag">
                    #{{tag.name}}#
                </span>
                <span>
                    {{item.data.content.data.title}}
                </span>
            </div>
            <div class="re-film-img">
                <img :src="item.data.content.data.cover.detail" alt="">
                <span class="re-film-dur">
                    {{getTime}}
                </span>
            </div>
            <div class="re-film-des">
                {{item.data.content.data.description}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            duration:  this.item.data.content.data.duration
        }
    },
    props: {
        item:{
            type: Object,
            default: function(){
                return {
                    data:{
                        content:{
                            data:{
                               provider:{},
                               cover: {}
                            }
                        }
                    }
                }
            }
        },
        
    },
    computed: {
        getTime(){
            const time = parseFloat(this.duration)
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
            }  else if (time > 3600){
               let hour = Math.floor(time / 3600)
               let min = Math.floor((time - hour*3600) / 60)
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
    .re-film{
        border-bottom: 20px solid #FAEBD7;
        padding: 0 20px 20px;
    }
    .re-film .re-film-header{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 36px;
        position: relative;
    }
    .re-film .re-film-icon img{
        width: 20px;
        height: 20px;
        border:1px solid #ccc;
        border-radius: 10px;
        display: block;
    }
    .re-film .re-film-more{
        width: 36px;
        height: 100%;
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .re-film .re-film-more img{
        width: 14px;
        height: 14px;
        display: block;
    }
    .re-film .re-film-tag{
        color: royalblue;
        font-size: 10px;
    }
    .re-film .re-film-img{
        position: relative;
    }
    .re-film .re-film-img img{
        width: 100%;
        border-radius: 6px;
        margin: 5px 0;
    }
    .re-film .re-film-dur{
        color: #fff;
        position: absolute;
        left: 20px;
        bottom: 20px;
        border-radius: 3px;
        background: rgba(235,235,235,.3);
        padding: 2px;
    }
    .re-film .re-film-dur span{
        font-size: 12px;
    }
    .re-film .re-film-des{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: normal;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>
