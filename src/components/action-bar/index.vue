<template>
    <div class="action-bar">
        <div class="action-bar-content"></div>
        <div class="action-bar-btns">
            <Icon type="cog" class="btn" @click.native="handleShowSettings"/>
        </div>
        <AppSettings v-model="showSettings"/>
    </div>
</template>
<script>
import AppSettings from './app-settings';
export default {
    name: 'ActionBar',
    components: {
        AppSettings
    },
    data() {
        return {
            showSettings: false
        }
    },
    methods: {
        handleShowSettings() {
            this.showSettings = true;
        }
    }
}
</script>
<style lang="less" scoped>
.action-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background-color: var(--secondaryBg);
    box-shadow: -8px 16px rgba(7, 17, 27, .3);
    &-content {
        flex: 1;
    }
    &-btns {
        flex-shrink: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}
</style>