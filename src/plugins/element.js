import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang);

import { Card, Container, Header, Main } from 'element-ui';

Vue.use(Card);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
