import { createRouter, createWebHistory } from 'vue-router';
import Signup from './components/UserSignup.vue';
import Login from './components/UserLogin.vue';
import Home from './components/HomePage.vue'
import Movie from './components/MovieList.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: { requiresLayout: true }, 
  },
  {
    path: '/signup',
    component: Signup,
    meta: { requiresLayout: false }, 
  },
  {
    path: '/login',
    component: Login,
    meta: { requiresLayout: false }, 
  },
  {
    path: '/movies',
    name: 'MovieList',
    component: Movie,
    meta: { requiresAuth: true } 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
