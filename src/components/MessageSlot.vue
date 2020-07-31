<template>
    <div class="message-box" v-if="show">
        <strong><slot name="title"></slot></strong>
        <slot></slot>
        <span class="message-box-close" @click="$emit('update:show', false)">X</span>
    </div>
</template>

<script>
    export default {
        name: "MessageSlot",
        props:{
            show: {
                type:Boolean,
                default:false,
            }
        },


    }
</script>

<style scoped>

</style>