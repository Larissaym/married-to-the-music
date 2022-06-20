
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/news',
    name: 'news',
    component: () =>
        import('../views/News.vue')
  }, {
    path: '/podcast',
    name: 'podcast',
    component: () =>
        import('../views/Podcast.vue')
  },{
    path: '/about',
    name: 'about',
    component: () =>
        import('../views/About.vue'),

    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
