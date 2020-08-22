<template>
    <i :class="`byq-icon-${type}`" :style="{fontSize: size + 'px'}"></i>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        type: String,
        size: {
            type: [Number, String],
            default: 12
        }
    }
}
</script>
<style lang="less" scoped>

</style>