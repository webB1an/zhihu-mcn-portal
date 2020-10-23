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
        name: '生成商品',
        component: SaveProduct
      },
      {
        path: '/product/list',
        name: '商品列表',
        component: () => import('../page/Product/list')
      },
      {
        path: '/product/editor',
        name: '编辑商品',
        component: () => import('../page/Product/editor')
      },
      {
        path: '/category/save',
        name: '生成类目',
        component: () => import('../page/Category/save')
      },
      {
        path: '/category/list',
        name: '类目列表',
        component: () => import('../page/Category/list')
      },
      {
        path: '/category/editor',
        name: '编辑类目',
        component: () => import('../page/Category/editor')
      },
      {
        path: '/relation/save',
        name: '绑定关系',
        component: () => import('../page/Relation/save')
      },
      {
        path: '/relation/random',
        name: '随机生成',
        component: () => import('../page/Relation/random')
      }
    ]

  }
]

const router = new Router({
  routes
})

export default router
