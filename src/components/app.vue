<template>
    <div class="byq-tab">
        <div class="byq-tab-content">
            <CommonUseWebsites/>
            <SwitchTheme/>
            <FastCopy/>
        </div>
        <div class="byq-tab-footer">
            <ActionBar />
        </div>
    </div>
</template>
<script>
import CommonUseWebsites from './common-website';
import SwitchTheme from './switch-theme';
import FastCopy from './fast-copy';
import ActionBar from './action-bar';
export default {
    name: 'App',
    components: {
        CommonUseWebsites,
        SwitchTheme,
        FastCopy,
        ActionBar
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.byq-tab {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    &-content {
        padding: 20px;
        flex: 1;
         > *:not(:last-child) {
            margin-bottom: 20px;
        }
    }
    &-footer {
        flex-shrink: 0;
    }
}
</style>