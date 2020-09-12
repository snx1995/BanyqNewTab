<template>
    <div class="select-option" @click="handleSelect" v-show="showOption">
        <slot>{{value}}</slot>
    </div>
</template>
<script>
export default {
    name: 'Option',
    inject: ['context'],
    props: {
        value: [Object, String, Number, Boolean]
    },
    data() {
        return {
            showOption: true
        }
    },
    watch: {
        'context.filterValue'(val) {
            this.showOption = this.context.filter(this.value);
        }
    },
    methods: {
        handleSelect() {
            this.context.onOptionSelect(this.value);
        }
    }
}
</script>
<style lang="less" scoped>
.select-option {
    padding: 10px;
    background-color: var(--baseBg);
    color: var(--primaryFontColor);
    cursor: pointer;
    &:hover {
        background-color: var(--secondaryBg);
    }
}
</style>