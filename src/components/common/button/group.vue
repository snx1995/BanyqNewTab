<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'ButtonGroup',
    props: {
        
    },
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
.button-group {
    display: flex;
    /deep/ .button {
        border-radius: 0;
        &:first-child {
            border-radius: 3px 0 0 3px;
        }
        &:last-child {
            border-radius: 0 3px 3px 0;
        }
        &:not(:last-child) {
            border-right: 1px solid;
        }
    }
}
</style>