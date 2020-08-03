<template>
    <div>
        <button @click="login" v-if="!isLogin">登录</button>
        <button @click="logout" v-else>注销</button>
    </div>
</template>
<script> export default {
    methods: {
        login() {
            window.isLogin = true;
            // 动态添加路由
            this.$router.addRoutes([
                {
                    path: '/admin',
                    name: 'admin',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
                    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
                    children: [
                        {
                            // path: '/course/:name',
                            path: '/admin/course/:name',
                            name: 'detail',
                            component: () => import('../views/Detail.vue')
                        },
                    ],
                    meta: {
                        auth: true,
                    },
                    // beforeEnter(to, from, next) {
                    //     /*if (to.meta.auth) {
                    //         if (window.isLogin) {
                    //             next()
                    //         } else {
                    //             next('/login?redirect=' + to.fullPath)
                    //         }
                    //     } else {
                    //         next()
                    //     }*/
                    //     if (window.isLogin) {
                    //         next()
                    //     } else {
                    //         next('/login?redirect=' + to.fullPath)
                    //     }
                    // }
                },
            ]);
            this.$router.push(this.$route.query.redirect)
        }, logout() {
            window.isLogin = false
        }
    }, computed: {
        isLogin() {
            return window.isLogin
        }
    },
} </script>
<style scoped>

</style>