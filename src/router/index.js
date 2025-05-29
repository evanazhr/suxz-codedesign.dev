import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import NoPageView from '@/views/NoPageView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'home', component: HomeView },
      { path: '/:pathMatch(.*)*', name: 'NotFound', component: NoPageView },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
