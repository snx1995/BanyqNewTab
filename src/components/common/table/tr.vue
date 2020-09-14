<template>
    <div class="tr">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Tr',
    props: {},
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.tr {
    width: 100%;
    background-color: var(--mainBg);
    display: flex;
    align-items: center;
    &:hover {
        background-color: var(--secondaryBg);
    }
}
</style>