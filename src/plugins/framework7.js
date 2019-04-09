import Vue from 'vue';

import Framework7 from 'framework7';

import Framework7Vue from 'framework7-vue';

import 'framework7/css/framework7.bundle.css';

Framework7.use(Framework7Vue);

import { f7App, f7View, f7Page, f7Card, f7CardHeader, f7CardContent, f7Statusbar, f7Navbar, f7NavTitle, f7NavLeft, f7Link } from 'framework7-vue';

Vue.component('f7-app', f7App);
Vue.component('f7-view', f7View);
Vue.component('f7-page', f7Page);
Vue.component('f7-card', f7Card);
Vue.component('f7-card-header', f7CardHeader);
Vue.component('f7-card-content', f7CardContent);
Vue.component('f7-statusbar', f7Statusbar);
Vue.component('f7-navbar', f7Navbar);
Vue.component('f7-nav-title', f7NavTitle);
Vue.component('f7-nav-left', f7NavLeft);
Vue.component('f7-link', f7Link);
