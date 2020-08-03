<template>
    <div>
        <!--<button @click="login" v-if="!isLogin">登录</button>-->
        <!--<button @click="login" v-if="!$store.state.isLogin">登录</button>-->
        <button @click="login" v-if="!isLogin">登录</button>
        <button @click="logout" v-else>注销</button>
    </div>
</template>
<script> export default {
    methods: {
        login() {
            // window.isLogin = true;
            // 修改状态只能通过store.dispatch(mutation)
            // 提交 mutation 修改状态
            // this.$store.commit('login')
            // 派发动作 触发action store.dispatch
            this.$store.dispatch('login', 'admin').then(() => {
                
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
            }).catch(() => {
                alert('用户名或密码错误')
            });
        },
        logout() {
            // window.isLogin = false
            this.$store.commit('logout')
        }
    }, computed: {
        isLogin() {
            // return window.isLogin
            return this.$store.state.isLogin
        }
    },
} </script>
<style scoped>

</style>