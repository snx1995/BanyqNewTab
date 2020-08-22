<template>
    <div class="common-use-websites">
        <VueDraggable v-model="websites" class="drag-content">
            <transition-group>
                <Item :showRemove="showRemove" v-for="(item, index) in websites" :data="item" :key="item.src" @on-remove="handleRemove(index)"/>
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
import Item from './item';
export default {
    name: 'CommonUseWebsites',
    components: {
        Item,
    },
    provide() {
        return {
            root: this
        }
    },
    watch: {
        websites(val) {
            localStorage.setItem('CommonUseWebsites', JSON.stringify(val))
        }
    },
    data() {
        return {
            websites: [],
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
                this.websites.push({ src: url, name });
                this.showModal = false;
            }
            else alert('请输入正确的网站地址')
        },
        handleRemove(index) {
            this.websites.splice(index, 1);
        },
        handleHideRemove() {
            this.showRemove = false;
        },
        handleClickOutside(event) {
            const target = event.target;
            if (!target.matches('.common-use-websites *')) {
                this.handleHideRemove();
            }
        }
    },
    mounted() {
        this.websites = JSON.parse(localStorage.getItem('CommonUseWebsites') || '[]');
        document.body.addEventListener('click', this.handleClickOutside);
    },
    destroyed() {
        document.body.removeEventListener('click', this.handleClickOutside);
    }
}
</script>
<style lang="less" scoped>
.common-use-websites {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    .drag-content > span {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>