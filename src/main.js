import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import "./assets/scss/style.scss";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
// npm install vue-awesome-swiper@3 --save-dev
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
