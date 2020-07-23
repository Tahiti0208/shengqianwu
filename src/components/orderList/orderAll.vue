<template>
    <div>
        <!-- 订单数据 -->
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(item.dateTime) | dataFormat" />
            <div v-for="(value,key) in item.goodsList" :key="key">
                <van-card
                    :num="value.num"
                    :price="value.price"
                    desc="8GB+256GB 珍珠白"
                    :title="value.name"
                    :thumb="value.image"
                >
            </van-card>
            </div>
            <!-- 订单底部按钮 -->
            <div class="orderfooter">
                <!-- 待支付 -->
                <div v-if="item.type == 1">
                    <van-button size="mini" type="primary" @click="onPay(item.orderId)">支付订单</van-button>
                    <van-button size="mini" type="danger">删除订单</van-button>
                </div>
                <!-- 待收货 -->
                <div v-else-if="item.type == 2">
                    <van-button size="mini" type="warning" @click="shows = true">退款申请</van-button>
                    <van-overlay :show="shows" @click="shows = false">
                        <div class="wrapper" @click="shows = true">
                            <div class="block">
                                请联系客服
                                <img src="../../assets/img/service.png">
                            </div>
                        </div>
                    </van-overlay>
                    <van-button size="mini"  type="info" @click="onGoods(item.orderId)">已收货</van-button>
                </div>
                <!-- 已完成 -->
                <div v-else-if="item.type == 3">
                    <van-button size="mini" @click="showPopup">商品评价</van-button>
                    <van-popup v-model="show" position="bottom" :style="{ height: '8%' }" style="text-align:center">
                        期待您的五星好评
                        <br>
                        <van-rate v-model="value" />
                    </van-popup>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                show:false,
                value: 0,
                shows:false
            }
        },
        created(){
            this.lists = this.$store.state.order.lists;
            this.typeList = this.$store.state.order.typeList;
        },
        methods:{
            onPay(orderId){
                let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 2; // 切换支付后收货类型，调用支付接口
            },
            onGoods(orderId){
                let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 3; // 切换待收货状态，
            },
            showPopup() {
                this.show = true;
            },
        },
        // 局部过滤器 
        // 注意：过滤器可以添加多个，必须在单词后面添加”s“
        filters:{
            dataFormat(dataString){
                var dd = new Date(dataString);
                // 获取年月日
                var y = dd.getFullYear();
                var m = dd.getMonth() + 1;
                var d = dd.getDate();
                // 获取时分秒
                var hh = dd.getHours();
                var mm = dd.getMinutes();
                var ss = dd.getSeconds();
                // 字符串拼接
                return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
            },
        },
        // 组件销毁
        beforeDestroy(){
            if(this.lists.length){
                this.$store.commit("order/editId",this.lists);
            }
        }
    }
</script>

<style lang="scss" scoped>
// 订单数据样式
.orderlists{
    margin-top: 10px;
        background: #fff;
    .van-card{
        background: #fff;
    }
    .orderfooter{
        text-align: right;
        padding: 0px 16px 10px 16px;
    }
}
// 客服样式
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
}
.block {
    width: 9rem;
    background-color: #fff;
    img{
        width: 9rem;
    }
}
</style>