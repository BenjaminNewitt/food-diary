import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ActiveLog from "../views/ActiveLog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/logs/:id",
    name: "log",
    component: ActiveLog
  }
];

const router = new VueRouter({
  routes
});

export default router;
