<template>
    <div class="icon-example">
        <div class="icon-item" v-for="name in iconNames" :key="name">
            <Icon class="icon" :type="name.split(',')[0]"/>
            <div>{{name}}</div>
        </div>
    </div>
</template>
<script>
import Icons from '@style/icon/selection.json';
export default {
    name: 'IconExample',
    data() {
        return {
            iconNames: Icons.icons.map(e => e.properties.name)
        }
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.icon-example {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid var(--mainColor);
    border-left: 1px solid var(--mainColor);
    .icon-item {
        box-sizing: border-box;
        padding: 10px;
        width: 20%;
        align-items: center;
        display: flex;
        border-right: 1px solid var(--mainColor);
        border-bottom: 1px solid var(--mainColor);
        .icon {
            flex-shrink: 0;
            padding: 5px;
            font-size: 18px;
        }
        div {
            padding-left: 10px;
            flex: 1;
        }
    }
}
</style>