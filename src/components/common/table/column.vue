<template>
    <div class="column">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Column',
    props: {
        type: {
            type: String,
            default: 'normal'
        }
    },
    data() {

    },
    methods: {

    }
}
</script>
<style lang="less" scoped>

</style>