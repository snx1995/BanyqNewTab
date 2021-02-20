<template>
    <div class="fast-copy-item">
        <div class="fast-copy-item-add" v-if="type == 'add'" @click="$emit('on-add')">
            
        </div>
        <div class="fast-copy-item-normal" v-else>
            <div class="fast-copy-item-prefix">
                <Icon size="18" :type="isUrl ? 'globe' : 'star-o'"/>
            </div>
            <div class="fast-copy-item-input">
                <input ref="input" type="text" :value="value" @input="$emit('input', $event.target.value)" @keydown="handleKeydown">
            </div>
            <div v-if="isUrl" class="fast-copy-item-suffix btn" @click="handleOpenUrl">
                <Icon size="18" type="location-arrow"/>
            </div>
            <div class="fast-copy-item-suffix btn" @click="handleCopy">
                <Icon size="18" type="copy"/>
            </div>
        </div>
    </div>
</template>
<script>
import utils from '@utils';
export default {
    name: 'FastCopyItem',
    props: {
        type: String,
        value: String
    },
    data() {
        return {}
    },
    computed: {
        isUrl() {
            return utils.isWebUrl(this.value);
        }
    },
    methods: {
        handleCopy() {
            this.$refs.input.select();
            document.execCommand('Copy');
        },
        handleOpenUrl() {
            window.open(this.value);
        },
        handleKeydown(event) {
            console.log(event.key);
            if (event.key === 'Backspace' && !this.value) {
                this.$emit('delete')
            } else if (event.key === 'Enter') {
                this.$emit('add');
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                this.$emit('up');
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                this.$emit('down');
            }
        },
        focus() {
            this.$refs.input.focus();
        }
    }
}
</script>
<style lang="less" scoped>
.fast-copy-item {
    background-color: var(--secondaryBg);
    display: flex;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    @borderRadius: 6px;
    &:first-child {
        border-radius: @borderRadius @borderRadius 0 0;
    }
    &:last-child {
        border-radius: 0 0 @borderRadius @borderRadius;
    }
    > * {
        width: 100%;
        height: 100%;
    }
    &-add {
        cursor: pointer;
        position: relative;
        &::before, &::after {
            content: "";
            display: block;
            top: 50%;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
            background: var(--mainColor);
        }
        &::before {
            width: 20px;
            height: 5px;
        }
        &::after {
            width: 5px;
            height: 20px;
        }
    }
    &-normal {
        display: flex;
        align-items: center;
        color: var(--mainColor);
        > * {
            height: 100%;
        }
        i {
            color: var(--mainColor);
        }
    }
    &-prefix {
        width: 40px;
        flex-shrink: 0;
        border: 1px solid var(--mainColor);
        border-radius: 5px 0 0 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &-input {
        flex: 1;
        border-top: 1px solid var(--mainColor);
        border-bottom: 1px solid var(--mainColor);
        color: var(--primaryFontColor);
        box-sizing: border-box;
        padding: 0 5px;
        input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            box-shadow: none;
            background: transparent;
        }
    }
    &-suffix {
        width: 40px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid var(--mainColor);
        border-bottom: 1px solid var(--mainColor);
        border-left: 1px solid var(--mainColor);
        &:last-child {
            border: 1px solid var(--mainColor);
            border-radius: 0 5px 5px 0;
        }
    }
}
</style>