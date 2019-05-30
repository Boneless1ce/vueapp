<template>
    <div class="go-back">
        <div class="btn-back" @click="goBack()">
            <img src="../assets/images/back.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
    .go-back{
        height: 62px;
        width: 100%;
        background: rgb(243, 235, 235);
    }
    .btn-back{
        width: 62px;
        height: 62px;
        display: flex;
    }
    .btn-back img{
        width: 40px;
        height: 40px;
        display: block;
        margin: 11px;
    }
</style>
