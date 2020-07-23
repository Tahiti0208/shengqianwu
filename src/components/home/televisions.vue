<template>
    <div>
        <!-- 四张图片开始 -->
        <div class="tv">
            <img src="../../assets/img/tv01.jpg" alt="">
            <img src="../../assets/img/tv02.jpg" alt="">
            <img src="../../assets/img/tv03.jpg" alt="">
            <img src="../../assets/img/tv04.jpg" alt="">
        </div>
        <!-- 四张图片结束 -->

        <!-- 商品层开始 -->
        <div class="commodity">
            <ul>
                <li v-for="(item,index) in lists" :key="index" @click="toDetails(index)">
                    <div class="box">
                        <img :src="item.image" alt="">
                        <b class="db">{{item.name}}</b>
                        <span class="db">{{item.core}}</span>
                        <i class="db">￥{{item.price}}</i>
                        <strong>立即购买</strong>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 商品层结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:[],
                // phones:[
                //     {imgsrc:"tvshop01",name:"小米电视4A 32英寸",core:"人工智能系统，高清液晶屏",money:"￥699"},
                //     {imgsrc:"tvshop02",name:"全面屏电视 55英寸",core:"潮流全面屏设计，超高清画质",money:"￥1899"},
                //     {imgsrc:"tvshop03",name:"全面屏电视65英寸",core:"震撼大屏，时尚全面屏",money:"￥2599"},
                //     {imgsrc:"tvshop04",name:"小米电视4C 43英寸",core:"FHD全高清屏，钢琴烤漆",money:"￥1199起"},
                //     {imgsrc:"tvshop05",name:"Redmi Note 8 Pro",core:"FHD全高清屏，钢琴烤漆",money:"￥1199起"},
                //     {imgsrc:"tvshop06",name:"全面屏电视E4",core:"时尚全面屏设计",money:"￥1599"},
                // ],
            }
        },
        // 跳转路由传参
        methods:{
            toDetails(index){
                this.$router.push({path:"/details",query:{goods:this.lists[index]}})
            }
        },
        // 请求数据
        created(){
            this.$axios.get("televisions").then(res => {
                this.lists = res.data.televisions
            })
        }
    }
</script>

<style lang="scss" scoped>
// 商品层样式
.commodity{
    overflow: hidden;
    ul{
        li{
            width: 50%;
            padding: 0.3rem;
            box-sizing: border-box;
            background-color: #FFEBDC;
            float: left;
            .box{
                width: 100%;
                text-align: center;
                background-color: #fff;
                padding-bottom: 10px;
                b{
                    color: black;
                    font-size: 14px;
                    padding-top: 5px;
                }
                i{
                    color: red;
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
}
</style>