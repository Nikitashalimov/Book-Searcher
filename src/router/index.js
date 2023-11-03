import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/book/:id',
      name: 'bookDetail',
      component: () => import('../views/BookDetailView.vue')
    },
  ]
})


router.beforeEach((to, from, next) => {
  const userToken = localStorage.getItem("userToken");
  if (to.name === "home" && !userToken) {
    next({ name: "login" });
  } else {
    next();
  }
});


export default router