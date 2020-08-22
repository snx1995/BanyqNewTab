<template>
    <div class="common-use-website-item">
        <div v-if="type == 'add'" class="common-use-website-item-add"></div>
        <div v-else-if="type == 'remove'" class="common-use-website-item-remove"></div>
        <div v-else class="common-use-website-item-content" :class="itemCls" @click="openWebsite">
            <img :src="data.src + '/favicon.ico'" v-if="showImg" @error="showImg = false">
            <span v-else>{{data.name}}</span>
        </div>
        <transition name="fade">
            <div class="common-use-website-item-remove-btn btn" v-show="showRemove" @click="$emit('on-remove')">
                <Icon type="cross"/>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'CommonUseWebsiteItem',
    props: {
        data: {
            type: Object
        },
        type: {
            type: String,
            default: 'default'
        },
        showRemove: Boolean
    },
    computed: {
        itemCls() {
            return [
                {
                    'show-remove': this.showRemove
                }
            ]
        }
    },
    data() {
        return {
            showImg: true
        }
    },
    methods: {
        openWebsite() {
            if (this.showRemove) return;
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    position: relative;
    & > *:not(&-remove-btn) {
        border: 1px solid var(--secondaryBg);
        transition: border .3s;
        background-color: var(--secondaryBg);
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 12px  24px rgba(7, 17, 27, .3);
        &:not(.show-remove):hover {
            border-width: 5px;
            border-color: var(--mainColor);
        }
    }
    &-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &.show-remove {
            animation: itemRemoveAni .3s infinite;
        }
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
    &-remove {
        width: 100%;
        height: 100%;
        position: relative;
        &::before {
            content: "";
            display: block;
            background: var(--mainColor);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60%;
            height: 5px;
        }
    }
    &-remove-btn {
        padding: 5px;
        border-radius: 50%;
        background-color: var(--secondaryBg);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        color: var(--mainColor);
        box-shadow: 0 0 4px rgba(7, 17, 27, .3);
        left: 40px;
        bottom: 40px;
        z-index: 1;
        cursor: pointer;
        border: 1px solid var(--baseBg);
    }
}
</style>