<template>
    <i :class="`byq-icon-${type}`" :style="{fontSize: size + 'px'}"></i>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        type: String,
        size: {
            type: [Number, String]
        }
    },
    computed: {
        style() {
            return {
                fontSize: this.size ? this.size + 'px' : ''
            }
        }
    }
}
</script>
<style lang="less" scoped>
i {
    color: inherit;
}
</style>