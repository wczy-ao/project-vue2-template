import VueRouter from 'vue-router'
import Vue from 'vue'
import HomeView from 'page/Home.vue'
import PageView from 'page/Page.vue'
import { cloneDeep } from '@/util'
Vue.use(VueRouter)

cloneDeep()
const routes = [
  { path: '/', component: HomeView },
  { path: '/page', component: PageView }
]

const router = new VueRouter({
  routes
})
export default router
