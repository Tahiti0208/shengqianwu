<template>
    <div>
        <!-- 轮播图开始 -->
        <swiper :img="Images"></swiper>
        <!-- 轮播图结束 -->

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
                    require("../../assets/img/phone01.jpg"),
                    require("../../assets/img/phone02.jpg"),
                    require("../../assets/img/phone03.jpg"),
                ],
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