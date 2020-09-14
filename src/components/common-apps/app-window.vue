<template>
    <transition name="fade">
        <div class="app-window" v-show="value">
            <div class="app-window-header">
                <div class="title">
                    <slot name="title"></slot>
                </div>
                <div class="operation">
                    <Icon type="minus" />
                    <Icon type="plus" />
                    <Icon type="cross" />
                </div>
            </div>
            <div class="app-window-body">
                <slot></slot>
            </div>
            <div class="app-window-body">
                <slot name="footer"></slot>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'AppWindow',
    props: {
        value: Boolean
    },
    data() {
        return {}
    },
    methods: {
        
    }
}
</script>
<style lang="less" scoped>
.app-window {
    background-color: var(--mainBg);
    position: fixed;
    display: flex;
    flex-direction: column;
    border: 10px;
    box-shadow: 0 12px 24px rgba(7, 17, 27, .2);
    min-width: 400px;
    min-height: 300px;
    &-header {
        height: 30px;
        flex-shrink: 0;
        border-bottom: 1px solid var(--mainColor);
    }
    &-body {
        flex: 1;
    }
    &-footer {
        height: 30px;
        flex-shrink: 0;
        border-bottom: 1px solid var(--mainColor);
    }
}
</style>