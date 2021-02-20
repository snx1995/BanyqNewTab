<template>
    <div class="common-use-apps">
        <VueDraggable v-model="apps" class="drag-content">
            <transition-group>
                <Item :showRemove="showRemove" v-for="(app, index) in apps" :type="app.type" :data="app" :key="app.src" @on-remove="handleRemove(index)"/>
            </transition-group>
        </VueDraggable>
        <transition name="fade">
            <Item type="add" @click.native="showAddDialog" v-show="!showRemove"/>
        </transition>
        <transition name="fade">
            <Item type="remove" @click.native="showRemove = true" v-show="!showRemove"/>
        </transition>
        <Modal v-model="showModal" width="400" title="添加常用网站">
            <div class="content">
                <Input label="名称" v-model="form.addWebName"/>
                <Input label="地址" v-model="form.addWebUrl"/>
            </div>
            <template v-slot:footer>
                <div class="add-dialog-footer">
                    <ButtonGroup align="right">
                        <Button type="default" size="normal" @click="showModal = false">取消</Button>
                        <Button type="primary" size="normal" @click="handleAddWebsite">确认</Button>
                    </ButtonGroup>
                </div>
            </template>
        </Modal>
    </div>
</template>
<script>
import utils from '@utils';

import { Storage } from '@utils/storage'

import Item from './item';
export default {
    name: 'CommonUseApps',
    components: {
        Item,
    },
    provide() {
        return {
            root: this
        }
    },
    watch: {
        apps(val) {
            localStorage.setItem('CommonApps', JSON.stringify(val))
        }
    },
    data() {
        return {
            apps: [],
            showModal: false,
            showRemove: false,
            form: {
                addWebUrl: '',
                addWebName: ''
            }
        }
    },
    methods: {
        showAddDialog() {
            this.form.addWebUrl = '';
            this.form.addWebName = '';
            this.showModal = true;
        },
        handleAddWebsite() {
            const url = this.form.addWebUrl
            const name = this.form.addWebName
            if (utils.isWebUrl(url)) {
                this.apps.push({ type: 'website', src: url, name });
                this.showModal = false;
            }
            else alert('请输入正确的网站地址')
        },
        handleRemove(index) {
            this.apps.splice(index, 1);
        },
        handleHideRemove() {
            this.showRemove = false;
        },
        handleClickOutside(event) {
            const target = event.target;
            if (!target.matches('.common-use-apps *')) {
                this.handleHideRemove();
            }
        }
    },
    mounted() {
        this.apps = JSON.parse(localStorage.getItem('CommonApps') || '[]');
        document.body.addEventListener('click', this.handleClickOutside);
    },
    destroyed() {
        document.body.removeEventListener('click', this.handleClickOutside);
    }
}
</script>
<style lang="less" scoped>
.common-use-apps {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    .drag-content > span {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>