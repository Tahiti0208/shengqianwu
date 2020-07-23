<template>
    <div class="page">
        <!-- 生活专场开始 -->
        <div>
            <img src="../../assets/img/periphery01.jpg" alt="">
            <div class="crevice"></div>
            <img src="../../assets/img/periphery02.jpg" >
            <div class="crevice"></div>
        </div>
        <div class="two">
            <img src="../../assets/img/periphery03.jpg" alt="">
            <img src="../../assets/img/periphery04.jpg" alt="">
        </div>
        <div class="two">
            <img src="../../assets/img/periphery05.jpg" alt="">
            <img src="../../assets/img/periphery06.jpg" alt="">
        </div>
        <img src="../../assets/img/goods.jpg" alt="">
        <!-- 生活专场结束 -->

        <!-- 商品层开始 -->
        <div class="commodity">
            <ul>
                <li v-for="(item,index) in lists" :key="index" @click="toDetails(index)">
                    <div class="box">
                        <img :src="item.image" alt="">
                        <b class="db">{{item.name}}</b>
                        <span class="db">{{item.core}}</span>
                        <i class="db">￥{{item.price}}</i>
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
                //     {imgsrc:"goods01",name:"小米小背包",core:"城市休闲，简约设计",money:"￥24.9起",discount:""},
                //     {imgsrc:"goods02",name:"MIJOY抽绳式垃圾袋3卷装 ",core:"让清洁更简单",money:"￥9.9",discount:"￥14.9"},
                //     {imgsrc:"goods03",name:"抽纸 24包/箱",core:"精选原生竹浆，健康环保",money:"￥27.9",discount:"￥32.9"},
                //     {imgsrc:"goods04",name:"日常元素便携摇头风扇",core:"2000mAh满电续航最高达8小时",money:"￥59",discount:""},
                //     {imgsrc:"goods05",name:"米家超级电池4粒装",core:"稳定耐用",money:"￥19.9",discount:""},
                //     {imgsrc:"goods06",name:"小米GaN充电器 65W",core:"氮化镓黑科技 65W MAX 大功率快充",money:"￥149",discount:""},
                //     {imgsrc:"goods07",name:"驱蚊片",core:"长效驱蚊，蜂巢式设计",money:"￥29",discount:""},
                //     {imgsrc:"goods08",name:"小魔爪按摩器",core:"全身按摩，小巧百搭",money:"￥9.9",discount:""},
                //     {imgsrc:"goods09",name:"柚家湿巾 （三盒装）",core:"75%酒精，有效清洁杀菌",money:"￥39",discount:"￥59"},
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
            this.$axios.get("periphery").then(res => {
                this.lists = res.data.periphery
            })
        }
    }
</script>

<style lang="scss" scoped>
.page{
    background-color: #9DDCFF;
    .crevice{
        height: 0.5rem;
    }
    .two{
        width: 50%;
        display: flex;
    }
    // 商品层样式
    .commodity{
        overflow: hidden;
        ul{
            li{
                width: 33.3%;
                padding: 0.3rem;
                box-sizing: border-box;
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
}

</style>