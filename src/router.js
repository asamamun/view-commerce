import { createRouter, createWebHistory } from 'vue-router'
import ProductList from './views/ProductList.vue'
import Cart from './views/Cart.vue'

const routes = [
  { path: '/', component: ProductList },
  { path: '/cart', component: Cart }
]

const router = createRouter({
  history: createWebHistory('/vueecommerce/'),
  routes
})

export default router