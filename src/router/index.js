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
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
