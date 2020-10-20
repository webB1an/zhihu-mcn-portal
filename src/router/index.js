import Vue from 'vue'
import Router from 'vue-router'

// import App from '../App'
import Layout from '../page/Layout'
import SaveProduct from '../page/Product/save'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/product/save',
    children: [
      {
        path: '/product/save',
        component: SaveProduct
      },
      {
        path: '/product/list',
        component: () => import('../page/Product/list')
      },
      {
        path: '/product/editor',
        component: () => import('../page/Product/editor')
      },
      {
        path: '/category/save',
        component: () => import('../page/Category/save')
      },
      {
        path: '/category/list',
        component: () => import('../page/Category/list')
      },
      {
        path: '/category/editor',
        component: () => import('../page/Category/editor')
      },
      {
        path: '/relation/save',
        component: () => import('../page/Relation/save')
      },
      {
        path: '/relation/random',
        component: () => import('../page/Relation/random')
      }
    ]

  }
]

const router = new Router({
  routes
})

export default router
