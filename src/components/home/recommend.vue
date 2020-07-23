<template>
    <div>
        <!-- 轮播图开始 -->
        <swiper :img="Images"></swiper>
        <!-- 轮播图结束 -->

        <!-- 分类层开始 -->
        <div class="classify clearfix">
            <ul>
                <li class="fl w20" v-for="(item,index) in list" :key="index">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                    <p>{{item.span}}</p>
                </li>
            </ul>
        </div>
        <!-- 分类层结束 -->

        <!-- 三张图开始 -->
        <div class="three-img clearfix">
            <ul>
                <li>
                    <img src="../../assets/img/left.jpg">
                </li>
                <li>
                    <img src="../../assets/img/rightTop.jpg">
                </li>
                <li>
                    <img src="../../assets/img/rightBottom.jpg">
                </li>
            </ul>
        </div>
        <!-- 三张图结束 -->

        <!-- 商品列表开始 -->
        <div class="goodslist">
            <img src="../../assets/img/ad01.jpg" style="margin-top:10px">
            <img src="../../assets/img/goodslists.jpg">
        </div>
        <!-- 商品列表结束 -->
        
        <!-- 商品层开始 -->
        <div class="commodity">
            <ul>
                <li v-for="(item,index) in lists" :key="index" @click="toDetails(index)">
                    <img :src="item.image" alt="">
                    <b class="db">{{item.name}}</b>
                    <span class="db">{{item.core}}</span>
                    <i class="db">￥{{item.price}}起</i>
                    <strong>立即购买</strong>
                </li>
            </ul>
        </div>
        <!-- 商品层结束 -->
        
    </div>
</template>

<script>
    import swiper from "../../components/public/swiper";
    export default {
        data() {
            return {
                lists:[],
                Images:[
                    require("../../assets/img/banner01.jpg"),
                    require("../../assets/img/banner02.jpg"),
                    require("../../assets/img/banner03.jpg"),
                ],
                // 分类层数据
                list:[
                    {icon:"#icon-miaosha",span:"小米秒杀"},
                    {icon:"#icon-lianggeren",span:"小米众筹"},
                    {icon:"#icon-shouji3",span:"全芯超越"},
                    {icon:"#icon-yijiuhuanxin",span:"以旧换新"},
                    {icon:"#icon-gouwudai",span:"超值特卖"},
                    {icon:"#icon-x",span:"智能"},
                    {icon:"#icon-ziyuanl",span:"笔记本热卖"},
                    {icon:"#icon-dianshi",span:"电视热卖"},
                    {icon:"#icon-xiyiji",span:"洗衣机热卖"},
                    {icon:"#icon-shoujiqia",span:"米粉卡"},
                ],
                //商品层数据
                // phones:[
                //     {imgsrc:"phone1",name:"小米10Pro",core:"骁龙865/50倍变焦",money:"￥4999起"},
                //     {imgsrc:"phone2",name:"小米10",core:"骁龙865/1亿像素相机",money:"￥3999起"},
                //     {imgsrc:"phone3",name:"Redmi K30",core:"120Hz流速屏,全速热爱",money:"￥1599起"},
                //     {imgsrc:"phone4",name:"Redmi K30 5G",core:"双模5G,120Hz流速屏",money:"￥1999起"},
                //     {imgsrc:"phone5",name:"Redmi Note 8 Pro",core:"6400万全场景四摄",money:"￥1199起"},
                //     {imgsrc:"phone6",name:"Redmi Note 8",core:"千元4800万四摄",money:"￥899起"},
                // ],
            }
        },
        components:{
            swiper,
        },
        // 跳转路由传参
        methods:{
            toDetails(index){
                this.$router.push({path:"/details",query:{goods:this.lists[index]}})
            }
        },
        // 请求数据
        created(){
            this.$axios.get("goodsList").then(res => {
                this.lists = res.data.result
            })
        }
    }
</script>

<style lang="scss" scoped>
// 小图标样式
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
// 商品列表样式
.goodslist{
    width: 100%;
    margin-top:10px;
}
// 浮左
.left{
    float: left;
}
// 分类层
.classify{
    ul{
        li{
            height: 76px;
            padding-top: 10px;
            text-align: center;
            box-sizing: border-box;
            font-size:10px;
            svg{
                font-size:33px;
                margin-bottom: 5px;
            }
        }
    }
}
// 三张图片样式
.three-img{
    ul{
        padding-top: 0.5rem;
        background-color: #f5f5f5;
        li{
            float: left;
            width: 50%;
            height: 7rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        & li:first-child{
            height: 14rem;
        }
    }
}
// 商品层样式
.commodity{
    overflow: hidden;
    background-color: #fff;
    ul{
        li{
            width: 50%;
            padding: 0.3rem;
            box-sizing: border-box;
            float: left;
            text-align: center;
            b{
                color: black;
                font-size: 14px;
                padding-top: 5px;
            }
            i{
                color: #ea625b;
            }
            strong{
                background-color: #ea625b;
                color: white;
                display: inline-block;
                width: 60%;
                border-radius: 4px;
                height: 1.8rem;
                line-height: 1.8rem;
            }
        }
    }
}
</style>