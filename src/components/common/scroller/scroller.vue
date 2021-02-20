<template>
    <div class="scroll-wrapper">
        <div class="scroll-content">
            <slot></slot>
        </div>
        <div class="scroller-track horizontal">
            <div class="btn"></div>
        </div>
        <div class="scroller-track vertical">
            <div class="btn"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Scroller',
    data() {
        return {

        }
    },
    methods: {
        onScroll(event) {
            console.log(event)
        }
    },
    created() {
        this.$el.addEventListener('scroll', this.onScroll)
    },
    destroyed() {
        this.$el.addEventListener('scroll', this.onScroll)
    }
}
</script>
<style lang="less" scoped>
.scroll-wrapper {
    overflow: hidden;
    position: relative;
    .scroller-track {
        position: absolute;
        .btn {
            background-color: var(--mainColor);
        }
        &.horizontal {
            left: 0;
            bottom: 0;
            height: 20px;
        }
        &.vertical {
            right: 0;
            top: 0;
            width: 20px;
        }

    }
}
</style>