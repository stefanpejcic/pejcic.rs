import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import TheAbout from "../views/TheAbout.vue";
import TheHome from "../views/TheHome.vue";
import TheProjects from "../views/TheProjects.vue";
import TheDomains from "../views/TheDomains.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: TheHome,
  },
  {
    path: "/home",
    name: "home",
    redirect: "/",
  },
  {
    path: "/about",
    name: "about",
    component: TheAbout,
  },
  {
    path: "/domains",
    name: "domains",
    component: TheDomains,
  },
  {
    path: "/projects",
    name: "projects",
    component: TheProjects,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to) return { top: 0, behavior: "smooth" };
  },
});

export default router;
