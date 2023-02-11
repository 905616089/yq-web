import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Books from '../pages/book/books.vue'
import Personal from '../pages/Personal/personal.vue'
import Illustration from '../pages/Illustration/illustration.vue'
import About from '../pages/about/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children:[
        {
          path: '/main/',
          name: 'root',
          redirect: 'books',
        },
        {
          path: '/main/Books',
          name: 'books',
          component: Books,
        },
        {
          path: '/main/Personal',
          name: 'Personal',
          component: Personal,
        },
        {
          path: '/main/Illustration',
          name: 'Illustration',
          component: Illustration,
        },
        {
          path: '/main/About',
          name: 'About',
          component: About,
        }
      ]
    }
  ]
})
