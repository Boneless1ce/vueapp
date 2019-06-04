<template>
    <div class="recommend" v-if="isActiveToShow" v-cloak>
        <div class="container">
            <span class="icon">
                <img src="../assets/images/hot.png" alt="">
            </span>
            <span class="title">
                {{title}}
            </span>
        </div>
        <div class="more">
            <em>
                MORE>>
            </em>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isActiveToShow: false
        }
    },
    props: {
        title: String
    },
    methods:{
        isActive(){
            this.isActiveToShow = true
        }
    },
    created(){
        this.isActive()
    }
}
</script>

<style>
    [v-cloak] {
        display: none !important
    }
    .recommend{
        height: 36px;
        border-bottom:2px solid #FAEBD7;
        padding: 10px 15px;
        position: relative;
    }
    .container{
        display: flex;
    }
    .icon img{
        display: block;
        width: 36px;
    }
    .title{
        font-size: 20px;
        color:#000;
        display: flex;
        align-items: center;
    }
    .more{
        font-size: 12px;
        position: absolute;
        right: 20px;
        bottom: 10px;
    }
</style>
