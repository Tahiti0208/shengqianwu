<template>
    <div class="page">
        <!-- 吸顶功能 -->
        <van-sticky>
            <!-- 顶部导航栏开始 -->
            <van-row>
                <van-col span="3">
                    <span class="iconfont icon-zuojiantou" @click="$router.go(-1)"></span>
                </van-col>
                <van-col span="17">购物车</van-col>
                <van-col span="4">
                    <router-link tag="span" to="search" class="iconfont icon-sousuo"></router-link>
                </van-col>
            </van-row>
            <!-- 顶部导航栏结束 -->
        </van-sticky>

        <!-- 登录层开始 -->
        <div class="login clearfix" v-show="!$store.state.username">
            <span class="fl">登录后享受更多优惠</span>
            <router-link tag="i" to="/login" class="fr">
                去登录<span class="iconfont icon-xiangyou"></span>
            </router-link>
        </div>
        <!-- 登录层结束 -->

        <!-- 购物车为空开始 -->
        <div class="cars" v-show="!($store.state.cart.lists.length)">
            <i>
                <span class="iconfont icon-gouwuche"></span>
                购物车还是空的
            </i>
            <a  @click="goHome">去逛逛</a>
        </div>
        <!-- 购物车结束为空 -->

        <!-- 数组长度为零，默认隐藏 -->
        <!-- 购物车商品开始 -->
        <div class="car-goods" v-show="($store.state.cart.lists.length)">
            <div class="car-sp" v-for="(item,index) in lists" :key="index">
                <van-checkbox :value="item.isSelect" class="fl" @click="inputselect(index)"></van-checkbox>
                <div class="car-img fl">
                    <img :src="item.image">
                </div>
                <div class="car-msg">
                    <p>{{item.name}}</p>
                    <span>{{item.type}}</span>
                    <i>售价:{{item.price}}元</i>
                    <van-stepper v-model="item.num"/>
                </div>
                <span class="iconfont icon-shanchu fr" style="font-size:19px" @click="del(index)"></span>
            </div>
        </div>
        <!-- 购物车商品结束 -->

        <!-- 猜你喜欢开始 -->
        <div class="guess-like">
            <img src="../assets/img/rec.jpg">
            <div class="guess-like-goods">
                <ul>
                    <li v-for="(item,index) in list" :key="index" @click="toDetails(index)">
                        <img :src="item.image" alt="">
                        <h4>{{item.name}}</h4>
                        <span>￥{{item.price}}<s>{{item.discount}}</s></span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 猜你喜欢结束 -->

        <!-- 购物车、全选开始 -->
        <van-submit-bar v-show="$store.state.cart.lists.length" :price="total * 100" button-text="提交订单" @submit="onsubmit">
            <van-checkbox @click="checkedAll" :value="checked">全选</van-checkbox>
        </van-submit-bar>
        <!-- 购物车、全选结束 -->

        <vantabber v-show="!($store.state.cart.lists.length)"></vantabber>
    </div>
</template>

<script>
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        data() {
            return {
                checked:true,
                total:0,
                lists:[],
                goods:[
                    {imgsrc:"car1",name:"米家驱蚊器 智能版",money:"￥59",discount:""},
                    {imgsrc:"car2",name:"米家直流变频落地扇1X",money:"￥299",discount:""},
                    {imgsrc:"car3",name:"手机USB micro数据线",money:"￥9.9",discount:""},
                    {imgsrc:"car4",name:"Redmi Note 8 Pro 4GB+64GB",money:"￥1499",discount:"￥1799"},
                    {imgsrc:"car6",name:"Redmi NOTE 8 6GB+64GB",money:"￥1299",discount:"￥1399"},
                    {imgsrc:"car7",name:"米家 IH 电饭煲 4L",money:"￥499",discount:"￥599"},
                    {imgsrc:"car5",name:"Redmi 7A 3GB+32GB",money:"￥549",discount:"￥799"},
                    {imgsrc:"car10",name:"电视4A 50电影版",money:"￥1898",discount:"￥2098"},
                    {imgsrc:"car11",name:"米家电饭煲4L",money:"￥299",discount:""},
                    {imgsrc:"car12",name:"8H多功能青春床垫",money:"￥399",discount:""},
                    {imgsrc:"car13",name:"米家洗烘一体机Pro",money:"￥2999",discount:""},
                    {imgsrc:"car15",name:"米家照片打印机",money:"￥499",discount:""},
                    {imgsrc:"car16",name:"小米巨能写中性笔",money:"￥9.9",discount:""},
                    {imgsrc:"car17",name:"米家互联网燃气灶",money:"￥600",discount:"￥799"},
                    {imgsrc:"car18",name:"知吾煮汤锅 米家定制",money:"￥99",discount:""},
                    {imgsrc:"car19",name:"米家电子温湿度计Pro",money:"￥79",discount:""},
                    {imgsrc:"car20",name:"小米活塞耳机",money:"￥29",discount:""},
                    {imgsrc:"car9",name:"照片打印彩色相纸",money:"￥59"},
                    {imgsrc:"car8",name:"小米电视音响",money:"￥399"},
                    
                    {imgsrc:"car14",name:"智睿LED灯泡 米家定制",money:"￥14.9"},
                ],
                list:[]
            }
        },
        methods:{
            del(index){
                this.lists.splice(index,1)
            },
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            checkedAll(){
                this.lists.forEach((item)=>{
                    item.isSelect = !this.checked;
                })
                this.checked = !this.checked;
            },
            checkboxclick(){
                // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
                this.checked = this.lists.every((item)=>{
                    return item.isSelect;
                })
            },
            inputselect(index){
                // 修改商品列表
                this.lists[index].isSelect = !this.lists[index].isSelect;
                this.checkboxclick();
                this.sum();
            },
            onsubmit(){
                // 判断用户名是否为空
                // 为空：跳转登陆界面
                // 不为空：跳转订单页面
                if(this.$store.state.username){
                    this.$router.push('/order')
                }else{
                    this.$router.push({
                        path:'/login',
                        query:{
                            path:"/order"
                        }
                    })
                }
            },
            toDetails(index){
                this.$router.push({path:"/details",query:{goods:this.list[index]}})
            },
            goHome(){
                this.$router.push({path:"/home/recommend"});
            }
        },
        created(){
            this.lists = this.$store.state.cart.lists;
            this.checkboxclick();
            this.sum();
            this.$store.state.active = 2;
            this.$axios.get("like").then(res => {
                this.list = res.data.like
            })
        },
        beforeUpdate(){
            this.sum();
        },
        beforeDestroy(){
            this.$store.commit("cart/edit",this.lists);
        },
        components:{
            vantabber
        }
    }
</script>

<style lang="scss" scoped>
// 头部样式
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
// 登录层
.login{
    font-size: 16px;
    padding: 0 1rem;
    line-height: 3rem;
    background-color: #fff;
    i{
        transform: translateX(-0.2rem);
        font-size: 12px;
        span{
            font-size: 12px;
            color: #828282;
            font-weight: bold;
            display: inline-block;
            transform: translateX(0.2rem);
        }
    }
}
//购物车为空
.cars{
    background-color: #ebebeb;
    text-align: center;
    height: 4rem;
    line-height: 3.8rem;
    margin-top: 1px;
    i{
        display: inline-block;
        font-size: 16px;
        color: #c8c8c8;
        span{
            font-size: 26px;
        }
    }
    a{
        width: 10%;
        border: 1px solid #c8c8c8;
        padding: 5px 15px;
        color: #575757;
        margin-left:1rem;
    }
}

// 购物车商品
.car-goods{
    padding: 10px;
    background-color: white;
    overflow: hidden;
    .car-sp{
        overflow: hidden;
        margin-top: 16px;
        .van-checkbox{
            margin-top: 36px;
            margin-right: 10px;
        }
        .car-img{
            width:90px;
            border: 1px solid #eee;
            margin-right: 18px;
        }
        .car-msg{
            p{
                font-size: 14px;
            }
            span{
                display: block;
                font-size: 13px;
            }
            i{
                display: block;
                color: #999;
                margin: 3px 0;
            }
        }
    }
    
}
// 猜你喜欢
.guess-like{
    background-color: #f2f2f2;
    .guess-like-titel{
        text-align: center;
        position: relative;
        border-bottom: 1px solid #e3e3e3;
        margin: 0 2rem;
        padding-bottom: 20px;
        span{
            font-size: 20px;
            color: #fe7815;
        }
        i{
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #f2f2f2;
            width: 55%;
            font-size: 12px;
        }
    }
    .guess-like-goods{
        margin-top: 5px;
        overflow: hidden;
        background-color: white;
        ul{
            li{
                width: 49.5%;
                float: left;
                font-size: 13px;
                &:nth-child(2n){
                    margin-left: 1%;
                }
                h4{
                    font-weight: normal;
                    padding-left: 1rem;
                    padding-top: 0.5rem;
                    overflow: hidden;/*超出部分隐藏*/
                    white-space: nowrap;/*不换行*/
                    text-overflow:ellipsis;/*超出部分文字以...显示*/
                }
                span{
                    padding-left: 1rem;
                    color: #ff832f;
                    font-size: 16px;
                    s{
                        color: #666;
                        font-size: 12px;
                        padding-left: 0.4rem;
                    }
                }
            }
        }
    }
}
</style>