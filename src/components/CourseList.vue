<template>
    <div>
        <p v-if="courses.length == 0">没有任何课程信息</p>
        <div v-else class="course-list">
            <div v-for="c in courses" :key="c.name" :style="{'background-color': (selectedCourse === c ? '#ddd' : '')}" @click="selectedCourse = c">
                <!--{{ c.name }} - {{ c.price | currency('$') }}-->
                <router-link :to="`/course/${c.name}`">
                    {{ c.name }} - {{ c.price | currency('$') }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CourseList",
        data() {
            return {
                // 改状态属于course-list内部状态，因此作为数据
                selectedCourse: '',
            }
        },
        props: {
            // 新增课程时也要访问courses，因此作为属性传递
            courses: {
                type: Array,
                default: function () {
                    return []
                }
            },
        },
        filters: {
            currency(value, symbol = '￥') {
                return symbol + value
            }
        }
    }
</script>

<style scoped>

</style>