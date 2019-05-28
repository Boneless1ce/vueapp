import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Film from '../pages/film'
import Music from '../pages/music'
import Me from '../pages/me'
import Search from '../pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/film',
      component: Film
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
