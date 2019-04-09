import Vue from 'vue';
import App from './AppMobile.vue';
import './plugins/framework7.js';

import '@/assets/styles/jb-theme/main-mobile.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
