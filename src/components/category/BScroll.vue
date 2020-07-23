<template>
    <div>
        <div class="content">
            <!-- 左边开始 -->
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :class="{current:index == currentIndex}" @click="selectItem(index,$event)" :key="index">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
            <!-- 左边结束 -->

            <!-- 右边开始 -->
            <div class="right" ref="right">
                <ul>
                    <img src="../../assets/img/bad01.jpg" alt="">
                    <li v-for="(item,index) in right" :key="index"  class="right-item-hook" >
                        <h2>{{item.title}}</h2>
                        <ul>
                            <li v-for="(item,index) in item.con" :key="item+index">
                                <div>
                                    <img :src="require(`../../assets/img/${item.imgsrc}`)" alt="">
                                </div>
                                <span>{{item.name}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- 右边结束 -->
        </div>
    </div>
</template>

<script>
    // cnpm install @better-scroll/core@next --save
    // 单独引入js文件
    import BScroll from '@better-scroll/core'

    export default {
        data(){
            return {  
                // 左边导航栏数据
                left:["新品","众筹","小米手机","生活电器","电脑办公","厨房电器"],
                // 右边商品数据
                right:[
                    {
                        title:"手机",
                        con:[
                            {imgsrc:"fp01.png",name:"Redmi 9"},
                            {imgsrc:"fp02.png",name:"10X 4G"},
                            {imgsrc:"fp03.png",name:"10X 5G系列"},
                            {imgsrc:"fp04.png",name:"小米10 青春"},
                            {imgsrc:"fp05.png",name:"K30 Pro 变焦版"},
                            {imgsrc:"fp06.png",name:"K30 Pro"},
                            {imgsrc:"fp07.png",name:"黑鲨手机3"},
                            {imgsrc:"fp08.png",name:"黑鲨手机3 Pro"},
                            {imgsrc:"fp09.png",name:"小米10 Pro"},
                            {imgsrc:"fp10.png",name:"小米10"},
                        ]
                    },
                    {
                        title:"众筹",
                        con:[
                            {imgsrc:"zc01.png",name:"鼠标"},
                            {imgsrc:"zc02.png",name:"显示器"},
                            {imgsrc:"zc03.png",name:"智能窗帘"},
                            {imgsrc:"zc04.png",name:"智能门锁 E"},
                            {imgsrc:"zc05.png",name:"龙头净水器"},
                            {imgsrc:"zc06.png",name:"挂烫机"},
                            {imgsrc:"zc07.png",name:"塔扇"},
                            {imgsrc:"zc08.png",name:"插线板"},
                            {imgsrc:"zc09.png",name:"智能晾衣机"},
                            {imgsrc:"zc10.png",name:"Redmi手环"},
                        ]
                    },
                    {
                        title:" 小米数字系列",
                        con:[
                            {imgsrc:"mi01.png",name:"小米10青春"},
                            {imgsrc:"mi02.png",name:"小米10Pro"},
                            {imgsrc:"mi03.png",name:"小米10"},
                        ]
                    },
                    {
                        title:"生活电器",
                        con:[
                            {imgsrc:"cold01.jpg",name:"空气净化器"},
                            {imgsrc:"cold02.jpg",name:"扫地机"},
                            {imgsrc:"cold03.jpg",name:"吸尘器"},
                            {imgsrc:"cold01.jpg",name:"新风机"},
                            {imgsrc:"cold01.jpg",name:"电风扇"},
                            {imgsrc:"cold01.jpg",name:"晾衣机"},
                            {imgsrc:"cold01.jpg",name:"电暖器"},
                        ]
                    },
                    {
                        title:"电脑",
                        con:[
                            {imgsrc:"notebook02.jpg",name:"游戏本"},
                            {imgsrc:"notebook03.jpg",name:"RedmiBook 14"},
                            {imgsrc:"notebook04.jpg",name:"RedmiBook 16"},
                        ]
                    },
                    {
                        title:"厨房电器",
                        con:[
                            {imgsrc:"cook01.png",name:"净水器"},
                            {imgsrc:"cook02.png",name:"洗碗机"},
                            {imgsrc:"cook03.png",name:"电饭煲"},
                            {imgsrc:"cook04.png",name:"延吉灶具"},
                            {imgsrc:"cook05.png",name:"电磁炉"},
                            {imgsrc:"cook06.png",name:"电压力锅"},
                            {imgsrc:"cook07.png",name:"水壶"},
                            {imgsrc:"cook08.png",name:"微波炉"},
                            {imgsrc:"cook09.png",name:"电烤箱"},
                            {imgsrc:"cook05.png",name:"电磁炉"},
                            {imgsrc:"cook06.png",name:"电压力锅"},
                            {imgsrc:"cook07.png",name:"水壶"},
                            {imgsrc:"cook01.png",name:"净水器"},
                            {imgsrc:"cook02.png",name:"洗碗机"},
                            {imgsrc:"cook03.png",name:"电饭煲"},
                            {imgsrc:"cook08.png",name:"微波炉"},
                            {imgsrc:"cook09.png",name:"电烤箱"},
                            {imgsrc:"cook05.png",name:"电磁炉"},
                            {imgsrc:"cook06.png",name:"电压力锅"},
                        ]
                    },
                ],
                listHeight:[],// 记录高度
                scrollY:0
            }
        },
        // props:["left","right"],
        methods: {
            _initScroll(){
                // 左边联动效果
                this.lefts = new BScroll(this.$refs.left,{
                    click:true, // 拥有触发事件
                    probeType:3 // 滚动位置探针效果
                })
                // 右边联动效果
                this.rights = new BScroll(this.$refs.right,{
                    probeType:3 // 滚动位置探针效果
                })
                // 获取滚动效果高度
                this.rights.on("scroll",this.onScrollfun)
            },
            onScrollfun(pos){
                console.log(pos.y);
                this.scrollY =  Math.abs(Math.round(pos.y));//滚动条y轴
                    
            },
            // 获取高度
            _getHeight(){
                // 获取每个类对象
                let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                let height = 0; //设置默认高度
                this.listHeight.push(height);
                // 循环对象获取各自到顶部高度
                for(let i = 0;i < rightItems.length;i++){
                    let item = rightItems[i];
                    height += item.clientHeight; //对象高度
                    this.listHeight.push(height);
                }

            },
            // 左侧点击效果
            selectItem(index,event){
                // 当原生浏览器点击事件监听_constructed,把当时浏览器监听属性return掉
                if(!event._constructed){
                    return;
                }else{
                    // 联动效果
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let el = rightItems[index];// 通过下标获取对象
                    // 通过滚动事件指定目标元素
                    this.rights.scrollToElement(el);
                }
                
            }   
        },
        // 生命周期函数。目的让vue代码执行解释后，实例化第三方插件
        mounted() {
            // 能在虚拟DOM执行完后，在回调方法
            this.$nextTick(()=>{
                this._initScroll(); // 调用滚动效果
                this._getHeight();// 获取右边列表内容高度
            })
        },
        // 组件销毁前阻止滚动事件
        beforeDestroy(){
            this.rights.off("scroll",this.onScrollfun)
        },
        // 计算属性
        computed: {
            currentIndex(){
                for(let i = 0;i <this.listHeight.length;i++){
                    let height = this.listHeight[i];
                    let height2 = this.listHeight[i+1];
                    
                    // 判断高度之间为当前左选项变化
                    if((this.scrollY >= height && this.scrollY < height2)){
                        // 左边联动
                        let leftItems = this.$refs.left.getElementsByTagName("li");
                        let elLI = leftItems[i];
                        this.lefts.scrollToElement(elLI);
                        return i;
                    }
                }
                // 如果没有高度值，默认为0，第一位
                return 0;
            }
        },
    }
</script>

<style lang="scss" scoped>
// 头部样式
.head{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
}
.content{
    display: flex;
    position: absolute;
    /* 定位里面不写左右样式，不写高度，自动获取高度 */
    top:44px;
    bottom: 0px;
    background-color: #eeeeee;
    width: 100%;
    overflow: hidden;
}
// 左边样式
.left{
    flex: 0 0 80px;
    width: 80px;
    background-color: #FEFEFE;
    margin-bottom: 50px;
}
.left li{
    width: 100%;
    height: 100%;
    color:#999;
    font-size:12px;
}
.left li.current{
    background-color: white;
    color:#fb7d34;
    font-size: 1rem;
}
.left li span{
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
// 右边样式
.right{
    flex:1;
    background-color: white;
    margin-bottom: 50px;
    li.right-item-hook{
        overflow: hidden;
        text-align: center;
        // &:last-child{
        //     height: 800px;
        // }
        h2{
            line-height: 57px;
            font-size: 12px;
            color: #323232;
        }
        >ul{
            width: 100%;
            >li{
                width: 33.33%;
                float: left;
                text-align: center;
                font-size: 12px;
                color: #ccc;
                img{
                    width: 70px;
                    height: 70px;
                    margin: 0 auto;
                }
            }
        }
    }
}
</style>