import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index.js';

import Home from '../views/Home.vue';
import Auth from '../views/Auth.vue';
import UserHome from '../views/UserHome.vue';
import SeedList from '../views/SeedList.vue';
import CollectSeed from '../views/CollectSeed.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: { requiresUnauth: true }
  },
  {
    path: '/user/home',
    name: 'UserHome',
    component: UserHome,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/seed-list',
    name: 'SeedList',
    component: SeedList,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/collect-seed',
    name: 'CollectSeed',
    component: CollectSeed,
    meta: { requiresAuth: true }
  },
  { path: '/:notFound(.*)', component: Home }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/user/home');
  } else {
    next();
  }
});

export default router
