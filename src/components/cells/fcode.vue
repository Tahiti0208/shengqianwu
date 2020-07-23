<template>
    <div class="page">
        <!-- 顶部导航栏开始 -->
        <van-row>
            <van-col span="3">
                <span class="iconfont icon-zuojiantou" @click="$router.go(-1)"></span>
            </van-col>
            <van-col span="17">我的F码</van-col>
            <van-col span="4">
                <router-link tag="span" to="search" class="iconfont icon-sousuo"></router-link>
            </van-col>
        </van-row>
        <!-- 顶部导航栏结束 -->

        <!-- 兑换开始 -->
        <div class="form">
            <input type="text" placeholder="输入 F 码兑换并使用" class="fcode">
            <a href="javascript;">
                兑换
            </a>
        </div>
        <!-- 兑换结束 -->

        <!-- 流程开始 -->
        <div class="technological">
            <img src="../../assets/img/liucheng.png" alt="">
        </div>
        <!-- 流程结束 -->

        <!-- 底部开始 -->
        <div class="foot">
            <a class="foot-item">
                使用帮助
            </a>
            <a @click="goGiftcode">
                礼物码兑换
            </a>
        </div>
        <!-- 底部结束 -->
    </div>
</template>

<script>
    export default {
        methods:{
            goGiftcode(){
                this.$router.push('/cellsGiftcode')
            },
        }
    }
</script>

<style lang="scss" scoped>
.page{
    width: 100%;
    height: 100%;
    background-color: #eee;
    position: absolute;
    top: 0;
    border: 0;
}
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
// 兑换样式
.form{
    background-color: #FAFAFA;
    position: relative;
    padding: 0.26rem 4rem 0.39rem 0.9425rem;
    .fcode{
        box-sizing: border-box;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 0.16rem;
        height: 1.95rem;
        overflow: hidden;
        font-size: 0.78rem;
        padding: 0.455rem 0.6825rem;
        width: 100%;
    }
    a{
        height: 1.20rem;
        line-height: 1.20rem;
        position: absolute;
        right: 1.1375rem;
        top:0.4875rem;
        font-size: 0.91rem;
        color: rgba(0,0,0,.54);
    }
}
// 流程样式
.technological{
    padding: 3.7rem 3.77rem;
    text-align: center;
    img{
        width: 100%;
    }
}
// 底部样式
.foot{
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 1rem;
    a{
        height: 1rem;
        line-height: 1rem;
        font-size: 0.747rem;
        color: #a08c72;
    }
    .foot-item{
        margin-right: 1.397rem;
        
    }
}
</style>