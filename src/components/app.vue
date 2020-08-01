<template>
    <div class="tab-index">
        <CommonUseWebsites/>
        <SwitchTheme/>
    </div>
</template>
<script>
import CommonUseWebsites from './common-website';
import SwitchTheme from './switch-theme';
export default {
    name: 'App',
    components: {
        CommonUseWebsites,
        SwitchTheme
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.tab-index {
    
}
</style>