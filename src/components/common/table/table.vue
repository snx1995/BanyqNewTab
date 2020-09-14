<template>
    <div class="table">
        <Tr>
            <Th v-for="(column, index) in columns" :key="index" :column="column"/>
        </Tr>
        <Tr v-for="(row, index) in data" :key="index">
            <Td v-for="(column, index) in columns" :key="index" :column="column" :data="data"/>
        </Tr>
    </div>
</template>
<script>
import Th from './th';
import Td from './th';
import Tr from './th';
export default {
    name: 'Table',
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    watch: {
        '$slots.default'(val) {

        }
    },
    data() {
        return {
            columns: []
        }
    },
    methods: {

    },
    mounted() {
        console.log('this.$slots.default', this.$slots.default)
    }
}
</script>
<style lang="less" scoped>
.table {
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--mainColor);
    border-top: 1px solid var(--mainColor);
}
</style>