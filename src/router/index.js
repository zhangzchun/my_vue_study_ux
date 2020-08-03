import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store/'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/course/:name',
        component: () => import('../views/Detail.vue')
    },
    { // 会匹配所有路径
        path: '*',
        component: () => import('../views/404.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

/*router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        if (window.isLogin) {
            next()
        } else {
            next('/login?redirect=' + to.fullPath)
        }
    } else {
        next()
    }
});*/

router.beforeEach((to, from, next) => {
    /*if (to.meta.auth) {
        if (window.isLogin) {
            next()
        } else {
            next('/login?redirect=' + to.fullPath)
        }
    } else {
        next()
    }*/
    if (store.state.user.isLogin) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next('/login?redirect=' + to.fullPath)
        }
    }
});
export default router
