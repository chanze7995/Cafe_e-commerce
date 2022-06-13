import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import(/* webpackChunkName: "Explore" */ '../views/Explore.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    redirect: '/shop/all',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop.vue'),
    children: [
      {
        path: ':group',
        name: 'ProductList',
        component: () => import(/* webpackChunkName: "ProductList" */ '../components/ProductList.vue'),
        props (route) {
          return {
            group: route.params.group
          }
        },
        children: [
          {
            path: ':id',
            name: 'ProductCard',
            component: () => import(/* webpackChunkName: "ProductCard" */ '../components/ProductCard.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import(/* webpackChunkName: "Location" */ '../views/Location.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import(/* webpackChunkName: "Course" */ '../views/Course.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
