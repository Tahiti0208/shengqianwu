<template>
    <div>
        <van-sticky>
            <!-- 顶部导航 -->
            <van-row class="topsearchNav">
                <van-col span="3"><span class="iconfont icon-shengqian_cur"></span></van-col>
                <van-col span="18">
                    <van-search @focus="getSearch" placeholder="搜索商品名称" />
                </van-col>
                <van-col span="3"><span class="iconfont icon-yonghu" @click="getMy"></span></van-col>
            </van-row>
            <!-- 顶部导航end -->
            <!-- 首页导航开始 -->
            <div class="swiper-container homeNavSwiperContainer">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in classify" :key="index">
                        <router-link :to="item.to">{{item.name}}</router-link>
                    </div>
                </div>
            </div>
            <!-- 首页导航结束 -->
        </van-sticky>
            <!-- 二级路由 -->
            <router-view></router-view>
            <vantabber></vantabber>
    </div>
</template>

<script>
    import Swiper from "swiper";
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        data(){
            return{
                //二级导航数据
                classify:[
                    {to:"/home/recommend",name:"推荐"},
                    {to:"/home/phone",name:"手机"},
                    {to:"/home/intelligence",name:"智能"},
                    {to:"/home/televisions",name:"电视"},
                    {to:"/home/notebook",name:"笔记本"},
                    {to:"/home/household",name:"家电"},
                    {to:"/home/periphery",name:"生活周边"},
                ]
            }
        },
        methods:{
            getSearch(){
                // 跳转路由
                this.$router.push("/search");
            },
            getMy(){
                this.$router.push("/my");
            }
        },
        // 注意：swiper必须要在页面渲染到浏览器后mounted钩子函数中才能运行
        mounted(){
            new Swiper('.homeNavSwiperContainer', {
                // 显示个数
                slidesPerView: 6, 
                freeMode: true,
            });
        },
        created(){
            this.$store.state.active = 0;
        },
        components:{
            vantabber
        }
    }
</script>

<style lang="scss" scoped>
.topsearchNav{
    background-color: #F2F2F2;
    .icon-shengqian_cur{
        text-align: center;
        display: block;
        font-size: 24px;
        height: 44px;
        line-height: 44px;
        color:#ED5B00;
    }
    .van-search{
        padding:0px;
        margin:5px;
        background-color: #fff;
    }
    .van-search__content{
        background-color: #fff;
    }
    .icon-yonghu{
        text-align: center;
        display: block;
        font-size: 24px;
        height: 44px;
        line-height: 44px;
        color:#4E4E4E;
    }
}
//首页导航
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    text-align: center;
    font-size: 14px;
    background: #f7f7f7;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.homeNavSwiperContainer{
    height: 2.4rem;
}
.con{
    color: #ED5B00;
    padding-bottom: 5px;
    border-bottom: 2px solid #ED5B00;
}
</style>