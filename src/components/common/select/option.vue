<template>
    <div class="select-option" @click="handleSelect">
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

        }
    },
    methods: {
        handleSelect() {
            debugger
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