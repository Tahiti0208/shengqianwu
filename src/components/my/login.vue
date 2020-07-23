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
            <!-- 用户名、密码结束 -->

            <!-- 按钮开始 -->
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                登录
                </van-button>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" @click="goRegister">
                注册
                </van-button>
            </div>
            <!-- 按钮结束 -->
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
            };
        },
        methods: {
            onSubmit(params) {
                let _this = this;
                // 判断是否传参，修改返回路径
                let path = "path" in _this.$route.query ? _this.$route.query.path:'/my';

                this.$axios.get("login",{params}).then((res)=>{
                    console.log(res);
                    // 请求数据成功后提示
                    if(res.data == "200"){
                        Toast({
                            message:"登陆成功",
                            onOpened(){
                                // 登陆成功用户名存入vuex
                                _this.$store.state.username = _this.username;
                                // 回调跳转路由
                                _this.$router.push(path);
                            }
                            });
                    }else{
                        Toast("登陆失败");
                    }
                })
            },
            goRegister(){
                this.$router.push('/register')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>