<template>
    <div>
        <!-- 1.如果用户第一次体验此应用，先进入引导页，在跳转首页 -->
        <!-- 2.又进入过一次引导页，以后默认进入广告页。再跳转首页 -->
        <!-- http://localhost:8080/guidepage  引导页 -->
        <!-- http://localhost:8080/advertpage  广告页 -->
        <!-- Swiper -->
        <div class="swiper-container guidepagecontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div v-show="flag">
                        <img class="animated fadeInUpBig" src="../../assets/img/yindaoye01.png" >
                    </div>
                </div>
                <div class="swiper-slide">
                    <div v-show="flag">
                        <img class="animated fadeInUpBig" src="../../assets/img/yindaoye02.png" >
                        
                    </div>
                </div>
                <div class="swiper-slide">
                    <div v-show="flag">
                        <img class="animated fadeInUpBig" src="../../assets/img/yindaoye03.png" >
                        <van-button class="animated fadeInUpBig delay-1s" plain type="primary" size="small" to="/home/recommend">点击体验</van-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
        data() {
            return {
                flag:true
            }
        },
        mounted(){
            let _this = this;
            new Swiper('.guidepagecontainer', {
                pagination: {
                    el: '.guidepagepagination',
                },
                on: {
                    // 轮播图切换效果前
                    slideChangeTransitionStart: function(){
                        _this.flag = false;//隐藏
                    },
                    // 轮播图切换效果后
                    slideChangeTransitionEnd: function(){
                        _this.flag = true;//显示
                    },
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
html, body {
    position: relative;
    height: 100vh;
    .guidepagecontainer{
        width: 100%;
        height: 100vh;
        position:absolute;
    }
    img{
        height: 100vh;
    }
    .swiper-slide{
        text-align: center;
    }
    span{
        width: 120px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background-color: orange;
        color: white;
        position: absolute;
        bottom: 200%;
    }
}

</style>