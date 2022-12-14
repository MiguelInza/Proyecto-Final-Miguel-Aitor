import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import signUp from "../views/signUp.vue";
import signIn from "../views/signIn.vue";
import initialPage from "../views/initialPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: "/Dashboard", 
      component: Dashboard 
    },
    { 
      path: "/", 
      component: initialPage 
    },
    {
      path: "/signUp",
      component: signUp
    },
    {
      path: "/signIn",
      component: signIn
    },
  ],
});

export default router;
