<template>
    <a class="m-tabbar-item" @click="goToRoute" :class="{'is-active':isActive}">
        <div class="m-tabbar-icon" v-show="!isActive">
            <slot name="icon-normal"></slot>
        </div>
        <div class="m-tabbar-icon" v-show="isActive">
            <slot name="icon-active"></slot>
        </div>
        <div class="m-tabbar-title">
            <slot></slot>
        </div>
    </a>
</template>

<script>
export default {
    props:{
        useId: String
    },
    methods:{
        goToRoute(route){
            this.$router.push(this.useId)
        }
    },
    computed:{
        isActive(){
            if (this.$route.path === this.useId) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style>
    .m-tabbar-item{
        flex:1;
        text-align: center;
    }
    .m-tabbar-icon{
        display: block;
        margin-top: 2px;
    }
    .m-tabbar-icon img{
        height: 28px;
        width: 28px;
    }
    .m-tabbar-title{
        font-size: 10px;
        color: #b8adad;
    }
    .is-active .m-tabbar-title{
        color: #363030;
    }
</style>
