<template>
    <div>
        <!-- 顶部导航栏开始 -->
        <van-row>
            <van-col span="3">
                <span class="iconfont icon-zuojiantou" @click="$router.go(-1)"></span>
            </van-col>
            <van-col span="17">分类</van-col>
            <van-col span="4">
                <router-link tag="span" to="search" class="iconfont icon-sousuo"></router-link>
            </van-col>
        </van-row>
        <!-- 顶部导航栏结束 -->

        <!-- 分类列表 -->
        <bscroll></bscroll>
        
        <vantabber></vantabber>
    </div>
</template>

<script>
    import bscroll from "../components/category/BScroll" 
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        components:{
            bscroll,
            vantabber
        },
        created(){
            this.$store.state.active = 1;
        }
    }
</script>

<style lang="scss" scoped>
.van-row{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #f2f2f2;
    font-size: 16px;
    .icon-zuojiantou{
        font-size: 30px;
    }
}
</style>