export default {
    namespaced: true, // 独立命名空间，避免命名冲突
    state: {
        isLogin: false,
        username: ''
    },
    mutations: {
        login(state,username) {
            state.isLogin = true;
            state.username = username;
        }, logout(state) {
            state.isLogin = false;
            state.username = '';
        },
        /*setUsername(state, username) {
            state.username = username;
        }*/
    },
    getters: { // 派生出欢迎信息
        welcome: state => {
            return state.username + ',欢迎回来';
        }
    },
    actions: {
        // 参数1 commit是vuex 传递的上下文context：{commit，dispatch,state}
        // 模拟登录 api 的调用，1s后用户 admin, 登陆成功
        login({commit}, username) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (username === 'admin') {
                        commit('login',username)
                        resolve()
                    } else {
                        reject()
                    }
                }, 1000);
            })
        }
    },
}