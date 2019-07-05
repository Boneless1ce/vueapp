<template>
    <div class="page-me">
        <tabbar></tabbar>
        <user-info>
            <not-login v-if="!isLogined"></not-login>
            <logined v-if="isLogined"></logined>
        </user-info>
        
    </div>
</template>

<script>
import tabbar from '../components/tabbar'
import userInfo from '../components/me/userInfo'
import notLogin from '../components/me/notLogin'
import logined from '../components/me/logined'

export default {
    data(){
        return {
            isLogined: true
        }
    },
    components: {
        tabbar,
        userInfo,
        notLogin,
        logined
    }
}
</script>

<style>

</style>
