<template>
    <div class="page">
        <!-- 顶部导航栏开始 -->
        <van-row>
            <van-col span="3">
                <span class="iconfont icon-zuojiantou" @click="$router.go(-1)"></span>
            </van-col>
            <van-col span="17">服务</van-col>
            <van-col span="4">
                <router-link tag="span" to="search" class="iconfont icon-sousuo"></router-link>
            </van-col>
        </van-row>
        <!-- 顶部导航栏结束 -->

        <!-- 自助服务 -->
        <h4>自助服务</h4>
        <div class="serviceImg">
            <ul class="clearfix:after">
                <li v-for="(item,index) in lists" :key="index">
                    <img :src="require(`../../assets/img/${item.imgsrc}.png`)">
                </li>
            </ul>
        </div>
        <!-- 自助服务end -->
        
        <!-- 人工客服 -->
        <div class="wrap">
            <div class="cs">
                <img src="../../assets/img/kefu.png" class="customer">
                <span class="artificial">7x24小时人工客服</span>
            </div>
            
            <div class="tel">
                <ul>
                    <li v-for="(item,index) in hotline" :key="index">
                        <img :src="require(`../../assets/img/${item.imgsrc}.png`)">
                        <h3>{{item.text}}</h3>
                        <p class="hl">{{item.phone}}</p>
                        <p>{{item.time}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 人工客服结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:[
                    {imgsrc:"service01"},
                    {imgsrc:"service02"},
                    {imgsrc:"service03"},
                    {imgsrc:"service04"},
                    {imgsrc:"service05"},
                    {imgsrc:"service06"},
                    {imgsrc:"service07"},
                    {imgsrc:"service08"},
                ],
                hotline:[
                    {imgsrc:"blue",text:"商城热线",phone:"400-100-5678",time:"8:00 - 18:00"},
                    {imgsrc:"green",text:"金融热线",phone:"400-100-3399",time:"9:00 - 19:00"},
                    {imgsrc:"orange",text:"小米移动",phone:"400-922-3838",time:"8:00 - 18:00"},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.page{
    width: 100%;
    height: 100%;
    background-color: #fff;
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
h4{
    margin-left: 1rem;
    line-height: 2.34rem;
    color: #919191;
    font-weight: 400;
    border-bottom: 1px solid #f6f6f6;
}
// 自助服务样式
.serviceImg{
    display: inline-block;
    border-bottom: 0.52rem solid #f6f6f6;
    ul{
        li{
            width: 25%;
            float: left;
        }
    }
}
// 人工服务样式
.wrap{
    .cs{
        padding: 0.975rem 0;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #f6f6f6;
        .customer{
            width: 1.95rem;
            height: 1.95rem;
            display: inline-block;
        }
        .artificial{
            align-self: center;
            margin-left: 0.91rem;
        }
    }
    .tel{
        padding: 0.975rem 0;
        text-align: center;
        ul{
            overflow: hidden;
            text-align: center;
            li{
                width: 33.3%;
                float: left;
                margin: 0 auto;
                img{
                    display: inline-block;
                    width: 2.015rem;
                }
                h3{
                    font-weight: 400;
                    margin-top: 0.65rem;
                    line-height: 1.5em;
                    font-size: 0.78rem;
                }
                .hl{
                    color: #ff6700;
                    font-size: 0.65rem;
                    line-height: 1.5em;
                }
                p{
                    font-size: 0.65rem;
                    color: #969696;
                    line-height: 1.5em;
                }
            }
        }
    }
}
</style>