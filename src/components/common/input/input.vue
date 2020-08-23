<template>
    <div class="input" :class="inputCls">
        <div class="input-label" :style="labelStyle">{{label}}</div>
        <div class="input-wrapper form-el" :class="{focus: isFocus}">
            <input ref="input" v-if="type != 'textarea'" :type="type" :value="value" @input="$emit('input', $event.target.value)" @focus="isFocus = true" @blur="isFocus = false">
            <textarea ref="input" v-else :style="textareaStyle" :value="value" @input="$emit('input', $event.target.value)" @focus="isFocus = true" @blur="isFocus = false">
            </textarea>
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
        value: String,
        height: String
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
        },
        textareaStyle() {
            return {
                height: this.height ? this.height : 'auto'
            }
        }
    },
    data() {
        return {
            isFocus: false
        }
    },
    methods: {
        copy() {
            this.$refs.input.select();
            document.execCommand('copy');
        }
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
        > * {
            width: 100%;
        }
        .input-label {
            padding-bottom: 5px;
        }
    }
    &-label {
        flex-shrink: 0;
        padding-right: 10px;
    }
    &-wrapper {
        flex: 1;
        border: 1px solid var(--mainColor);
        padding: 5px;
        input, textarea {
            border: none;
            box-shadow: none;
            outline: none;
            display: block;
            width: 100%;
            height: 100%;
            background: transparent;
            resize: none;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
}
</style>