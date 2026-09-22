import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../page/Accueil.vue'
import Articles from '../page/Articles.vue'
import ArticleDetail from '../page/ArticleDetail.vue'
import Ajouter from '../page/Ajouter.vue'
import PanierPage from '../page/PanierPage.vue'
import Login from '../page/Login.vue'
import Admin from '../page/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/articles',
    name: 'articles',
    component: Articles
  },
  {
    path: '/article/:id',
    name: 'article-detail',
    component: ArticleDetail,
    props: true
  },
  {
    path: '/ajouter',
    name: 'ajouter',
    component: Ajouter
  },
  {
    path: '/panier',
    name: 'panier',
    component: PanierPage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
