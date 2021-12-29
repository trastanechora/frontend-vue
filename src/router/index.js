import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Setting from "@/views/Setting.vue";
import Privacy from "@/views/Privacy.vue";
import User from "@/views/User.vue";
import UserDetail from "@/views/UserDetail.vue";
import Pokemon from "@/views/Pokemon.vue";
import Data from "@/views/Data.vue";
import Validation from "@/views/Validation.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Account from "@/views/Account.vue";
import Forbidden from "@/views/Forbidden.vue";

import Default from "@/views/Default.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/setting",
        component: Default,
        children: [
          {
            path: "",
            name: "Setting",
            component: Setting,
          },
          {
            path: "privacy",
            name: "Privacy",
            component: Privacy,
          },
        ],
      },
      {
        path: "/user",
        component: Default,
        children: [
          {
            path: "",
            name: "User",
            component: User,
          },
          {
            path: ":id",
            name: "User Detail",
            component: UserDetail,
          },
        ],
      },
      {
        path: "/pokemon",
        name: "Pokemon",
        component: Pokemon,
      },
      {
        path: "/data",
        name: "Data",
        component: Data,
      },
      {
        path: "/validation",
        name: "Validation",
        component: Validation,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/account",
        name: "Account",
        component: Account,
        meta: {
          auth: true,
        },
      },
      {
        path: "/forbidden",
        name: "Forbidden",
        component: Forbidden,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  const storeString = localStorage.getItem("vuex") || "{}";
  const store = JSON.parse(storeString);
  if (to.matched.some((record) => record.meta.auth)) {
    if (store && !store.auth.token) {
      next("/forbidden");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
