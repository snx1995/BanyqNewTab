<template>
    <SettingItem>
        <Input ref="input" type="textarea" v-model="settings" labelPosition="top" height="100px" label="配置导入导出"/>
        <ButtonGroup align="right">
            <Button @click="handleExport">导出</Button>
            <Button @click="handleImport">导入</Button>
        </ButtonGroup>
    </SettingItem>
</template>
<script>
import SettingItem from './item';
export default {
    name: 'AppSettingsSync',
    components: {
        SettingItem
    },
    data() {
        return {
            settings: ''
        }
    },
    methods: {
        handleExport() {
            this.settings = JSON.stringify(localStorage);
            this.$nextTick(() => this.$refs.input.copy());
        },
        handleImport() {
            try {
                const settings = JSON.parse(this.settings)
                if (confirm('将刷新页面，确认继续?')) {
                    for (let k in settings) {
                        localStorage.setItem(k, settings[k]);
                    }
                    location.reload();
                }
            } catch (err) {
                alert('配置数据不合法!')
            }
        }
    }
}
</script>
<style lang="less" scoped>

</style>