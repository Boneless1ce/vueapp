<template>
    <div class="page-film">
        <div class="path">
            <router-link to="/film/playing">正在热映</router-link>
            <router-link to="/film/coming">即将上映</router-link>
        </div>
        <tabbar></tabbar>
        <router-view></router-view>
    </div>
</template>

<script>
import tabbar from '../components/tabbar'

export default {
    components: {
        tabbar
    }
}
</script>

<style>
    .path{
        width: 100%;
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .path a{
        height: 100%;
        text-decoration: none;
        color: #b8adad;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
    }
    .path a.router-link-active::after{
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        position: absolute;
        bottom: 0;
        background: antiquewhite;
    }
</style>
