<template>
    <div class="button" :class="btnCls" @click="$emit('click')">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'normal'   // normal, small
        }
    },
    computed: {
        btnCls() {
            return [
                this.type,
                this.size
            ]
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.button {
    display: inline-block;
    font-size: 12px;
    &.normal {
        padding: 5px 12px;
        border-radius: 3px;
        cursor: pointer;
    }
    &.default {
        background-color: var(--g3);
        color: var(--c8);
        // border-color: var(--c2);
    }
    &.primary {
        background-color: var(--mainColor);
        color: var(--c8);
        // border-color: var(--c8);
    }
    &:hover {
        filter: brightness(.9);
    }
    &:active {
        filter: brightness(.8);
    }
}
</style>