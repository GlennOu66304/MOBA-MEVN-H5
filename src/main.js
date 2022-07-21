import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import "./assets/scss/style.scss";
import "./assets/icons/iconfont.css";
import Card from "./components/Card.vue";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
// npm install vue-awesome-swiper@3 --save-dev
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);
Vue.component("m-card", Card);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
