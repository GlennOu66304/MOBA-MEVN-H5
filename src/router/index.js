import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index.vue"),
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/learn",
        name: "learn",
        component: () => import("@/views/Learn.vue"),
      },
      {
        path: "/battle",
        name: "battle",
        component: () => import("@/views/Battle.vue"),
      },
      
  
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.ele_login ? true : false;
//   if (to.path == "/login") {
//     next();
//   } else {
//     isLogin ? next() : next("/login");
//   }
// });

export default router;
