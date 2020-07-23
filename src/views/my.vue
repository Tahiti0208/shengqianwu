<template>
    <div>
        <van-row gutter="20" class="top">
            <van-col span="1"></van-col>
            <van-col span="4">
                <van-image
                    round
                    width="50px"
                    height="50px"
                    type="cover"
                    src="https://ae01.alicdn.com/kf/H7e95876d3ea540adbc3b0b848410e051J.jpg"
                />
            </van-col>
            <van-col span="19">
                <div v-if="$store.state.username">
                    <h3 v-text="$store.state.username"></h3>
                </div>
                <div v-else>
                    <router-link to="/login">登陆</router-link>
                    <router-link to="/register">注册</router-link>
                </div>
            </van-col>
        </van-row>
        
        <!-- 我的订单开始 -->
        <div class="myorder">
            <van-cell-group>
                <van-cell title="我的订单" is-link value="全部订单" @click="goOrderAll"/>
            </van-cell-group>
            <ul>
                <li @click="goOrderPay">
                    <span class="iconfont icon-qianbao1">
                    </span>
                    <p>待付款</p>
                </li>
                <li @click="goOrderGoods">
                    <span class="iconfont icon-daishouhuo">
                    </span>
                    <p>待收货</p>
                </li>
                <li @click="goOrderEnd">
                    <span class="iconfont icon-yiwancheng"></span>
                    <p>已完成</p>
                </li>
            </ul>
        </div>
        <!-- 我的订单结束 -->
        
        <!-- 列表 -->
        <div class="lists">
            <ul>
                <li @click="goMember">
                    <span class="iconfont icon-huiyuanzhongxin" id="icon" style="color:#FDBF2D"></span>
                    <i>会员中心</i>
                    <span class="iconfont icon-xiangyou right"></span>
                </li>
                <li @click="goDiscount">
                    <span class="iconfont icon-qianbao" id="icon" style="color:#51BBE0"></span>
                    <i>我的优惠</i>
                    <span class="iconfont icon-xiangyou right"></span>
                </li>
                <li @click="goService">
                    <span class="iconfont icon-fuwu" id="icon" style="color:#F96C5E"></span>
                    <i>服务中心</i>
                    <span class="iconfont icon-xiangyou right"></span>
                </li>
                <li @click="address">
                    <span class="iconfont icon-dianpu1" id="icon" style="color:#FF8B43"></span>
                    <i>我的地址</i>
                    <span class="iconfont icon-xiangyou right"></span>
                </li>
                <li @click="goFcode">
                    <span class="iconfont icon-fmashangpin" id="icon" style="color:#FFB302"></span>
                    <i>我的F码</i>
                    <span class="iconfont icon-xiangyou right"></span>
                </li>
                <li @click="goGiftcode">
                    <span class="iconfont icon-gift__easyico" id="icon" style="color:#F5A623"></span>
                    <i>礼物码兑换</i>
                    <span class="iconfont icon-xiangyou right"></span>
                </li>
                <li @click="show = true" v-show="$store.state.username">
                    <span class="iconfont icon-shezhi" id="icon" style="color:#818C99"></span>
                    <i>设置</i>
                    <span class="iconfont icon-xiangyou right"></span>
                </li>
                <van-action-sheet v-model="show" cancel-text="退出登录" @cancel="$store.state.username=''" @click="onCancel"/>
            </ul>
        </div>
        
        <vantabber></vantabber>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        data() {
            return{
                show:false
            }
        },
        methods:{
            // 定义跳转方法
            address(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },
            goOrderAll(){
                this.$store.state.order.active=0;
                this.$router.push({path:"/orderList/orderAll"});
            },
            goOrderPay(){
                this.$store.state.order.active=1;
                this.$router.push({path:"/orderlist/orderPay"});
            },
            goOrderGoods(){
                this.$store.state.order.active=2;
                this.$router.push({path:"/orderList/orderGoods"});
            },
            goOrderEnd(){
                this.$store.state.order.active=3;
                this.$router.push({path:"/orderList/orderEnd"});
            },
            onCancel() {
                Toast('退出登录');
            },
            goMember(){
                this.$router.push('/cellsMember')
            },
            goDiscount(){
                this.$router.push('/cellsDiscount')
            },
            goService(){
                this.$router.push('/cellsService')
            },
            goFcode(){
                this.$router.push('/cellsFcode')
            },
            goGiftcode(){
                this.$router.push('/cellsGiftcode')
            },
        },
        components:{
            vantabber
        },
        created(){
            this.$store.state.active = 3;
        }
    }
</script>

<style lang="scss" scoped>
.top{
    background: #F37D0F url("../assets/img/bg.png") center center no-repeat;
    background-size: 100% auto;
    
    h3,h5{
        display: inline-block;
        width: 80px;
        color:#fff;
    }
    h5{
        font-size: 12px;
    }
}
.van-image{
    float: right;
    margin-top:15px;
}
.van-col{
    height: 80px;
    line-height: 80px;
    font-size: 16px;

    a{
        margin-left: 20px;
        color:#fff;
    }
}
.myorder{
    background-color: white;
    overflow: hidden;
    ul{
        padding: 20px 0;
        overflow: hidden;
        border-top: 1px solid rgba(0,0,0,.15);
        box-sizing: border-box;
        li{
            float: left;
            width: 33.3%;
            text-align: center;
            span{
                font-size: 20px;
                position: relative;
            }
        }
    }
}
.lists{
    ul{
        li{
            height: 52px;
            line-height: 52px;
            font-size: 16px;
            background-color: #fff;
            position: relative;
            border-bottom: 1px solid #d9d9d9;
            #icon{
                font-size: 26px;
                padding: 0 20px;
                display: inline-block;
                transform: translateY(3px);
            }
            .right{
                position: absolute;
                top: 3px;
                right: 20px;
            }
            &:nth-child(2n),&:last-child{
                border: 0;
            }
            &:nth-child(2n+1){
                margin-top: 10px;
            }
            &:last-child{
                margin-bottom: 5px;
            }
        }
        
    }
}
</style>