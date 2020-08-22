<template>
    <div class="input" :class="inputCls">
        <div class="input-label" :style="labelStyle">{{label}}</div>
        <div class="input-wrapper form-el" :class="{focus: isFocus}">
            <input :type="type" :value="value" @input="$emit('input', $event.target.value)" @focus="isFocus = true" @blur="isFocus = false">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        label: String,
        labelPosition: {
            type: String,
            default: 'left', // left top
        },
        labelWidth: {
            type: Number
        },
        value: String
    },
    computed: {
        inputCls() {
            return [
                `label-${this.labelPosition}`
            ]
        },
        labelStyle() {
            const style = {};
            if (this.labelPosition === 'left' && this.labelWidth) {
                style.width = this.labelWidth + 'px';
            }
            return style;
        }
    },
    data() {
        return {
            isFocus: false
        }
    },
    methods: {

    },
}
</script>
<style lang="less" scoped>
.input {
    display: flex;
    align-items: center;
    padding: 5px;
    &.label-top {
        flex-direction: column;
    }
    &-label {
        flex-shrink: 0;
        padding-right: 10px;
    }
    &-wrapper {
        flex: 1;
        border: 1px solid var(--mainColor);
        padding: 5px;
        input {
            border: none;
            box-shadow: none;
            outline: none;
            display: block;
            width: 100%;
            height: 100%;
            background: transparent;
        }
    }
}
</style>