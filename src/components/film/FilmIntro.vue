<template>
    <div class="film-intro">
        <div class="film-intro-title">
            简介
        </div>
        <div class="film-intro-desc">
            <div class="film-intro-icon">
                <img :src="detailItem.data.content.data.author.icon" alt="">
            </div>
            <div class="film-intro-author">
                <span>{{detailItem.data.content.data.author.name}}</span>
                <span>{{detailItem.data.content.data.author.description}}</span>
            </div>
            <div class="film-intro-atte" @click="addAtteFc()">
                <span v-if="addAtte">+ 关注</span>
                <span v-if="!addAtte">已关注</span>
            </div>
        </div>
        <div class="film-intro-description">
            <p class="desc-title is-show">{{detailItem.data.content.data.description}}</p>
            <div class="film-intro-push" @click="descPush">
                <img src="../../assets/images/xiala.png" alt="" v-if="!isActive">
                <img src="../../assets/images/shangla.png" alt="" v-if="isActive">
            </div>
        </div>
        <div class="film-intro-consumption">
            <span class="film-intro-collection">
                {{detailItem.data.content.data.consumption.collectionCount}}人收藏
            </span>
            <span class="film-intro-reply">
                {{detailItem.data.content.data.consumption.replyCount}}人回复
            </span>
            <span class="film-intro-share">
                {{detailItem.data.content.data.consumption.shareCount}}人分享
            </span>
        </div>
        <div class="film-intro-label">
            <span v-for="item in detailItem.data.content.data.tags" :key="item.id">
                #{{item.name}}#
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isActive: false,
                addAtte: true
            }
        },
        methods: {
            descPush(){
                let descTitle = document.getElementsByClassName("desc-title")[0];
                this.isActive = !this.isActive;
                if (this.isActive === true){
                    // let autoHeight = descTitle.offsetHeight;
                    descTitle.classList.remove('is-show');
                    // descTitle.style.height = autoHeight;
                } else {
                    descTitle.classList.add('is-show');
                }
            },
            addAtteFc(){
                this.addAtte = !this.addAtte;
            }
        },
        props: ['detailItem'],
        created(){
            this.isActive = false;
        }
    }
</script>

<style>
    .film-intro .film-intro-title{
        background-color: #fff;
        box-shadow: #f1f1f177 0px 5px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 18px;
        color: #333;
        font-weight: 600;
    }
    .film-intro .film-intro-desc{
        height: 50px;
        display: flex;
        flex-direction: row;
        padding: 20px 10px;
        position: relative;
    }
    .film-intro .film-intro-icon img{
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .film-intro .film-intro-author{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 10px;
        width: 55%;
        overflow: hidden;
    }
    .film-intro .film-intro-author span:first-child{
        font-size: 14px;
        margin-top: 3px;
    }
    .film-intro .film-intro-author span:last-child{
        font-size: 8px;
        color: #a7a7a7;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .film-intro .film-intro-atte{
        width: 70px;
        height: 50px;
        position: absolute;
        bottom: 20px;
        right: 10px;
    }
    .film-intro .film-intro-atte span{
        display: block;
        width: 100%;
        height: 34px;
        line-height: 34px;
        text-align: center;
        margin: 8px 0;
        background: #FAEBD7;
        border-radius: 5px;
        color: #a7a7a7;
    }
    .film-intro .film-intro-description{
        padding: 2px 10px;
        width: 100%;
        position: relative;
    }
    .film-intro .film-intro-description p{
        line-height: 20px;
        width: 90%;
        overflow: hidden;
        transition: height .3s ease-in;
        height: 100px;
    }
    .film-intro .film-intro-description .is-show{
        height: 20px;
    }
    .film-intro .film-intro-push{
        position: absolute;
        top: 2px;
        right: 30px;
    }
    .film-intro .film-intro-push img{
        width: 20px;
        height: 20px;
        display: block;
    }
    .film-intro .film-intro-consumption{
        position: relative;
        width: 100%;
        padding: 0 10px;
    }
    .film-intro .film-intro-consumption::after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #e7e7e7;
        margin-left: -10px;
        margin-top: 4px;
    }
    .film-intro .film-intro-consumption span{
        color: #a7a7a7;
        margin-right: 10px;
        font-size: 12px;
    }
    .film-intro .film-intro-label{
        margin: 10px;
    }
    .film-intro .film-intro-label span{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        margin-right: 10px;
        margin-bottom: 6px;
        padding: 2px;
        background: #FAEBD7;
        border-radius: 5px;
        color: #a7a7a7;
    }
</style>
