import Vue from 'vue';
import menu from './dropdown-menu';

import './dropdown.less';

let regsterFlag = false
let uuid = 0;
const dropdownInstances = {}

function onClickBody(...args) {
    for(let k in dropdownInstances) {
        const instance = dropdownInstances[k];
        instance.hide()
    }
}

function onScroll(...args) {
    for(let k in dropdownInstances) {
        const instance = dropdownInstances[k];
        instance.update()
    }
}

function hideExcept(uuid) {
    for(let k in dropdownInstances) {
        if (k == uuid) continue;
        const instance = dropdownInstances[k];
        instance.hide();
    }
}

export default {
    name: 'Dropdown',
    props: {
        trigger: {
            type: String,
            validator(val) {
                return ['click', 'hover'].includes(val)
            },
            default: 'click'
        },
        adaptWidth: {
            type: Boolean,
            default: true
        },
        maxHeight: Number,
        context: Object
    },
    data() {
        return {
            menuInstance: null,
            uuid: uuid ++,
            target: null
        }
    },
    render(h) {
        const vnode = this.$scopedSlots.default()[0]
        if (!vnode.data) vnode.data = {}
        if (!vnode.data.on) vnode.data.on = {}
        if (!vnode.data.nativeOn) vnode.data.nativeOn = {}
        if (this.trigger == 'click') {
            if (vnode.data.on.click) {
                const click = vnode.data.on.click
                vnode.data.on.click = (event, ...args) => {
                    event.stopPropagation();
                    click(event, ...args);
                    this.onTargetClick(event, ...args);
                }
            } else vnode.data.on.click = this.onTargetClick
        }

        return vnode;
    },
    methods: {
        onTargetClick(event) {
            event.stopPropagation();
            this.menuInstance.toggle(this.target)
            hideExcept(this.uuid);
        },
        show() {
            this.menuInstance.show(this.$el);
        },
        hide() {
            this.menuInstance.hide();
        },
        update() {
            this.menuInstance.update(this.$el);
        }
    },
    created() {
        const DropdownMenu = Vue.extend(menu);
        this.$nextTick(() => {
            this.target = this.$el;
            this.menuInstance = new DropdownMenu({
                propsData: {
                    content: this.$scopedSlots.content(),
                    adaptWidth: this.adaptWidth,
                    maxHeight: this.maxHeight,
                    zIndex: this.uuid + 2000,
                    context: this.context
                }
            }).$mount();
            document.body.appendChild(this.menuInstance.$el);
        })
        if (!regsterFlag) {
            regsterFlag = true
            document.addEventListener('click', onClickBody)
            document.addEventListener('scroll', onScroll)
        }
        dropdownInstances[this.uuid] = this
    },
    destroyed() {
        delete dropdownInstances[this.uuid]
        this.menuInstance.$destroy()
    }
}