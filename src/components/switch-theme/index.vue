<template>
    <div class="switch-theme">
        <div class="switch-theme-content">
            <div class="switch-theme-item" v-for="i in 20" :key="i" :style="{backgroundColor: `var(--f${i})`}" @click="changeTheme(`var(--f${i})`)"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SwitchTheme',
    data() {
        return {}
    },
    methods: {
        changeTheme(color) {
            document.documentElement.style.setProperty('--mainColor', color);
        }
    }
}
</script>
<style lang="less" scoped>
.switch-theme {
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    position: fixed;
    padding: 10px;
    top: 0;
    left: 0;
    background-color: var(--secondaryBg);
    box-shadow: 0 12px 24px rgba(7, 17, 27, .2);
    transform: translateY(-100%);
    transition: transform .3s;
    &-content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    &-item {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transition: transform .3s;
        border-radius: 3px;
        &:not(:last-child) {
            margin-right: 10px;
        }
        &:hover {
            transform: scale(1.2);
        }
    }
    &::before {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 50%;
        width: 50px;
        height: 20px;
        border-radius: 10px;
        transform: translateX(-50%);
        background-color: var(--secondaryBg);
    }
    &:hover {
        transform: translateY(0);
    }
}
</style>