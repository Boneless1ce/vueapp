<template>
    <div class="recommend">
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

        }
    },
    props: {
        title: String
    }
}
</script>

<style>
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
