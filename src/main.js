import Vue from 'vue';
import App from '@components/app';

import '@assets/index';

new Vue({
    el: '#app',
    render(h) {
        return h(App)
    }
})