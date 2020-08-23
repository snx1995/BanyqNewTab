<template>
    <Modal :value="value" @input="$emit('input', $event)" title="设置">
        <div class="app-settings">
            <SettingsSync />
        </div>
        <template v-slot:footer>
            <ButtonGroup align="right">
                <Button @click="$emit('input', false)">取消</Button>
                <Button>应用</Button>
                <Button type="primary">确认</Button>
            </ButtonGroup>
        </template>
    </Modal>
</template>
<script>
import SettingsSync from './settings-sync';
export default {
    name: "AppSettings",
    props: {
        value: Boolean
    },
    components: {
        SettingsSync
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.app-settings {
    width: 800px;
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>