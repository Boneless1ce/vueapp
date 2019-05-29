<template>
    <div class="search-bar" id="searchBar" :class="{'isFixed':searchBarFixed}">
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
    data(){
        return {
            searchBarFixed: false
        }
    },
    methods: {
        goSearch(){
            this.$emit('goEmSearch')
        },
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // var offsetTop = document.querySelector('#searchBar').offsetTop
            var offsetTop = 62
            if(scrollTop > offsetTop) {
                this.searchBarFixed = true
            } else {
                this.searchBarFixed = false
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll)
    },
    destroyed(){
        window.removeEventListener('scroll',this.handleScroll)
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
    .isFixed{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }
</style>
