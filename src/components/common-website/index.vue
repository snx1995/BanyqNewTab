<template>
    <div class="common-use-websites">
        <Item v-for="(item, index) in websites" :data="item" :key="index"/>
        <Item/>
    </div>
</template>
<script>
import Item from './item';
export default {
    name: 'CommonUseWebsites',
    components: {
        Item
    },
    provide() {
        return {
            root: this
        }
    },
    data() {
        return {
            websites: [
                {
                    name: 'baidu',
                    src: 'https://www.baidu.com'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.common-use-websites {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 10px;
}
</style>