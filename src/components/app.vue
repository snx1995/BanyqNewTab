<template>
    <div class="byq-tab">
        <div class="byq-tab-content">
            <!-- <CommonApps/> -->
            <SwitchTheme/>
            <!-- <FastCopy/> -->
            <div style="height: 500px"></div>
            <Select v-model="selectVal">
                <Option value='1'/>
                <Option value='2'/>
                <Option value='3'/>
                <Option value='4'/>
                <Option value='5'/>
                <Option value='6'/>
            </Select>
            <Dropdown adaptWidth :maxHeight="250">
                <button style="display: inline-block;width: 300px" @click="val = 1">test3</button>
                <template v-slot:content>
                    <div class="options">
                        <div class="option">1</div>
                        <div class="option">4</div>
                        <div class="option">4</div>
                        <div class="option">4</div>
                        <div class="option">4</div>
                        <div class="option">4</div>
                        <div class="option">4</div>
                        <div class="option">4</div>
                        <div class="option">4</div>
                        <div class="option">4</div>
                        <div class="option">4</div>
                        <div class="option">4</div>
                    </div>
                </template>
            </Dropdown>

            <div style="height: 1000px"></div>
        </div>
        <div class="byq-tab-footer">
            <ActionBar />
        </div>
    </div>
</template>
<script>
import CommonApps from './common-apps';
import SwitchTheme from './switch-theme';
import FastCopy from './fast-copy';
import ActionBar from './action-bar';
export default {
    name: 'App',
    components: {
        CommonApps,
        SwitchTheme,
        FastCopy,
        ActionBar
    },
    data() {
        return {
            val: 2,
            selectVal: '1'
        }
    }
}
</script>
<style lang="less" scoped>
.byq-tab {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    &-content {
        padding: 20px;
        flex: 1;
         > *:not(:last-child) {
            margin-bottom: 20px;
        }
    }
    &-footer {
        flex-shrink: 0;
    }
}
</style>
<style lang="less" scoped>
.options {
    background-color: #fff;
    width: 100%;
    box-shadow: 0 12px 24px rgba(7, 17, 27, .3);
    .option {
        text-align: center;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 0;
        cursor: pointer;
        &:hover {
            background-color: #f5f5f5;
        }
    }
}
</style>