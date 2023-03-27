import { createRouter, createWebHistory } from 'vue-router';
import homePage from './components/homePage/homePage.vue';
import unContreUn from './components/unContreUn/unContreUn.vue';

const routes = [
  { path: '/', component: homePage },
  { path: '/game', component: unContreUn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
