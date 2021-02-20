<template>
    <div class="modal">
        <transition name="fade">
            <div class="overlay" v-show="value" @click="$emit('input', false)"></div>
        </transition>
        <transition name="slide-in">
            <div class="modal-content" :style="style" v-show="value">
                <div class="header" v-if="showHeader" :class="{'show-line': showLine}">
                    <slot name="header"><span>{{title}}</span></slot>
                </div>
                <div class="body">
                    <slot></slot>
                </div>
                <div class="footer" v-if="showFooter" :class="{'show-line': showLine}">
                    <slot name="footer"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'Modal',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        title: String,
        showLine: {
            type: Boolean,
            default: true
        },
        width: [Number, String],
        height: [Number, String]
    },
    computed: {
        showHeader() {
            return this.$slots.header || this.title;
        },
        showFooter() {
            return this.$slots.footer;
        },
        style() {
            const s = {}
            if (this.width) {
                s.width = Number.isNaN(Number(this.width)) ? this.width : (this.width + 'px');
            }
            if (this.height) {
                s.height = Number.isNaN(Number(this.height)) ? this.height : (this.height + 'px');
            }
            return s;
        }
    },
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
.modal {
    z-index: 9999;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
        pointer-events: all;
    }
    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.2);
    }
    .header, .body, .footer {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        flex-shrink: 0;
        overflow: hidden;
    }
    .body {
        flex: 1;
        min-height: 0;
        overflow: auto;
    }
    .header.show-line {
        border-bottom: 1px solid var(--mainColor);
    }
    .footer.show-line {
        border-top: 1px solid var(--mainColor);
    }
    &-content {
        position: relative;
        background-color: var(--secondaryBg);
        box-sizing: border-box;
        box-shadow: 0 12px 24px rgba(7, 17, 27, .3);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        max-height: 100%;
    }
}
</style>