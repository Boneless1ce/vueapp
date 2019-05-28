<template>
    <div class="m-tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .m-tabbar{
        height: 50px;
        background-color: antiquewhite;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        border-top: 1px solid #747474;
    }
</style>
