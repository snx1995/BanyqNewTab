<template>
    <Dropdown>
        <div class=""></div>
    </Dropdown>
</template>
<script>
export default {
    name: 'Select',
    props: {
        value: {
            type: [Number, String, Boolean, Object, Array]
        },
        multiple: {
            type: Boolean,
            default: false
        }
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

</style>