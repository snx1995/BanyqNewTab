export default {
    name: 'DropdownMenu',
    props: {
        maxHeight: Number,
        adaptWidth: Boolean,
        content: [Object, Array]
    },
    data() {
        return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            showDrop: false,
            up: false
        }
    },
    render(h) {
        return h('transition', {
            attrs: {
                name: 'fade'
            }
        },
        [
            h('div', {
                class: [
                    'dropdown-menu'
                ],
                style: this.styles,
                directives: [
                    {
                        name: 'show',
                        value: this.showDrop
                    }
                ]
            }, this.content)
        ])
    },
    computed: {
        styles() {
            const result = {
                top: this.y + 'px',
                left: this.x + 'px'
            }
            if (this.width) result.width = this.width + 'px';
            if (this.height) result.height = this.height + 'px';
            return result
        }
    },
    methods: {
        show({x, y}) {
            this.x = x;
            this.y = y;
            this.showDrop = true
        },
        hide() {
            this.showDrop = false
        },
        toggle(target) {
            this.showDrop = !this.showDrop;
            if (!this.showDrop) return false;
            this.update(target);
            return this.showDrop;
        },
        update(target) {
            this.$nextTick(() => {
                if (!this.showDrop) return;
                const { left, top, width, height } = target.getBoundingClientRect();
                const { width: dw, height: dh } = this.$el.getBoundingClientRect();
                const { width: vw, height: vh } = this.getViewportRect();
                const x = left + dw + 20 > vw ? (vw - dw) : left;
                this.up = top + dh + height > vh;
                const y = this.up ? (vh - dh) : (top + height);
                this.x = x;
                this.y = y;
                this.height = this.maxHeight && dh > this.maxHeight ? this.maxHeight : 0;
                this.width = this.adaptWidth ? width : 0;
                debugger
            })
        },
        getViewportRect() {
            return {
                width: window.innerWidth || (document.documentElement && document.documentElement.offsetWidth) || document.body.offsetWidth,
                height: window.innerHeight || (document.documentElement && document.documentElement.offsetHeight) || document.body.offsetHeight
            }
        },
    },
    mounted() {
        
    }
}