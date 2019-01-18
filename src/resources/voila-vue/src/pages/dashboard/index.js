import Vue from 'vue'

require('../../bootstrap')

import routes from './routes';
import store from './store';


import App from "./components/App";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
