<template>
    <div class="page">

        <!-- 顶部导航栏开始 -->
        <van-row>
            <van-col span="3">
                <span class="iconfont icon-zuojiantou" @click="$router.go(-1)"></span>
            </van-col>
            <van-col span="17">优惠券列表</van-col>
            <van-col span="4">
                <router-link tag="span" to="search" class="iconfont icon-sousuo"></router-link>
            </van-col>
        </van-row>
        <!-- 顶部导航栏结束 -->

        <!-- 优惠卷开始 -->
        <van-tabs v-model="active" id="xia">
            <van-tab title="未使用" >
                <van-empty
                    class="custom-image"
                    image="https://ae01.alicdn.com/kf/H4b4b76f822204a0da9cd812940d92445L.jpg"
                    description="您没有未使用的优惠券"
                />
            </van-tab>
            <van-tab title="已使用/已过期">
                <van-empty
                    class="custom-image"
                    image="https://ae01.alicdn.com/kf/H4b4b76f822204a0da9cd812940d92445L.jpg"
                    description="您没有未使用的优惠券"
                />
            </van-tab>
        </van-tabs>
        <!-- 优惠券结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                active:0
            }
        }
    }
</script>

<style lang="scss" scoped>
// 顶部导航栏样式
.van-row{
    height: 50px;
    line-height: 40px;
    padding-top: 10px;;
    text-align: center;
    background-color: #f2f2f2;
    font-size: 16px;
    .icon-zuojiantou{
        font-size: 30px;
    }
}
// 优惠券样式
.custom-image .van-empty__image {
    width: 90px;
    height: 90px;
}
.page{
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    border: 0;
}
</style>