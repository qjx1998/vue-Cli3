import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const ShopCart = () => import('../views/shopcart/ShopCart')
const Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter)

  const routes = [
    { path: '/', redirect: '/Home'},
    { path: '/Home', name: 'Home', component: Home},
    { path: '/Category', name: 'Category', component: Category },
    { path: '/ShopCart', name: 'ShopCart', component: ShopCart },
    { path: '/Profile', name: 'Profile', component: Profile },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


export default router
