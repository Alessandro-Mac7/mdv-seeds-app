import { createRouter, createWebHashHistory } from 'vue-router'

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
    component: Auth
  },
  {
    path: '/user/home',
    name: 'UserHome',
    component: UserHome
  },
  {
    path: '/user/seed-list',
    name: 'SeedList',
    component: SeedList
  },
  {
    path: '/user/collect-seed',
    name: 'CollectSeed',
    component: CollectSeed
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
