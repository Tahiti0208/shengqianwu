<template>
    <div>
        <!-- 顶部导航栏 -->
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.push('/my')"
        />
        <!-- 订单列表 -->
        <van-tabs v-model="$store.state.order.active">
            <van-tab title="全部订单" to="/orderList/orderAll"></van-tab>
            <van-tab title="待支付" to="/orderList/orderPay"></van-tab>
            <van-tab title="待收货" to="/orderList/orderGoods"></van-tab>
            <van-tab title="已完成" to="/orderList/orderEnd"></van-tab>
        </van-tabs>
        <!-- 二级路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // active: 0,
            }
        },  
    }
</script>

<style lang="scss" scoped>

</style>