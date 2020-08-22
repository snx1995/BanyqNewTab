<template>
    <div class="fast-copy">
        <Item v-for="(item, index) in value" v-model="value[index]" :key="index"/>
        <Item type="add" @on-add="handleAdd"/>
    </div>
</template>
<script>
import Item from './item';
export default {
    name: 'FastCopyItem',
    components: {
        Item
    },
    data() {
        return {
            value: []
        }
    },
    watch: {
        value(val) {
            localStorage.setItem('FastCopyItems', JSON.stringify(val));
        }
    },
    methods: {
        handleAdd() {
            this.value.push('');
        }
    },
    mounted() {
        this.value = JSON.parse(localStorage.getItem('FastCopyItems') || '[]');
    }
}
</script>
<style lang="less" scoped>
.fast-copy {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
}
</style>