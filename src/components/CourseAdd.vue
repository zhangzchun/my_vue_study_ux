<template>
    <div>
        <input class="inp" v-model="course" @keydown.enter="emitCourse"/>
        <button v-on:click="emitCourse">新增课程</button>
    </div>
</template>

<script>
    export default {
        name: "CourseAdd",
        data () {
            return {
                course:''
            }
        },
        props:{

        },
        methods:{
            emitCourse () {
                this.$emit('add-course',this.course);
                this.course = ''
            }

        }
    }
</script>

<style scoped>

</style>
<style lang="scss" scoped>
    .inp {

    }
</style>