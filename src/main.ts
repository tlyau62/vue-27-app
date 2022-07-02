import Vue from "vue";
import { MyTest } from "./abstracts/MyTest";
import App from "./App.vue";
import MyTestComponent from "./components/MyTest.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component(MyTest, MyTestComponent);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
