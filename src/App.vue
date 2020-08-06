<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/About">About</router-link> |
            <router-link to="/admin">admin</router-link>

            <span v-if="isLogin">
                {{welcome}}
                <button >登出</button>
            </span>
        </div>
        <keep-alive include="admin">
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'

    export default {
        name: 'App',
        computed:{
            ...mapState('user',['isLogin']),
            ...mapGetters('user',['welcome']),
        }

    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>

<style scoped lang="scss"> $color: #42b983;
a {
    color: $color;
}
</style>
