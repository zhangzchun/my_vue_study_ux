export default {
    namespaced:true, // 独立命名空间，避免命名冲突
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
        // 参数1 commit是vuex 传递的上下文context：{commit，dispatch,state}
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
}