export default {
    namespaced:true,// 命名空间
    state:{
        lists:[],// 购物车数据列表
        num:0 // 商品数量
    },
    mutations:{
        add(state,obj){
            // 加入购物车，把数据添加lists购物车列表
            // 1.判断如果没有数据添加数据，购物车中存在数据，数据加一
            // 获取数据中id
            let index = state.lists.findIndex(val => val.id == obj.id);
            if(index != "-1"){ //存在，数量加一
                state.lists[index].num += 1;
                state.num = state.lists[index].num;// 修改数量
            }else{ // 不存在添加数据
                obj.isSelect = true; // 默认选中
                state.lists.push(obj);
                state.num = 1;// 数量
            }
        },
        edit(state,obj){
            Object.assign(state.lists,obj);
        }
    },
    actions:{}
}