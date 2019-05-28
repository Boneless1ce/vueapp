<template>
    <div class="search-bar">
        <div class="search-input" @click="goSearch()">
            <input type="text" placeholder="   客官想看点什么" readonly>
            <span>
                <img src="../assets/images/search.png" alt="">
            </span>
        </div>
        <div class="search-message">
            <span>
                <img src="../assets/images/message.png" alt="">
            </span>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        goSearch(){
            this.$emit('goEmSearch')
        }
    }
}
</script>

<style>
    .search-bar{
        height: 62px;
        background-color: #FAEBD7;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search-bar span{
        display: inline-block;
    }
    .search-bar span img{
        display: block;
        width: 28px;
        height: 28px;
    }
    .search-input{
        margin-left: 30px;
        display: flex;
        position: relative;
    }
    .search-input input{
        height: 28px;
        width: 230px;
        border-radius: 25px;
        outline: none;
        border: none;
    }
    .search-input span>img{
      position: absolute;
      right: 7px;
      top: 0;
    }
    .search-message{
        margin: 0 30px;
        display: flex;
    }
</style>
