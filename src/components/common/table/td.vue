<template>
    <div class="td">
        <slot>{{data[column.key]}}</slot>
    </div>
</template>
<script>
export default {
    name: 'Td',
    props: {
        column: Object,
        data: Object
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.td {
    padding: 10px;
    box-sizing: border-box;
    flex: 1;
    align-items: center;
    display: flex;
    border-right: 1px solid var(--mainColor);
    border-bottom: 1px solid var(--mainColor);
}
</style>