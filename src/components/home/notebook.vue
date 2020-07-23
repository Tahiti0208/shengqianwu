<template>
    <div>
        <!-- 年度新品开始 -->
        <div>
            <img src="../../assets/img/notebook01.jpg" alt="">
        </div>
        <!-- 年度新品结束 -->

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
                //     {imgsrc:"notebook02",name:"Redmi显示器 23.8英寸",core:"三微边沉浸式设计，突破束缚",money:"￥599"},
                //     {imgsrc:"notebook03",name:"RedmiBook 14 Ⅱ",core:"7nm AMD锐龙处理器",money:"￥3599"},
                //     {imgsrc:"notebook04",name:"RedmiBook 13 锐龙版",core:"震撼大屏，时尚全面屏",money:"￥2599"},
                //     {imgsrc:"notebook05",name:"Pro 15.6 增强版",core:"锐龙版全面屏高性能轻薄本",money:"￥3599起"},
                //     {imgsrc:"notebook06",name:"Pro 15.6 GTX显卡",core:"更强悍的专业笔记本",money:"￥7499起"},
                //     {imgsrc:"notebook07",name:"游戏本2019款",core:"性能怪兽全新出击",money:"￥6499起"},
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
            this.$axios.get("notebook").then(res => {
                this.lists = res.data.notebook
            })
        }
    }
</script>

<style lang="scss" scoped>
// 商品样式
.commodity{
    overflow: hidden;
    ul{
        li{
            width: 50%;
            padding: 0.3rem;
            box-sizing: border-box;
            background-color: #D97E8F;
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
                    font-weight: 700;
                    color: red;
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