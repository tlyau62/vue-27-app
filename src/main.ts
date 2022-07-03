import Vue from "vue";
import { MyButton } from "./abstracts/components/MyButton";
import App from "./App.vue";
import MyButtonComponent from "./components/MyButton.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component(MyButton, MyButtonComponent);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
