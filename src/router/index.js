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
  scrollBehavior(to, from, savedPosition) {
    // Scroll ke atas jika navigasi ke home
    if (to.path === '/') {
      return { top: 0 }
    }
    // Jika sebelumnya tersimpan (misalnya dari tombol back), gunakan itu
    if (savedPosition) {
      return savedPosition
    }
    // Default scroll ke atas
    return { top: 0 }
  },
})
