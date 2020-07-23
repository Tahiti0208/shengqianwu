<template>
    <div>
        <!-- $router.go(-1) -1表示返回上一级 -->
        <!-- $router.go(1) 1表示刷新当前页面 -->
        <!-- $router.go(2) 2表示返回下一级 -->
        <!-- 等不导航栏 -->
        <van-row class="top-search-nav">
            <van-col span="3" @click="$router.go(-1)"><span class="iconfont icon-zuojiantou"></span></van-col>
            <van-col span="18">
                <van-search placeholder="搜索商品名称" />
            </van-col>
            <van-col span="3"><span class="iconfont icon-sousuo"></span></van-col>
        </van-row>
        <div class="find">
            <h1 class="search">搜索发现</h1>
            <img src="../assets/img/search.png" class="big">
            <div class="searchCon">Redmi 9 购机赠耳机</div>
            <div class="searchCon">"粽"情5G
                <img src="../assets/img/huodong.png" class="small">
            </div>
            <div class="searchCon">Redmi K30 Pro</div>
            <div class="searchCon">小米10</div>
            <div class="searchCon">冰箱</div>
            <div class="searchCon">洗衣机</div>
            <div class="searchCon">家电
                <img src="../assets/img/youhui.png" class="small">
            </div>
            <div class="searchCon">手机
                <img src="../assets/img/youhui.png" class="small">
            </div>
            <div class="searchCon">全部商品</div>
            <div class="searchCon">米家插线板 快充版 27W</div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
// 顶部搜索栏
.top-search-nav{
    background-color: #F2F2F2;
    .icon-zuojiantou{
        text-align: center;
        display: block;
        font-size: 24px;
        height: 44px;
        line-height: 44px;
        color:#4E4E4E;
    }
    .van-search{
        padding:0px;
        margin:5px;
        background-color: #fff;
    }
    .van-search__content{
        background-color: #fff;
    }
    .icon-sousuo{
        text-align: center;
        display: block;
        font-size: 18px;
        height: 44px;
        line-height: 44px;
        color:#4E4E4E;
    }
}
// 发现
.find{
    padding: 1.25rem 1rem;
    .search{
        font-size: 14px;
        margin-bottom: 1rem;
    }
    .big{
        border-radius: 10px;
    }
    .searchCon{
        width: 47%;
        display: inline-block;
        margin-top: 15px;
        margin-left: 10px;
    }
    .small{
        width: 1.8rem;
        margin-left: 3px;
        display: inline-block;
        vertical-align: top;
    }
}
</style>