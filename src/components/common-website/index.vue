<template>
    <div class="common-use-websites">
        <Item v-for="(item, index) in websites" :data="item" :key="index"/>
        <Item @click.native="showModal = true"/>
        <Modal v-model="showModal" width="400" height="300" title="添加常用网站">
            <div class="content">

            </div>
            <template v-slot:footer>
                <div class="footer">
                    <ButtonGroup>
                        <Button type="primary" size="normal">确认</Button>
                        <Button type="primary" size="normal">确认</Button>
                        <Button type="primary" size="normal">确认</Button>
                        <Button type="primary" size="normal">确认</Button>
                        <Button type="default" size="normal" @click="showModal = false">取消</Button>
                        <Button type="default" size="normal" @click="showModal = false">取消</Button>
                        <Button type="default" size="normal" @click="showModal = false">取消</Button>
                    </ButtonGroup>
                </div>
            </template>
        </Modal>
    </div>
</template>
<script>
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
    data() {
        return {
            websites: [
                {
                    name: 'baidu',
                    src: 'https://www.baidu.com'
                }
            ],
            showModal: false
        }
    }
}
</script>
<style lang="less" scoped>
.common-use-websites {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    .content {
        
    }
}
</style>