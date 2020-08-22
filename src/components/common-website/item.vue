<template>
    <div class="common-use-website-item">
        <div v-if="data" class="common-use-website-item-content" @click="openWebsite">
            <img :src="data.src + '/favicon.ico'" v-if="showImg" @error="showImg = false">
            <span v-else>{{data.name}}</span>
        </div>
        <div v-else class="common-use-website-item-add"></div>
    </div>
</template>
<script>
export default {
    name: 'CommonUseWebsiteItem',
    props: {
        data: {
            type: Object
        }
    },
    data() {
        return {
            showImg: true
        }
    },
    methods: {
        openWebsite() {
            window.open(this.data.src);
        }
    }
}
</script>
<style lang="less" scoped>
.common-use-website-item {
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid var(--secondaryBg);
    transition: border .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 10px;
    background-color: var(--secondaryBg);
    box-shadow: 0 12px  24px rgba(7, 17, 27, .3);
    &:hover {
        border-width: 5px;
        border-color: var(--mainColor);
    }
    &-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            widows: 60%;
            height: 60%;
        }
    }
    &-add {
        width: 100%;
        height: 100%;
        position: relative;
        &::before, &::after {
            content: "";
            display: block;
            background: var(--mainColor);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        &::before {
            width: 60%;
            height: 5px;
        }
        &::after {
            width: 5px;
            height: 60%;
        }
    }
}
</style>