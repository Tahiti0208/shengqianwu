<template>
    <div>
        <!-- 头部导航栏开始 -->
        <div class="top-nav">
            <div class="top-left">
                <span class="iconfont icon-zuojiantou" @click="$router.go(-1);"></span>
            </div>
            <div class="top-right" @click="showShare = true">
                <span class="iconfont icon-fenxiang">

                </span>
            </div>
            <van-share-sheet
                v-model="showShare"
                title="分享"
                :options="options"
                @select="onSelect"
            />
        </div>
        <!-- 头部导航栏结束 -->

        <!-- 引入轮播图组件 -->
        <swiper :img="Images"></swiper>

        <!-- 商品详情开始 -->
        <div class="panel">
            <div class="price">￥{{lists.price}}</div>
            <h1>{{lists.name}}</h1>
            <div class="content">
                <font color="#ff4a00">「分期享12期免息，低至417元起/期」</font>向往的生活同款 / 骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 / 双模5G / 新一代LPDDR5内存 / 50W极速闪充+30W无线闪充+10W无线反充 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热  / 4500mAh大电量 / 多功能NFC
            </div>
        </div>
        <!-- 商品详情结束 -->

        <!-- 购买信息开始 -->
        <div class="pay-info">
            <van-cell>
                <strong>已选</strong>
                <i>小米10 Pro 8GB+256GB 珍珠白</i>
                <span class="iconfont icon-xiangyou fr"></span>
            </van-cell>
            <van-cell>
                <strong>送至</strong>
                <i>北京市 东城区</i>
                <b>有现货</b>
                <span class="iconfont icon-xiangyou fr"></span>
            </van-cell>
            <van-cell>
                <i class="autotrop"><span class="iconfont icon-icon-"></span>小米自营</i>
                <i class="autotrop"><span class="iconfont icon-icon-"></span>小米发货</i>
                <i class="autotrop"><span class="iconfont icon-icon-"></span>7天无理由退货</i>
                <span class="iconfont icon-xiangyou fr"></span>
            </van-cell>
        </div>
        <!-- 购买信息结束 -->

        <div>
            <img src="../assets/img/d01.jpg">
            <img src="../assets/img/d02.jpg">
            <img src="../assets/img/d03.jpg">
            <img src="../assets/img/d04.jpg">
        </div>

        <!-- 结算开始 -->
        <van-goods-action>
            <van-goods-action-icon 
                @click="$router.push('/home/recommend')"
                icon="wap-home-o"
                text="首页"
            />
            <van-goods-action-icon 
                icon="service-o" 
                text="客服"
                @click="show = true"
            />

            <!-- 客服 -->
            <van-overlay :show="show" @click="show = false" z-index=99>
                <div class="wrapper" z-index=99>
                    <div class="block">
                        请联系客服
                        <img src="../assets/img/service.png">
                    </div>
                </div>
            </van-overlay>

            <!-- 购物车 -->
            <van-goods-action-icon 
                @click="$router.push('/cart')"
                icon="cart-o" 
                :badge="num"
                text="购物车"
            />
            
            <van-goods-action-button type="warning" @click="add(lists)" text="加入购物车" />
            <!-- <van-goods-action-button type="danger" text="立即购买" /> -->
        </van-goods-action>
        <!-- 结算结束 -->
    </div>
</template>

<script>
    import {createNamespacedHelpers} from "vuex";
    const {mapState} = createNamespacedHelpers("cart");
    import { Toast } from 'vant';
    import swiper from "../components/public/swiper";
    export default {
        data() {
            return {
                Images:[
                    require("../assets/img/dbanner01.jpg"),
                    require("../assets/img/dbanner02.jpg"),
                    require("../assets/img/dbanner03.jpg"),
                    require("../assets/img/dbanner04.jpg"),
                    require("../assets/img/dbanner05.jpg"),
                    require("../assets/img/dbanner06.jpg"),
                    require("../assets/img/dbanner07.jpg"),
                    require("../assets/img/dbanner08.jpg"),
                ],
                lists:[],
                showShare: false,
                options: [
                    { icon: 'weibo' },
                ],
                show:false
            }
        },
        methods:{
            // 调用vuex里面方法
            add(lists){
                if(this.$store.state.username == null){
                    Toast("请登录");
                    return;
                }
                this.$store.commit("cart/add",lists);
            },

            onSelect(option) {
                Toast(option.name);
                this.showShare = false;
            },
        },
        computed:{
            ...mapState({
                num : state => state.num
            })
        },
        components:{
            swiper,
        },
        created(){
            // 商品数据
            let goods = this.$route.query.goods;
            if(goods){
                this.lists = goods;
            }
            this.Images = goods.imgs
        }
        
    }
</script>

<style lang="scss" scoped>
// 顶部导航样式
.top-nav{
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    position: fixed;;
    left: 0;
    top: 0;
    z-index: 99;
    span{
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        border-radius: 50%;
        background-color: rgba(0,0,0,0.3);
        color:white;
        display: block;
        text-align: center;
    }
    .top-left{
        float: left;
    }
    .top-right{
        float: right;
    }
}
// 商品详情样式
.panel{
    padding: 15px 15px 0px 15px;
    h1{
        font-size: 18px;
    }
    .content{
        font-size:14px;
    }
    .price{
        color:#ff6b00;
        font-size: 28px;
    }
}
// 购买信息样式
.pay-info{
    overflow: hidden;
    margin-top: 20px;
    border: 1px solid #f3f3f3;
    .van-cell{
        background-color: #fff;
        font-size: 12px;
        strong{
            color: #7B7B7B;
            margin-right: 18px;
        }
        span{
            color:#7B7B7B;
            font-size: 12px;
        }
        b{
            margin-left: 10px;
            font-weight: normal;
            color: #f56600;
        }
        .autotrop{
            color:rgba(0,0,0,.54);
            margin-right: 10px;
            font-size: 10px;
            background-color: #FCFCFC;
            span{
                color: rgba(0,0,0,.54);
                margin-right: 5px;
            }
        }
    }
}
// 客服开始
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
}

.block {
    width: 9rem;
    background-color: #fff;
    img{
        width: 9rem;
    }
}
</style>
<style lang="scss">
.van-share-sheet__options{
    display: block;
    text-align: center;
    transform:translateX(-3px) ;
}
</style>