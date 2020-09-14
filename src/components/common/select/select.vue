<template>
    <Dropdown :context="selectContext" @toggle="onDropdownToggle">
        <div class="select" style="min-width: 150px">
            <div class="select-wrapper">
                <div class="select-value">
                    <input type="text" v-if="filterable" v-model="filerValue">
                    <span v-else>{{value}}</span>
                </div>
                <div class="select-icon">
                    <slot name="icon">
                        <Icon :type="dropdownState ? 'chevron-up' : 'chevron-down'"/>
                    </slot>
                </div>
            </div>
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
        },
        filterMethod: {
            type: Function,
            default(val) {
                return !this.filterValue || (val && val + '').indexOf(this.filerValue) != -1;
            }
        }
    },
    data() {
        return {
            dropdownState: false,
            filerValue: ''
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.filterValue = val;
            }
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
        },
        onDropdownToggle(value) {
            this.dropdownState = value;
        },
        filter(value) {
            return !this.filterable || this.filterMethod(value);
        }
    },
    mounted() {
        this.filerValue = this.value;
    }
}
</script>
<style lang="less" scoped>
.select {
    display: inline-block;
    padding: 10px;
    border: 1px solid var(--mainColor);
    background: var(--mainBg);
    cursor: pointer;
    border-radius: 5px;
    &-wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        .select-value {
            flex: 1;
        }
        .select-icon {
            color: var(--mainColor);
            flex-shrink: 0;
            padding-left: 5px;
        }
    }
    input {
        border: none;
        outline: none;
        background-color: transparent;
    }
}
</style>