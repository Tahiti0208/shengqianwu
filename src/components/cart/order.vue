<template>
    <div>
        <!-- 顶部开始 -->
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="cartvue"
        />
        <!-- 顶部结束 -->

        <!-- 地址开始 -->
        <div @click="addressfun">
            <van-contact-card 
            :type="cardType" 
            :name="name" 
            :tel="tel" 
            add-text="添加联系人"
            :editable="false" />
        </div>
        <!-- 地址结束 -->

        <!-- 商品卡片开始 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-card
                :num="item.num"
                :price="item.price"
                desc="8GB+256GB 珍珠白"
                :title="item.name"
                :thumb="item.image"
            />
        </div>
        <!-- 商品卡片结束 -->

        <!-- 提交订单开始 -->
        <van-submit-bar 
            :price="total*100" 
            button-text="提交订单" @submit="onsubmit" 
        />
        <!-- 提交订单结束 -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:"",
                tel:""
            }
        },
        methods:{
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; // 返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); // 总价格
                },0) // 总价格默认值0
            },
            // 定义跳转方法
            addressfun(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },
            cartvue(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:1 //未支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push('/cart');
                this.$store.state.vanTabbar = true;
            },
            // 提交订单
            onsubmit(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:2 //已支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push("/orderList/orderAll")
            }
        },
        computed:{
            cardType(){
                return this.$store.state.address.lists.length == 0 ? "add" : "edit"
            }
        },
        created(){
            // 获取地址数据
            let data = this.$store.state.address.lists.find(item => item.isDefault);
            if(data){
                this.name = data.name;
                this.tel = data.tel;
                this.address = data; // 定义地址对象
            }
            this.lists = this.$store.state.cart.lists;
            this.sum();// 计算总价格
        },
    }
</script>