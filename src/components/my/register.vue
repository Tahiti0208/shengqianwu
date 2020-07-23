<template>
    <div>
        <!-- 顶部导航栏开始 -->
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.push('/my')"
        />
        <!-- 顶部导航栏结束 -->

        <van-form @submit="onSubmit">
            <!-- 用户名、密码开始 -->
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                v-model="password2"
                type="password"
                name="password2"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <!-- 用户名、密码结束 -->

            <!-- 注册按钮 -->
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                注册
                </van-button>
            </div>
            <!-- 注册按钮结束 -->
        </van-form>
    </div>
</template>

<script>

    import { Toast } from 'vant';
    export default {
        data() {
            return {
                username: '',
                password: '',
                password2: '',
            };
        },
        methods: {
            onSubmit(params) {
                let _this = this;
                this.$axios.get("register",{params}).then((res)=>{
                    console.log(res);
                    // 请求数据成功后提示
                    if(res.data == "200"){
                        Toast({
                            message:"注册成功",
                            onOpened(){
                                // 回调跳转路由
                                _this.$router.push("/login");
                            }
                            });
                    }else{
                        Toast("注册失败");
                    }
                })
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>