import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false
    },
    mutations: {
        login(state) {
            state.isLogin = true
        }, logout(state) {
            state.isLogin = false
        }
    },
    actions: {
        // 参数1 是vuex 传递的上下文context：{commit，dispatch,state}
        // 模拟登录 api 的调用，1s后用户 admin, 登陆成功
        login({commit}, username) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (username === 'admin') {
                        commit('login')
                        resolve()
                    } else {
                        reject()
                    }
                }, 1000);
            })
        }
    },
    modules: {}
})
