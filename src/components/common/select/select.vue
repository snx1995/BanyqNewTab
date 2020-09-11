<template>
    <Dropdown :context="selectContext">
        <div class="select" style="min-width: 150px">
            <input type="text" v-if="filterable" :value="value">
            <span v-else>{{value}}</span>
        </div>
        <template v-slot:content>
            <slot></slot>
        </template>
    </Dropdown>
</template>
<script>
export default {
    name: 'Select',
    provide() {
        return {
            selectRoot: this
        }
    },
    props: {
        value: {
            type: [Number, String, Boolean, Object, Array]
        },
        multiple: {
            type: Boolean,
            default: false
        },
        filterable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        }
    },
    computed: {
        selectContext() {
            return this;
        }
    },
    methods: {
        onOptionSelect(value) {
            this.$emit('input', value);
        }
    }
}
</script>
<style lang="less" scoped>
.select {
    display: inline-block;
    padding: 10px;
    border: 1px solid var(--mainColor);
    background: var(--baseBg);
    cursor: pointer;
    border-radius: 5px;
}
</style>