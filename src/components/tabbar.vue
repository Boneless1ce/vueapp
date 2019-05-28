<template>
    <m-tabbar>
        <m-tabbar-item use-id="/index">
            <img src="../assets/images/shouye-normal.png" alt="" slot="icon-normal">
            <img src="../assets/images/shouye-active.png" alt="" slot="icon-active">
            首页
        </m-tabbar-item>
        <m-tabbar-item use-id="/film">
            <img src="../assets/images/dianying-normal.png" alt="" slot="icon-normal">
            <img src="../assets/images/dianying-active.png" alt="" slot="icon-active">
            电影
        </m-tabbar-item>
        <m-tabbar-item use-id="/music">
            <img src="../assets/images/yinle-normal.png" alt="" slot="icon-normal">
            <img src="../assets/images/yinle-active.png" alt="" slot="icon-active">
            音乐
        </m-tabbar-item>
        <m-tabbar-item use-id="/me">
            <img src="../assets/images/wode-normal.png" alt="" slot="icon-normal">
            <img src="../assets/images/wode-active.png" alt="" slot="icon-active">
            我的
        </m-tabbar-item>
    </m-tabbar>
</template>

<script>
import mTabbar from './mTabbar'
import mTabbarItem from './mTabbarItem'

export default {
    components:{
        mTabbar,
        mTabbarItem
    }
}
</script>

<style>

</style>
