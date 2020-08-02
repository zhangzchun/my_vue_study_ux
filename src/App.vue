<template>
    <div id="app">
        <!-- 绝对路径 public -->
        <!--<img alt="Vue logo" src="/assets/logo.png">-->
        <!-- 相对路径 打包 hash -->
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!-- config publicpath -->
        <img alt="Vue logo" :src="`${publicPath}assets/logo.png`">
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <MessageSlot v-if="show"></MessageSlot>
        <CourseAdd @add-course="addCourse"></CourseAdd>
        <CourseList :courses="courses"></CourseList>
        <p>
            <!-- 绑定表达式 -->
            <!-- 课程总数：{{courses.length + '门'}} -->
            <!-- 计算属性 -->
            课程总数：{{total}}
            <!-- 监听器 -->
            课程总数：{{totalCount}}
        </p>

    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import CourseList from '@/components/CourseList'
    import CourseAdd from '@/components/CourseAdd'
    import MessageSlot from '@/components/MessageSlot'
    import {getCourses} from "./api/course";

    export default {
        name: 'App',
        data() {
            return {
                title: '购物车',
                course: '',
                selectedCourse: '',
                courses: [],
                totalCount: 0,
                show: false,
                publicPath: process.env.BASE_URL
            }
        },
        provide() {
            return {
                reload: this.reload
            };
        },
        async created() {
            // 组件实例已创建，由于未挂载，dom不存在
            const courses = await getCourses();
            this.courses = courses;
        },
        methods: {
            addCourse(course) {
                this.courses.push({name: course, price: (this.courses.length * 100)});
            },
            reload() {
                this.isRouterAlive = false;
                this.$nextTick(() => {
                    this.isRouterAlive = true;
                });
            }

        },
        computed: {
            total() {
                // 计算属性有缓存
                return this.courses.length + '门'
            }
        },
        watch: {
            courses: {
                immediate: true,
                // deep: true,
                handler(newValue, oldValue) {
                    if (newValue > oldValue) {
                        this.totalCount = newValue.length + '门';
                    }

                }
            }
        },
        components: {
            CourseList,
            CourseAdd,
            MessageSlot
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
