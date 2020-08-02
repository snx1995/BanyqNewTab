import Vue from 'vue';
import CommonComponents from '@common';

import App from '@components/app';

import '@assets/index';

Vue.use(CommonComponents);

new Vue({
    el: '#app',
    render(h) {
        return h(App)
    }
})