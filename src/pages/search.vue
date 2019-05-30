<template>
    <div class="page-search">
        <go-back></go-back>
        <div class="m-search-input">
            <div class="m-search-bottom">
               <input type="text" placeholder=" 搜索 " autofocus> 
            </div>
        </div>
    </div>
</template>

<script>
import goBack from '../components/goBack'

export default {
    components:{
        goBack
    }
}
</script>

<style>
    .page-search{
        min-height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
    .m-search-input{
        padding: 20px;
    }
    .m-search-input input{
        width: 100%;
        height: 42px;
        outline: none;
        border: none;
        font-size: 22px;
        text-align: center;
    }
    .m-search-bottom{
        border-bottom: 1px solid #000;
    }
</style>
