export default {
    name: 'DropdownMenu',
    props: {
        maxHeight: Number,
        adaptWidth: Boolean,
        content: [Object, Array],
        zIndex: Number
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
        return h(
            'transition', 
            {
                props: {
                    name: 'fade'
                },
                // on: {
                //     beforeEnter: this.beforeEnter,
                //     beforeLeave: this.beforeLeave,
                //     enter: this.enter,
                //     leave: this.leave
                // }
            },
            [
                h(
                    'div', 
                    {
                        class: [ 'dropdown-menu'],
                        style: this.styles,
                        directives: [{ name: 'show', value: this.showDrop }]
                    },
                    [h('div', { class: ['dropdown-menu-content'] }, this.content)]
                )
            ]
        )
    },
    computed: {
        styles() {
            const result = {
                top: this.y + 'px',
                left: this.x + 'px'
            }
            if (this.width) result.width = this.width + 'px';
            if (this.height) result.height = this.height + 'px';
            if (this.zIndex) result.zIndex = this.zIndex;
            return result
        }
    },
    methods: {
        show(target) {
            this.showDrop = true
            this.update(target);
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
        // beforeEnter(el) {
        //     el.style.opacity = 0;
        //     el.style.transform = 'scaleY(.5)';
        //     el.style.transformOrigin = this.up ? '0 100%' : '0 0';
        // },
        // enter(el, done) {
        //     Velocity(el, { scaleY: 1, opacity: 1 }, { duration: 300, complete: done });
        // },
        // beforeLeave(el) {
        //     el.style.opacity = 1;
        //     el.style.transform = 'scaleY(1)';
        //     el.style.transformOrigin = this.up ? '0 100%' : '0 0';
        // },
        // leave(el, done) {
        //     Velocity(el, { scaleY: .5, opacity: 0 }, { duration: 300, complete: done });
        // },
        update(target) {
            this.$nextTick(() => {
                setTimeout(() => {
                    if (!this.showDrop) return;
                    const { left, top, width, height } = target.getBoundingClientRect();
                    const { width: dw, height: dh } = this.$el.children[0].getBoundingClientRect();
                    const { width: vw, height: vh } = this.getViewportRect();
                    this.height = this.maxHeight && dh > this.maxHeight ? this.maxHeight : dh;
                    this.width = this.adaptWidth ? width : 0;
                    const x = left + dw + 20 > vw ? (vw - dw) : left;
                    this.up = top + this.height + height > vh;
                    const y = this.up ? (top - this.height) : (top + height);
                    this.x = x;
                    this.y = y;
                }, 0)
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