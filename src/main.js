import Vue from 'vue';
import CommonComponents from '@common';
import VueDraggable from 'vuedraggable';

import App from '@components/app';

import '@style/index';

Vue.use(CommonComponents);
Vue.component('VueDraggable', VueDraggable);

new Vue({
    el: '#app',
    render(h) {
        return h(App)
    }
})