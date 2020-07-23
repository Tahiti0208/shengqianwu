export default [
    {
        path:'/my',
        name:"我的",
        component:()=>import("../../views/my.vue")
    },
    {
        path:'/login',
        name:"登陆",
        component:()=>import("../../components/my/login.vue")
    },
    {
        path:'/register',
        name:"注册",
        component:()=>import("../../components/my/register.vue")
    },
]