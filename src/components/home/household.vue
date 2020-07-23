<template>
    <div>
        <!-- 家电图片展示 -->
        <div class="rule">
            <img src="../../assets/img/purple.jpg" alt="">
            <img src="../../assets/img/purple01.jpg" alt="">
            <img src="../../assets/img/purple02.jpg" alt="">
            <img src="../../assets/img/purple03.jpg" alt="">
        </div>
        <div>
            <img src="../../assets/img/household01.jpg" alt="">
        </div>
        <!-- 家电图片结束 -->

        <!-- 商品层开始 -->
        <div class="commodity">
            <ul>
                <li v-for="(item,index) in lists" :key="index" @click="toDetails(index)">
                    <div class="box">
                        <img :src="item.image" alt="">
                        <b class="db">{{item.name}}</b>
                        <span class="db">{{item.core}}</span>
                        <i class="db">￥{{item.price}}<s>￥{{item.discount}}</s></i>
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
                //     {imgsrc:"cold01",name:"十字四门冰箱",core:"风冷无霜，长久锁水保鲜",money:"￥2899",discount:"￥3299"},
                //     {imgsrc:"cold02",name:"风冷三门冰箱 ",core:"三门保鲜，无霜长效养鲜",money:"￥1499",discount:"￥1699"},
                //     {imgsrc:"cold03",name:"两门冰箱 160L",core:"小巧能装，速冻养鲜",money:"￥899",discount:"￥1099"},
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
            this.$axios.get("household").then(res => {
                this.lists = res.data.household
            })
        }
    }
</script>

<style lang="scss" scoped>
// 四张图片样式
.rule{
    width:25%;
    display: flex;
}
// 商品样式
.commodity{
    overflow: hidden;
    ul{
        li{
            width: 33.3%;
            padding: 0.3rem;
            box-sizing: border-box;
            background-color: #EDD8FD;
            float: left;
            .box{
                width: 100%;
                text-align: center;
                background-color: #fff;
                padding-bottom: 10px;
                b{
                    padding:0 10px;
                    color: black;
                    font-size: 14px;
                    padding-top: 5px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                span{
                    padding: 0 5px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                i{
                    font-weight: 700;
                    color: red;
                    s{
                        color: #666;
                        font-size: 10px;
                        padding-left: 0.2rem;
                    }
                }
            }
        }
    }
}
</style>