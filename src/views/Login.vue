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