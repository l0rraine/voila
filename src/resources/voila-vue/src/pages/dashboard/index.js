import Vue from "vue";
import hello from "./components/hello";

Vue.config.productionTip = false;

new Vue({
  render: h => h(hello)
}).$mount("#app");
