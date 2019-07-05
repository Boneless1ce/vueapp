<template>
    <div class="not-login">
        <div class="login-item" v-for="item in itemList" :key="item.id">
            {{item}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            itemList: ["登录","注册"]
        }
    }
}
</script>

<style>
    .not-login{
        width: 100%;
    }
    .not-login .login-item{
        width: 80%;
        font-size: 18px;
        font-weight: 600;
        color: #717171;
        padding: 10px 0;
        margin: 15px auto 0;
        text-align: center;
        background: #fff;
        border-radius: 5px;
    }
</style>
