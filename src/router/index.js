import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '@/pages/Home.vue'
import Experiences from '@/pages/Experiences.vue'
import Experience from '@/pages/Experience.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/experience',
      name: 'experiences',
      component: Experiences
    },
    {
      path: '/experience/:id',
      name: 'experience',
      component: Experience
    }
  ]
})

export default router
