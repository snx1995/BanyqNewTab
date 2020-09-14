<template>
    <div class="th">
        <slot>{{column.title}}</slot>
    </div>
</template>
<script>
export default {
    name: 'Th',
    props: {
        column: Object
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
.th {
    padding: 10px;
    box-sizing: border-box;
    flex: 1;
    align-items: center;
    display: flex;
    border-right: 1px solid var(--mainColor);
    border-bottom: 1px solid var(--mainColor);
    background-color: var(--mainColorDark);
}
</style>