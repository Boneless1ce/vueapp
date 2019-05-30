<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>  
    </transition>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      transitionName: 'none'
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/search'){
        this.transitionName = 'fade'
      } else {
        this.transitionName = 'none'
      }
    }
  }
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  font-size: 14px;
}

.fade-enter-active,.fade-leave-active{
  transition: all 0.3s
}
.fade-enter,.fade-leave-to{
  transform: translate3d(100%,0,0)
}
</style>
