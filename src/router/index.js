import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AstresView from "@/views/AstresView.vue";
import DetailView from "@/views/DetailView.vue";
// import SolarSystemView from "@/views/SolarSystemView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/solar-system',
  //   name: 'SolarSystemView',
  //   component: SolarSystemView
  // },
  {
    path: '/astres/:id',
    name: 'AstreDetail',
    component: DetailView
  },
  {
    path: '/astres',
    name: 'Astres',
    component: AstresView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
