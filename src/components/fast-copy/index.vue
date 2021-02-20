<template>
    <div class="fast-copy">
        <VueDraggable  v-model="value" handle=".fast-copy-item-prefix">
            <transition-group>
                <Item 
                    v-for="(item, index) in value" 
                    v-model="value[index]" 
                    :key="'item' + index" 
                    ref="items" 
                    @up="handleSwitchFocus(index - 1)"
                    @down="handleSwitchFocus(index + 1)"
                    @delete="handleDelete(index, item)" 
                    @add="handleAdd(index)"/>
            </transition-group>
        </VueDraggable>
        
        <Item type="add" @on-add="handleAdd"/>
    </div>
</template>
<script>
import Item from './item';

export default {
    name: 'FastCopyItem',
    components: {
        Item
    },
    data() {
        return {
            value: []
        }
    },
    watch: {
        value(val) {
            localStorage.setItem('FastCopyItems', JSON.stringify(val));
        }
    },
    methods: {
        handleAdd(index) {
            if (index != undefined) {
                this.value.splice(index + 1, 0, '');
                this.$nextTick(() => {
                    this.$refs.items[index + 1].focus();
                })
                return;
            }
            this.value.push('');
            this.$nextTick(() => {
                this.$refs.items[this.$refs.items.length - 1].focus();
            })
        },
        handleDelete(index, item) {
            setTimeout(() => {
                this.value.splice(index, 1);
                this.$nextTick(() => {
                    let nextIndex = index - 1;
                    if (nextIndex < 0) nextIndex = index;
                    if (nextIndex >= this.$refs.items.length) return;
                    this.$refs.items[nextIndex].focus();
                })
            })
        },
        handleSwitchFocus(index) {
            if (index < 0) index = 0;
            else if (index > this.$refs.items.length) index = this.$refs.length - 1;
            const item = this.$refs.items[index];
            if (item) item.focus();
        }
    },
    mounted() {
        this.value = JSON.parse(localStorage.getItem('FastCopyItems') || '[]');
    }
}
</script>
<style lang="less" scoped>
.fast-copy {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
}
</style>