<template>
    <div>
        <h2>detail page</h2>
        <p>{{$route.params.name}} ...</p>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        created (){
            console.log("created 发送详情请求",this.$route.params.name);
        },
        mounted (){
            console.log("mounted 发送详情请求",this.$route.params.name);
        },
        watch: {
            $route: {
                handler: () => {
                    console.log("watch 发送详情请求",this.$route.params.name);
                },
                immediate: true
            }
        }
    }
</script>

<style scoped>

</style>