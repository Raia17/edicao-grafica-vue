import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home Page' 
    },
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import(/* webpackChunkName: "sobre" */ '../views/Sobre.vue'),
  },
  {
    path: '/edicao',
    name: 'Edicao',
    component: () => import(/* webpackChunkName: "edicao" */'../views/Edicao.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const DEFAULT_TITLE = 'Portfolio';
router.beforeEach((to) => {
  document.title = (to.meta.title || DEFAULT_TITLE) + ' - Raiiaa';
});

export default router
