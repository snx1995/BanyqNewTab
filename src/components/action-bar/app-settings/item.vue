<template>
    <div class="app-settings-item">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'AppSettingsItem'
}
</script>
<style lang="less" scoped>
.app-settings-item {
    position: relative;
    &:not(:last-child) {
        padding-bottom: 20px;
        &::before {
            content: "";
            width: 95%;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            border-bottom: 1px solid var(--mainColor);
        }
    }
}
</style>