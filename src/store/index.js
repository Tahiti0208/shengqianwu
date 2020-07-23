import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import cart from "./cart";
import address from "./address";
import order from "./order";

export default new Vuex.Store({
  state: {
    vanTabbar:true, // 默认显示 底部导航
    username:null,// 用户名
    active:0,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,     // 购物车 详情页与购物车
    address,  // 我的地址
    order,    // 订单数据
  }
})
