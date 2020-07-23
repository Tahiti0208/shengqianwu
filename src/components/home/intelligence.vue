<template>
    <div>
        <!-- 轮播图开始 -->
        <swiper :img="Images"></swiper>
        <!-- 轮播图结束 -->

        <!-- 热卖爆品结束 -->
        <div>
            <img src="../../assets/img/hot.webp" style="margin-top:8px">
        </div>
        <!-- 热卖爆品结束 -->

        <!-- 商品层开始 -->
        <div class="commodity">
            <ul>
                <li v-for="(item,index) in lists" :key="index" @click="toDetails(index)">
                    <img :src="item.image" alt="">
                    <b class="db">{{item.name}}</b>
                    <span class="db">{{item.core}}</span>
                    <i class="db">￥{{item.price}}</i>
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
                Images:[
                    require("../../assets/img/int01.jpg"),
                    require("../../assets/img/int02.jpg"),
                    require("../../assets/img/int03.jpg"),
                    require("../../assets/img/int04.jpg"),
                    require("../../assets/img/int05.jpg"),
                ],
                lists:[],
                // phones:[
                //     {imgsrc:"zn01",name:"扫拖一体机器人",core:"扫得干净，拖得彻底",money:"￥1799"},
                //     {imgsrc:"zn02",name:"小米智能摄像机云台版",core:"高清画质，守护家的每一面",money:"￥189"},
                //     {imgsrc:"zn03",name:"净水器600G",core:"600加仑通量，流速更快",money:"￥1699"},
                //     {imgsrc:"zn04",name:"空气净化器2S",core:"好空气看得见",money:"￥749"},
                //     {imgsrc:"zn05",name:"米家微波炉",core:"微晶平板速热",money:"￥399"},
                //     {imgsrc:"zn06",name:"恒温电水壶",core:"一杯水的温度，刚刚好",money:"￥199"},
                // ],
            }
        },
        components:{
            swiper,
        },
        // 路由跳转传参
        methods:{
            toDetails(index){
                this.$router.push({path:"/details",query:{goods:this.lists[index]}})
            }
        },
        // 请求数据
        created(){
            this.$axios.get("intelligence").then(res => {
                this.lists = res.data.intelligence
            })
        }
    }
</script>

<style lang="scss" scoped>
// 商品样式
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
                font-weight: 700;
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