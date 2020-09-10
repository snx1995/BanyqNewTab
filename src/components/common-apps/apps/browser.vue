<template>
    <AppWidnow v-model="value">
        <iframe style="width: 100%;height: 100%;display: block;" :src="url"></iframe>
    </AppWidnow>
</template>
<script>
import AppWindow from '../app-window'
export default {
    name: 'Browser',
    components: {
        AppWindow
    },
    props: {
        url: {
            type: String,
            default: 'https://www.baidu.com'
        },
        value: Boolean
    },
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>

</style>