import Vue from 'vue';
import App from './AppDesktop.vue';
import './plugins/element.js';

import '@/assets/styles/jb-theme/main.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
