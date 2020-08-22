<template>
    <div class="tab-index">
        <CommonUseWebsites/>
        <SwitchTheme/>
        <FastCopy/>
    </div>
</template>
<script>
import CommonUseWebsites from './common-website';
import SwitchTheme from './switch-theme';
import FastCopy from './fast-copy';
export default {
    name: 'App',
    components: {
        CommonUseWebsites,
        SwitchTheme,
        FastCopy
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.tab-index {
    padding: 20px;
    > *:not(:last-child) {
        margin-bottom: 20px;
    }
}
</style>