import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import signUp from "../views/signUp.vue";
import signIn from "../views/signIn.vue";
import signOut from "../views/signOut.vue";
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
    {
      path: "/signOut",
      component: signOut
    },
  ],
});

export default router;
