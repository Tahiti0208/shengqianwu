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

        <!-- 选择地区开始 -->
        <van-address-edit
            :area-list="areaList"
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
        />
        <!-- 选择地区结束 -->
    </div>
</template>

<script>
    // 引入地址
    import areaList from "./erea.js";
    export default {
        data() {
            return {
                areaList,
                searchResult: [],
            };
        },
        methods: {
            onSave({name,tel,province,city,county,areaCode,addressDetail}) {
                // 调用vuex方法
                this.$store.commit("address/add",{
                    name,
                    tel,
                    address:province + city + county + addressDetail,
                    province,
                    city,
                    county,
                    areaCode,
                    addressDetail
                });
                this.$router.go(-1); // 回到上一页
            },
        }
    };
</script>