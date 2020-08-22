<template>
    <div class="form-item">
        <div class="form-item-label">

        </div>
        <div class="form-item-content">
            <slot></slot>
        </div>
        <div class="form-item-error" v-if="validError"></div>
    </div>
</template>
<script>
export default {
    name: 'FormItem',
    props: {
        prop: String
    },
    inject: ['formRoot'],
    computed: {
        validError() {
            return false;
        }
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.form-item {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>