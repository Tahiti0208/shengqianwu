<template>
  <div id="app">
    <!-- 路由模块 -->
    <!-- 过渡效果与路由器结合 -->
    <transition 
      mode="out-in" 
      :duration="{enter:400,leave:400}"
      enter-active-class="animated fadeIn"  
      leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
    data() {
      return {
      }
    },
}
</script>

<style lang="scss">
#app{
  padding-bottom: 50px;
}
</style>
