<template>
    <div class="page">
        <!-- 顶部导航栏开始 -->
        <van-row>
            <van-col span="3">
                <span class="iconfont icon-zuojiantou" @click="$router.go(-1)"></span>
            </van-col>
            <van-col span="17">会员中心</van-col>
        </van-row>
        <!-- 顶部导航栏结束 -->
        
        <!-- 按钮开始 -->
        <div class="text">请前往省钱屋App查看会员福利</div>
        <input type="button" class="btn" value="立即下载省钱屋App">
        <!-- 按钮结束 -->
    </div>
</template>

<script>
    export default {
        
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
// 按钮字体样式
.text{
    max-width: 100%;
    font-size: 16px;
    margin: 0 auto;
    line-height: 30px;
    text-align: center;
    margin-top: 60px;
}
// 按钮样式
.btn{
    max-width: 640px;
    height: 3.25rem;
    padding: 0 110px;
    position: relative;
    top: 0;
    left: 50%;
    margin-left: -162.5px;
    background-color: #FF6700;
    color: white;
    margin-top: 40px;
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