import Vue from 'vue'

require('../../bootstrap')

import routes from './utils/routes';
import store from './utils/store';

import './styles/common.less'

import App from "./components/App";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
