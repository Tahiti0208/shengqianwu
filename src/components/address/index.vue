<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
        />
        <!-- 顶部导航结束 -->

        <!-- 地址开始 -->
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
            @select="onSelect"
        />
        <!-- 地址结束 -->
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data() {
            return {
                chosenAddressId: '1',
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                        isDefault: true,
                    },
                    {
                        id: '2',
                        name: '李四',
                        tel: '1310000000',
                        address: '浙江省杭州市拱墅区莫干山路 50 号',
                    },
                ],
            };
        },
        methods: {
            // 路由跳转
            onAdd() {
                this.$router.push("/addressAdd")
            },
            onEdit(item) {
                this.$router.push({path:"/addressEdit",query:{id:item.id}})
            },
            onSelect(item){
                this.$store.commit("address/editId",item.id);
                this.$router.go(-1)
            }
        },
        created(){
            this.list = this.$store.state.address.lists || [];
            // 获取id值
            try {
                this.chosenAddressId = this.list.find(item=>item.isDefault).id
            } catch (error) {
                Toast('没有地址数据');
            }
        }
    };
</script>