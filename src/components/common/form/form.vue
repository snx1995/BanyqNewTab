<template>
    <div class="form">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Form',
    props: {
        data: Object,
        rule: Object
    },
    provide() {
        return {
            formRoot: this
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