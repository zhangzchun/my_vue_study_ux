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
            console.log("created 发送详情请求",this.$route);
        },
        mounted (){
            console.log("mounted 发送详情请求",this.$route);
        },
        watch: {
            $route: {
                handler: () => {
                    console.log("watch 发送详情请求");
                },
                immediate: true
            }
        }
    }
</script>

<style scoped>

</style>